import React from "react";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { FaSearchengin } from "react-icons/fa6";
import { MdOutlineStarRate } from "react-icons/md";
import { SiDarkreader } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Header(props) {
  const [searchBox, setSearchBox] = React.useState(false);
  const [box,setBox]=React.useState(false);

  function openSearch() {

    if (searchBox === false) {
      setSearchBox(true);
    }else{
      setSearchBox(false);
    }
  }
  function closeBox() {
    if (searchBox === true) {
      setSearchBox(false);
    }
  }

  function openbox(){
    if(box===false){
      setBox(true);
    }
  }
  function closeBox(){
    if(box===true){
      setBox(false);
    }
  }

  return (
    <React.Fragment>
      <header className={props.dark && "header dark"}>
        <nav className="menu-navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/'>
              صفحه اصلی
              </Link>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                عضویت
              </a>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                ورود
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-search">
          <input
            type="text"
            placeholder="جستجو ..."
            onChange={() => openSearch()}
            onBlur={() => openSearch()}
          />
          <FaSearchengin />

          <div
            className={
              searchBox === true
                ? `header-search-box active`
                : "header-search-box"
            }
          >
            <div className="header-search-box-content">
              <div className="header-search-box-content-item">
                <img src="/imgs/1.jpg" alt="" />
                <div className="search-content-item-text">
                  <span>کتاب هوش مصنوعی</span>
                  <span>نوینده آلن تورینگ</span>
                </div>
                <div className="search-content-item-rate">
                  <MdOutlineStarRate />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-setting">
          <div className="header-setting-icon">
            <div onClick={() => openbox()}>
              <LiaUserGraduateSolid />
            </div>
          </div>
        </div>

        <div className={`header-setting-box ${box===true?'active':''}`}>
          <div className="kj" onClick={() => closeBox()}>
            x 
          </div>
          <div className="header-setting-box-content">
            hello welcome
            </div>
        </div>
      </header>

      <div className="dark-light">
        <div
          className={"dark-icon" + (props.dark === false ? " active" : "")}
          onClick={() => props.darkMode()}
        >
          <SiDarkreader />
        </div>
        <div
          className={"light-icon" + (props.dark === true ? " active" : "")}
          onClick={() => props.darkMode()}
        >
          <FaRegLightbulb />
        </div>
      </div>
    </React.Fragment>
  );
}
