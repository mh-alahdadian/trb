import React from 'react'
import styles from './TitleBar.module.scss';
import PropTypes from 'prop-types';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


export default function TitleBar({ title, showShareButton, onShareButtonClick, onBackButtonClick }) {
    return (
        <div className={styles.TitleBar}>
            <img
                src="/static/images/arrow_right.svg"
                className={styles.back}
                alt="بازگشت"
                onClick={onBackButtonClick}
            />
            <span className={styles.title}>{title}</span>
            {showShareButton && (
                <ShareOutlinedIcon
                    onClick={onShareButtonClick}
                    className={styles.icon}
                />
            )}
        </div>
    )
}

TitleBar.propTypes = {
    title: PropTypes.string,
    showShareButton: PropTypes.bool,
    onShareButtonClick: PropTypes.func,
    onBackButtonClick: PropTypes.func
}

TitleBar.defaultProps = {
    title: '',
    showShareButton: false,
    onShareButtonClick: () => { },
    onBackButtonClick: () => { }
}
