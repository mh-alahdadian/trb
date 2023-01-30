import React from 'react'
import styles from './CategoryFilters.module.scss';
import PropTypes from 'prop-types';

// This is a really demo component and I implemented that JUST to display it in the screen.

function CategoryFilters({ filters }) {
    return (
        <div className={styles.TitleBar}>
            {filters.map(filter => <div key={filter}>{filter}</div>)}
        </div>
    )
}

export default CategoryFilters;

CategoryFilters.propTypes = {
    filters: PropTypes.arrayOf(
        PropTypes.string,
    )
}