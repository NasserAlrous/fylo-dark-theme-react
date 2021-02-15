import React from 'react';
import logo from '../images/logo.svg';
import locationIcon from "../images/icon-location.svg";
import phoneIcon from "../images/icon-phone.svg";
import emailIcon from "../images/icon-email.svg";

function FourthContainer() {
  return (
    <div>
      <div class="contianer-fluid fourth-contianer">
        <div class="row">
          <div class="col-lg-3 col-sm-12">
            <img src={logo} alt="logo" class="footer-logo"/>
            <span><img src={locationIcon} alt="locaton" class="location"/></span>
            <p class="location-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua</p>
          </div>
          <div class="col-lg-2 col-sm-12 contact-col">
            <p><span><img src={phoneIcon} alt="phone"/></span> +1-543-123-4567</p>
            <p><span><img src={emailIcon} alt="email"/></span> example@fylo.com</p>
          </div>
          <div class="col-lg-3 col-sm-12">
            <ul>
              <li><a href="" class="links-1">About Us</a></li>
              <li><a href="" class="links-1">Jobs</a></li>
              <li><a href="" class="links-1">Press</a></li>
              <li><a href="" class="links-1">Blog</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-sm-12">
            <ul>
              <li><a href="" class="links-2">Contact Us</a></li>
              <li><a href="" class="links-2">Terms</a></li>
              <li><a href="" class="links-2">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthContainer;
