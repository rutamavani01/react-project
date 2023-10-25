import { useEffect, useState } from "react"
import Slider from "../Components/slider"
import axios from "axios";
export const Home = () =>{
    const [product,setProduct] = useState([]);
    const [catagory,setCategory] = useState([]);
    const getAllProducts = async() => {
        axios.get(`  http://localhost:8000/products`)
        .then((res) => {
            setProduct(res.data);
        }).catch((err)=> {
            console.log(err);
            return false;
        })
    }
    const getAllCatagory = () => {
        axios.get(`http://localhost:8000/catagory`)
        .then((res) => {
          setCategory(res.data)
        }).catch((err) => {
          console.log(err);
          return false;
        })
    }
    useEffect(()=>{
        getAllProducts();
        getAllCatagory();
    },[])
    return (
       <>
            <Slider/>
            <div className="container-fluid">
            <div className="row justify-content-around">
            {
                product.map((v, index)=> {
                    return(
                        <div className="col-3 m-0 p-0"  key={index}>
                            <img src={v.image} className="w-100"/>
                        </div>
                    )
                })
            }
            </div>
            </div>
       </>
    )
}