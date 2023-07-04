import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import "./App.css";

function App() {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}
export default App;
