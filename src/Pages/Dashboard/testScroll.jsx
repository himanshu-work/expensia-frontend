import React, { useState } from "react";
import useInfiniteScroll from "../../common/useInfiniteScroll";

function TestScroll() {
  const handleRefChange = useInfiniteScroll(() => {
    console.log("reached bottom of the page");
    setState((prev) => [...prev, 1]);
  });
  const [state, setState] = useState([0]);
  return (
    <div>
      {state?.map((item, index, arr) => (
        <>
          <div style={{ minHeight: "2000px", background: "white" }}>hi dev</div>
          <div
            ref={index === arr.length - 1 ? handleRefChange : null}
            style={{ height: "10px", background: "black" }}
          ></div>
        </>
      ))}
    </div>
  );
}

export default TestScroll;
