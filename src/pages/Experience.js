import kpmg from "../assets/kpmg.png";
import bmo from "../assets/bmo.png";
import assent from "../assets/assent.png";
import tatari from "../assets/tatari.png"
import tesla from "../assets/tesla.png"
import meta from "../assets/meta.png"
import FadeIn from "react-fade-in";
import React from "react";

function ExpBox({ pic, title, link, location, dates }) {
  return (
        <div className="exp-box">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="header">
            <h2 className="left">
              <div className="pic">
                <img src={pic} alt="location"></img>
              </div>
              <div className="title">
                {title}
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
        <h1>experience <span role="img" aria-label="briefcase">💼</span></h1>
        <FadeIn delay="100">
          <ExpBox
            pic={meta}
            title="data engineer intern"
            link="https://about.meta.com/"
            location="META"
            dates="05/2024-08/2024"
          ></ExpBox>
          <ExpBox
            pic={tesla}
            title="data engineer intern"
            link="https://www.tesla.com/"
            location="TESLA"
            dates="01/2024-04/2024"
          ></ExpBox>
          <ExpBox
            pic={tatari}
            title="software engineer intern"
            link="https://www.tatari.tv/"
            location="TATARI"
            dates="05/2023-09/2023"
          ></ExpBox>
          <ExpBox
            pic={kpmg}
            title="data science intern"
            link="https://advisory.kpmg.us/services/lighthouse.html"
            location="KPMG"
            dates="09/2022 - 12/2022"
          ></ExpBox>
          <ExpBox
            pic={bmo}
            title="business analyst intern"
            link="https://www.bmo.com/main/personal"
            location="BMO"
            dates="01/2022 - 04/2022"
          ></ExpBox>
          <ExpBox
            pic={assent}
            title="machine learning intern"
            link="https://www.assent.com/"
            location="ASSENT"
            dates="05/2021 - 08/2021"
          ></ExpBox>
        </FadeIn>
      </div>
    </>
  );
}
