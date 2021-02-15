import React from 'react';
import profileImg1 from '../images/profile-1.jpg';
import profileImg2 from '../images/profile-2.jpg';
import profileImg3 from '../images/profile-3.jpg';

function ThirdContainer() {
  return (
    <div>
      <div class="container-fluid third-container">
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <div class="card">
              <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
              become a well-oiled collaboration machine.</p>
              <div class="row">
                <div class="col-2">
                  <img src={profileImg1} alt="profile-1" class="profile-img"/>
                </div>
                <div classs="col-3">
                  <p class="name">Satish Patel</p>
                  <p class="job-title">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4  col-sm-12">
            <div class="card">
              <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
              become a well-oiled collaboration machine.</p>
              <div class="row">
                <div class="col-2">
                  <img src={profileImg2} alt="profile-2" class="profile-img"/>
                </div>
                <div classs="col-3">
                  <p class="name">Bruce McKenzie</p>
                  <p class="job-title">Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
          <div class="col-lg-4  col-sm-12">
            <div class="card">
              <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
              become a well-oiled collaboration machine.</p>
              <div class="row">
                <div class="col-2">
                  <img src={profileImg3} alt="profile-3" class="profile-img"/>
                </div>
                <div classs="col-3">
                  <p class="name">Iva Boyd</p>
                  <p class="job-title">Founder & CEO, Huddle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdContainer;
