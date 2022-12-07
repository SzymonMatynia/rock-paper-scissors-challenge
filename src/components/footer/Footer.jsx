import styles from './Footer.module.scss';
import AppButton from "../button/AppButton.jsx";

const Footer = ({onClickRulesButton}) => {
    return (
        <div className={styles.footer}>
            <AppButton onClick={onClickRulesButton} size={'sm'} type={'outline'} content={'RULES'}/>
        </div>
    )
}

export default Footer;
