import React from 'react'
import Button from '../../../components/general/Button/Button';
import SellerCard from '../../../components/product/sellerCard/sellerCard';
import SectionTitle from '../../../components/general/SectionTitle/SectionTitle';
import styles from './Sellers.module.scss';
import PropTypes from 'prop-types';

function Sellers({ items, displayLimit }) {
    const toRender = items.length <= displayLimit ? items : items.slice(0, displayLimit);
    return (
        <>
            <SectionTitle title={'فروشگاه ها'} />
            <div className={styles.Sellers}>
                {toRender.map(item => (
                    <SellerCard key={item.prk} {...item} />
                ))}
                {items.length > displayLimit && (
                    <Button
                        href="/notImplemented"
                        title={`نمایش تمام ${items.length} فروشگاه`}
                        style={{ margin: 10 }}
                    />
                )}
            </div>
        </>
    )
}

export default Sellers;

Sellers.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            shop_name: PropTypes.string,
            shop_name2: PropTypes.string,
            name1: PropTypes.string,
            name2: PropTypes.string,
            price_text: PropTypes.string,
            page_url: PropTypes.string,
        })
    ),
    displayLimit: PropTypes.number
}