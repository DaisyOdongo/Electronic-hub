import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CartContext } from "../../context/CartContext";
import { deleteProduct } from "../../Data/addProduct";
import AdminNavbar from "./Navbar";
import { NumericFormat } from "react-number-format";

const ProductList = () => {
  const navigate = useNavigate();
  const { products } = useContext(CartContext);

  const onDelete = (id) => {
    deleteProduct(id, navigate);
  };
  return (
    <div>
      <AdminNavbar />
      <div className="container-fluid text-center checkout-product p-5">
        <div className="container  ">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {products.map((product) => (
              <tbody key={product.id}>
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>
                    <NumericFormat
                      value={product.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"ksh"}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm m-1"
                      onClick={() => onDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
