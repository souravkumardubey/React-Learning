import { useState } from "react";

const Counter = () => {
  const currDate = new Date();
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  currDate.setDate(currDate.getDate() + count);
  return (
    <div>
      <div className="steps" style={{ display: "flex" }}>
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <span>Steps: {step}</span>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div className="counter" style={{ display: "flex" }}>
        <button
          onClick={() => {
            setCount((count) => count - step);
          }}
        >
          -
        </button>
        <span>Count: {count}</span>
        <button
          onClick={() => {
            setCount((count) => count + step);
          }}
        >
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${Math.abs(count)} days from today will be `
            : `${Math.abs(count)} days from today was `}
        </span>
        <span>{currDate.toDateString()}</span>
      </p>
    </div>
  );
};
export default Counter;
