import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";

const DetalleProducto = ({ buscarProducto }) => {
  const { id } = useParams();
  const producto = buscarProducto(id);

  if (!producto) {
    return (
      <Container className="my-3">
        <h2>Producto no encontrado</h2>
      </Container>
    );
  }

  return (
    <Container className="my-3 mainSection cabin-sketch-regular">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto.imagen}
              alt={producto.nombreProducto}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="fs-2">{producto.nombreProducto}</Card.Title>
              <hr />
              <Card.Text className="fs-5">
                {producto.descripcion_amplia}
                <br />
                <br />
                <span className="fw-semibold ">Categoria:</span>{" "}
                {producto.categoria}
                <br className="mb-3" />
                <span className="fw-semibold ">
                  Precio: ${producto.precio}
                </span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;