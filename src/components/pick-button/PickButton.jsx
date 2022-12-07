import styles from './PickButton.module.scss';
import React, {useContext} from 'react';
import classnames from 'classnames';
import PickIndicator from "../pick-indicator/PickIndicator.jsx";
import AppContext from "../../store/app-context.js";
import {useNavigate} from "react-router-dom";
import {P_USER} from "../../const/players";

const PickButton = ({type, onClick}) => {
    const navigate = useNavigate();
    const {setPlayerPick} = useContext(AppContext);

    const pickButtonWrapperClasses = classnames(
        styles['pick-button-wrapper'],
        styles[`pick-button-wrapper--${type}`],
    )

    const handleUserPick = () => {
        setPlayerPick(type, P_USER);
        navigate('/result');
    }

    return (
        <div
            aria-label={'button'}
            onClick={handleUserPick}
            className={pickButtonWrapperClasses}>
            <PickIndicator type={type}/>
        </div>
    )
}

export default PickButton;
