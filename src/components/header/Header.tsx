import { useNavigate } from "react-router-dom";
import { data } from "../../data/data";
import "./Header.scss";



export default function Header() {
  const navigate = useNavigate();


  return (
    <header id="headerContainer">
        <h1 id="logo">
          <img src="" alt="" />
          Toy Project by jw
        </h1>

        <div id="menuBox">
            {data.map((data, i) => {
              return (
                <div key={`menu_${i}`} onClick={() => navigate(data.path)} className="menu">
                  {data.name}
                </div>
              )
            })}
        </div>
    </header>
  )
}