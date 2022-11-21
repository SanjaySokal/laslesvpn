import React from 'react'
import logo from '../Assets/Logo.svg';
import { Link } from "react-router-dom"

function Header() {
  function handleNav(){
    var menu = document.querySelector(".menu")
    if(menu.classList.contains("d-block")){
      menu.classList.remove("d-block")
    }else{
      menu.classList.add("d-block")
    }
  }

  var header = <></>;
  if (window.innerWidth >= 991) {
    header =
      <header>
        <nav>
          <div className="logo">
            <Link to="#">
              <img alt='logo' title='logo' src={logo} />
            </Link>
          </div>
          <div className="nav-link">
            <Link to={"#"}>About</Link>
            <Link to={"#"}>Features</Link>
            <Link to={"#"}>Pricing</Link>
            <Link to={"#"}>Testimonials</Link>
            <Link to={"#"}>Help</Link>
          </div>
          <div className="sign-in">
            <Link to={"#"}>Sign In</Link>
            <Link to={"#"}>Sign Up</Link>
          </div>
        </nav>
      </header>;
  } else {
    header = <header>
      <nav>
        <div className="logo">
          <Link to="#">
            <img alt='logo' title='logo' src={logo} />
          </Link>
        </div>
        <button onClick={handleNav} className='toglar'><i className="fa-solid fa-bars-progress"></i></button>
        <div className="menu">
          <div className="nav-link">
            <Link to={"#"}>About</Link>
            <Link to={"#"}>Features</Link>
            <Link to={"#"}>Pricing</Link>
            <Link to={"#"}>Testimonials</Link>
            <Link to={"#"}>Help</Link>
          </div>
          <div className="sign-in">
            <Link to={"#"}>Sign In</Link>
            <Link to={"#"}>Sign Up</Link>
          </div>
        </div>
      </nav>
    </header>
  }
  return (
    <>
      {header}
    </>
  )
}
export default Header;