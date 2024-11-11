import { Icon } from "semantic-ui-react";
import styled from "styled-components";

import FlavorButtons from "../features/FlavorProfile/FlavorButtons";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f1ede0;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const Greeting = styled.div`
  color: #552300;
  font-size: 37px;
  font-weight: 400;
  font-family: Newsreader;
  line-height: 37px;
  text-align: left;
  margin-top: 100px;
`;

const Title = styled.div`
  margin-top: 28px;
  color: #552300;
  font-size: 58px;
  font-weight: 800;
  font-family: Arial Black;
  line-height: 50px;
  text-align: left;
`;

const SearchContainer = styled.div`
  margin-top: 68px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchBar = styled.input`
  width: 80%;
  height: 45px;
  border: none;
  border-radius: 12px;
  padding: 0 15px;
`;

const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

const ActionButtonContainer = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  height: 56px;
  background-color: ${(props) => props.bgColor || "#ffffff"};
  border: none;
  border-radius: 43px;
  color: #ffffff;
  font-size: 22px;
  font-weight: 400;
  font-family: Arial;
  line-height: 26.25px;
  text-align: center;
  padding: 15px 20px;
`;

const Home = () => {
  return (
    <Container>
      <Greeting>Hi there!</Greeting>
      <Title>WHAT ARE YOU CRAVING TODAY?</Title>
      <SearchContainer>
        <SearchBar type="text" placeholder="Type here" />
        <IconContainer>
          <Icon
            name="microphone"
            size="large"
            color="grey"
            style={{ margin: 0 }}
          />
        </IconContainer>
      </SearchContainer>
      <FlavorButtons />
      <ActionButtonContainer>
        <ActionButton bgColor="#b4b4b4">
          Skip
          <Icon name="forward" size="small" style={{ margin: "0 0 0 10px" }} />
        </ActionButton>
      </ActionButtonContainer>
    </Container>
  );
};

export default Home;
