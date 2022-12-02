import kpmg from '../assets/kpmg.png'
import bmo from '../assets/bmo.png'
import assent from '../assets/assent.png'
import uw from '../assets/uw.png'
import FadeIn from 'react-fade-in';
import useCollapse from 'react-collapsed';

function Collapsible({pic, role, link, location, dates, content}) {
    const config = {
        duration: 300,
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

    return (
    <div className="collapsible">
        <div className={isExpanded? "exp-box expanded" : "exp-box"}{...getToggleProps()}>
            <div className="header">
                <h2 className="left"><div className="pic"><img src={pic} alt="location"></img></div><div className="role">{role} <div className="at">@ <a href={link} target="_blank" rel="noreferrer">{location}</a></div></div></h2>
                <h2 className="right">{dates}</h2>
            </div>
        <div {...getCollapseProps()}>
            <div className="collapsible-content">
                {content}
            </div>
        </div>
        </div>
    </div>
    );
}

export default function Experience() {
    return (
        <>
        <div class="experience">
            <h1>experience 💼</h1>
            <FadeIn delay="100">
                <Collapsible pic={uw} role="bachelor's of computer science" link="https://cs.uwaterloo.ca/" location="UWATERLOO" dates="09/2020 - 05/2024" 
                    content={
                        <>
                        <br></br>
                        <ul>
                            <li><strong>gpa:</strong> 3.5 (89.55)</li>
                            <li><strong>relevant coursework:</strong> Data Structures, Algorithms</li>
                        </ul>
                        <br></br>
                        </>
                    }>
                </Collapsible>
                <hr className="dots"></hr>
                <Collapsible pic={kpmg} role="data science intern" link="https://advisory.kpmg.us/services/lighthouse.html" location="KPMG" dates="09/2022 - 12/2022"
                    content={
                        <>
                        <br></br>
                        <ul>
                            <li><strong>tools:</strong> Python NLP (TensorFlow, spaCy, regex, HuggingFace Transformers), Python data processing (pandas, camelot) KPMG Ignite AI Platform, Jupyter Notebook, Power BI</li>
                            <li><strong>responsiblities:</strong> NLP project to process SOC reports, Power BI dashboard for compliance tracking
                            </li>
                        </ul>
                        <br></br>
                        </>
                    }>
                </Collapsible>
                <Collapsible pic={bmo} role="business tech analyst intern" link="https://www.bmo.com/main/personal" location="BMO" dates="01/2022 - 04/2022"
                    content={
                        <>
                        <br></br>
                        <ul>
                            <li><strong>tools:</strong> Power BI, Excel (Pivot Tables, Macros, VBA), Sharepoint</li>
                            <li><strong>responsiblities:</strong> Power BI dashboard for daily reports, Sharepoint site, Excel data reconciliation tool
                            </li>
                        </ul>
                        <br></br>
                        </>
                    }>
                </Collapsible>
                <Collapsible pic={assent} role="machine learning intern" link="https://www.assent.com/" location="ASSENT" dates="05/2021 - 08/2021"
                    content={
                        <>
                        <br></br>
                        <ul>
                            <li><strong>tools:</strong> Python NLP (PyTorch, HuggingFace Transformers, spaCy), Confluence, LucidChart, AWS Sagemaker, Jupyter Notebook</li>
                            <li><strong>responsiblities:</strong> Training testing & validating NLP models, documentation using Confluence and LucidChart
                            </li>
                        </ul>
                        <br></br>
                        </>
                    }>
                </Collapsible>
            </FadeIn>
        </div>
        </>
    )
}

