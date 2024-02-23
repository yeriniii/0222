import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const AuthLayout = () => {
  const [isRender, setIsRender] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    //login안되었으면 로그인페이지(로그인하라고알림)
    const token = localStorage.getItem("access");
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    setIsRender(true);
  }, [navigate]);

  if (!isRender) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h1>Auth Layout</h1>
      <p>반드시 로그인이 되어있어야 하는 페이지입니다.</p>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
