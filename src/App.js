import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <Hero heading="Hello React" subHeading="React is cool">
      <button className="btn btn-primary">Learn More</button>
    </Hero>
  );
}

export default App;
