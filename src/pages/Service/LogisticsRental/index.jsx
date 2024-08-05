import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useFetchData } from "../../../common/useFetchData";
import { Routes } from "../../../constants/routes";
import Maintenance from "../../Maintenance";

const LogisticsRental = () => {
  return (
    <div>
      <Navbar />
      <Maintenance />
      <Footer />
    </div>
  )
}

export default LogisticsRental