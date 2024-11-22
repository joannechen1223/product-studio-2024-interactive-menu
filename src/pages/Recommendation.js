import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import BottomBar from "../components/BottomBar";
import MenuItemDetailCard from "../components/MenuItemDetailCard";
import { ScrollableContainer } from "../components/ScrollableContainer";
import TopBar from "../components/TopBar";
import { RecType } from "../features/Recommendation/constant";
import { setRecType } from "../features/Recommendation/recommendationSlice";

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
  background-color: ${(props) =>
    props.color === "white" ? "#ffffff" : "#f9f7ec"};
`;

const Container = styled.div`
  padding: 20px 20px 100px 20px;
  background-color: #f9f7ec;
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  gap: 20px;
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

const Recommendation = () => {
  const recommendList = useSelector(
    (state) => state.recommendation.recommendList
  );
  const items = useSelector((state) => state.menu.items);
  const recType = useSelector((state) => state.recommendation.recType);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleRecTypeClick = (type) => {
    dispatch(setRecType(type));
    if (type === RecType.AI_POWERED) {
      navigate("/personalize");
    }
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
          <TopBar color="white" />
          <TopBarBackground />
          <ScrollableContainer>
            <Container>
              <Title>
                {recType === RecType.TRADITIONAL
                  ? "Recommendations (Traditional)"
                  : "AI recommendations"}
                <RecTypeSwitchLink
                  recType={recType}
                  onClick={() =>
                    handleRecTypeClick(
                      recType === RecType.TRADITIONAL
                        ? RecType.AI_POWERED
                        : RecType.TRADITIONAL
                    )
                  }
                >
                  Switch to
                  {recType === RecType.TRADITIONAL
                    ? " AI-powered recommendations"
                    : " Traditional recommendations"}
                </RecTypeSwitchLink>
              </Title>

              <MenuItemDetailCardContainer onScroll={handleScroll}>
                {recommendList.map((itemId) => (
                  <MenuItemDetailCard item={items[itemId]} backButton={false} />
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
