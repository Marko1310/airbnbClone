import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lesson with Katie Zafares"
        price={136}
      />
    </div>
  );
}

export default App;
