import "./header.css"

function Header() {
    return(
        <div className="header-wrapper container">
            <h1><span className="redText">Marvel</span> information portal</h1>
            <ul>
                <li><a href="" className="redText">Characters</a></li>
                <li>/</li>
                <li><a href="">Comics</a></li>
            </ul>
        </div>
    )
}

export default Header;
