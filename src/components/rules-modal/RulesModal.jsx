import styles from './RulesModal.module.scss';

const RulesModal = ({show, handleClose}) => {

    if (!show) {
        return null;
    }

    return (
        <div className={styles['rules-modal-wrapper']}>
            <div className={styles['rules-modal']}>
                <div className={styles['rules-modal__header']}>Rules</div>

                <div className={styles['rules-modal__asset']}/>

                <div aria-label={'close'} onClick={handleClose} className={styles['rules-modal__close']}/>
            </div>
        </div>
    )
}

export default RulesModal;
