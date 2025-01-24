import componentImage from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';

function App() {
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

  //<Header></Header> or <Header />
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {/* defining props for CoreConcept component*/}
            <CoreConcept
              title="Components"
              description="The Core UI building Block"
              image={componentImage}
            />
            {/* Using spread operator ("...") to map the props atributes */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton onSelect={() => handleOnSelect(CORE_CONCEPTS[0].title)}>
              {CORE_CONCEPTS[0].title}
            </TabButton>
            <TabButton onSelect={() => handleOnSelect(CORE_CONCEPTS[1].title)}>
              {CORE_CONCEPTS[1].title}
            </TabButton>
            <TabButton onSelect={() => handleOnSelect(CORE_CONCEPTS[2].title)}>
              {CORE_CONCEPTS[2].title}
            </TabButton>
            <TabButton onSelect={() => handleOnSelect(CORE_CONCEPTS[3].title)}>
              {CORE_CONCEPTS[3].title}
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
