import dairyIcon from "../assets/icons/dairy.svg";
import glutenIcon from "../assets/icons/gluten.svg";
import nutsIcon from "../assets/icons/nuts.svg";

const allergenIcons = {
  Gluten: glutenIcon,
  Dairy: dairyIcon,
  Nuts: nutsIcon,
};

const AllergenIcon = ({ allergen, size }) => {
  return (
    <>
      {allergenIcons[allergen] && (
        <img src={allergenIcons[allergen]} alt={allergen} height={size} />
      )}
    </>
  );
};

export default AllergenIcon;
