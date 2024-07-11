import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function CreateBody() {
  const [nameCounter, setNameCounter] = useState(0);
  const writeName = (e) => {
    setNameCounter(e.target.value.length);
  };
  const [describeField, setDescribeField] = useState(0);
  const writeDescription = (e) => {
    setDescribeField(e.target.value.length);
  };

  const submitPost = async (event) => {
    navigate("/");
  };

  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={submitPost}>
        <MainBody>
          <div className="body-center">
            <UploadImgBox className="box">
              <PartTitle>
                상품이미지 <span>(0/12)</span>
              </PartTitle>
              <div className="img-box">
                <div className="img-upload">이미지 등록</div>
                상품 이미지는 pc에서는 1:1, 모바일에서는 1:1.23 비율로 보여져요.
              </div>
            </UploadImgBox>
            <div className="box name-box">
              <PartTitle>상품명</PartTitle>
              <div className="name-box-input">
                <input
                  placeholder="상품명을 입력해주세요."
                  onChange={writeName}
                  maxLength={40} // 상품명 최대 길이 40글자
                ></input>
                <span>{nameCounter}/40</span>
              </div>
            </div>
            <div className="box category-box">
              <PartTitle>카테고리</PartTitle>
              <div className="category">
                <div className="category-select"></div>
                <span>선택한 카테고리: </span>
              </div>
            </div>
            <div className="box status-box">
              <PartTitle>상품상태</PartTitle>
              <RadioGroup>
                <label>
                  <input type="radio" name="status" value="new" />새
                  상품(미사용){" "}
                  <span className="status-detail">사용하지 않은 새 상품</span>
                </label>
                <label>
                  <input type="radio" name="status" value="like-new" />
                  사용감 없음{" "}
                  <span>사용은 했지만 눈에 띄는 흔적이나 얼룩이 없음</span>
                </label>
                <label>
                  <input type="radio" name="status" value="used" />
                  사용감 적음 <span>눈에 띄는 흔적이나 얼룩이 약간 있음</span>
                </label>
                <label>
                  <input type="radio" name="status" value="worn" />
                  사용감 많음 <span>눈에 띄는 흔적이나 얼룩이 많이 있음</span>
                </label>
                <label>
                  <input type="radio" name="status" value="needs-repair" />
                  고장/파손 상품{" "}
                  <span>기능 이상이나 외관 손상 등으로 수리/수선 필요</span>
                </label>
              </RadioGroup>
            </div>
            <div className="box describe-box">
              <PartTitle>설명</PartTitle>
              <div className="describe-box-input">
                <textarea
                  placeholder={`브랜드, 모델명, 구매 시기, 하자 유무 등 상품 설명을 최대한 자세히 적어주세요.
전화번호, sns 계정 등 개인정보 입력은 제한될 수 있어요.
안전하고 건전한 거래 환경을 위해 과학기술정보통신부, 한국인터넷증흥원과 번개장터(주)가 함께합니다.
              `}
                  onChange={writeDescription}
                  maxLength={2000}
                ></textarea>
                <span>{describeField}/2000</span>
              </div>
            </div>
            <br />
            <div className="box price-box">
              <PartTitle>가격</PartTitle>
              <div>
                {/* <input placeholder="가격을 입력해주세요. "> */}
                <input
                  placeholder="가격을 입력해주세요. "
                  type="number"
                  min="10"
                  max="99999999"
                />

                {/* </input> */}
              </div>
            </div>
            <button type="submit" className="submitBtnInModal">
              저장
            </button>
          </div>
        </MainBody>
      </form>
    </div>
  );
}

export default CreateBody;
const MainBody = styled.div`
  display: flex;
  /* border: 2px solid black; */
  align-items: center;
  flex-direction: column;
  /* margin-top: 185px; */
  .body-center {
    display: flex;
    width: 72%;
    height: 100%;
    /* border: 1px solid black; */

    flex-direction: column;
    .box {
      padding-top: 15px;
      padding-bottom: 15px;
      /* margin-top: 15px;
      margin-bottom: 15px; */
      border-bottom: 1px solid #e8e8e8;
    }
    .name-box {
      display: flex;
      flex-direction: row;
      border-radius: 1px;
      justify-content: stretch;
      .name-box-input {
        display: flex;
        justify-content: space-between;
        width: 100%;
        > input {
          display: flex;
          padding: 10px;
          width: 70%;
          outline: none !important;
        }
        > span {
          display: flex;
          /* border: 2px solid red; */
          width: 40px;
          align-items: center;
          padding: 3px;
          margin-left: 20px;
        }
      }
    }
    .category-box {
      display: flex;

      .category {
        display: flex;

        flex-direction: column;
        width: 100%;
        /* border: 2px solid green; */
        .category-select {
          border: 1px solid gray;
          width: 100%;
          height: 210px;
          margin-bottom: 20px;
        }
        > span {
          display: flex;
          align-items: center;
          color: red;
          /* border: 2px solid red; */
        }
      }
    }
    .status-box {
      /* border: 2px solid pink; */
      display: flex;
    }
    .describe-box {
      display: flex;
      /* border: 2px solid red; */

      .describe-box-input {
        display: flex;
        flex-direction: column;
        width: 80%;
        padding-top: 10px;
        > textarea {
          display: flex;
          padding: 10px;
          justify-content: start;
          border: 1px solid gray;
          resize: none; // textarea 크기 줄이는거 방지
          outline: none;
          height: 160px;
          width: 100%;
        }
        > span {
          /* border: 2px solid turquoise; */
          display: flex;
          justify-content: flex-end;
          width: 102%; /// <<<< 나중에 수정
        }
      }
    }

    .price-box {
      display: flex;
      > div {
        > input {
          outline: none;
          border: 1px solid gray;
          /* height: 40px; */
          padding: 10px;
          width: 200px;
        }
      }
    }

    > button {
      align-self: flex-end;
      margin-top: 30px;
      height: 40px;
      outline: none;
      border: none;
      color: white;
      cursor: pointer;
      width: 300px;

      /* border: 2px solid black; */
      background-color: #f5443b;
      &:hover {
        background-color: #c82921;
      }
    }
  }
`;

const UploadImgBox = styled.div`
  display: flex;
  flex-direction: row;

  /* border: 2px solid red; */

  .img-box {
    /* border: 2px solid blue; */
    color: gray;
    font-size: 13px;
    padding-top: 10px;
    .img-upload {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 2px solid black;
      width: 190px;
      height: 190px;
      /* margin-top: 20px; */
      margin-bottom: 20px;
      cursor: pointer;
    }
  }

  /* height: 200px; */
`;
const PartTitle = styled.div`
  display: flex;
  width: 160px;
  height: 40px;
  align-items: center;
  /* border: 2px solid gold; */
  > span {
    display: flex;
    margin: 2px 3px;
    font-size: 13px;
    color: gray;
  }
`;
const RadioGroup = styled.div`
  display: flex;
  padding: 10px;
  padding-left: 0;
  /* border: 2px solid lime; */
  flex-direction: column;
  gap: 15px;

  label {
    display: flex;
    cursor: pointer;
    /* border: 2px solid red; */
    align-items: start; // 라디오 버튼... start로 해야 좀 중앙에 있는 것 같음.
    input {
      display: flex;
      align-items: end;
      /* text-align: end; */

      margin-right: 5px;
    }
    > span {
      display: flex;
      /* margin-top: 4px; */
      padding: 4px;
      color: gray;
      font-size: 12px;
    }
  }
`;
