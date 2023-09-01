import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../redux/reducers/productAPi";
import { addToCart } from "../redux/reducers/cartSlice";
const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const auth = useSelector((state)=> state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlCart = (product) => {
    dispatch(addToCart(product));
    // navigate("/cart")
  };
  console.log(auth)
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured...</p>
      ) : (
        <>
          <h2>New Arrival</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">{product.price}</span>
                </div>
                <button onClick={() => handlCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Home;
