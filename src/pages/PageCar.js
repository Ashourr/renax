import React, { useEffect, useState } from "react";
import Navbar from "../components/heder/Navbar";
import CarHeder from "../components/cars/CarHeder";
import Rental from "../components/rental/Rental";
import Footer from "../components/footer/Footer";
import Car from "../components/cars/Car";
import Loading from "../components/loading/Loading";

function PageCar() {
  let [light, setlight] = useState("light");
  let [show, setshow] = useState(true);
  function lihe() {
    if (light === "light") {
      setlight("dark");
      localStorage.setItem("light", "dark");
    } else {
      setlight("light");
      localStorage.setItem("light", "light");
    }
  }
  useEffect(() => {
    setlight(localStorage.getItem("light"));
    window.scroll(0, 0);
    setTimeout(() => {
      setshow(false);
    }, 500);
  }, []);
  return (
    <>
      {show ? (
        <Loading light={light} />
      ) : (
        <>
          <Navbar lihe={lihe} bu={light} light={light} />
          <CarHeder light={light} />
          <Car light={light} />
          <Rental light={light} />
          <Footer light={light} />
        </>
      )}
    </>
  );
}

export default PageCar;
