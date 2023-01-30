import Link from 'next/link';
import React from 'react'
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

function Button({ title, href, style, outlined }) {
    const classNames = [styles.Button];
    if (outlined) classNames.push(styles.outlined)

    return (
        <Link href={href}>
            <button className={classNames.join(' ')} style={style}>
                {title}
            </button>
        </Link>
    )
}

export default Button;

Button.defaultProps = {
    title: '',
    style: {},
    outlined: false
}

Button.propTypes = {
    title: PropTypes.string,
    href: PropTypes.string.isRequired,
    style: PropTypes.object,
    outlined: PropTypes.bool
}