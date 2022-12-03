import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

const CardElements = data.map((el) => {
  return <Card key={el.id} element={el} />;
});

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card--list">{CardElements}</section>
    </div>
  );
}

export default App;
