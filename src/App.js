//import Icons from "./Components/Icons";
import Header from "./Components/Header";
import GameBody from "./Components/GameBody";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Button, Col, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty");

const App = () => {

  return (
    <div>
      <Header />
      <GameBody items={itemArray} />
    </div>
    
  );
}

export default App;
