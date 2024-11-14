import { useState } from "react";
import styled from "styled-components";

import Modal from "../../components/Modal";

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 25.5px;
  margin: 20px 0;
`;

const Content = styled.div`
  font-size: 22px;
  line-height: 26px;
  font-family: Newsreader;
  font-weight: 400;
`;

const HistoryModal = ({ children, item }) => {
  const [open, setOpen] = useState(false);
  console.log(item);
  return (
    <Modal closeIcon open={open} setOpen={setOpen} trigger={children}>
      <Title>History of {item.itemName}</Title>
      <Content>{item.history}</Content>
    </Modal>
  );
};

export default HistoryModal;
