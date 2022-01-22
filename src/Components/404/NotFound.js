import React from "react";

import "./notfound.scss";
import { notfound } from "../../assets/";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="notfound">
        <img src={notfound} />
      </div>
      <Footer />
    </div>
  );
}
