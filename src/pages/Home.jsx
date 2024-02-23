import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      {localStorage.getItem("access") ? (
        <p>안녕하세요, {localStorage.getItem("nickname")}!</p>
      ) : (
        <p>로그인을 해주세요.</p>
      )}
    </div>
  );
};

export default Home;
