import { Link } from "react-router-dom";
import "../styles/NavBar.css"
import { useEffect, useState } from "react";
import logo from '../images/logo_CodeVoltage.png';
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

const NavBar = ({user, checked, setChecked}) => {
    const {t, i18n} = useTranslation();

    const [clicked, setClicked] = useState(false);
    const [coursesClicked, setCoursesClicked] = useState(false);



    const languages = {
        en:{nativeName : "En"},
        fr:{ nativeName : "Fr"}
    }

    const handleClick = () => {
        setClicked(!clicked);
    }


    const switchTheme = (e)=>{
        if(e.target.checked){
            document.querySelector('body').setAttribute('data-theme','dark');
            setChecked(true);
        }
        else{
            document.querySelector('body').setAttribute('data-theme','light');
            setChecked(false)
        }
    }
    useEffect(()=>{
        if(checked){
            document.querySelector('body').setAttribute('data-theme','dark');
        }
        else{
            document.querySelector('body').setAttribute('data-theme','light');
        }
    },[checked])
    return (
        <nav className="nav">
            <Link to={"/home"}>
                <img className="logo" src={logo} alt="logo"/>
            </Link>
            <div className="navBar">
                <ul className={clicked ? "navbar-ul-active" : "navbar-ul"}>
                    

                    {user === "none" ?
                       <div className="navBar-items">
                            <li><Link className="link2" to={"/"}>{t("Home")}</Link></li>

                            <li><Link className="link1"  onClick={()=>setCoursesClicked(!coursesClicked)}>{t("Courses")}</Link>                           
                                <div className={coursesClicked ? "show-courses" : "hide-courses"}>
                                   <Link className="link-courses" to={"/courses/robotics"}> <li>{t('Robotics')}</li></Link>
                                    <Link className="link-courses" to={"/courses/iot"}><li>{t('Smart Home & IoT')}</li></Link>
                                    <Link className="link-courses" to={"/courses/pcb"}><li>{t('PCB Design and Manufacturing')}</li></Link>
                                    <Link className="link-courses" to={"/courses/assembly"}><li>{t('Assembly')}</li></Link>
                                    <Link className="link-courses" to={"/courses/matlab&simulink"}><li>{t('MATLAB & SIMULINK')}</li></Link>
                                    <Link className="link-courses" to={"/courses/vhdl"}><li>{t('VHDL - FPGA')}</li></Link>
                                </div>
                            </li>


                            <li><Link className="link"  to={"/login"}>{t('Log In')}</Link></li>
                            <li><Link className="link" to={"/signup"}>{t('Sign Up')}</Link></li>
                       </div>
                        :
                        user.id === 0 ? 
                        
                        <div>
                            <li><Link className="link" to={"/users"}>{t('Users')}</Link></li>
                            <li><Link className="link" to={"/search"}>{t('Search')}</Link></li>
                            <li><Link className="link" to={"/home"}>{t('Courses')}</Link></li>
                            <li><Link className="link" to={"/profile"}>{t('Profile')}</Link></li>
                            <li><Link className="link" to={"/logout"}>{t('Log Out')}</Link></li>

                        </div>
                        :
                        <div>
                            <li><Link className="link" to={"/home"}>{t('Courses')}</Link></li>
                            <li><Link className="link" to={"/profile"}>{t('Profile')}</Link></li>
                            <li><Link className="link" to={"/logout"}>{t('Log Out')}</Link></li>
                        </div>
                        
                        
                    }
   
                </ul>
                <div className="languages">
                {Object.keys(languages).map((language)=>(
                    <Button key={language} $Width="40px" $Height="40px" $Padding="8px" onClick={()=>i18n.changeLanguage(language)} disabled={i18n.resolvedLanguage === language}>{languages[language].nativeName}</Button>
                ))}
                </div>
                <div>
                    <label className="switch">
                        <input type="checkbox" checked={checked} onChange={switchTheme}/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <div className="mobile" onClick={handleClick}>
                <i id='bar' className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars" }></i>
            </div>
        </nav>
    );
}
 
export default NavBar;