import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

import AllergenIcon from "./AllergenIcon";

import IngredientModal from "../features/Menu/IngredientModal";
import { MenuRoute, MenuType } from "../features/Menu/constant";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 40px;
  width: 100%;
  flex-shrink: 0;
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

const TranslationName = styled.div`
  color: #ffac1d;
  font-size: 18px;
  font-weight: 700;
  font-family: Arial;
  line-height: 20.7px;
  text-align: left;
  font-style: italic;
  margin-top: 3px;
  margin-bottom: 10px;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
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
  margin-top: 20px;
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

const MenuItemDetailCard = ({ item, backButton }) => {
  const menuType = useSelector((state) => state.menu.menuType);
  const navigate = useNavigate();
  const likePercentage = useSelector(
    (state) => state.menu.likePercentage[item.itemId]
  );
  const ingredientsDict = useSelector((state) => state.menu.ingredientsDict);

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
    <InfoContainer>
      <HeaderContainer>
        <Title>{item.itemName}</Title>
        {backButton && (
          <Icon
            name="close"
            size="big"
            onClick={handleBackButtonClick}
            style={{ cursor: "pointer" }}
          />
        )}
      </HeaderContainer>
      <TranslationName>{item.translationName}</TranslationName>
      <ImageContainer>
        {item.imageUrls.map((image, idx) => (
          <Image src={image} alt={item.itemName} key={idx} />
        ))}
      </ImageContainer>
      <LikeTag>
        <LikePercentageText>{likePercentage}%</LikePercentageText> chance you'll
        like it
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
  );
};

export default MenuItemDetailCard;
