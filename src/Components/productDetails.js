import React, { useEffect, useState } from 'react'
import '../style.css'
import axios from 'axios';

const ProductDetails = () => {
    const [record, setRecord] = useState([]);

    const getRecord = () => {
        axios.get(`http://localhost:8000/record`)
            .then((res) => {
                setRecord(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
    useEffect(() => {
        getRecord();
    }, [])

    const handleDecrease = (index) => {
        const updatedRecord = [...record];
        // if (updatedRecord[index].quantity > 1) {
            updatedRecord[index].quantity -= 1;
            setRecord(updatedRecord);
        // }
    };

    const handleIncrease = (index) => {
        const updatedRecord = [...record];
        updatedRecord[index].quantity += 1;
        setRecord(updatedRecord);
    };
    return (
        <center>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8">
                        <div className="p-2">
                            <h4>Shopping cart</h4>
                            <div className="d-flex flex-row align-items-center pull-right"><span className="mr-1">Sort by:</span><span className="mr-1 font-weight-bold">Price</span><i className="fa fa-angle-down" /></div>
                        </div>
                        {
                            record.map((v, index) => {
                                return (
                                    <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded" key={v.id}>
                                        <div className="mr-1"><img className="rounded" src={v.image} width={70} /></div>
                                        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{v.name}</span>
                                            <div className="d-flex flex-row product-desc">
                                                <div className="size mr-1"><span className="text-grey">Size:</span><span className="font-weight-bold">&nbsp;M</span></div>
                                                <div className="color"><span className="text-grey">Color:</span><span className="font-weight-bold">&nbsp;Grey</span></div>
                                            </div>
                                        </div>

                                        <div key={index} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                                            <div className="qty">
                                                <span className="minus" onClick={() => handleDecrease(index)}>-</span>

                                                <input type="text" value={v.quantity} readOnly />
                                                <span className="plus" onClick={() => handleIncrease(index)}>+</span>
                                            </div>
                                        </div>


                                        <div>
                                            <h5 className="text-grey">{v.price}</h5>
                                        </div>
                                        <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger" /></div>
                                    </div>
                                )
                            })
                        }

                        <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><input type="text" className="form-control border-0 gift-card" placeholder="discount code/gift card" /><button className="btn btn-outline-warning btn-sm ml-2" type="button">Apply</button></div>
                        <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></div>
                    </div>
                </div>
            </div>
        </center>

    )
}
export default ProductDetails
