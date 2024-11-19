import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

import AllergenIcon from "../components/AllergenIcon";
import FlavorModal from "../features/Menu/FlavorModal";
import HistoryModal from "../features/Menu/HistoryModal";
import IngredientModal from "../features/Menu/IngredientModal";
import ReviewModal from "../features/Menu/ReviewModal";
import { MenuRoute, MenuType } from "../features/Menu/constant";

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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 40px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const Image = styled.img`
  height: 180px;
  border-radius: 18px;
`;

const LikeTag = styled.div`
  background-color: #7acd0f;
  padding: 5px 15px;
  border-radius: 30px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  font-family: Arial;
  width: fit-content;
  text-align: center;
`;

const LikePercentageText = styled.span`
  font-weight: 800;
`;

const Description = styled.div`
  font-family: Newsreader;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  color: #552300;
`;

const IngredientsTitle = styled.div`
  font-family: Arial;
  font-size: 21.6px;
  font-weight: 700;
  line-height: 24.84px;
  color: #552300;
  margin: 20px 0px;
`;

const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Ingredient = styled.div`
  color: #000000;
  font-size: 19.2px;
  font-weight: 400;
  line-height: 19.2px;
  font-family: Newsreader;
  margin-left: 5px;
`;

const AllergenContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin: 20px 0px;
  align-items: center;
`;

const AllergenTitle = styled.div`
  font-family: Arial;
  font-size: 21.6px;
  font-family: Arial;
  font-size: 21.6px;
  font-weight: 700;
  line-height: 24.84px;
  color: #552300;
  margin-right: 10px;
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
  const navigate = useNavigate();
  const item = useSelector((state) => state.menu.items[itemId]);
  const likePercentage = useSelector(
    (state) => state.menu.likePercentage[itemId]
  );
  const language = useSelector((state) => state.flavorProfile.language);
  const nationality = useSelector((state) => state.flavorProfile.nationality);
  const ingredientsDict = useSelector((state) => state.menu.ingredientsDict);

  const menuType = useSelector((state) => state.menu.menuType);

  const handleBackButtonClick = () => {
    if (menuType === MenuType.PIC) {
      navigate(MenuRoute[MenuType.PIC]);
    } else if (menuType === MenuType.REC) {
      navigate(MenuRoute[MenuType.REC]);
    } else {
      navigate(MenuRoute[MenuType.LIST]);
    }
  };

  return (
    <Container>
      <ProfileContainer>
        <div>Language: {language || "English"}</div>
        <div>Nationality: {nationality || "American"}</div>
      </ProfileContainer>
      <InfoContainer>
        <HeaderContainer>
          <Title>{item.itemName}</Title>
          <Icon
            name="close"
            size="big"
            onClick={handleBackButtonClick}
            style={{ cursor: "pointer" }}
          />
        </HeaderContainer>
        <ImageContainer>
          {item.imageUrls.map((image, idx) => (
            <Image src={image} alt={item.itemName} key={idx} />
          ))}
        </ImageContainer>
        <LikeTag>
          <LikePercentageText>{likePercentage}%</LikePercentageText> chance
          you'll like it
        </LikeTag>
        <Description>{item.description}</Description>
        <IngredientsTitle>Main Ingredients</IngredientsTitle>
        <IngredientsContainer>
          {item.ingredients.map((ingredient, index) => (
            <>
              <Ingredient>{ingredient}</Ingredient>
              {ingredientsDict[ingredient] && (
                <IngredientModal ingredientName={ingredient}>
                  <Icon
                    name="search"
                    size="large"
                    style={{ color: "#ffac1d", marginLeft: "5px" }}
                  />
                </IngredientModal>
              )}
              {index !== item.ingredients.length - 1 && ","}
            </>
          ))}
        </IngredientsContainer>
        <AllergenContainer>
          <AllergenTitle>Allergens: </AllergenTitle>
          {item.allergens.map((allergen) => (
            <AllergenIcon allergen={allergen} size="33.6px" />
          ))}
        </AllergenContainer>
      </InfoContainer>
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
