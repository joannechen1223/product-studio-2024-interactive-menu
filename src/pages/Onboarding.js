// onboarding page
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Icon, Progress } from "semantic-ui-react";
import styled from "styled-components";

import {
  ActionButton,
  ActionButtonContainer,
} from "../components/ActionButton";
import FlavorSurvey from "../features/FlavorProfile/FlavorSurvey";
import {
  setSpiceTolerance,
  setDietStyle,
  setNationality,
  setLanguage,
} from "../features/FlavorProfile/flavorProfileSlice";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f1ede0;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: #552300;
  font-size: 37px;
  font-weight: 400;
  font-family: Adamina;
  line-height: 37px;
  text-align: left;
  margin-top: 1.5em;
`;

const Subtitle = styled.div`
  color: #552300;
  font-size: 19px;
  font-weight: 400;
  font-family: Adamina;
  line-height: 29px;
  text-align: left;
  margin-top: 15px;
`;

const ProgressContainer = styled.div`
  margin-top: 1.5em;
`;

const Onboarding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [spiceTolerance, setLocalSpiceTolerance] = useState(null);
  const [dietStyle, setLocalDietStyle] = useState(null);
  const [nationality, setLocalNationality] = useState(null);
  const [language, setLocalLanguage] = useState(null);
  const canProceed =
    (progress === 0 && spiceTolerance !== null) ||
    (progress === 1 && dietStyle !== null) ||
    (progress === 2 && nationality !== null && language !== null);

  const handleActionButtonClick = () => {
    if (progress === 0 && spiceTolerance !== null) {
      dispatch(setSpiceTolerance(spiceTolerance));
      setProgress(1);
    } else if (progress === 1 && dietStyle !== null) {
      dispatch(setDietStyle(dietStyle));
      setProgress(2);
    } else if (progress === 2 && nationality !== null && language !== null) {
      dispatch(setNationality(nationality));
      dispatch(setLanguage(language));
      navigate("/rec");
    }
  };

  return (
    <Container>
      <Title>We got you!</Title>
      <Subtitle>
        Now, tell us a bit about yourself to help speed up your menu navigation.
      </Subtitle>
      <ProgressContainer>
        <Progress percent={34 * (progress + 1)} color="green" size="tiny" />
      </ProgressContainer>
      <FlavorSurvey
        progress={progress}
        spiceTolerance={spiceTolerance}
        setSpiceTolerance={setLocalSpiceTolerance}
        dietStyle={dietStyle}
        setDietStyle={setLocalDietStyle}
        nationality={nationality}
        setNationality={setLocalNationality}
        language={language}
        setLanguage={setLocalLanguage}
      />
      <ActionButtonContainer>
        <ActionButton
          bgColor={canProceed ? "#7BCD0D" : "#dcdcdc"}
          color={canProceed ? "#ffffff" : "#7f7f7f"}
          onClick={handleActionButtonClick}
        >
          {progress === 2 ? "All set!" : "Next"}
          {progress !== 2 && (
            <Icon
              name={"arrow right"}
              size="small"
              color={canProceed ? "#ffffff" : "#7f7f7f"}
              style={{ margin: "0 0 0 10px" }}
            />
          )}
        </ActionButton>
      </ActionButtonContainer>
    </Container>
  );
};

export default Onboarding;
