import axios from "axios";
import React, { useEffect, useState } from "react";

const News = () => {
  const [newData, setNewData] = useState([]);

  const traerNoticias = async () => {
    const response=await axios.get("http://localhost:8000/news")
    setNewData(response.data)
  };
  useEffect(() => {
    traerNoticias()
  }, []);

  return <div>
    {
        newData.map(data=>(
            <div key={data.id}>
                <h1>{data.title}</h1>
                <img src={data.imageUrl}/>
                <span>
                    {data.description}
                </span>
            </div>
        ))
    }
  </div>;
};

export default News;
