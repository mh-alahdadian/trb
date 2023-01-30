import React from 'react'
import SectionTitle from '../../../components/general/SectionTitle/SectionTitle'
import Products from '../../Products/Products';
import styles from './SimilarProducts.module.scss';
import PropTypes from 'prop-types';

function SimilarProducts({ items }) {
    return (
        <div className={styles.SimilarProducts}>
            <SectionTitle title={'محصولات مشابه'} style={{ textAlign: 'center' }} />
            <Products items={items} />
        </div>
    )
}

export default SimilarProducts;

SimilarProducts.propTypes = {
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