import React from 'react';
import LoaderImg from "../../img/Infinity.svg";
import "./Loader.css"
const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default Loader