import './footer.css';
import {BsGithub} from 'react-icons/bs';

export default function Footer(){
    return(
        <div className='footer'>
            <a  href='https://github.com/pet-ads' ><BsGithub/></a>
            <p>Copyright &copy; 2023 Desenvolvido por Equipe PET ADS - IFSP São Carlos</p>
        </div>
    )
}