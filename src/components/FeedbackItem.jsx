import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  const [active, setActive] = useState(true);
  const [linethrough, setLinethrough] = useState("none");

  return (
    <Card>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div
        className="text-display"
        onClick={() => {
          setActive(!active);
          setLinethrough(linethrough === "none" ? "line-through" : "none");
        }}
        style={{ textDecorationLine: linethrough }}
      >
        {item.text}
      </div>
    </Card>
  );
}

FeedbackItem.prototype = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
