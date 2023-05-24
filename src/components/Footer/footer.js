import './footer.css';
import {BsGithub,BsSuitHeartFill} from 'react-icons/bs';

export default function Footer(){
    return(
        <div className='footer'>
            <a  href='https://github.com/pet-ads' ><BsGithub/></a>
            <p>Desenvolvido com <BsSuitHeartFill/> por Equipe PET/ADS - IFSP São Carlos-2023</p>
        </div>
    )
}