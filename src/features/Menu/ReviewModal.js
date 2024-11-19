import { useState } from "react";
import styled from "styled-components";

import aiPoweredIcon from "../../assets/icons/aiPowered.svg";
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
  margin: 15px 0;
`;

const AiSummaryTag = styled.button`
  color: #ffffff;
  font-size: 18px;
  line-height: 20px;
  margin: 10px 0;
  font-weight: 700;
  background-color: #0dcdad;
  padding: 7px 15px;
  border-radius: 64px;
  border: none;
`;

const ReviewModal = ({ children, item }) => {
  const [open, setOpen] = useState(false);
  const [aiReview, setAiReview] = useState(false);

  return (
    <Modal closeIcon open={open} setOpen={setOpen} trigger={children}>
      <Title>How does it taste at this restaurant?</Title>
      <SubTitle>Source: Yelp</SubTitle>
      {item.reviews &&
        item.reviews.map((review) => (
          <Content>
            <div>{"@" + review.username}</div>
            {review.review}
          </Content>
        ))}
      <AiSummaryTag onClick={() => setAiReview(true)}>
        AI Summary
        <img
          src={aiPoweredIcon}
          alt="ai powered"
          style={{ marginLeft: "10px" }}
        />
      </AiSummaryTag>
      {aiReview && <Content>{item.aiReview}</Content>}
    </Modal>
  );
};

export default ReviewModal;
