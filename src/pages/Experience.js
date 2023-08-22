import kpmg from "../assets/kpmg.png";
import bmo from "../assets/bmo.png";
import assent from "../assets/assent.png";
import tatari from "../assets/tatari.png"
import FadeIn from "react-fade-in";
import useCollapse from "react-collapsed";
import React from "react";

function ExpBox({ pic, role, link, location, dates }) {
  return (
        <div className="exp-box">
          <a href={link} target="_blank" rel="noreferrer">
          <div className="header">
            <h2 className="left">
              <div className="pic">
                <img src={pic} alt="location"></img>
              </div>
              <div className="role">
                {role}
              </div>
              <div className="location">
                {location}
              </div>
            </h2>
            <h2 className="right">{dates}</h2>
          </div>
        </a>
        </div>
  );
}

export default function Experience() {
  return (
    <>
      <div class="experience">
        <h1>experience 💼</h1>
        <FadeIn delay="100">
          <ExpBox
            pic={tatari}
            role="software engineer intern"
            link="https://www.tatari.tv/"
            location="TATARI"
            dates="05/2023-09/2023"
          ></ExpBox>

          <ExpBox
            pic={kpmg}
            role="data science intern"
            link="https://advisory.kpmg.us/services/lighthouse.html"
            location="KPMG"
            dates="09/2022 - 12/2022"
          ></ExpBox>

          <ExpBox
            pic={bmo}
            role="business analyst intern"
            link="https://www.bmo.com/main/personal"
            location="BMO"
            dates="01/2022 - 04/2022"
          ></ExpBox>

          <ExpBox
            pic={assent}
            role="machine learning intern"
            link="https://www.assent.com/"
            location="ASSENT"
            dates="05/2021 - 08/2021"
          ></ExpBox>
        </FadeIn>
      </div>
    </>
  );
}
