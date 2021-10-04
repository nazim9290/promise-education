import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';

const Home = () => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch("./Education.json")
        .then(res=>res.json())
        .then(data=>setItems(data)
    )},[])
    return (
        <div className="home">
            {
                items.map(item=><Items key={item.id} item={item}/>)
            }
        </div>
    );
};

export default Home;