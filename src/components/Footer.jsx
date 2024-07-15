import React from "react";
import styled from "styled-components";

const GlobalStyle = styled.div`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  div {
    display: block;
    unicode-bidi: isolate;
  }

  body,
  input,
  textarea,
  select,
  button {
    font-synthesis: none;
    -webkit-font-smoothing: antialiased;
    direction: ltr;
    text-align: left;
    color: rgb(33, 33, 33);
    letter-spacing: -0.5px;
    outline: 0;
    border: 0;
  }

  body {
    background-color: rgb(249, 249, 249);
    font-size: 14px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
    color: rgb(33, 33, 33);
    line-height: 1;
  }

  html {
    line-height: 1.15;
    text-size-adjust: 100%;
  }
  a {
    color: gray;
  }
`;

const FooterWrapper = styled.div`
  margin-top: 200px;

  .sc-RefOD {
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f5f5f5;
  }

  .sc-eTuwsz {
    width: 80%;
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

  .sc-iuJeZd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  .sc-cmthru {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .sc-esOvli {
    color: #777;
    line-height: 1.5;
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <GlobalStyle />
      <div className="sc-RefOD">
        <div className="sc-eTuwsz">
          <div className="sc-gwVKww">
            <div className="sc-hXRMBi">
              <div className="sc-iQNlJl">
                <div className="sc-bsbRJL">번개장터(주) 사업자정보</div>
                <div className="sc-hZSUBg">
                  대표이사 : 최재화,
                  강승현&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;개인정보보호책임자
                  : 박병성
                  <br />
                  사업자등록번호 :
                  113-86-45836&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;통신판매업신고
                  : 2019-서울서초-1126
                  <br />
                  호스팅서비스 제공자 : Amazon Web Services (AWS)
                  <br />
                  EMAIL :
                  help@bunjang.co.kr&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;FAX :
                  02-598-8241
                  <br />
                  주소 : 서울특별시 서초구 서초대로 38길 12, 7, 10층(서초동,
                  마제스타시티, 힐스테이트 서리풀)
                  <br />
                  <a href="/" alt="link1" style={{ color: "GrayText" }}>
                    사업자정보 확인
                  </a>
                </div>
              </div>
              <div className="sc-iQNlJl">
                <div className="sc-hZSUBg sc-cMhqgX">
                  <div>
                    <b>번개장터(주)코엑스점</b>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;최재화,
                    강승현&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;142-85-27412
                    <br />
                    서울특별시 강남구 영동대로 513, 쇼핑몰동 B1층 C102호(삼성동,
                    코엑스)
                  </div>
                  <div>
                    <b>번개장터(주)센터필드점</b>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;최재화,
                    강승현&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;808-85-01905
                    <br />
                    서울특별시 강남구 테헤란로 231, 쇼핑몰동 1층
                    W124호(역삼동)(역삼동, 센터필드)
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
                  <strong>1670-2910</strong>
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
                <div className="sc-bsbRJL">우리은행 채무지급보증 안내</div>
                <div className="sc-hZSUBg">
                  번개장터㈜는 회사가 직접 판매하는 상품에 한하여, 고객님의 현금
                  결제 금액에 대해 우리은행과 채무지급보증 계약을 체결하여
                  안전거래를 보장하고 있습니다.
                  <br />
                  <a href="/" style={{ color: "GrayText" }}>
                    서비스 가입사실 확인
                  </a>
                  <div className="rights-copy">
                    Ⓒ Bungaejangter. Inc All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-iuJeZd">
            <div className="sc-hXRMBi">
              <a href="/" className="sc-cmthru" style={{ color: "GrayText" }}>
                <div>
                  <p>
                    [인증범위] 번개장터 중고거래 플랫폼 서비스 운영(심사받지
                    않은 물리적 인프라 제외)
                  </p>
                  <p>[유효기간] 2024.05.18 ~ 2027.05.17</p>
                </div>
              </a>
            </div>
            <div className="sc-epnACN">
              <div className="sc-esOvli">
                번개장터㈜는 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
                전자상거래 등에서의 소비자보호에 관한 법률 등 관련 법령 및
                번개장터㈜의 약관에 따라 상품, 상품정보, 거래에 관한 책임은 개별
                판매자에게 귀속하고, 번개장터㈜는 원칙적으로 회원간 거래에
                대하여 책임을 지지 않습니다. 다만, 번개장터㈜가 직접 판매하는
                상품에 대한 책임은 번개장터㈜에게 귀속합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
