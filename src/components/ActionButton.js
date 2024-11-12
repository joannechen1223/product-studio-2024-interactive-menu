import styled from "styled-components";

const ActionButtonContainer = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  height: 56px;
  background-color: ${(props) => props.bgColor || "#dcdcdc"};
  border: none;
  border-radius: 43px;
  color: ${(props) => props.color || "#ffffff"};
  font-size: 22px;
  font-weight: 400;
  font-family: Arial;
  line-height: 26.25px;
  text-align: center;
  padding: 15px 20px;
`;

export { ActionButtonContainer, ActionButton };
