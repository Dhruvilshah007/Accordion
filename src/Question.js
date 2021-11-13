import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

 
const Question = ({ title, info }) => {
  // useState for showing info on toggle button
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>

        {/* setting showInfo true and fasle onclick of button */}
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>

          {/* setting button toggle when info is shown and when its not shown */}
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* it means show paragraph only when showInfo is true */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;


