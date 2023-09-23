import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

const Question = ({ q }) => {
  const [description, setDescription] = useState(q.question);
  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(description === q.question ? q.answer : q.question);
  };
  return (
    <div
      className={description !== q.question ? "selected" : ""}
      onClick={handleDescription}
      key={q.id}
    >
      {description}
    </div>
  );
};

function FlashCards() {
  return (
    <div>
      <div className="flashcards">
        {questions.map((q) => {
          return <Question q={q} />;
        })}
      </div>
    </div>
  );
}
