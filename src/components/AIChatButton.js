import { useState } from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

import aiChatIcon from "../assets/icons/aiChat.svg";
import aiPoweredIcon from "../assets/icons/aiPowered.svg";
import closePopupIcon from "../assets/icons/closePopup.svg";

// Initialize chat endpoint
const CHAT_ENDPOINT =
  "http://nestjs-playground.us-east-2.elasticbeanstalk.com/chat";

// Styled components remain the same...
const ButtonContainer = styled.div`
  position: fixed;
  bottom: 100px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const Popup = styled.div`
  position: fixed;
  bottom: 80px;
  width: 100%;
  height: 60vh;
  background-color: #ffffff;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  position: relative;
`;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: #ffffff;
  border-top: 1px solid #eee;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 5px;
  padding-bottom: 80px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const SearchBar = styled.input`
  width: 70%;
  height: 46px;
  border-radius: 12px;
  border: 1px solid #eee;
  padding-left: 20px;
`;

const EnterButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const VoiceButton = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  gap: 10px;
`;

const MessageText = styled.div`
  padding: 10px 20px;
  background-color: ${(props) => (props.isUser ? "#ffffff" : "#5A5A5A")};
  border-radius: 12px;
  color: ${(props) => (props.isUser ? "#5B5B5B" : "#ffffff")};
  width: 75%;
  min-height: 40px;
  border: 1px solid #eee;
  font-family: Arial;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.48px;
  text-align: left;
`;

const AIAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #0dcdad;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #888888;
`;

const LoadingDots = styled.div`
  display: inline-block;

  &::after {
    content: "...";
    animation: dots 1.5s steps(5, end) infinite;
  }

  @keyframes dots {
    0%,
    20% {
      content: ".";
    }
    40% {
      content: "..";
    }
    60%,
    100% {
      content: "...";
    }
  }
`;

const AIChatButton = ({ isOpen, setIsOpen }) => {
  const [searchText, setSearchText] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { text: "Ask me anything about the menu!", isUser: false },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const generateSystemPrompt = () => {
    return "You are a helpful restaurant assistant. Help customers choose dishes from our menu based on their preferences. Keep responses concise and friendly. These are all available choices: Soupe à l'Oignon, Escargots à la Bourguignonne, Steak Tartare, Mousse de Foie, Pâté en Croûte, Granola, Salade de Fruits, Pain Perdu, Salade Niçoise, Saumon d'Écosse, Salade Lyonnaise, Croque Madame, Toast Avocat et Tomate, Eggs Benedict, Eggs Norwegian, Steak aux Œufs, Omelette au Choix, Brandade de Morue, Saumon à la Poêle, Cuisse de Canard Confite, Steak Sandwich Parisien, Boucherie Burger (Premium Beef Burger), Boucherie Beyond Burger (Premium Plant Based Burger), Wagyu Burger, Steak Frites";
  };

  const generateSystemPromptIndex = () => {
    return `You are a helpful restaurant assistant. When users describe their preferences or ask for recommendations, respond ONLY with an array of item IDs that match their request, using this format: [1, 14, 15]. Do not include any other text or explanations.
  
  Available dishes and their IDs:
  [1] Soupe à l'Oignon (onion soup, warm, savory)
  [2] Escargots (garlic, herbs)
  [3] Steak Tartare (raw beef)
  [4] Mousse de Foie (liver mousse)
  [5] Pâté en Croûte (meat terrine)
  [6] Granola (breakfast, healthy)
  [7] Salade de Fruits (fresh fruit)
  [8] Croque Madame (sandwich, egg)
  [9] Toast Avocat (avocado toast)
  [10] Eggs Benedict
  [11] Eggs Norwegian (salmon)
  [12] Steak aux Œufs (steak & eggs)
  [13] Omelette au Choix (custom omelette)
  [14] Saumon à la Poêle (pan-seared salmon)
  [15] Cuisse de Canard (duck leg)
  [16] Steak Sandwich
  [17] Boucherie Burger (beef burger)
  [18] Boucherie Beyond (vegetarian burger)
  [19] Wagyu Burger (premium beef)
  [20] Steak Frites
  [21] Pain Perdu (french toast)
  [22] Salade Niçoise (tuna salad)
  [23] Saumon d'Écosse (scottish salmon)
  [24] Salade Lyonnaise (bacon, egg salad)
  [25] Brandade de Morue (cod fish)
  
  Example user: "I want something with salmon"
  Example response: [11, 14, 23]`;
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleEnterButtonClick = async () => {
    if (!searchText.trim() || isLoading) return;

    const userMessage = searchText.trim();
    const updatedHistory = [
      ...chatHistory,
      { text: userMessage, isUser: true },
    ];

    setSearchText(""); // Clear input
    setIsLoading(true);
    setChatHistory(updatedHistory); // Update with user message

    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemPrompt: generateSystemPrompt(),
          history: updatedHistory.map((msg) => ({
            role: msg.isUser ? "user" : "assistant",
            content: msg.text,
          })),
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch chat response");
      }
      const data = await response.json();

      // Add AI response to chat
      const aiResponse = data.message;
      setChatHistory([...updatedHistory, { text: aiResponse, isUser: false }]);
    } catch (error) {
      console.error("Error calling chat API:", error);
      setChatHistory([
        ...updatedHistory,
        {
          text: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
          isUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      handleEnterButtonClick();
    }
  };

  return (
    <>
      <ButtonContainer onClick={() => setIsOpen(!isOpen)}>
        <img src={aiChatIcon} alt="AI chat" />
      </ButtonContainer>
      {isOpen && (
        <Popup>
          <Container>
            <CloseIconContainer>
              <img
                src={closePopupIcon}
                alt="Close popup"
                onClick={() => setIsOpen(false)}
              />
            </CloseIconContainer>
            <ContentContainer>
              {chatHistory.map((message, index) => {
                if (message.isUser) {
                  return (
                    <MessageContainer key={index} isUser={message.isUser}>
                      <MessageText isUser={message.isUser}>
                        {message.text}
                      </MessageText>
                      <UserAvatar />
                    </MessageContainer>
                  );
                }
                return (
                  <MessageContainer key={index} isUser={message.isUser}>
                    <AIAvatar>
                      <img src={aiPoweredIcon} alt="AI avatar" />
                    </AIAvatar>
                    <MessageText isUser={message.isUser}>
                      {message.text}
                    </MessageText>
                  </MessageContainer>
                );
              })}
              {isLoading && (
                <MessageContainer isUser={false}>
                  <AIAvatar>
                    <img src={aiPoweredIcon} alt="AI avatar" />
                  </AIAvatar>
                  <MessageText isUser={false}>
                    <LoadingDots />
                  </MessageText>
                </MessageContainer>
              )}
            </ContentContainer>
            <SearchContainer>
              <SearchBar
                placeholder="I want something warm/sweet/..."
                value={searchText}
                onChange={handleSearchTextChange}
                onKeyPress={handleKeyPress}
              />
              <EnterButton
                onClick={handleEnterButtonClick}
                disabled={isLoading || !searchText.trim()}
              >
                <Icon
                  name="arrow right"
                  style={{ color: "#ffffff", margin: "0" }}
                  size="large"
                />
              </EnterButton>
              <VoiceButton>
                <Icon
                  name="microphone"
                  style={{ color: "#000000", margin: "0" }}
                  size="large"
                />
              </VoiceButton>
            </SearchContainer>
          </Container>
        </Popup>
      )}
    </>
  );
};

export { AIChatButton };
