import { GiCircularSawblade, GiCrossedSwords } from "react-icons/gi";
import { FiEdit } from "react-icons/fi";

const Icons = (props) => {
  switch (props.name) {
    case "circle":
      return <GiCircularSawblade className="icons" />;
    case "cross":
      return <GiCrossedSwords className="icons" />;
    default:
      return <FiEdit className="icons" />;
  }
};

export default Icons;
