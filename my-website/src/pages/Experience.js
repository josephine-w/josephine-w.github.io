import kpmg from '../assets/kpmg.png'
import bmo from '../assets/bmo.png'
import assent from '../assets/assent.png'
import uw from '../assets/uw.png'

export default function Experience() {
    return (
        <>
        <div class="experience">
            <h1>experience 💼</h1>
            <div class="exp-box">
                <h2 class="left"><img src={uw} alt="uwaterloo"></img>bachelor's of CS @ <a href="https://cs.uwaterloo.ca/" target="_blank" rel="noreferrer">UWATERLOO</a></h2>
                <h2 class="right">09/2022 - 12/2022</h2>
            </div>
            <hr align="left"></hr>
            <div class="exp-box">
                <h2 class="left"><img src={kpmg} alt="kpmg"></img>data science intern @ <a href="https://advisory.kpmg.us/services/lighthouse.html" target="_blank" rel="noreferrer">KPMG</a></h2>
                <h2 class="right">09/2022 - 12/2022</h2>
            </div>
            <div class="exp-box">
                <h2 class="left"><img src={bmo} alt="bmo"></img>business tech analyst intern @ <a href="https://www.bmo.com/main/personal" target="_blank" rel="noreferrer">BMO</a></h2>
                <h2 class="right">01/2022 - 04/2022</h2>
            </div>
            <div class="exp-box">
                <h2 class="left"><img src={assent} alt="assent"></img>machine learning intern @ <a href="https://www.assent.com/" target="_blank" rel="noreferrer">ASSENT</a></h2>
                <h2 class="right">05/2021 - 08/2021</h2>
            </div>
        </div>
        </>
    )
}

