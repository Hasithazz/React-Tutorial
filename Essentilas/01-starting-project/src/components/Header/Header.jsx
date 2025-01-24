import reactImage from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Core', 'Fundermentals', 'Crucial'];

function getRandomInt() {
  return Math.floor(Math.random() * reactDescriptions.length);
}

export default function Header() {
  const description = reactDescriptions[getRandomInt()];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
