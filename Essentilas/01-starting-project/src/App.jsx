const reactDescriptions = ['Core', 'Fundermentals', 'Crucial'];

function getRandomInt() {
  return Math.floor(Math.random() * reactDescriptions.length);
}

function Header() {
  const description = reactDescriptions[getRandomInt()];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  //<Header></Header> or <Header />
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
