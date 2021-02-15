import React from 'react';
import illustrationIntro from '../images/illustration-intro.png';

function FirstContainer() {
  return (
    <div>
      <div class="container-fluid first-container">
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <img src={illustrationIntro} alt="intro" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>Fylo stores all your most important files in one secure location. Access them wherever
            you need, share and collaborate with friends family, and co-workers.</p>
            <button type="button" name="button" class="get-started-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstContainer;
