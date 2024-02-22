import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SearchPage from "../pages/SearchPage";
import LoginPage from "../pages/non-auth/LoginPage";
import SignupPage from "../pages/non-auth/SignupPage";
import NonAuthLayout from "../components/layout/NonAuthLayout";
import AuthLayout from "../components/layout/AuthLayout";
import Layout from "../components/layout/Layout";
export default function RouterPage() {
  return (
    <Router>
      <Routes>
        {/* 로그인 여부 상관없는 라우터 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/testPage" />
        </Route>

        {/* 로그인 상태가 반드시 아니어야 하는 라우터 */}
        <Route element={<NonAuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        {/* 로그인이 필요한 라우터 */}
        <Route element={<AuthLayout />}>
          <Route path="/user/:userId" />
        </Route>

        {/* 404 Not Found */}
        <Route />
      </Routes>
    </Router>
  );
}
