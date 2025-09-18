import { Container, Form, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useState } from "react";

const Inicio = ({ productos }) => {
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productos.filter((prod) =>
    prod.nombreProducto.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section>
      <img
        className="banner shadow-lg rounded-3"
        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5 cabin-sketch-regular">
        <h1 className="display-4 cabin-sketch-bold">Nuestros Productos</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Buscar un producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre del producto"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Row>
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((prod) => (
              <CardProducto key={prod.id} itemProducto={prod} />
            ))
          ) : (
            <p>No hay productos disponibles</p>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;