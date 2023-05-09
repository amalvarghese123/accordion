import { Disclosure, Transition } from "@headlessui/react";
import "./index.css";
import { useEffect, useState, useRef, useLayoutEffect } from "react";

const Accordion = ({ title = "", content = "", expandBtn = null }) => {
  return (
    <div>
      <Disclosure as="div" className={"accordion-cntr"}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`accordion-btn ${open ? "flip-arrow" : ""}`}
            >
              {title}{" "}
              <button className="accordion-expand-btn">{expandBtn}</button>
            </Disclosure.Button>
            {/* <PanelContent content={content} /> */}
            <Transition
              className="overflow-h"
              enter="transition-custom-enter"
              enterFrom="transform max-height-0"
              enterTo="transform max-height-150"
              leave="transition-custom-leave"
              leaveFrom="transform max-height-150"
              leaveTo="transform max-height-0"
            >
              <Disclosure.Panel className="accordion-panel">
                {content}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};
export default Accordion;

const PanelContent = ({ content }) => {
  /*   const [isMounted, setIsMounted] = useState(false);
  const animateRef = useRef();
  useEffect(() => {
    setIsMounted(true);
    return () => {
      // if (isMounted) {
      //   animateRef.current = true;
      // }
    };
  }, []);
  useLayoutEffect(() => {
    if (isMounted) {
      animateRef.current = true;
    }
    // return () => {
    // };
  }, []); */
  return (
    <Disclosure.Panel
      className="accordion-panel"
      // className={`accordion-panel ${isMounted ? "animate" : ""} ${
      //   animateRef.current ? "fade-away" : ""
      // }`}
    >
      {content}
    </Disclosure.Panel>
  );
};
