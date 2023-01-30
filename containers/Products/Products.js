import React from 'react'
import SimilarProductCard from '../../components/product/ProductCard/ProductCard';
import styles from './Products.module.scss';
import PropTypes from 'prop-types';

function Products({ items }) {
    return (
        <div className={styles.Products}>
            <div className={styles.productsGrid}>
                {items.map((item, index) => (
                    <SimilarProductCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default Products;

Products.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            web_client_absolute_url: PropTypes.string,
            image_url: PropTypes.string,
            name1: PropTypes.string,
            price_text: PropTypes.string,
            shop_tex: PropTypes.string,
        })
    )
}