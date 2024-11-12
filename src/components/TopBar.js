import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 24px;
  display: flex;
  flex-direction: row;
  background: #f9f7ec;
  height: 64px;
  margin-top: 47px;
  border-radius: 66px;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: ${(props) => (props.active ? "#000000" : "transparent")};
  border: 0;
  width: 97px;
  height: 54px;
  border-radius: 47px;
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
  font-size: 14px;
  font-weight: 400;
  line-height: 16.1px;
  font-family: Arial;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopBar = ({ menuType }) => {
  return (
    <Container>
      <Button active={menuType === "rec"}>
        <Icon name="food" size="large" style={{ margin: "5px 0" }} />
        Rec
      </Button>
      <Button active={menuType === "list"}>
        <Icon name="clipboard list" size="large" style={{ margin: "5px 0" }} />
        List
      </Button>
      <Button active={menuType === "pic"}>
        <Icon name="picture" size="large" style={{ margin: "5px 0" }} />
        Pic
      </Button>
    </Container>
  );
};

export default TopBar;
