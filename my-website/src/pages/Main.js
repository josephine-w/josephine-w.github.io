import resume from '../assets/resume.pdf'

export default function Main() {
    return (
        <>
        <div className="main">
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
            <div class="emoji">😊</div>
        </div>
        <div>
        </div>
            <p>I am a 3rd year Computer Science student @ UWaterloo. I'm mainly interested in data science, and
                my main goal is to bridge the gap between business and technology in today's world!
                <br></br>
                <br></br>
                Currently @ <a href="https://advisory.kpmg.us/services/lighthouse.html" target="_blank" rel="noreferrer">KPMG</a>.
                <br></br>
                <br></br>
                Feel free to contact me!
            </p>

            <div className="socials">
                <ul>
                    <li><a href={resume} target="_blank" rel="noreferrer"><i className="fas fa-file fa-2x"></i></a></li>
                    <li><a href="https://www.facebook.com/josephinewidjaja002/" target="_blank" rel="noreferrer"><i className="fa fa-facebook-square fa-2x"></i></a></li>
                    <li><a href="https://github.com/josephine-w" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/josephine-w/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
                    <li><a href = "mailto:j4widjaj@uwaterloo.ca" target="_blank" rel="noreferrer"><i className="fa fa-envelope fa-2x"></i></a></li>
                </ul>
            </div>
        </div>
        </>
    )
}