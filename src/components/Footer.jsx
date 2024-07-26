import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      {/* <GlobalStyle /> */}

      <div className="sc-RefOD">
        <div className="sc-eTuwsz">
          <div className="sc-gwVKww">
            <div className="sc-hXRMBi">
              <div className="sc-iQNlJl">
                <div className="sc-bsbRJL">이 웹사이트의 정보</div>
                <div className="sc-hZSUBg">
                  코딩한사람: ejPark43
                  <br />
                  제작한 날짜 2024년 7월 여름방학
                  <br />
                  호스팅서비스 제공자 : 아직 미정
                  <br />
                  EMAIL : pej22200310@handong.ac.kr
                  <br />
                  주소: 한동대학교
                  <br />
                  <a href="/" alt="link1" style={{ color: "GrayText" }}>
                    학생정보 확인
                  </a>
                </div>
              </div>
              <div className="sc-iQNlJl">
                <div className="sc-hZSUBg sc-cMhqgX">
                  <div>
                    <b>번개장터 클론코딩</b>
                    <br />
                    클론코딩한 사이트입니다! 실제가 아닙니다
                  </div>
                  <div>
                    <b>번개장터 코딩했습니다</b>
                    <br />
                    대한민국 포항시
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-epnACN">
              <div className="sc-iQNlJl">
                <div className="sc-bsbRJL">
                  고객센터&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 10 20"
                    role="img"
                  >
                    <path
                      fill="#9b99a9"
                      fillRule="evenodd"
                      d="M1 20a.994.994 0 0 0 .748-.337l8-9a.999.999 0 0 0 0-1.328l-8-9A1 1 0 0 0 .254 1.663L7.664 10l-7.41 8.336A.999.999 0 0 0 1 20"
                    ></path>
                  </svg>
                </div>
                <div className="sc-hZSUBg">
                  <strong>1234-1234</strong>
                  <br />
                  운영시간 9시 - 18시 (주말/공휴일 휴무, 점심시간 12시 - 13시)
                  <br />
                  <div className="sc-hMFtBS">
                    <a href="/" style={{ color: "GrayText" }}>
                      공지사항
                    </a>
                    <a href="/" style={{ color: "GrayText" }}>
                      1:1 문의하기
                    </a>
                    <a href="/" style={{ color: "GrayText" }}>
                      자주 묻는 질문
                    </a>
                  </div>
                </div>
              </div>
              <div className="sc-iQNlJl">
                <div className="sc-hZSUBg">
                  번개장터 클론코딩하면서 AWS가입도 해보고 s3로 이미지 올리는
                  부분을 했는데, 신기했습니다. 이것은 연습용 사이트로 실제
                  운영하는 서비스가 아닙니다
                  <br />
                  <a href="/" style={{ color: "GrayText" }}>
                    서비스 가입사실 확인
                  </a>
                  <div className="rights-copy">번개장터 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;

  .sc-RefOD {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px;
    background-color: #f5f5f5;
  }

  .sc-gwVKww {
    display: flex;
    flex-wrap: wrap;
  }

  .sc-hXRMBi {
    flex: 1;
    padding: 20px;
  }

  .sc-iQNlJl {
    margin-bottom: 20px;
  }

  .sc-bsbRJL {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .sc-hZSUBg {
    color: #555;
    line-height: 1.5;
  }

  .sc-cMhqgX {
    display: flex;
    flex-direction: column;
  }

  .sc-epnACN {
    flex: 1;
    padding: 20px;
  }

  .sc-hMFtBS {
    display: flex;
    gap: 10px;
  }

  .rights-copy {
    margin-top: 20px;
  }
`;
