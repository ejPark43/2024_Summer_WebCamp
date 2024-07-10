import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../asset/bungae.svg";
import appLogo from "../asset/applogo.svg";
import favorite from "../asset/favorite.svg";
import searchbar from "../asset/searchbar.png";
import bungaetalk from "../asset/bungaetalk.png";
import sellImg from "../asset/sellImg.png";
import mystore from "../asset/mystoreimg.png";
import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  const navigate = useNavigate();
  return (
    <div>
      <HeaderTop>
        <div className="header-top-part">
          <div className="left-btns">
            <div>
              <img src={appLogo} width="17" height="17" alt="applogo"></img>
              <span>앱다운로드</span>
            </div>
            <div>
              <img src={favorite} width="17" height="17" alt="favorite"></img>
              <span>즐겨찾기</span>
            </div>
          </div>
          <div className="right-btns">
            <div>로그인/회원가입</div> <div>내상점</div>
          </div>
        </div>
      </HeaderTop>
      <HeaderBottom>
        <div className="header-bottom-part">
          <div className="header-bottom-search-area ">
            <img
              src={logo}
              alt="Logo"
              width="130"
              height="45"
              onClick={() => {
                navigate("/");
              }}
            />
            {/* <SearchField placeholder="상품명, 지역명, @상점명 입력"></SearchField> */}
            <SearchContainer>
              <SearchField placeholder="상품명, 지역명, @상점명 입력" />
              <img src={searchbar} alt="search icon" />
            </SearchContainer>
            <SideButtons>
              <div className="img-buttons">
                {" "}
                <img src={sellImg} alt="sell" width="23" />
                <span>판매하기</span>
              </div>
              <div className="img-buttons">
                <img src={bungaetalk} alt="sell" width="23" />
                <span>번개톡</span>
              </div>
              <div className="img-buttons">
                {" "}
                <img src={mystore} alt="sell" width="23" />
                <span>내상점</span>
              </div>
            </SideButtons>
          </div>
          <div
            className="header-bottom-hamburger-btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <MenuBtn>
              <MenuIcon />
            </MenuBtn>
            <div className="seller-center">번개장터 판매자센터</div>
            {showMenu && (
              <DropdownMenu
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <MenuTitle>전체 카테고리</MenuTitle>
                <MenuItemContainer>
                  <MenuItem>여성의류</MenuItem>
                  <MenuItem>남성의류</MenuItem>
                  <MenuItem>신발 </MenuItem>
                  <MenuItem>가방/지갑 </MenuItem>
                  <MenuItem>시계 </MenuItem>
                  <MenuItem>쥬얼리 </MenuItem>
                  <MenuItem>패션 액세서리 </MenuItem>
                  <MenuItem>디지털 </MenuItem>
                  <MenuItem>가전제품 </MenuItem>
                </MenuItemContainer>
              </DropdownMenu>
            )}
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
  justify-content: center;
  width: 100vw;
  height: 40px;
  justify-content: center;
  /* overflow: hidden; */
  border-bottom: 1px solid #e8e8e8;
  /* border: 2px solid green; */
  .header-top-part {
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: center;
    /* border: 2px solid red; */

    .left-btns {
      display: flex;
      flex-direction: row;
      align-items: center;

      > div {
        cursor: pointer;
        display: flex;
        align-items: center;
        width: 80px;
        /* border: 3px solid red; */

        font-size: 13px;
        color: gray;
        margin-right: 30px;
        > span {
          margin-left: 5px;
        }
      }
    }
    .right-btns {
      display: flex;
      flex-direction: row;
      align-items: center;

      > div {
        cursor: pointer;
        display: flex;
        align-items: center;
        /* border: 3px solid red; */
        font-size: 14px;
        color: gray;
        margin-left: 30px;
        > span {
          margin-left: 5px;
        }
      }
    }
  }
`;
const HeaderBottom = styled.div`
  display: flex;
  /* border: 2px solid blue; */
  border-bottom: 1px solid #e8e8e8;
  height: 130px;
  justify-content: center;
  .header-bottom-part {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 72%;
    align-items: center;
    /* border: 2px solid red; */
  }
  .header-bottom-search-area {
    display: flex;
    width: 100%;
    height: 60%;
    /* border: 2px solid pink; */
    align-items: center;
    padding: 10px 20px;
    justify-content: space-between; // <<<<<<< 나중에 수정 -> margin으로...
    > img {
      // 번개장터 로고
      cursor: pointer;
    }
    .img-buttons {
      display: flex;
      align-items: center;
      /* border: 2px solid red; */
      cursor: pointer;
      > span {
        display: flex;
        /* align-self: flex-end; */
        padding-top: 2px;
        font-size: 14px;
        margin-left: 8px;
      }
    }
  }
  .header-bottom-hamburger-btn {
    display: flex;

    width: 100%;
    height: 35%;
    align-items: center;
    justify-content: start;
    position: relative; // <<<<<< 여기다가 relative 추가해줘야 메뉴바 버튼 잘 나온다.
    /* border: 2px solid green; */
    padding-bottom: 18px;
  }
  .seller-center {
    display: flex;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 470px;

  img {
    position: absolute;
    right: 10px;
    width: 20px;
    height: 20px;
  }
`;

const SearchField = styled.input`
  width: 100%;
  padding-right: 30px; /* 여유 공간 확보 */
  padding-left: 15px;
  height: 35px;
  border: 2px solid red;
  /* color: red; */
`;

const SideButtons = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
`;

const MenuBtn = styled.div`
  display: flex;
  transform: scale(1.2);
  width: 40px;
  /* border: 2px solid blue; */
  /* cursor: pointer; */
  &:hover {
    color: red;
  }
`;
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #e8e8e8;

  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 200px;
`;
const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 1px solid #e8e8e8;
`;

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding-top: 10px;
  /* padding-bottom: 10px; */
  overflow: scroll;
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 40px;
  font-size: 13px;
  color: #303030;
  /* border: 2px solid green; */
  /* padding: 4px 8px; */

  height: 30px;
  cursor: pointer;
  &:hover {
    background-color: #f5443b;
    color: white;
  }
`;
