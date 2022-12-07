import styles from './PickIndicator.module.scss';
import React from 'react';
import classnames from 'classnames';

const PickIndicator = ({type, isWinning}) => {

    const pickButtonWrapperClasses = classnames(
        styles['pick-indicator-wrapper'],
        {
            [styles[`pick-indicator-wrapper--${type}`]]: type,
            [styles['pick-indicator-wrapper--winner']]: isWinning,
            [styles['pick-indicator-wrapper--empty']]: !type
        }
    )

    return (
        <div
            className={pickButtonWrapperClasses}>
            <div className={styles['pick-indicator']}/>
        </div>
    )
}

export default PickIndicator;
