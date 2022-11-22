import fridgey from '../assets/fridgey.png'
import operate from '../assets/operate.png'
import website from '../assets/website.png'
import weather from '../assets/weether.png'
import cards from '../assets/cards.png'
import FadeIn from 'react-fade-in';

export default function Projects() {
    return (
    <>
    <h1>projects 🔎</h1>
    <div class="projects">
        <div class="gallery cf">
            <FadeIn delay="100">
                <div class="row">
                    <div class="box" onclick="">
                        <img src={website} alt="website"/>
                        <div class="overlay">
                            <a href="https://github.com/josephine-w/josephine-w.github.io" target="_blank"  rel="noreferrer">
                                <i class="fab fa-github fa-3x"></i></a>
                            <div class="project-title">personal website v2 (2022) </div>
                            <i class="tools">ReactJS, HTML, CSS</i>
                            <hr></hr>
                            <div class="description">you're looking at it!</div>
                        </div>
                    </div>
                    <div class="box" onclick="">
                        <img src={fridgey} alt="fridge"/>
                        <div class="overlay">
                            <a href="https://github.com/josephine-w/reci.py" target="_blank"  rel="noreferrer">
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                            <div class="project-title">reci.py (2022)</div>
                            <i class="tools">Django, HTML/CSS, BeautifulSoup, MyCookbook.io API</i>
                            <hr></hr>
                            <div class="description">an online pantry & recipe finder</div>
                        </div>  
                    </div>
                    <div class="box" onclick="">
                        <img src={cards} alt="cards"/>
                        <div class="overlay">
                            <div class="project-title">straights (card game) (2021)</div>
                            <i class="tools">C++</i>
                            <hr></hr>
                            <div class="description">CS 246 final project; CLI-based card game implemented with MVC & OOP</div>
                        </div>
                    </div>
                    <div class="box" onclick="">
                        <img src={operate} alt="operate"/>
                        <div class="overlay">
                            <a href="https://github.com/josephine-w/operate-game" target="_blank"  rel="noreferrer">
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                            <div class="project-title">operate (2021)</div>
                            <i class="tools">Python, pygame, Paint Tool SAI</i>
                            <hr></hr>
                            <div class="description">based on the beloved Operation board game!</div>
                        </div>  
                    </div>
                    <div class="box" onclick="">
                        <img src={weather} alt="weather"/>
                        <div class="overlay">
                            <a href="https://github.com/josephine-w/weether" target="_blank"  rel="noreferrer">
                                <i class="fab fa-github fa-3x"></i>
                            </a>
                            <div class="project-title">weether (2021)</div>
                            <i class="tools">Javascript, HTML/CSS, OpenWeather API</i>
                            <hr></hr>
                            <div class="description">a small weather app for JS practice</div>
                        </div>  
                    </div>
                </div>
            </FadeIn>
            </div>
        </div>
    </>
    )
}