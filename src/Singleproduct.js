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
  const [title, setTitle] = useState([]);
  const [brand, setbrand] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [description, setdescription] = useState([]);

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
          setdescription(data.description);
        }
      } catch (e) {
        console.log("error", e);
      }
    }
    getStoreData();
  }, []);

  if (isLoading) {
    return "Loading...";
  }
  return (
    <div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-5">
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
          <div className="col-7">
            <h4 className="color_balck">{brand}</h4>
            <h1 className="title_h1 color_balck d-inline mb-1 text-decoration-underline">
              {title}
            </h1>
            <p className="descriptionp color_balck mb-2">{description}</p>
            <Link to="/" className="text_dnone btn1">
              {" "}
              go to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
