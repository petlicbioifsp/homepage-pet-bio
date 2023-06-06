import './footer.css';
import {BsGithub} from 'react-icons/bs';

export default function Footer(){
    return(
        <div className='footer'>
            <a className='gitIcon' href='https://github.com/pet-ads'rel= "noreferrer" target="_blank"><BsGithub/></a>
            <p className="footer_content">Desenvolvido com ♥ por PET/ADS @ IFSP São Carlos.</p>
        </div>
    )
} 