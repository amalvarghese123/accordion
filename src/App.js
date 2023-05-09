import "./App.css";
import Accordion from "./components/Accordion/AccordionNew";
// import Accordion from "./components/Accordion";
// import { Dummy } from "./components/Dummy";

function App() {
  // const title = "What is your refund policy?";
  // const content =
  //   "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.";
  return (
    <div className="App">
      <Accordion expandBtn={<BtnIcon />}>
        <Accordion.Item>
          <div className="accordion-panel-title">1st title</div>
          <div className="accordion-panel-content overflow-h">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptates dolorem, in dolores delectus praesentium ipsa blanditiis
            quasi ipsum voluptatum nostrum
          </div>
        </Accordion.Item>
        <Accordion.Item>
          <div className="accordion-panel-title">2nd title</div>
          <div className="accordion-panel-content overflow-h">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non neque
            saepe quae ducimus veniam, id dolor modi magnam mollitia sit
            suscipit doloribus
          </div>
        </Accordion.Item>
      </Accordion>
      {/* <Accordion title={title} content={content} expandBtn={<BtnIcon />} />
      <Accordion title={title} content={content} expandBtn={<BtnIcon />} /> */}
      {/* <Dummy /> */}
    </div>
  );
}
export default App;

const BtnIcon = ({ open }) => {
  return (
    <>
      <span>&lt;</span>
    </>
  );
};
