import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

import AllergenIcon from "./AllergenIcon";

import ingredientsDict from "../data/ingredients";

const FlexColumnContainer = styled.div`
  padding: 20px 33px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid #bcae97;
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

const FlexRowReverseContainer = styled(FlexRowContainer)`
  flex-direction: row-reverse;
  margin-top: 10px;
`;

const ItemInfo = styled.div`
  width: 70%;
`;

const ItemImage = styled(Image)`
  width: 100px;
  max-height: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

const ItemName = styled.div`
  color: #000000;
  font-size: 24px;
  font-weight: 700;
  font-family: Arial;
  line-height: 27.6px;
  text-align: left;
`;

const ItemTranslation = styled.div`
  color: #ffac1d;
  font-size: 18px;
  font-weight: 700;
  font-family: Arial;
  line-height: 20.7px;
  text-align: left;
  font-style: italic;
  margin-top: 3px;
`;

const Ingredients = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Ingredient = styled.span`
  font-size: 22px;
  font-weight: 400;
  font-family: Newsreader;
  line-height: 22px;
  padding-right: 5px;
`;

const AllergensContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const LearnMoreButton = styled.button`
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 46px;
  padding: 10px 20px;
  color: #000000;
  align-self: flex-end;
  height: 41px;
  font-size: 18px;
  font-weight: 400;
  font-family: Arial;
  line-height: 20.7px;
`;

const MenuItemCard = ({ item }) => {
  const navigate = useNavigate();
  const {
    itemId,
    itemName,
    translationName,
    ingredients,
    imageUrls,
    allergens,
  } = item;

  return (
    <FlexColumnContainer>
      <FlexRowContainer>
        <ItemInfo>
          <ItemName>{itemName}</ItemName>
          <ItemTranslation>{translationName}</ItemTranslation>
          <Ingredients>
            {ingredients.map((ingredient, index) => (
              <Ingredient key={ingredient}>
                {ingredient}
                {ingredientsDict[ingredient] && (
                  <Icon
                    name="search"
                    size="small"
                    style={{ color: "#ffac1d", marginLeft: "5px" }}
                  />
                )}
                {index !== ingredients.length - 1 && ","}
              </Ingredient>
            ))}
          </Ingredients>
        </ItemInfo>
        {imageUrls && <ItemImage src={imageUrls[0]} alt={itemName} />}
      </FlexRowContainer>
      <FlexRowReverseContainer>
        <LearnMoreButton onClick={() => navigate(`/menu-item/${itemId}`)}>
          Learn more
          <Icon name="chevron right" style={{ margin: "0 0 0 5px" }} />
        </LearnMoreButton>
        {allergens && (
          <AllergensContainer>
            {allergens.map((allergen) => (
              <AllergenIcon allergen={allergen} size="28px" />
            ))}
          </AllergensContainer>
        )}
      </FlexRowReverseContainer>
    </FlexColumnContainer>
  );
};

export default MenuItemCard;
