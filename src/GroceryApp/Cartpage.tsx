import React from "react";
type ProdData = {
  _id: string;
  quantity: number;
  calPrice: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  expDate: string;
  mfdDate: string;
  size: string;
  price: number;
  stock: string;
  images: string[];
  suggestion: string[];
  allegations: string[];
};
type cartProps = {
  cartarr: ProdData[];
  setCartarr: React.Dispatch<React.SetStateAction<[] | ProdData[]>>;
};
const Cartpage = (props: cartProps) => {
  // increment quantity
  const increment = (index: number) => {
    console.log(index);
    props.cartarr[index].quantity++;
    props.cartarr[index].calPrice =
      props.cartarr[index].price * props.cartarr[index].quantity;
    props.setCartarr([...props.cartarr]);
  };
  // decrement quntity
  const decrement = (index: number) => {
    console.log(index);
    if (props.cartarr[index].quantity > 1) {
      props.cartarr[index].quantity--;
    }
    props.cartarr[index].calPrice =
      props.cartarr[index].price * props.cartarr[index].quantity;
    props.setCartarr([...props.cartarr]);
  };
  // delete the item from cart
  const deleteItem = (ind: number) => {
    props.cartarr.splice(ind, 1);
    props.setCartarr([...props.cartarr]);
  };
  // delete the all item from cart
  const emptyCart = () => {
    props.setCartarr([]);
  };
  if (props.cartarr.length > 0) {
    return (
      <div className="container-fluid ">
        <div className="row d-flex justify-content-around">
          <div className="col-10">
            <div className="p-3">
              <h3>YOUR SHOPPING CART</h3>
            </div>
            <div className="container-fluid">
              <table className="border">
                <tr>
                  <th>Items in your Cart</th>
                  <th>SPAR UNIT PRICE</th>
                  <th>Quantity</th>
                  <th>SUBTOTAL</th>
                  <th>Action</th>
                </tr>
                {props.cartarr.map((item, i) => {
                  return (
                    <tr>
                      <td>{item.brand}</td>
                      <td>{item.price}</td>
                      <td>
                        <div className="d-flex">
                          <span
                            className="ps-2 pe-2 rounded-circle bg-success text-light me-2"
                            onClick={() => decrement(i)}
                          >
                            -
                          </span>
                          <span>{item.quantity}</span>
                          <span
                            className="ps-2 pe-2 rounded-circle bg-success text-light ms-2"
                            onClick={() => increment(i)}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td>
                        <p>{item.calPrice}</p>
                      </td>
                      <td>
                        <span onClick={() => deleteItem(i)}>
                          <i className="bi bi-trash3 fs-4 text-danger"></i>
                        </span>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td className="text-end" colSpan={6}>
                    <button className="btn btn-success" onClick={emptyCart}>
                      <i className="bi bi-trash3 fs-6 text-light"></i>Empty Cart
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h3 className="text-center pt-4 text-danger">Cart is Empty</h3>;
  }
};

export default Cartpage;
