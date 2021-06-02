import "./App.css";
import Info from "./sections/Info";
import FullorPart from "./sections/FullorPart";
import Location from "./sections/Location";
import Position from "./sections/Position";
import DesiredPay from "./sections/DesiredPay";
import FoodExperience from "./sections/FoodExperience";
import BakeryExperience from "./sections/BakeryExperience";
import CurrentSituation from "./sections/CurrentSituation";
import AboutYou from "./sections/AboutYou";
import Submit from "./sections/Submit";
import React, { useEffect, useState } from "react";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

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
  
`

Amplify.configure(awsconfig);

function App() {

  const [ firstName, setFirstName ] = useState()
  const [ lastName, setLastName ] = useState()
  const [ phone, setPhone ] = useState()
  const [ email, setEmail ] = useState()
  const [ seeking, setSeeking ] = useState({})
  const [ where, setWhere ] = useState({})
  const [ position, setPosition ] = useState({})
  const [ kitchenExp, setKitchenExp ] = useState()
  const [ bakeryExp, setBakeryExp ] = useState()
  const [ current, setCurrent ] = useState()
  const [ desired, setDesired ] = useState()
  const [ introduction, setIntroduction ] = useState()


  return (
    <WholePage>
      <WholeBox>
      <h1>Back Porch Bakery Application</h1>


      <Info setFirstName={setFirstName} setLastName={setLastName} setPhone={setPhone} setEmail={setEmail}/>
      <FullorPart seeking={seeking} setSeeking={setSeeking}/>
      <Location where={where} setWhere={setWhere}/>
      <Position position={position} setPosition={setPosition}/>
      <FoodExperience kitchenExp={kitchenExp} setKitchenExp={setKitchenExp}/>
      <BakeryExperience bakeryExp={bakeryExp} setBakeryExp={setBakeryExp}/>
      <CurrentSituation current={current} setCurrent={setCurrent}/>
      <DesiredPay desired={desired} setDesired={setDesired}/>
      <AboutYou introduction={introduction} setIntroduction={setIntroduction}/>
      <Submit firstName={firstName} lastName={lastName} phone={phone} email={email}
        seeking={seeking} where={where} position={position} kitchenExp={kitchenExp}
        bakeryExp={bakeryExp} current={current} desired={desired} introduction={introduction}
        />
    </WholeBox>
    </WholePage>
    
  );
}

export default App;
