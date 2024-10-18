import React, { useEffect, useRef, useState } from "react";

function PracticeScroll() {
  const sentinelRef = useRef(null);
  const [state, setState] = useState([0]);
  const handleScroll = () => {
    console.log("scrolled ", state);
    setState((prev) => [...prev, 1]);
  };
  const handleRefChange = (ref) => {
    console.log({ ref });
    sentinelRef.current = ref;
    return sentinelRef;
  };
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      // threshold: 0.1, // Trigger the callback when 10% of the sentinel is visible
    };

    const handleIntersection = (entries) => {
      const firstEntry = entries?.[0];
      if (firstEntry && firstEntry?.isIntersecting) {
        handleScroll();
        console.log("Reached bottom of the page!");
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* Your page content goes here */}
      {state?.map((item, index, arr) => (
        <>
          <div style={{ minHeight: "2000px", background: "white" }}></div>
          {/* Sentinel element at the bottom of the page */}
          <div
            ref={(ref) => {
              if (index === arr.length - 1) handleRefChange(ref);
            }}
            style={{ height: "10px", background: "black" }}
          ></div>
        </>
      ))}
    </div>
  );
}

export default PracticeScroll;
