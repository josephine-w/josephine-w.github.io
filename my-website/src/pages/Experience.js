import kpmg from '../assets/kpmg.png'
import bmo from '../assets/bmo.png'
import assent from '../assets/assent.png'

export default function Experience() {
    return (
    <>
    <div class="experience">
        <h1>experience 💼</h1>
        <div class="exp-box">
            <div class="title">
                <img src={kpmg}></img>
                <div class="job">
                    <h2>DATA SCIENCE INTERN</h2>
                    <h3>KPMG</h3>
                </div>
            </div>
        </div>
        <div class="exp-box">
        <div class="title">
                <img src={bmo}></img>
                <div class="job">
                    <h2>BUSINESS TECHNOLOGY ANALYST INTERN</h2>
                    <h3>Bank of Montreal</h3>
                </div>
            </div>
        </div>
        <div class="exp-box">
            <div class="title">
                <img src={assent}></img>
                <div class="job">
                    <h2>MACHINE LEARNING INTERN</h2>
                    <h3>Assent</h3>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}