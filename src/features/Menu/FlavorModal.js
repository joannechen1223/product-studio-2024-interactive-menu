import { useState } from "react";
import styled from "styled-components";

import FlagIcon from "../../components/FlagIcon";
import Modal from "../../components/Modal";
import { Country } from "../FlavorProfile/constant";

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 25.5px;
  margin: 20px 0;
`;

const SubTitle = styled.div`
  color: #ffb433;
  font-size: 18px;
  line-height: 20.7px;
  margin: 10px 0;
  font-weight: 700;
`;

const Content = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-family: Newsreader;
  font-weight: 400;
`;

const FlavorModal = ({ children, item }) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal closeIcon open={open} setOpen={setOpen} trigger={children}>
      <Title>What does it typically taste like?</Title>
      <SubTitle>
        If map it to American food{" "}
        <FlagIcon country={Country.UnitedStates} size="18px" />, it will be :
      </SubTitle>
      <Content>{item.mapping || "No flavor mapping available"}</Content>
      <SubTitle>Flavor</SubTitle>
      <Content>{item.description}</Content>
    </Modal>
  );
};

export default FlavorModal;
