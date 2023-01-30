import React from 'react'
import styles from './CategoryAttributes.module.scss'
import PropTypes from 'prop-types';

function CategoryAttributes({ title, items }) {
    if (!items || items.length === 0) return null;
    return (
        <div className={styles.CategoryAttributes}>
            <div className={styles.title}>{title}</div>
            {items?.map(item => (
                <div
                    key={item.id}
                    className={styles.item}
                >
                    {item.name2}
                </div>
            ))}
        </div>
    )
}

export default CategoryAttributes;

const { string, arrayOf, number, oneOfType, shape } = PropTypes;

CategoryAttributes.propTypes = {
    title: string,
    items: arrayOf(
        shape({
            name2: string,
            id: oneOfType([number, string])
        })
    )
}
