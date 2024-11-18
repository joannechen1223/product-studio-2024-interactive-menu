import UnitedStatesFlag from "../assets/icons/usFlag.svg";
import { Country } from "../features/FlavorProfile/constant";

const FlagIcons = {
  [Country.UnitedStates]: UnitedStatesFlag,
};

const FlagIcon = ({ country, size }) => {
  return (
    <>
      {FlagIcons[country] && (
        <img src={FlagIcons[country]} alt={country} height={size} />
      )}
    </>
  );
};

export default FlagIcon;
