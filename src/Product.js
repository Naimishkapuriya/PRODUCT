import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import iphone from "./iphone/iphone14.png";
import { Link } from "react-router-dom";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Product from './Product';
// import { FaStar, FaStarHalfAlt } from "react-icons/ai";
// import { AiOutlineStar } from "@react-icons/all-files/fa/AiOutlineStar";
// import { IconName } from "react-icons/bs";

export function Product() {
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const {id} = useParams();
  // const [title, setTitle] = useState([]);
  // const [price, setprice] = useState([]);
  // const [description, setdescription] = useState([]);
  // const [rating, setrating] = useState([]);
  // const [brand, setbrand] = useState([]);
  useEffect(() => {
    async function getStoreData() {
      try {
        setIsLoading(true);
        const { data: res } = await axios.get("https://dummyjson.com/products");
        if (res) {
          console.log(res);
          setIsLoading(false);
          // setTitle(data.title);
          // setprice(data.price);
          // setdescription(data.description);
          // setrating(data.rating);
          // setbrand(data.brand);
          setproducts(res.products);
        }
      } catch (e) {
        console.log("error", e);
      }
    }
    getStoreData();
  }, []);

  // useEffect(() => {
  //     const loadPost = async () =>{
  //         const response = await axios.get('https://dummyjson.com/products');
  //             setPosts(response.data);
  //     }

  //     // fetch('https://dummyjson.com/products')

  //         // .then(res => res.json())

  //         // .then(console.log);
  //         loadPost();

  // }, [])

  if (isLoading) {
    return <h1> Loading...</h1>;
  }

  return (
    <div className="container-fluid">
      {products.map((name) => {
        return (
          <>
            <div className="row  border my-3 mx-3 p-3 shadow boredr_r">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                <img className="img-fluid boredr_ra" src={iphone} alt="img" />
              </div>
              <div className="col-xl-6 col-lg-5 col-md-6 col-sm-12 col-12 order-md-2 order-sm-3 order-3">
                <h4 className="color_balck">{name.brand}</h4>
                <h1 className="title_h1 color_balck d-inline mb-1 text-decoration-underline">
                  {name.title}
                </h1>
                <p className="descriptionp color_balck mb-2">
                  {name.description}
                </p>
                <p className="reting_p color_balck fw-bold">
                  Rating: <span className="fw-normal">{name.rating}</span>
                </p>
                <Link
                  to={`/Singleproduct/${name.id}`}
                  className="text_dnone btn1"
                >
                  BUY NOW
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 order-md-3 order-sm-2 order-2 ">
                <h5 className="price_h5 color_balck">
                  Price: <span>₹{name.price}</span>
                </h5>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
