import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept";
import componentImage from '../../assets/components.png';

export default function CoreConcepts() {
  return (
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
  );
}
