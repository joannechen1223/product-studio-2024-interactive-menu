import React from "react";
import { Dropdown } from "semantic-ui-react";
import styled from "styled-components";

import {
  CountryList,
  DietStyle,
  DietStyleLabels,
  LanguageList,
  SpiceTolerance,
  SpiceToleranceLabels,
} from "./constant";

const Question = styled.div`
  color: #000000;
  font-size: 3.5vh;
  font-weight: 400;
  font-family: Adamina;
  line-height: 3.7vh;
  text-align: left;
  margin-top: 15px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5em;
`;

const Option = styled.button`
  height: 50px;
  background-color: ${(props) => (props.isSelected ? "#552300" : "#fffff8")};
  border: none;
  border-radius: 43px;
  padding: 0 10px;
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 400;
  font-family: Adamina;
  line-height: 20px;
  color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
`;

const StyledDropdown = styled(Dropdown)`
  margin: 1em 0 0.5em 0;

  &.ui.dropdown {
    background: #fffff8;
    border-radius: 14px;
    border: none;
    padding: 15px 20px;
    font-family: Adamina;
    color: ${(props) => (props.value === null ? "#6e6e6e" : "#000000")};
    font-size: 20px;
    line-height: 27.24px;
    box-shadow: none;

    /* Style the menu/list that appears */
    .menu {
      background: #fffff8;
      border: none;
      border-radius: 0 0 14px 14px;
      box-shadow: none;
      max-height: 200px;

      .item {
        font-size: 20px;
        line-height: 27.24px;
        font-family: Adamina;
        padding: 15px 20px !important;
      }
    }
  }
`;

const SurveyContent = {
  spiceTolerance: {
    question: "What's your spice tolerance?",
    type: "multipleChoice",
    options: [
      SpiceTolerance.NONE,
      SpiceTolerance.MILD,
      SpiceTolerance.MEDIUM,
      SpiceTolerance.HOT,
    ],
  },
  dietStyle: {
    question: "What's your diet style?",
    type: "multipleChoice",
    options: [
      DietStyle.NO_RESTRICTION,
      DietStyle.KETO,
      DietStyle.VEGAN,
      DietStyle.PESCATARIAN,
    ],
  },
  nationality: {
    question: "Which country's cuisine are you most familiar with?",
    type: "dropdown",
    options: CountryList.map((country) => ({
      key: country,
      text: country,
      value: country,
    })),
  },
  language: {
    question: "What language are you most comfortable with using?",
    type: "dropdown",
    options: LanguageList.map((language) => ({
      key: language,
      text: language,
      value: language,
    })),
  },
};

const FlavorSurvey = ({
  progress,
  spiceTolerance,
  setSpiceTolerance,
  dietStyle,
  setDietStyle,
  nationality,
  setNationality,
  language,
  setLanguage,
}) => {
  const handleSpiceToleranceClick = (option) => {
    setSpiceTolerance(option);
  };

  const handleDietStyleClick = (option) => {
    setDietStyle(option);
  };

  return (
    <>
      {progress === 0 && (
        <>
          <Question>{SurveyContent.spiceTolerance.question}</Question>
          <OptionsContainer>
            {SurveyContent.spiceTolerance.options.map((option) => (
              <Option
                isSelected={option === spiceTolerance}
                onClick={() => handleSpiceToleranceClick(option)}
              >
                {SpiceToleranceLabels[option]}
              </Option>
            ))}
          </OptionsContainer>
        </>
      )}
      {progress === 1 && (
        <>
          <Question>{SurveyContent.dietStyle.question}</Question>
          <OptionsContainer>
            {SurveyContent.dietStyle.options.map((option) => (
              <Option
                isSelected={option === dietStyle}
                onClick={() => handleDietStyleClick(option)}
              >
                {DietStyleLabels[option]}
              </Option>
            ))}
          </OptionsContainer>
        </>
      )}
      {progress === 2 && (
        <>
          <Question>{SurveyContent.nationality.question}</Question>
          <StyledDropdown
            options={SurveyContent.nationality.options}
            placeholder="Unselected"
            search
            selection
            icon="none"
            value={nationality}
            onChange={(e, { value }) => setNationality(value)}
          />
          <Question>{SurveyContent.language.question}</Question>
          <StyledDropdown
            options={SurveyContent.language.options}
            placeholder="Unselected"
            search
            selection
            icon="none"
            value={language}
            onChange={(e, { value }) => setLanguage(value)}
          />
        </>
      )}
    </>
  );
};

export default FlavorSurvey;
