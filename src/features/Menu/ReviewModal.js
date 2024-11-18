import { useState } from "react";
import styled from "styled-components";

import Modal from "../../components/Modal";

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

const ReviewModal = ({ children, item }) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal closeIcon open={open} setOpen={setOpen} trigger={children}>
      <Title>How does it taste at this restaurant?</Title>
      <SubTitle>Source: Yelp</SubTitle>
      <Content>{item.aiReview}</Content>
    </Modal>
  );
};

export default ReviewModal;
