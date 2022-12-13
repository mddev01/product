import './App.css';
import Home from'../src/components/home/Home'
import Hero from'../src/components/hero/Hero'
import Manegmant from'../src/components/manegment/Manegmant'
import Abonents from'../src/components/abonent/Abonents'


function App() {
  return (
    <div className="App">
    <Home/>
    <Hero/>
    <Manegmant/>
    <Abonents/>
    </div>
  );
}

export default App;
