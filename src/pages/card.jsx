

import DataBase from "../db.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Card1() {
  return (
    <div className="d-flex p-2 justify-content-around">
      {DataBase.map((DataBase) => {
        return (
          <>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={DataBase.img} />
              <Card.Body>
                <Card.Title>{DataBase.nome}</Card.Title>
                <Card.Text>{DataBase.descrição}</Card.Text>
                <Card.Text>
                  <h6>R$ {DataBase.preço}</h6>
                </Card.Text>
                <Button variant="success" href={DataBase.href}>
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
}

export default Card1;
