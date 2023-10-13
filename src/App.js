import { Product } from "./Product";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Singleproduct from "./Singleproduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Succes from "./Succes";

// // import { FaStar, FaStarHalfAlt } from "react-icons/ai";
// // import
// // import { AiOutlineStar } from "@react-icons/all-files/fa/AiOutlineStar";
// // import { IconName } from "react-icons/bs";
// import axios from 'axios';
// import iphone from './iphone/iphone14.png'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Singleproduct/:id" element={<Singleproduct />} />
        <Route path="/Succes" element={<Succes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// const apiUrl = 'https://dummyjson.com/products';

// export function App() {

// //     <BrowserRouter>
// //     <Routes>
// //        <Route path='/Product' element={<Product/>}/>
// //     </Routes>
// //   </BrowserRouter>

//     const [title, setTitle] = useState([]);
//     const [price, setprice] = useState([]);
//     const [description, setdescription] = useState([]);
//     const [rating, setrating] = useState([]);
//     const [brand, setbrand] = useState([]);
//     useEffect(() => {
//         async function getStoreData() {
//             try {
//                 const { data } = await axios.get(`${apiUrl}/6`);
//                 if (data) {
//                     console.log(data);
//                     setTitle(data.title);
//                     setprice(data.price);
//                     setdescription(data.description);
//                     setrating(data.rating);
//                     setbrand(data.brand);
//                 }
//             } catch (e) {
//                 console.log('error', e)
//             }
//         }
//         getStoreData();
//     });

//     // useEffect(() => {
//     //     const loadPost = async () =>{
//     //         const response = await axios.get('https://dummyjson.com/products');
//     //             setPosts(response.data);
//     //     }

//     //     // fetch('https://dummyjson.com/products')

//     //         // .then(res => res.json())

//     //         // .then(console.log);
//     //         loadPost();

//     // }, [])

//     return (

//         <div className="container-fluid">
//             {/* <link to="product" relative="path"> */}
//                 <div className='row border mt-3 mx-3 p-3 shadow boredr_r'>
//                     <div className="col-3">
//                         <img className='img-fluid boredr_ra' src={iphone} alt="img" />
//                     </div>
//                     <div className="col-6">
//                         <h4 className=''>{brand}</h4>
//                         <h1 className='title_h1 d-inline mb-1 text-decoration-underline'>{title}</h1>
//                         <p className='descriptionp mb-2'>{description}</p>
//                         <p className='reting_p fw-bold'>Rating:  <span className='fw-normal'>{rating}</span></p>
//                     </div>
//                     <div className="col-3">
//                         <h5 className='price_h5'>Price: <span>₹{price}</span></h5>
//                     </div>
//                 </div>
//                 {/* </link> */}
//             <div className='row border mt-3 mx-3 p-3 shadow'>
//                 <div className="col-3">
//                     <img className='img-fluid boredr_ra' src={iphone} alt="img" />
//                 </div>
//                 <div className="col-6">
//                     <h4>{brand}</h4>
//                     <h1 className='title_h1 d-inline'>{title}</h1>
//                     <p className='descriptionp'>{description}</p>
//                     {/* <p>{rating}</p> */}
//                     {/* {Array(5).fill().map((_, index) => {  */}
//                         {/* <AiOutlineStar style={{color:"red"}} />  */}
//                          {/* } */}
//                     {/* )} */}
//                     <p className='reting_p fw-bold'>Rating:  <span className='fw-normal'>{rating}</span></p>

//                 </div>
//                 <div className="col-3">
//                     <h5 className='price_h5'>Price: <span>₹{price}</span></h5>

//                 </div>
//             </div>
//             <div className='row border mt-3 mx-3 p-3 shadow'>
//                 <div className="col-3">
//                     <img className='img-fluid boredr_ra' src={iphone} alt="img" />
//                 </div>
//                 <div className="col-6">
//                     <h4>{brand}</h4>
//                     <h1 className='title_h1 d-inline'>{title}</h1>
//                     <p className='descriptionp'>{description}</p>
//                     {/* <p>{rating}</p> */}
//                     <p className='reting_p fw-bold'>Rating:  <span className='fw-normal'>{rating}</span></p>

//                 </div>
//                 <div className="col-3">
//                     <h5 className='price_h5'>Price: <span>₹{price}</span></h5>

//                 </div>
//             </div>
//         </div>
//     )
// }
