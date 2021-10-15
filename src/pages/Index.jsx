import Login from "components/Login";

import React, { useState } from "react";

export const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const loginEnter = () => {
    setCurrentPage = currentPage + 1;
  };

  return (
    <div>
      <section>
        <Login />
      </section>
    </div>
  );
};

export default Index;
