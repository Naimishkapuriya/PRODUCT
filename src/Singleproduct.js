import iphone from "./iphone/iphone14.png";
import iphone1 from "./iphone/115.jpeg";
import iphone2 from "./iphone/116.jpeg";
import iphone3 from "./iphone/117.jpeg";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Singleproduct = () => {
  const { id } = useParams();
  console.log(id);
  const [title, setTitle] = useState([]);
  const [brand, setbrand] = useState([]);
  const [price, setprice] = useState([]);
  const [rating, setrating] = useState([]);
  const [category, setcategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [description, setdescription] = useState([]);
  const [discountPercentage, setdiscountPercentage] = useState([]);

  useEffect(() => {
    async function getStoreData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        if (data) {
          console.log(data);
          setIsLoading(false);
          setTitle(data.title);
          setbrand(data.brand);
          setprice(data.price);
          setrating(data.rating);
          setcategory(data.category);
          setdescription(data.description);
          setdiscountPercentage(data.discountPercentage);
        }
      } catch (e) {
        console.log("error", e);
      }
    }
    getStoreData();
  }, [id]);

  if (isLoading) {
    return "Loading...";
  }
  return (
    <div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12">
            <img className="img-fluid border1 p-2 " src={iphone} alt="img" />
            <div className="row mt-2">
              <div className="col-3 ps-2 pe-1">
                <img
                  className="iphone_width border1 p-1"
                  src={iphone}
                  alt="img"
                />
              </div>
              <div className="col-3 px-1">
                <img
                  className="iphone_width  border1 p-1"
                  src={iphone1}
                  alt="img"
                />
              </div>
              <div className="col-3 px-1">
                <img
                  className="iphone_width  border1 p-1"
                  src={iphone2}
                  alt="img"
                />
              </div>
              <div className="col-3 pe-2 ps-1">
                <img
                  className="iphone_width  border1 p-1"
                  src={iphone3}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12">
            <h4 className="color_balck">{brand}</h4>
            <h1 className="title_h1 color_balck d-inline mb-1 text-decoration-underline">
              {title}
            </h1>
            <p className="descriptionp color_balck mb-2">{description}</p>
            <h5 className="price_h5 color_balck mb-1">
              Price: <span>₹{price}</span>
            </h5>
            <h5 className="price_h5 color_balck mb-1">
              discountPercentage : <span>{discountPercentage}%</span>
            </h5>
            <p className="reting_p color_balck fw-bold mb-1">
              Rating: <span className="fw-normal">{rating}</span>
            </p>
            <h5 className="mb-2">{category}</h5>
            <Link to="/" className="text_dnone btn1 me-2">
              {" "}
              Go to home
            </Link>
            <Link to="/Succes" className="text_dnone btn1 btn2">
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
