import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, fila, setListaProductos }) => {
  const eliminarProducto = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar?",
      text: "No se puede revertir este paso posteriormente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#198754",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Producto eliminado",
          text: `El producto eliminado correctamente`,
          icon: "success",
        });
      }
    });
  };

  return (
    <tr>
      <td className="text-center">1</td>
      <td>Pizza Margarita Clásica</td>
      <td className="text-end">$4500</td>
      <td className="text-center">
        <img
          src='https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg'
          className="img-thumbnail"
          alt='Pizza Margarita Clásica'
        ></img>
      </td>
      <td>comida</td>
      <td className="text-center">
        <Link
          className="me-lg-2 btn btn-warning"
          to={`/administrador/editar`}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" >
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
