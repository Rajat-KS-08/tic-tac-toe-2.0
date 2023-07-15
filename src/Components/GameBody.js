import Icons from "./Icons";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const GameBody = (props) => {
  const itemArray = props.items;

  const [isCross, setIsCross] = useState(false);
  const [winMsg, setWinMsg] = useState("");

  //Function to Reload The Game
  const reloadGame = () => {
    setIsCross(false);
    setWinMsg("");
    itemArray.fill("empty", 0, 9);
  };

  //Function to check is any1 win the game or not
  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} wins`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMsg(`${itemArray[3]} wins`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMsg(`${itemArray[3]} wins`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} wins`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMsg(`${itemArray[1]} wins`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMsg(`${itemArray[2]} wins`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMsg(`${itemArray[0]} wins`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMsg(`${itemArray[2]} wins`);
    }
    if (
        itemArray[0] !== "empty" && itemArray[1] !== "empty" && itemArray[2] !== "empty" && itemArray[3] !== "empty" &&
        itemArray[4] !== "empty" && itemArray[5] !== "empty" && itemArray[6] !== "empty" && itemArray[7] !== "empty" &&
        itemArray[8] !== "empty"
    ) {
        setWinMsg("DRAW!!! Reload the game and play again.");
    }
  };

  //Function to change the item on the cards, there'll be an argument "itemNumber of the cards"
  const changeItem = (itemNumber) => {
    if (winMsg) {
      return toast(winMsg, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("This box has been filled already.", { type: "error" });
    }
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMsg ? (
            <div className="mb-2 mt-2">
              <h1 className="text-primary.text-uppercae.text-center">
                {" "}
                {winMsg}{" "}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                {" "}
                Reload the game!{" "}
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-danger">
              {isCross ? "cross" : "circle"}'s turn
            </h1>
          )}

          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color="light" onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icons name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GameBody;
