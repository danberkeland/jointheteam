import "./App.css";
import Info from "./sections/Info";
import FullorPart from "./sections/FullorPart";
import Location from "./sections/Location";
import Position from "./sections/Position";
import FoodExperience from "./sections/FoodExperience";
import BakeryExperience from "./sections/BakeryExperience";
import CurrentSituation from "./sections/CurrentSituation";
import AboutYou from "./sections/AboutYou";
import Submit from "./sections/Submit";
import React from "react";

import styled from "styled-components";

const WholePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: auto;
  
`

const WholeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  
`;

function App() {
  return (
    <WholePage>
      <WholeBox>
      <h1>Back Porch Bakery Application</h1>


      <Info />
      <FullorPart />
      <Location />
      <Position />
      <FoodExperience />
      <BakeryExperience />
      <CurrentSituation />
      <AboutYou />
      <Submit />
    </WholeBox>
    </WholePage>
    
  );
}

export default App;
