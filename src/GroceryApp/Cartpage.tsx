import React from "react";

const Cartpage = () => {
  return (
    <div className="container-fluid ">
      <div className="row d-flex justify-content-around">
        <div className="col-8">
          <div className="p-3">
            <h3>YOUR SHOPPING CART</h3>
          </div>
          {/* table */}
          <div className="container-fluid">
            <table className="border">
              <tr>
                <th>Items in your Cart</th>
                <th>SPAR UNIT PRICE</th>
                <th>Quantity</th>
                <th>SUBTOTAL</th>
                <th>Saving</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>Peter</td>
                <td>$132</td>
                <td>
                  <div className="d-flex">
                    <span className="ps-2 pe-2 rounded-circle bg-success text-light me-2">
                      -
                    </span>
                    <span>1</span>
                    <span className="ps-2 pe-2 rounded-circle bg-success text-light ms-2">
                      +
                    </span>
                  </div>
                </td>
                <td>
                  <p>2500rs</p>
                </td>
                <td>
                  <p>350rs</p>
                </td>
                <td>
                  <i className="bi bi-trash3 fs-4 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td>Peter</td>
                <td>$132</td>
                <td>
                  <div className="d-flex">
                    <span className="ps-2 pe-2 rounded-circle bg-success text-light me-2">
                      -
                    </span>
                    <span>1</span>
                    <span className="ps-2 pe-2 rounded-circle bg-success text-light ms-2">
                      +
                    </span>
                  </div>
                </td>
                <td>
                  <p>2500rs</p>
                </td>
                <td>
                  <p>350rs</p>
                </td>
                <td>
                  <i className="bi bi-trash3 fs-4 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td className="text-end" colSpan={5}>
                  $250
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="col-3 mt-4">
          <div className="card" style={{ width: "18rem;" }}>
            <div className="card-body border-bottom">
              <h4>COUPONS</h4>
              <div className="input-group mb-3 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Coupon"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Apply
                </span>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text">PRICE DETAILS</p>
              <div className="d-flex justify-content-between border-bottom pb-3">
                <span>Sub Total</span>
                <span>INR 450.00</span>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between  pb-3">
                <span>Sub Total</span>
                <span>INR 450.00</span>
              </div>
              <div className="d-flex justify-content-center align-items-center bg-success text-center p-2">
                <span className="fs-4 text-light">Sub Total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
