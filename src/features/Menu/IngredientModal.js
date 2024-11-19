import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Modal from "../../components/Modal";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const Image = styled.img`
  width: 45vw;
  height: 45vw;
  object-fit: cover;
  border-radius: 10px;
`;

const Content = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-family: Newsreader;
  font-weight: 400;
`;

const IngredientModal = ({ children, ingredientName }) => {
  const [open, setOpen] = useState(false);
  const { ingredientsDict } = useSelector((state) => state.menu);

  return (
    <Modal closeIcon open={open} setOpen={setOpen} trigger={children}>
      <ImageContainer>
        <Image src={ingredientsDict[ingredientName].imageUrl} />
      </ImageContainer>
      <Content>{ingredientsDict[ingredientName].explanation}</Content>
    </Modal>
  );
};

export default IngredientModal;
