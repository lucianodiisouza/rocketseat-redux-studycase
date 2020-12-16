import React from "react";
import { useSelector } from "react-redux";

function Catalog() {
  const catalog = useSelector((state) => state);
  return <h1>HelloWorld</h1>;
}

export default Catalog;
