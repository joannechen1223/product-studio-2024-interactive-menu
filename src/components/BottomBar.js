import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const FixedBottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fafafa;
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  height: 79px;
  border-top: 1px solid #d9d9d9;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: 0;
  margin: 0 16px;
  width: 80px;
  color: #000000;
`;

const BottomBar = () => {
  return (
    <FixedBottomBar>
      <Button>
        <Icon
          name="search"
          size="large"
          color="black"
          style={{ margin: "0 0 5px 0" }}
        />
        Discovery
      </Button>
      <Button>
        <Icon
          name="camera"
          size="large"
          color="black"
          style={{ margin: "0 0 5px 0" }}
        />
        Camera
      </Button>
      <Button>
        <Icon
          name="user"
          size="large"
          color="black"
          style={{ margin: "0 0 5px 0" }}
        />
        Profile
      </Button>
    </FixedBottomBar>
  );
};

export default BottomBar;
