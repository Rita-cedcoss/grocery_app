import React from "react";
type catProductProps = {
  categorymage: string[];
};
const CategoryProduct = (props: catProductProps) => {
  return (
    <>
      <div className="container-fluid border-bottom mt-3">
        <h3>Shop By category</h3>
      </div>
      <div className="catOuter">
        {props.categorymage.map((item) => {
          return (
            <div className="item1">
              <img alt="#" src={item} height="100%" width="100%" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CategoryProduct;
