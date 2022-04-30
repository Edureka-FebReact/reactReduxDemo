import React from "react";

const DisplayItems = (props) => {
  const List = ({ datalist }) => {
    if (datalist) {
      return datalist.map((data) => {
        return (
          // binding the data using the javascript map operator
          <div key={data.id}>{data.name}</div>
        );
      });
    }
  };
  return (
    // this is going to return the props holding the data
    <div>{List(props)}</div>
  );
};

export default DisplayItems;
