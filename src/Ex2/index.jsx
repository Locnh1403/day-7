import React, { useEffect, useState } from "react";

const Ex2 = () => {
  const [dataItem, setDataItem] = useState(null);
  
  useEffect(() => {
    fetchDataItem();
  }, []);

  const fetchDataItem = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const dataRes = await data.json();
      setDataItem(dataRes);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {dataItem && dataItem.map((i, index) => <h4 key={index}>{i.title}</h4>)}
    </div>
  );
};

export default Ex2;
