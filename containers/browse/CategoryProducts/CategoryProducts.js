import React from 'react'
import Products from '../../Products/Products';
import styles from './CategoryProducts.module.scss';
import PropTypes from 'prop-types';

// This component is the equivalent of the `product/SimilarProducts` component.
// But this it for the Browse page and as it is so simple, it can be removed.
// Btw I kept this to keep the code standard and I wanted to be able to make any
// changes in this component if it is needed.

function CategoryProducts({ items }) {
    return (
        <div className={styles.SimilarProducts}>
            <Products items={items} />
        </div>
    )
}

export default CategoryProducts;

CategoryProducts.propTypes = {
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