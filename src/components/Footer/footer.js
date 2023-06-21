import { BsGithub } from 'react-icons/bs';
import './footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <a className='gitIcon' href='https://github.com/pet-ads' rel="noreferrer" target="_blank"><BsGithub /></a>
            <p className="footer_content">Desenvolvido com ♥ por PET/ADS @ IFSP São Carlos.</p>
        </footer>
    )
} 