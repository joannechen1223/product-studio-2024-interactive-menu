import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Checkbox, Icon } from "semantic-ui-react";
import styled from "styled-components";

import BottomBar from "../components/BottomBar";
import MenuItemDetailCard from "../components/MenuItemDetailCard";
import { ScrollableContainer } from "../components/ScrollableContainer";
import TopBar from "../components/TopBar";
import { recommendList as traditionalRecommendList } from "../data/recommendList";
import { chat, parseIndexResponse } from "../features/AIChat/chat";
import { selectFlavorProfile } from "../features/FlavorProfile/flavorProfileSlice";
import { RecType } from "../features/Recommendation/constant";
import {
  setRecommendList,
  setRecType,
} from "../features/Recommendation/recommendationSlice";

const RecTypeTitle = styled.div`
  font-size: 25px;
  line-height: 34.05px;
  font-weight: 400;
  margin-top: 130px;
  font-family: Adamina;
  text-align: center;
  padding: 0 20px;
`;

const RecTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RecTypeButton = styled.button`
  font-size: 20px;
  line-height: 27.04px;
  font-weight: 400;
  border: 1px solid #000000;
  background-color: transparent;
  height: 68px;
  width: 80%;
  border-radius: 43px;
  align-self: center;
  font-family: Adamina;
  color: #000000;
`;

const TopBarBackground = styled.div`
  height: 130px;
  width: 100%;
  background-color: #ffffff;
`;

const Container = styled.div`
  padding: 20px 20px 100px 20px;
  background-color: #ffffff;
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
`;

const MenuItemDetailCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  & > * {
    width: 100%; // Adjust this value as needed
    flex-shrink: 0; // Prevents the cards from shrinking
  }
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const Title = styled.div`
  font-family: Arial;
  font-size: 22px;
  font-weight: 700;
  line-height: 25.3px;
  text-align: left;
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RecTypeSwitchLink = styled.div`
  font-family: Arial;
  font-size: 14px;
  font-style: italic;
  font-weight: 700;
  line-height: 16.1px;
  text-align: left;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-underline-position: from-font;
  text-decoration-skip-ink: auto;
  color: #2f6ce7;
  padding: 7px 0;
`;

const MenuCardContainer = styled.div`
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 40px;
  box-shadow: 1px 1px 9.2px 0px #0000001a;
`;

const DotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-self: center;
`;

const Dot = styled.div`
  width: ${(props) => (props.selected ? "38px" : "8px")};
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) => (props.selected ? "#000000" : "#b8b8b8")};
`;

const CustomToggle = styled.div`
  /* Target Semantic UI Toggle Checkbox */
  .ui.toggle.checkbox {
    input:checked ~ label:before {
      background-color: #0dcdad !important; // Background color when checked
    }

    input:checked ~ label:after {
      border-color: #0dcdad !important; // Knob border color when checked
      left: 2.15rem !important; // Ensure proper positioning of the knob
    }

    label:before {
      background-color: #e0e0e0 !important; // Background color when unchecked
    }
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding 20px;
  background-color: #ffffff;
  padding: 10px
`;

const SearchBar = styled.input`
  width: 80%;
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

const ChatMessage = styled.div`
  font-family: Arial;
  font-size: 14px;
  font-style: italic;
  padding: 0 20px;
  color: #0dcdad;
  font-weight: 700;
`;

const Recommendation = () => {
  const recommendList = useSelector(
    (state) => state.recommendation.recommendList
  );
  const items = useSelector((state) => state.menu.items);
  const recType = useSelector((state) => state.recommendation.recType);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const flavorProfile = useSelector(selectFlavorProfile);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  const handleRecTypeClick = (type) => {
    dispatch(setRecType(type));
    if (type === RecType.TRADITIONAL) {
      dispatch(setRecommendList(traditionalRecommendList));
    }
    const hasFlavorProfile = flavorProfile.nationality !== null;
    if (type === RecType.AI_POWERED && !hasFlavorProfile) {
      navigate("/personalize");
    }
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleScroll = (event) => {
    const container = event.target;
    const scrollPosition = container.scrollLeft;
    const firstCard = container.firstElementChild;
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 20; // This should match the gap in your styled component
    const totalCardWidth = cardWidth + gap;

    const newIndex = Math.round(scrollPosition / totalCardWidth);
    setSelectedIndex(newIndex);
  };

  const generateFlavorProfilePrompt = () => {
    let flavorProfilePrompt = "";
    if (flavorProfile.nationality !== null) {
      flavorProfilePrompt += `My nationality is ${flavorProfile.nationality}. `;
    }
    if (flavorProfile.spiceTolerance !== null) {
      flavorProfilePrompt += `I prefer ${flavorProfile.spiceTolerance} food. `;
    }
    if (flavorProfile.dietStyle !== null) {
      flavorProfilePrompt += `I prefer ${flavorProfile.dietStyle} food. `;
    }
    if (flavorProfile.selectedFlavors.length > 0) {
      flavorProfilePrompt += `My favorite flavors are ${flavorProfile.selectedFlavors.join(", ")}. `;
    }
    return flavorProfilePrompt;
  };

  const handleEnterButtonClick = async () => {
    if (!searchText.trim() || isLoading) return;

    const userMessage = searchText.trim();
    const history = [
      { text: generateFlavorProfilePrompt(), isUser: true },
      { text: userMessage, isUser: true },
    ];

    setSearchText(""); // Clear input
    setIsLoading(true);
    setChatMessage(userMessage);
    try {
      const aiResponse = await chat(true, history);
      const aiRecommendList = parseIndexResponse(aiResponse);
      console.log(aiRecommendList);
      dispatch(setRecommendList(aiRecommendList));
    } catch (error) {
      setChatMessage(
        "I'm sorry, I'm having trouble connecting right now. Please try again later."
      );
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
      {recType === null && (
        <>
          <TopBar />
          <TopBarBackground color="white" />
          <RecTypeTitle>
            Choose your preferred type of recommendation
          </RecTypeTitle>
          <RecTypeContainer>
            <RecTypeButton
              onClick={() => handleRecTypeClick(RecType.TRADITIONAL)}
            >
              Traditional
            </RecTypeButton>
            <RecTypeButton
              onClick={() => handleRecTypeClick(RecType.AI_POWERED)}
            >
              AI powered
            </RecTypeButton>
          </RecTypeContainer>
        </>
      )}
      {recType !== null && (
        <>
          <TopBar />
          <TopBarBackground />
          <ScrollableContainer>
            <Container>
              <Title>
                <div>Recommendations</div>
                <CustomToggle>
                  <Checkbox
                    toggle
                    checked={recType === RecType.AI_POWERED}
                    label={recType === RecType.AI_POWERED ? "AI On" : "AI Off"}
                    onChange={() =>
                      handleRecTypeClick(
                        recType === RecType.TRADITIONAL
                          ? RecType.AI_POWERED
                          : RecType.TRADITIONAL
                      )
                    }
                  />
                </CustomToggle>
              </Title>
              {recType === RecType.AI_POWERED && (
                <>
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
                  </SearchContainer>
                  <ChatMessage>
                    Hey here are some recommendations for you: {chatMessage}
                  </ChatMessage>
                </>
              )}

              <MenuItemDetailCardContainer onScroll={handleScroll}>
                {recommendList.map((itemId) => (
                  <MenuCardContainer>
                    <MenuItemDetailCard
                      item={items[itemId]}
                      backButton={false}
                    />
                  </MenuCardContainer>
                ))}
              </MenuItemDetailCardContainer>
              <DotsContainer>
                {recommendList.map((itemId, index) => (
                  <Dot selected={index === selectedIndex} />
                ))}
              </DotsContainer>
            </Container>
          </ScrollableContainer>
        </>
      )}
      <BottomBar />
    </>
  );
};

export default Recommendation;
