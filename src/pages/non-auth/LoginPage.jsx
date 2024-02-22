import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const login = async (id, password) => {
    try {
      const response = await authApi.post("login", {
        id,
        password,
      });
      return response.data;
    } catch (error) {
      return error.response.data.message;
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const data = await login(id, password);
            if (data && data.success) {
              localStorage.setItem("access", data.accessToken);
              localStorage.setItem("userId", data.userId);
              localStorage.setItem("nickname", data.nickname);
              alert("로그인 성공! 메인페이지 이동");
              navigate(`/`);
            } else {
              return alert(data);
            }
          } catch (error) {
            console.log(error);
          }
        }}
        //input에 연결안하고 label에 연결해서 안됐음..ㅋ
      >
        <div>
          <label htmlFor="id">id</label>
          <input value={id} onChange={(e) => setId(e.target.value)} />
        </div>

        <div>
          <label htmlFor="password">Password</label>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하러가기
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
