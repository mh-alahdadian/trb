import React from 'react'
import styles from './BreadCrumb.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link'

export default function BreadCrumb({ items }) {
    return (
        <div className={styles.BreadCrumb}>
            {items.map(item => (
                <Link
                    key={JSON.stringify(item)}
                    href={item.url}
                >
                    <div className={styles.BreadItem}>{item.title}</div>
                </Link>
            ))}
        </div>
    )
}

const { arrayOf, number, string, shape } = PropTypes;

BreadCrumb.propTypes = {
    items: arrayOf(
        shape({
            id: number,
            title: string,
            url: string
        })
    ),
}

BreadCrumb.defaultProps = {
    items: []
}
