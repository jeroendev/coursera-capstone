import React from "react";
import recipes from "../Recipes";
import Swal from "sweetalert2";

const Menu = () => {
  const handleOrder = (id) => {
    Swal.fire({
      title: "Order now?",
      text: "You won't be able to cancel your order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make order!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Ordered!",
          text: "Your order has been received!",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="container mt-5 mb-5" id="menu">
      <div>
        <h2>This week specials!</h2>
        <button className="btn btn-warning mt-3 mb-3">Order Menu</button>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col">
            <div className="card h-100">
              <img src={recipe.image} alt="recipe" className="card-img-top" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-warning">{recipe.title}</h5>
                <p className=" fw-bold text-white">€ {recipe.price}</p>
                <p className="card-text text-white">{recipe.description}</p>
                <button
                  className="btn btn-warning mt-auto"
                  onClick={() => handleOrder(recipe.id)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
