import React from 'react';
import accessIcon from '../images/icon-access-anywhere.svg';
import securityIcon from '../images/icon-security.svg';
import collaborationIcon from '../images/icon-collaboration.svg';
import anyFileIcon from '../images/icon-any-file.svg';
import productiveImg from '../images/illustration-stay-productive.png';

function SecondContainer() {
  return (
    <div>
      <div class="container-fluid second-container">
        <div class="row">
          <div class="col-lg-4 col-sm-12 left-side">
            <img src={accessIcon} alt="access-anywhere" />
            <h3>Access your files, anywhere</h3>
            <p>The ability to use a smartphone, tablet, or computer to access your account means your
            files follow you everywhere.</p>
          </div>
          <div class="col-lg-4 col-sm-12 right-side">
            <img src={securityIcon} alt="security" />
            <h3>Security you can trust</h3>
            <p>2-factor authentication and user-controlled encryption are just a couple of the security
            features we allow to help secure your files.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-12 left-side">
            <img src={collaborationIcon} alt="collaboration" />
            <h3>Real-time collaboration</h3>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration.
            No email attachments required.</p>
          </div>
          <div class="col-lg-4 col-sm-12 right-side">
            <img src={anyFileIcon} alt="any-file" />
            <h3>Store any type of file</h3>
            <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
            file types to be securely stored and shared.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <img src={productiveImg} alt="productive" id="productive" />
          </div>
          <div class="col-lg-5 col-sm-12 productive-text">
            <h1>Stay productive, wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file
            storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email
            attachments required.</p>
            <a href="">See how Fylo works</a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SecondContainer;
