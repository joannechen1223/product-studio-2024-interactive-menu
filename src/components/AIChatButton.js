import { useState } from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

import aiChatIcon from "../assets/icons/aiChat.svg";
import aiPoweredIcon from "../assets/icons/aiPowered.svg";
import closePopupIcon from "../assets/icons/closePopup.svg";
import { chat } from "../features/AIChat/chat";

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
      const aiResponse = await chat(false, updatedHistory);
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
