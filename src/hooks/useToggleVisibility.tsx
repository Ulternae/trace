import { useRef } from "react";

const useToggleVisibility = () => {
  const elementsRef = useRef<HTMLDivElement[]>([]);

  const setRef = (element: HTMLDivElement | null) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  };

  const toggleElement = () => {
    elementsRef.current.forEach((e) => {
      e.classList.toggle("hidden")
    })
  };

  const showElement = () => {
    elementsRef.current.forEach((e) => {
      e.classList.remove("hidden")
    })
  };

  const hideElement = () => {
    elementsRef.current.forEach((e) => {
      e.classList.add("hidden")
    })
  };

  return { setRef, toggleElement, showElement, hideElement };
};

export { useToggleVisibility };
