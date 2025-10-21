import { Container, Form, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useState, useEffect } from "react";
import { listarProductos } from "../../helpers/queries.js"

const Inicio = () => {
  //se utiliza
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  //logica para la carga de productos desde el backend
  useEffect(() => {
    obtenerProductos()
  }, []);

  //GET de la lista
  const obtenerProductos = async() => {
    const respuesta = await listarProductos()

    //verificar la respuesta (200)
    if(respuesta.status === 200){
      const datos = await respuesta.json()
      //se cargan los datos en el estado
      setProductos(datos)
    }
  }

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
            //key: id --> _id
            productosFiltrados.map((prod) => (
              <CardProducto key={prod._id} itemProducto={prod} />
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