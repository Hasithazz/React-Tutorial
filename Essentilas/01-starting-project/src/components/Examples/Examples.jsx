import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
  const [selectedComponent, setSelectedComponent] = useState();

  function handleOnSelect(selectedButton) {
    setSelectedComponent(selectedButton.toLowerCase());
    console.log(selectedComponent);
  }

  let tabContent = <p>Please Select a Topic</p>;

  if (selectedComponent) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedComponent].title}</h3>
        <p>{EXAMPLES[selectedComponent].description}</p>
        <pre>
          <code>{EXAMPLES[selectedComponent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Example" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelect={
                selectedComponent === CORE_CONCEPTS[0].title.toLowerCase()
              }
              onClick={() => handleOnSelect(CORE_CONCEPTS[0].title)}
            >
              {CORE_CONCEPTS[0].title}
            </TabButton>
            <TabButton
              isSelect={
                selectedComponent === CORE_CONCEPTS[1].title.toLowerCase()
              }
              onClick={() => handleOnSelect(CORE_CONCEPTS[1].title)}
            >
              {CORE_CONCEPTS[1].title}
            </TabButton>
            <TabButton
              isSelect={
                selectedComponent === CORE_CONCEPTS[2].title.toLowerCase()
              }
              onClick={() => handleOnSelect(CORE_CONCEPTS[2].title)}
            >
              {CORE_CONCEPTS[2].title}
            </TabButton>
            <TabButton
              isSelect={
                selectedComponent === CORE_CONCEPTS[3].title.toLowerCase()
              }
              onClick={() => handleOnSelect(CORE_CONCEPTS[3].title)}
            >
              {CORE_CONCEPTS[3].title}
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
