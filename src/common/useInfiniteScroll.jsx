import { useCallback, useEffect, useState } from "react";

/**
 * Run given callback at the end of a scrollable view
 *
 * @param {Function} scrolled  Callback
 * @param {Object}   observerOption configure IntersectionObserver API
 *
 * @returns React.Ref for the last scroll item
 *
 *
 *
 * Important
 *  1. Keeping the browser DevTool open on the side, breaks the functionality -
 *        the IntersectionObserver never gets triggered.
 *      Workaround - Use the DevTool in detached (in a separate window) mode.
 *
 */
export function useInfiniteScroll(
  scrolled = () => {},
  observerOption = { root: null, threshold: 0.5 }
) {
  const [observer] = useState(
    new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        scrolled();
      }
    }, observerOption)
  );

  const handleRefChange = useCallback((node) => {
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !node) return;

    observer.observe(node);

    return () => {
      console.log("unobserver ran");
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return handleRefChange;
}

export default useInfiniteScroll;
