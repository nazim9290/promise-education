import React, { useEffect, useState } from 'react';
import "./Service.css";
import ServiceCard from './ServiceCard';

const Service = () => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch("./Education.json")
        .then(res=>res.json())
        .then(data=>setItems(data)
    )},[])
    return (
        <div className="service">
            {
                items.map(item=><ServiceCard key={item.id} item={item}/>)
            }
        </div>
    );
};

export default Service;