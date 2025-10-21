import { Col, Card } from "react-bootstrap";
import { Link } from "react-router";

const CardProducto = ({ itemProducto }) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img
          //usamos la URL de la imagen del producto
            src={itemProducto.imagen}
            alt={itemProducto.nombreProducto}
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          {/* usamos el nombre del producto */}
          <Card.Title> {itemProducto.nombreProducto} </Card.Title>
          <Card.Text>
            {/* usamos la descripcion breve del producto */}
            {itemProducto.descripcion_breve}
            <br className="mb-2" />
            {/* usamos el precio del producto */}
            <span className="fw-bold"> {itemProducto.precio} </span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          {/* enlazamos la ruta "/detalle/" con el "_id" del producto (ver mas) */}
          <Link className="me-2 btn btn-success" to={`/detalle/${itemProducto._id}`}>
            Ver más
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;