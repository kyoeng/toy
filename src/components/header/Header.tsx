import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";



export default function Header() {
  const navigate = useNavigate();     // 페이지 이동을 위한 이동 함수
  const logo = useRef<HTMLHeadingElement>(null);                  // logo에 대한 참조





  return (
    <header id="headerContainer">
      <h1 id="logo" onClick={(() => navigate('/'))} ref={logo}>
        JWº
      </h1>

      <div id="menu"></div>
      <a href="/" id="toGitHub"></a>
    </header>
  )
}