import React from "react";

const Home = () => {
  const [isRender, setIsRender] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access");
    setIsRender(true);
  }, [navigate]);

  if (!isRender) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>

      <p>안녕하세요, 홍길동님!</p>
      <p>로그인을 해주세요.</p>
    </div>
  );
};

export default Home;
