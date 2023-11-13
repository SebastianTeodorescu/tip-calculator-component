import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const tip = bill * ((myTip + friendTip) / 2 / 100);

  function handleReset() {
    setBill("");
    setMyTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={myTip} onSelect={setMyTip}>
        How did you like the service
      </SelectPercentage>
      <SelectPercentage percentage={friendTip} onSelect={setFriendTip}>
        How did your friend like the service
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How mutch was the bill?</label>
      <input
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        type="text"
        placeholder="Bill value"
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

