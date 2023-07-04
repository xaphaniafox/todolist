import { useState, useContext } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import FeedbackContext from "./context/FeedbackContext";
import { useEffect } from "react";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEditItem, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEditItem.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEditItem.item.text);
    }
  }, [feedbackEditItem]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 1) {
      setBtnDisabled(true);
      setMessage("Enter a new task");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 0) {
      const newFeedback = { text };
      if (feedbackEditItem.edit === true) {
        updateFeedback(feedbackEditItem.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
      feedbackEditItem.edit = false;
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="New task"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
