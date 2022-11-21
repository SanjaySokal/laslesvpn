import React from 'react'
import Subscribe from '../Components/Subscribe';
import logo from '../Assets/Logo.svg'
import facebook from "../Assets/Facebook.svg"
import twitter from "../Assets/Twitter.svg"
import instagram from "../Assets/Instagram.svg"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Subscribe />
      <div className="footer-links">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} title='logo' alt="logo" />
            <p>
              <b>LaslesVPN</b> is a private virtual network that has unique features and has high security.
            </p>
            <div className="footer-icons">
              <Link to='/' className="icon">
                <img src={facebook} title='icons' alt="icons" />
              </Link>
              <Link to='/' className="icon">
                <img src={twitter} title='icons' alt="icons" />
              </Link>
              <Link to='/' className="icon">
                <img src={instagram} title='icons' alt="icons" />
              </Link>
            </div>
            <p className="copy">
              ©2020LaslesVPN
            </p>
          </div>
          <div className="row">
            <div className="col-md-2">
              <h3>
                Product
              </h3>
              <ul>
                <li>
                  <Link to={"/"}>Download </Link>
                </li>
                <li>
                  <Link to={"/"}>Pricing </Link>
                </li>
                <li>
                  <Link to={"/"}>Locations </Link>
                </li>
                <li>
                  <Link to={"/"}>Server </Link>
                </li>
                <li>
                  <Link to={"/"}>Countries </Link>
                </li>
                <li>
                  <Link to={"/"}>Blog </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h3>
                Engage
              </h3>
              <ul>
                <li>
                  <Link to={"/"}>LaslesVPN ? </Link>
                </li>
                <li>
                  <Link to={"/"}>FAQ </Link>
                </li>
                <li>
                  <Link to={"/"}>Tutorials </Link>
                </li>
                <li>
                  <Link to={"/"}>About Us </Link>
                </li>
                <li>
                  <Link to={"/"}>Privacy Policy </Link>
                </li>
                <li>
                  <Link to={"/"}>Terms of Service </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h3>
                Earn Money
              </h3>
              <ul>
                <li>
                  <Link to={"/"}>Affiliate </Link>
                </li>
                <li>
                  <Link to={"/"}>Become Partner </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;