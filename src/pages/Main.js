import resume from "../assets/resume.pdf";
import FadeIn from "react-fade-in";
import React from "react";

export default function Main() {
  return (
    <>
      <div className="main">
        <FadeIn delay="300" transitionDuration="500">
          <div class="name">
            <div class="hello">hi! i'm </div>
            <div class="letter">j</div>
            <div class="letter">o</div>
            <div class="letter">s</div>
            <div class="letter">e</div>
            <div class="letter">p</div>
            <div class="letter">h</div>
            <div class="letter">i</div>
            <div class="letter">n</div>
            <div class="letter">e</div>
            <div class="emoji"><span role="img" aria-label="blushing smiling face">😊</span></div>
          </div>
          <div className="info">
            <p>
              I'm currently a 4th year Computer Science student at the Universiy of Waterloo. I am passionate about 
              data-driven solutions, whether it be engineering ETL pipelines or putting together insightful models!  
            </p>
          </div>
          <div className="socials">
            <ul>
              <li>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-file fa-2x"></i>
              </a>
              </li>
              <li>
                <a
                  href="https://github.com/josephine-w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/josephine-w/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
