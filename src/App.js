
import './App.css';
import Info from './sections/Info'
import FullorPart from './sections/FullorPart'
import Location from './sections/Location'
import Position from './sections/Position'
import FoodExperience from './sections/FoodExperience'
import BakeryExperience from './sections/BakeryExperience'
import CurrentSituation from './sections/CurrentSituation'

function App() {
  return (
    <div className="App">
      <h1>Back Porch Bakery Application</h1>
      <Info />
      <FullorPart />
      <Location />
      <Position />
      <FoodExperience />
      <BakeryExperience />  
      <CurrentSituation />

      <div>Attach a resume</div>
    </div>
  );
}

export default App;
