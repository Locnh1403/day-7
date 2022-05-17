import React, { useEffect, useState } from "react";

const Ex3 = () => {
  const [exData, setExData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const resData = await data.json();
      setExData(resData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {exData && exData.map((x, index) => <h4 key={index}>{x.username}</h4>)}
    </div>
  );
};

export default Ex3;
