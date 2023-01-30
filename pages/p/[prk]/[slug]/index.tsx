import axios from 'axios';
import Head from 'next/head'
import { apis, paginations } from '../../../../configurations/constants';
import TitleBar from '../../../../components/general/TitleBar/TitleBar';
import BreadCrumb from '../../../../components/general/BreadCrumb/BreadCrumb';
import ProductInfo from '../../../../containers/product/ProductInfo/ProductInfo';
import Sellers from '../../../../containers/product/Sellers/Sellers';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../../../../components/general/Loading/Loading';
import SimilarProducts from '../../../../containers/product/SimilarProducts/SimilarProducts';
import useInfiniteFetch from '../../../../hooks/useInfiniteFetch';
import BottomNavigation from '../../../../components/BottomNavigation/BottomNavigation';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';


const pageSize = paginations.similar_products.size;
function Product({ details, prk, ...props }) {
  const {
    name1, breadcrumbs, buy_box_price_text, image_url,
    buy_box_button_text, buy_box_button_link, products_info
  } = details;

  const { items, hasMore, fetchData } = useInfiniteFetch(
    pageSize,
    (page, size) => (apis.similar_products + `?prk=${prk}&size=${size}&page=${page}`)
  )

  return (
    <div className="container">
      <Head>
        <title>Product Page</title>
      </Head>
      <TitleBar title={`${name1}`} showShareButton />
      <BreadCrumb items={breadcrumbs} />

      <ProductInfo
        name={name1}
        price={buy_box_price_text}
        imageUrl={image_url}
        buyButtonText={buy_box_button_text}
        buyButtonLink={buy_box_button_link}
      />

      <Sellers
        items={products_info ? products_info?.result : []}
        displayLimit={5}
      />

      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<Loading />}
        endMessage={
          <p style={{ textAlign: 'center', direction: 'rtl' }}>
            <b>به انتهای لیست رسیدید!</b>
          </p>
        }
      >
        <SimilarProducts items={items} />
      </InfiniteScroll>

      <BottomNavigation />
    </div>
  )
}

const cache = {};

export async function getServerSideProps({ query, res }: GetServerSidePropsContext) {
  const { prk } = query;

  res.on('finish', () => {
    res.
  })

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  let data;
  try {
    data = (await axios.get(apis.product_details + prk)).data;
  } catch (err) {
    data = {}
  }
  return {
    props: {
      details: data,
      prk,
    }
  }
}

export default Product
