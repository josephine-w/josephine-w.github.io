import resume from '../assets/resume.pdf'
import FadeIn from 'react-fade-in';

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
                    <div class="emoji">😊</div>
                </div>
                <div className="info">
                    <p>I am a 3rd year Computer Science student @ UWaterloo. I'm mainly interested in data science, and
                        my main goal is to bridge the gap between business and technology in today's world!
                        <br></br>
                        <br></br>
                        Feel free to contact me or take a copy of my <a href={resume} target="_blank" rel="noreferrer">resume</a>! 
                    </p>
                </div>
                <div className="socials">
                        <ul>
                            <li><a href="https://www.facebook.com/josephinewidjaja002/" target="_blank" rel="noreferrer"><i className="fa fa-facebook-square fa-2x"></i></a></li>
                            <li><a href="https://github.com/josephine-w" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/josephine-w/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
                        </ul>
                </div>
                </FadeIn>
            </div>
        </>
    )
}