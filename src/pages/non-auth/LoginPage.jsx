import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            //로그인 시도후 성공했을때로직
            const response = await authApi.post("login", {
              id,
              password,
            });
            if (!response.data.accessToken) {
              alert("토큰없음");
              return;
            }
            alert("로그인성공 메인페이지 이동");
            localStorage.setItem("access", response.data.accessToken);
            localStorage.setItem("userId", response.data.userId);
            localStorage.setItem("nickname", response.data.nickname);
            navigate(`/`);
          } catch (error) {
            alert(error.response.data.message);
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
