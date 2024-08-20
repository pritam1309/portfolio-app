import React from "react";

export default function Contact() {
  return (
    <div className="footer">
      <h1 className="heading" id="contact">
        Contact Me
      </h1>
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Instagram</h5>
              <p class="card-text">you can contact me on instagram</p>
              <a href="www.instagram.com" class="btn">
                instagram
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Linkedin</h5>
              <p class="card-text">you can contact me on instagram</p>
              <a href="www.linkedin/pritamkumar1313.com" class="btn">
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Mail</h5>
              <p class="card-text">you can contact me on mail</p>
              <a href="pritam1392003@gmail.com" class="btn">
                mail-id
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
