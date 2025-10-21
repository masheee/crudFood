import { Container, Card, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { obtenerProducto } from "../../helpers/queries.js";

//el componente maneja su carga de datos
const DetalleProducto = () => {
  const { id } = useParams();

  //se almacenan los datos del producto
  const [producto, setProducto] = useState(null);

  //maneja la carga
  const [cargando, setCargando] = useState(true);

  //logica para buscar el producto al cargar la pagina
  useEffect(() => {
    const fetchProducto = async () => {
      setCargando(true);
      const respuesta = await obtenerProducto(id);

      //verificamos la respuesta
      if (respuesta.status === 200) {
        const productoBuscado = await respuesta.json();
        setProducto(productoBuscado);
      }
      setCargando(false);
    };

    if (id) {
      fetchProducto();
    }

    //se ejecuta cada vez que el 'id' de la URL cambie
  }, [id]);

  //mostrar spinner mientras carga
  if (cargando) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" variant="success" />
        <p>Cargando detalles del producto...</p>
      </Container>
    );
  }

  //mensaje por si no se encuentra el producto despues de la carga
  if (!producto) {
    return (
      <Container className="my-3">
        <h2>Producto no encontrado</h2>
      </Container>
    );
  }

  //renderizar el producto usando el estado local
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
              <Card.Title className="fs-2">
                {producto.nombreProducto}
              </Card.Title>
              <hr />
              <Card.Text className="fs-5">
                {producto.descripcion_amplia}
                <br />
                <br />
                <span className="fw-semibold ">Categoria:</span>{" "}
                {producto.categoria}
                <br className="mb-3" />
                <span className="fw-semibold ">Precio: ${producto.precio}</span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
