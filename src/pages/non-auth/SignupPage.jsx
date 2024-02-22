import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";

const SignupPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  return (
    <div>
      <h1>Signup</h1>
      <p>Signup page</p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const { data } = await authApi.post("register", {
              id,
              password,
              nickname,
            });
            if (data.success) {
              alert("회원가입성공 로그인페이지이동");
              navigate(`/login`);
            }
          } catch (error) {
            return alert(error.response.data.message);
          }
        }}
      >
        <div>
          <label htmlFor="id">id</label>
          <input value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="nickname">nickname</label>
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Signup</button>
        <button
          type="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인하러가기
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

export default SignupPage;
