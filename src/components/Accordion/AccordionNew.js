import { Disclosure, Transition } from "@headlessui/react";
import "./index.css";
import React from "react";

const Accordion = ({ expandBtn = null, children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          expandBtn: expandBtn,
        });
      })}
    </div>
  );
};
export default Accordion;

const Item = ({ expandBtn, children }) => {
  return (
    <>
      <Disclosure as="div" className={"accordion-cntr"}>
        {({ open }) => (
          <>
            <Disclosure.Button className={`accordion-btn`}>
              {children[0]}
              <span className={`${open ? "flip-up" : "flip-down"}`}>
                {expandBtn}
              </span>
            </Disclosure.Button>
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
                {children[1]}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
};
Accordion.Item = Item;
