import { Link, useMatch, useResolvedPath } from "react-router-dom"
import me from './assets/me.png'

export default function Navbar() {
    return (
    <nav className="nav">
        <ul>
            <ProfileImage to="/"></ProfileImage>
            <div class="d3l"><a href="https://d3l-n3st.vercel.app/prev">&lt;&lt;</a><a href="/"> ♡ </a><a href="https://d3l-n3st.vercel.app/next">&gt;&gt;</a></div>
            <CustomLink to="/experience">experience</CustomLink>
            <CustomLink to="/projects">projects</CustomLink>
            <CustomLink to="/art">art</CustomLink>            
        </ul>
    </nav>
    )
}

function ProfileImage({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <Link to={ to }>
            <img src={me} alt="me" className={isActive ? "active" : ""}/>
        </Link>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li>
            <Link to={ to } className={isActive ? "active" : ""}{...props}>
                {children}
            </Link>
        </li>
    )
}


