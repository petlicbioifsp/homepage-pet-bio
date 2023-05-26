import './footer.css';
import {BsGithub} from 'react-icons/bs';

export default function Footer(){
    return(
        <div className='footer'>
            <a className='gitIcon' href='https://github.com/pet-ads' target="_blank"><BsGithub/></a>
            <p className="footer_content">Desenvolvido com ♥ pela equipe do PET/ADS - IFSP São Carlos - 2023</p>
        </div>
    )
}