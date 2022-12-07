import React from 'react';
import styles from './AppButton.module.scss';
import classnames from 'classnames';

const AppButton = ({onClick, content, type, size}) => {

    const classes = classnames(
        styles['app-button'],
        {
            [styles[`app-button--${type}`]]: type,
            [styles[`app-button--${size}`]]: size,
        }
    )

    return (
        <div onClick={onClick} className={classes}>
            {content}
        </div>
    )
}

export default AppButton;
