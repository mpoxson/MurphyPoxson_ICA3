import React from "react";
import "./box.css";

const Box = () => {
  const [getter, setter] = React.useState({
    value: 0,
  });

  function handleUp(e) {
    let i = getter.value;
    i++;
    setter((prev) => ({
      value: i,
    }));
    console.log("up");
  }

  function handleDown(e) {
    let j = getter.value;
    j--;
    setter((prev) => ({
      value: j,
    }));
  }

  return (
    <div className="holder">
      <header>
        <h1>{getter.value}</h1>
      </header>
      <div className="foot">
        <button className="up" onClick={handleUp}>
          +
        </button>
        <button className="down" onClick={handleDown}>
          -
        </button>
      </div>
    </div>
  );
};

export default Box;
