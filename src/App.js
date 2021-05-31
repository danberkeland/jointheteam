
import './App.css';
import Location from './sections/Location'
import Position from './sections/Position'
import FoodExperience from './sections/FoodExperience'
import BakeryExperience from './sections/BakeryExperience'

function App() {
  return (
    <div className="App">
      <h1>Back Porch Bakery Application</h1>
      <Location />
      <Position />
      <FoodExperience/>
      <BakeryExperience/>
      <div>Early Mornings</div>
      <div>Full or Part Time</div>
      <div>Current Work situation</div>
      <div>Attach a resume</div>
    </div>
  );
}

export default App;
