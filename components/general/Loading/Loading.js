import React from 'react'
import styles from './Loading.module.scss';

function Loading() {
    return (
        <div className={styles.loadingWrapper}>
            <div className={styles.loading} />
        </div>
    )
}

export default Loading;