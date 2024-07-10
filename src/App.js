import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // 라우터 쓰기 위해서 react-router-dom 설치
import MainPage from "./pages/MainPage";
import CreatePage from "./pages/CreatePage";
function App() {
  // App.js에서 라우트를 세팅해줌.

  /*
  나중에 로그인 하게되면 여기서 관리자, 사용자 권한 확인하고 각각의 사용자 타입에 맞게 다른 곳으로 이동시키기 
  */
  return (
    <div style={{ margin: 0 }}>
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<CreatePage />}></Route>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
