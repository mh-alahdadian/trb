import React from 'react'
import styles from './ProductCard.module.scss';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Link from 'next/link'
import PropTypes from 'prop-types';

function SimilarProductCard(similarProduct) {
    const {
        web_client_absolute_url, image_url, name1, price_text, shop_text,
    } = similarProduct;

    return (
        <a href={web_client_absolute_url}>
            <div className={styles.similarProductCard} >
                <div className={styles.imageWrapper}>
                    <img
                        className={styles.image}
                        src={image_url}
                        alt={name1}
                    />
                </div>

                <div className={styles.name1}>{name1}</div>
                <div className={styles.price}>{price_text}</div>
                <div className={styles.shop_text}>{shop_text}</div>

                <div className={styles.icons}>
                    <FavoriteBorderOutlinedIcon fontSize='large' />
                    <NotificationsOutlinedIcon fontSize='large' />
                </div>
            </div>
        </a>
    )
}

export default SimilarProductCard;

SimilarProductCard.propTypes = {
    web_client_absolute_url: PropTypes.string,
    image_url: PropTypes.string,
    name1: PropTypes.string,
    price_text: PropTypes.string,
    shop_tex: PropTypes.string,
}