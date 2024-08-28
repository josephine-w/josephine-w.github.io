import kpmg from "../assets/kpmg.png";
import bmo from "../assets/bmo.png";
import assent from "../assets/assent.png";
import tatari from "../assets/tatari.png"
import tesla from "../assets/tesla.png"
import meta from "../assets/meta.png"
import FadeIn from "react-fade-in";
import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const handleClick = (url) => {
  window.open(url, '_blank');
};

export default function Experience() {
  return (
    <>
      <div class="experience">
        <h1>experience</h1>
        <FadeIn delay="100">
          <VerticalTimeline
            layout={'1-column-left'}
            lineColor={'#fff'}
          >
          <VerticalTimelineElement
            contentStyle={{ background: '#fff', color: '#f0c0ce' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            className="vertical-timeline-element--work"
            date="may 2024 - aug 2024"
            iconStyle={{ color: '#fff' }}
            icon={<img src={meta} alt="Meta"/>}
            onTimelineElementClick={() => handleClick('https://www.meta.com')}
          >
            <h2 className="vertical-timeline-element-title">Data Engineer Intern</h2>
            <h3 className="vertical-timeline-element-subtitle">Meta</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              contentStyle={{ background: '#fff', color: '#f0c0ce' }}
              contentArrowStyle={{ borderRight: '7px solid #fff' }}
              className="vertical-timeline-element--work"
              date="jan 2024 - apr 2024"
              icon={<img src={tesla} alt="Tesla" />}
              onTimelineElementClick={() => handleClick('https://www.tesla.com/')}
          >
              <h2 className="vertical-timeline-element-title">Data Engineer Intern</h2>
              <h3 className="vertical-timeline-element-subtitle">Tesla</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#fff', color: '#f0c0ce' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            className="vertical-timeline-element--work"
            date="may 2023 - sep 2023"
            icon={<img src={tatari} alt="Tatari" />}
            onTimelineElementClick={() => handleClick('https://www.tatari.tv/')}
          >
            <h2 className="vertical-timeline-element-title">Software Engineer Intern</h2>
            <h3 className="vertical-timeline-element-subtitle">Tatari</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#fff', color: '#f0c0ce' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            className="vertical-timeline-element--work"
            date="sep 2022 - dec 2022"
            icon={<img src={kpmg} alt="KPMG" />}
            onTimelineElementClick={() => handleClick('https://kpmg.com/ae/en/home/services/advisory/digital-and-innovation/kpmg-lighthouse.html')}
          >
            <h2 className="vertical-timeline-element-title">Data Science Intern</h2>
            <h3 className="vertical-timeline-element-subtitle">KPMG</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#fff', color: '#f0c0ce' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            className="vertical-timeline-element--work"
            date="jan 2022 - apr 2022"
            icon={<img src={bmo} alt="bmo" />}
            onTimelineElementClick={() => handleClick('https://www.bmo.com')}
          >
            <h2 className="vertical-timeline-element-title">Business Technology Analyst Intern</h2>
            <h3 className="vertical-timeline-element-subtitle">BMO</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#fff', color: '#f0c0ce' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
            className="vertical-timeline-element--work"
            date="may 2021 - aug 2021"
            icon={<img src={assent} alt="Assent" />}
            onTimelineElementClick={() => handleClick('https://www.assent.com/')}
          >
            <h2 className="vertical-timeline-element-title">Machine Learning Engineer Intern</h2>
            <h3 className="vertical-timeline-element-subtitle">Assent</h3>
          </VerticalTimelineElement>
          </VerticalTimeline>
        </FadeIn>
      </div>
    </>
  );
}
