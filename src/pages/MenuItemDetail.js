import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import MenuItemDetailCard from "../components/MenuItemDetailCard";
import FlavorModal from "../features/Menu/FlavorModal";
import HistoryModal from "../features/Menu/HistoryModal";
import ReviewModal from "../features/Menu/ReviewModal";

const Container = styled.div`
  padding: 50px 20px;
  background-color: #f9f7ec;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  gap: 20px;
  color: #888888;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.1px;
  font-family: Arial;
`;

const AdditionalInfoButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AdditionalInfoButton = styled.button`
  background-color: ${(props) => props.bgColor};
  border: none;
  font-family: Arial;
  font-size: 21.6px;
  width: ${(props) => props.width};
  height: 59px;
  border-radius: 26px;
  padding: 0;
  margin-top: 20px;
  color: #000000;
`;

const MenuItemDetail = () => {
  const { itemId } = useParams();
  const item = useSelector((state) => state.menu.items[itemId]);

  const language = useSelector((state) => state.flavorProfile.language);
  const nationality = useSelector((state) => state.flavorProfile.nationality);

  return (
    <Container>
      <ProfileContainer>
        <div>Language: {language || "English"}</div>
        <div>Nationality: {nationality || "American"}</div>
      </ProfileContainer>
      <MenuItemDetailCard item={item} backButton={true} />
      <AdditionalInfoButtonsContainer>
        <FlavorModal item={item}>
          <AdditionalInfoButton bgColor="#fffff5" width="100%">
            Flavor
          </AdditionalInfoButton>
        </FlavorModal>
        <HistoryModal item={item}>
          <AdditionalInfoButton bgColor="#f5fffc" width="45%">
            History
          </AdditionalInfoButton>
        </HistoryModal>
        <ReviewModal item={item}>
          <AdditionalInfoButton bgColor="#f6f5ff" width="45%">
            Reviews
          </AdditionalInfoButton>
        </ReviewModal>
      </AdditionalInfoButtonsContainer>
    </Container>
  );
};

export default MenuItemDetail;
