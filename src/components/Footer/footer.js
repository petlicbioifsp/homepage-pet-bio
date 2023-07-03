import { FaGithub } from "react-icons/fa";
import {Link} from "react-router-dom";
import useScrollToTop from "../../pages/Home/useScrollToTop";
import './footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <a className='gitIcon' href='https://github.com/pet-ads' rel="noreferrer" target="_blank"><FaGithub /></a>
            <pre className="footer_content">Desenvolvido com ♥ por <Link className="link"  to="/"  onClick={useScrollToTop}>PET/ADS</Link> <a className="link" href="https://scl.ifsp.edu.br"  rel ="noreferrer"target="_blank"> @ IFSP São Carlos</a>.</pre>
        </footer>
    )
} 