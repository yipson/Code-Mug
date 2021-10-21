import React from "react";
import Header from "components/Header";
import Paginador from "components/Paginador";

export const Layout = ({ Children }) => {
  return (
    <div className="mainContainer">
      <Header />
      <main> {Children} </main>
      <Paginador />
    </div>
  );
};

export default Layout;
