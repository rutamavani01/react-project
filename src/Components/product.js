import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

export const Product = () => {
    const navigate = useNavigate();
    const handleAddmore = () => {
        navigate('/productdetails')
    }
    // const [shirt, setShirt] = useState([]);
    const [record, setRecord] = useState([]); //ALL Records
    const [catagory, setCatagory] = useState([]);//Catagory

    const getAllProducts = async () => {
        axios.get(`http://localhost:8000/record`)
            .then((res) => {
                setRecord(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    const allCatagory = () => {
        axios.get(`http://localhost:8000/catagory`)
        .then((res) => {
                setCatagory(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    // const allShirt = () => {
    //     axios.get(`http://localhost:8000/record?category=Shirt`)
    //         .then((res) => {
    //             // let ans = res.data.filter((val)=>{
    //             //     return val.category === "t-shirt"
    //             // })
    //             setShirt(res.data);
    //         }).catch((err) => {
    //             console.log(err);
    //             return false;
    //         })
    // }


    const category_Filter = (catagory) => {
        if (catagory === "all") {
            getAllProducts();
        } else {
            axios.get(`http://localhost:8000/record?catagory=${catagory}`)
            .then((res) => {
                setRecord(res.data);
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
        }
    }

    useEffect(() => {
        getAllProducts();
        allCatagory();
        // allShirt();
    }, [])
    return (

        <div className='container-fluid'>
            <h1>Product page</h1>
            <div className='row'>
                <span className='text-muted'>Home/D2D fashion</span>
                <h4>Refine By</h4>
                <div className='col-md-3'>
                    {/* <ul>
                        <p>- Gender</p>
                        <li>Girl</li>
                        <li>Boy</li>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Infants </li>
                    </ul> */}
                </div>
                <div className="container p-5">
                    <h2 className="pb-5 text-center">All Product</h2>
                    <div className="row">
                        <div className='col-lg-3'>
                            <h5>Category Filter</h5>
                            <ul className="list-group list-group-flush">
                                {
                                    catagory.map((val) => {
                                        return (
                                            <>
                                                <li className="list-group-item">
                                                    <button onClick={() => category_Filter(val.catagory_name)} style={{ width: '100%' }} type="button" class="btn btn-outline-primary">{val.catagory_name}</button>
                                                </li>

                                            </>
                                        )
                                    })
                                }
                                <li className="list-group-item">
                                    <button onClick={() => category_Filter("all")} style={{ width: '100%' }} type="button" class="btn btn-outline-primary">All</button>
                                </li>
                            </ul>
                        </div>

                        <div className='col-md-9 row'>
                            {
                            record.map((val) => {
                                return (
                                    <div className={`col-md-4 pb-4 }`}>
                                        <div className="card border-0" style={{ width: '18rem' }}>
                                            <img style={{ objectFit: 'contain' }} src={val.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-title">{val.name}</p>
                                                <hr />
                                                <p className="card-title">Price: {val.price}</p>
                                                <span className="card-title">{val.title}</span>
                                               <button className="btn btn-primary "onClick={handleAddmore}>Add more</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}