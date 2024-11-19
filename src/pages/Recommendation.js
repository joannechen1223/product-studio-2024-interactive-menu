import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import BottomBar from "../components/BottomBar";
import MenuItemCard from "../components/MenuItemCard";
import { ScrollableContainer } from "../components/ScrollableContainer";
import TopBar from "../components/TopBar";

const RankContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RankLine = styled.div`
  height: 1px;
  width: 45%;
  background-color: #bcae97;
`;

const RankText = styled.div`
  font-size: 17px;
  font-weight: 700;
  background-color: #bfbfbf;
  color: #fff;
  width: 28px;
  height: 28px;
  border-radius: 14px;
  text-align: center;
  line-height: 28px;
`;

const Recommendation = () => {
  const recommendList = useSelector(
    (state) => state.recommendation.recommendList
  );
  const items = useSelector((state) => state.menu.items);

  return (
    <>
      <TopBar />
      <div style={{ height: "130px", width: "100%" }}></div>
      <ScrollableContainer>
        {recommendList.map((itemId, index) => (
          <>
            <RankContainer>
              <RankLine />
              <RankText>{index + 1}</RankText>
              <RankLine />
            </RankContainer>
            <MenuItemCard key={itemId} item={items[itemId]} />
          </>
        ))}
      </ScrollableContainer>
      <BottomBar />
    </>
  );
};

export default Recommendation;
