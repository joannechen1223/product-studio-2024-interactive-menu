import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { toggleFlavor } from "./flavorProfileSlice";

const FlavorButtonContainer = styled.div`
  margin-top: 47px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const FlavorButton = styled.button`
  height: 47px;
  background-color: ${(props) =>
    props.isSelected ? "#552300" : props.bgColor};
  border: none;
  border-radius: 43px;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#552300")};
  font-size: 20px;
  font-weight: 400;
  font-family: Adamina;
  line-height: 27.24px;
  text-align: center;
  padding: 10px 22px;
  margin: 0 10px 15px 0;
`;

const FLAVORS = [
  { name: "Sweet", color: "#fffece" },
  { name: "Sour", color: "#eeffb5" },
  { name: "Spicy", color: "#ffa2a2" },
  { name: "Crunchy", color: "#fcd9b3" },
  { name: "Creamy", color: "#ffffe9" },
  { name: "Light", color: "#baefb4" },
  { name: "Guilty", color: "#e3ccf5" },
];

const FlavorButtons = () => {
  const dispatch = useDispatch();
  const selectedFlavors = useSelector(
    (state) => state.flavorProfile.selectedFlavors
  );

  const handleFlavorClick = (flavor) => {
    dispatch(toggleFlavor(flavor));
  };
  return (
    <FlavorButtonContainer>
      {FLAVORS.map(({ name, color }) => (
        <FlavorButton
          key={name}
          bgColor={color}
          isSelected={selectedFlavors.includes(name)}
          onClick={() => handleFlavorClick(name)}
        >
          {name}
        </FlavorButton>
      ))}
    </FlavorButtonContainer>
  );
};

export default FlavorButtons;
