import styles from './ProductInfo.module.scss';
import React from 'react'
import PropTypes from 'prop-types';
import Button from '../../../components/general/Button/Button';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

function ProductInfo({ name, imageUrl, price, buyButtonText, buyButtonLink }) {
    return (
        <div className={styles.ProductInfo}>
            <div className={styles.images}>
                <img
                    width={250}
                    height={250}
                    className={styles.image}
                    src={imageUrl}
                    alt={name}
                />
            </div>
            {name}
            <div className={styles.priceText}>{price}</div>
            <div className={styles.row}>
                <Button title={buyButtonText} href={buyButtonLink} style={{ flex: 1 }} />
                <NotificationsOutlinedIcon fontSize='large' className={styles.icon} />
                <FavoriteBorderOutlinedIcon fontSize='large' className={styles.icon} />
                <ShareOutlinedIcon fontSize='large' className={[styles.icon, styles.shareIcon].join(' ')} />
            </div>
        </div>
    )
}

export default ProductInfo;

ProductInfo.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.string,
    buyButtonText: PropTypes.string,
    buyButtonLink: PropTypes.string,
}