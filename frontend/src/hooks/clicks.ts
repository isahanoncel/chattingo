import React from "react";
 
export function useClickOutListener(
  containerRef: React.MutableRefObject<any>,
  onClose: () => void,
  dependencies: any[] = [],
  allowedOutsideElements: string[] = []
) {
  const handleOutClick = React.useCallback(
    (e: any) => {
      if (
        (containerRef &&
          containerRef.current &&
          containerRef.current.contains(e.target)) ||
        allowedOutsideElements.includes(e.target.dataset.clickoutsideId)
      ) {
        return;
      }
      if (onClose) {
        onClose();
      }
    },
    [containerRef, onClose, ...dependencies]
  );
  const removeListener = React.useCallback(() => {
    document.body.removeEventListener("click", handleOutClick, false);
  }, [handleOutClick]);

  const addListener = React.useCallback(() => {
    document.body.addEventListener("click", handleOutClick, false);
  }, [handleOutClick]);

  React.useEffect(() => {
    addListener();
    return () => removeListener();
  }, []);
}