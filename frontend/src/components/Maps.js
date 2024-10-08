import "../styles/Maps.css"
import { useTranslation } from "react-i18next";
import { Button } from "./Button";
import { useState } from "react";

const Maps = () => {
    const {t} = useTranslation();
    const [local1, setLocal1] = useState("show");
    const [local2, setLocal2] = useState("hide");
    const [local3, setLocal3] = useState("hide");

    const Local1 = () => {
        setLocal1("show");
        setLocal2("hide");
        setLocal3("hide");
    }
    const Local2 = () => {
        setLocal2("show");
        setLocal1("hide");
        setLocal3("hide");
    }
    const Local3 = () => {
        setLocal3("show");
        setLocal1("hide");
        setLocal2("hide");
    }
    return (

        <div className="maps-field">
            <div className="maps-card">
                <Button onClick={()=>Local1()}>{t('Local 1 :')}</Button>
                <Button onClick={()=>Local2()}>{t('Local 2 :')}</Button>
                <Button onClick={()=>Local3()}>{t('Local 3 :')}</Button>

            </div>
         <div className={local1} style={{width : "98%"}}><iframe title="local1" width="100%" height="600" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d51258.90845555721!2d-7.550735232180821!3d33.57412411337733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDMyJzUzLjAiTiA3wrAyOCc1NC44Ilc!5e0!3m2!1sen!2sma!4v1728392884404!5m2!1sen!2sma" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
         <div className={local2} style={{width: "98%"}}><iframe title="local2" width="100%" height="600" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8209268631394!2d-7.636333823809983!3d33.58399844230895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d384e02c8a37%3A0xd855db88e1a33e85!2sIPMES!5e0!3m2!1sen!2sma!4v1728392751587!5m2!1sen!2sma" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
         <div className={local3} style={{width: "98%"}}><iframe title="local3" width="100%" height="600" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.265175092703!2d-7.649462208826983!3d33.57246361353377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x653f4d951777fbef%3A0xa1ad31a6d80324f8!2sCo-space%20Casablanca!5e0!3m2!1sen!2sma!4v1728392563165!5m2!1sen!2sma" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        </div>

    );
}
 
export default Maps;