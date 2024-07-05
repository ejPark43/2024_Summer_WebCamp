import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <div>
      <HeaderTop>
        <div className="header-top-part">
          <div className="left-btns">
            <button>ㅁ 앱다운로드</button> <button>* 즐겨찾기</button>
          </div>
          <div className="right-btns">
            <button>로그인/회원가입</button> <button>내상점</button>
          </div>
        </div>
      </HeaderTop>
      <HeaderBottom>
        <div className="header-bottom-part">
          <div className="header-bottom-search-area ">
            <button>번개장터</button>
            <input></input>
            <button>판매하기</button>
            <button>내상점</button>
            <button>번개톡</button>
          </div>
          <div className="header-bottom-hamburger-btn">
            <button>=</button> <button>번개장터 판매자센터</button>
          </div>
        </div>
      </HeaderBottom>
    </div>
  );
}

export default Header;

const HeaderTop = styled.div`
  // header 에서 로그인, 회원가입, 내상점있는 맨 위 부분
  display: flex;
  -webkit-box-pack: center;

  width: 100vw;
  height: 40px;
  justify-content: center;
  /* overflow: hidden; */

  border: 2px solid green;
  .header-top-part {
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-items: center;
    border: 2px solid red;
  }
`;
const HeaderBottom = styled.div`
  display: flex;
  border: 2px solid blue;
  height: 145px;
  justify-content: center;
  .header-bottom-part {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 85%;
    align-items: center;
    border: 2px solid red;
  }
  .header-bottom-search-area {
    display: flex;
    width: 100%;
    height: 60%;
    border: 2px solid pink;
    align-items: center;
    justify-content: space-between; // <<<<<<< 나중에 수정 -> margin으로...
  }
  .header-bottom-hamburger-btn {
    display: flex;
    width: 100%;
    height: 40%;
    align-items: center;
    justify-content: start;
    border: 2px solid green;
  }
`;
