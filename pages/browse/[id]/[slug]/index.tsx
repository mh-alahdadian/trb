import Head from 'next/head'
import { useRouter } from 'next/router'
import InfiniteScroll from 'react-infinite-scroll-component';
import CategoryAttributes from '../../../../components/browse/CategoryAttributes/CategoryAttributes';
import CategoryFilters from '../../../../components/browse/CategoryFilters/CategoryFilters';
import TitleBar from '../../../../components/general/TitleBar/TitleBar';
import Loading from '../../../../components/general/Loading/Loading';
import { apis, paginations } from '../../../../configurations/constants';
import CategoryProducts from '../../../../containers/browse/CategoryProducts/CategoryProducts';
import useInfiniteFetch from '../../../../hooks/useInfiniteFetch';
import BottomNavigation from '../../../../components/BottomNavigation/BottomNavigation';

const pageSize = paginations.category_products.size;

export default function Home() {
  const router = useRouter();
  const { id, slug } = router.query;

  const { items, hasMore, fetchData, lastData } = useInfiniteFetch(
    pageSize,
    (page, size) => {
      if (!id) return null;
      return (apis.search_products + `?category=${id}&size=${size}&page=${page}`)
    },
    [id]
  )

  return (
    <div className="container">
      <Head>
        <title>Browse page</title>
      </Head>

      {/* I couln't find the category title from the endpoint, so I used 'عنوان دسته بندی' instead. */}
      <TitleBar title={`عنوان دسته بندی`} />
      <CategoryFilters filters={['جستجو و فیلتر', 'محبوب ترین']} />
      <CategoryAttributes title={lastData?.attributes[0]?.title} items={lastData?.attributes[0]?.items} />

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
        <CategoryProducts items={items} />
      </InfiniteScroll>

      <BottomNavigation />
    </div>
  )
}