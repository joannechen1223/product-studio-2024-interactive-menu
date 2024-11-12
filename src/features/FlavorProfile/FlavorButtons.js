import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const FlavorButtonContainer = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const FlavorRow = styled.div`
  display: flex;
  justify-content: start;
  gap: 1em;
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

// Split flavors into 3 rows
const rows = [FLAVORS.slice(0, 3), FLAVORS.slice(3, 5), FLAVORS.slice(5, 7)];

const FlavorButtons = ({ onSelectionChange }) => {
  const savedFlavors = useSelector(
    (state) => state.flavorProfile.selectedFlavors
  );
  const [localSelectedFlavors, setLocalSelectedFlavors] = useState([]);

  useEffect(() => {
    setLocalSelectedFlavors(savedFlavors);
  }, [savedFlavors]);

  const handleFlavorClick = (flavor) => {
    setLocalSelectedFlavors((prev) => {
      const newFlavors = prev.includes(flavor)
        ? prev.filter((f) => f !== flavor)
        : [...prev, flavor];
      onSelectionChange(newFlavors);
      return newFlavors;
    });
  };

  return (
    <FlavorButtonContainer>
      {rows.map((row, rowIndex) => (
        <FlavorRow key={rowIndex}>
          {row.map(({ name, color }) => (
            <FlavorButton
              key={name}
              bgColor={color}
              isSelected={localSelectedFlavors.includes(name)}
              onClick={() => handleFlavorClick(name)}
            >
              {name}
            </FlavorButton>
          ))}
        </FlavorRow>
      ))}
    </FlavorButtonContainer>
  );
};

export default FlavorButtons;
