import Navbar from "./Navbar"
import Main from "./pages/Main"
import Skills from "./pages/Skills"
import Experience from "./pages/Experience"
import Projects from './pages/Projects'
import { Route, Routes} from 'react-router-dom'
import melody from './assets/mymelo.gif'

function App() {
  return (
    <>
    <div className="content">
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
      </div>
      <div>
        <img src={melody} className="melody" alt="mymelody"></img>
      </div>
    </div>
    </>
  )
}

export default App;
