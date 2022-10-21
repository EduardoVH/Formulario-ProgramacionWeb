import '../assets/styles/Header.css'

import logo101 from '../assets/img/logo.png'
import Img from '../atoms/Img'

function Header() {
    return(
        <header>
            <Img src={logo101} className="logo"></Img>
            <h1>FACEBOOK</h1>
        </header>
    );
}
export default Header;