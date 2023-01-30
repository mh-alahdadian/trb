import React from 'react'
import styles from './SectionTitle.module.scss';
import PropTypes from 'prop-types';

function SectionTitle({ title, ...props }) {
    return (
        <h2 className={styles.title} {...props}>
            {title}
        </h2>
    )
}

export default SectionTitle;

SectionTitle.defaultProps = {
    title: '',
}

SectionTitle.propTypes = {
    title: PropTypes.string,
}