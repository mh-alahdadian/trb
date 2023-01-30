import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

// I just saw that I have used the same logic in two different pages (browse & products).
// That is why I decided to develop a custom hook for that.
// This hook is useful when we have an infinite-scroll list.

/**
 * @param {number} pageSize size of the pagination
 * @param {function} getUrl a function that receives the size and page as input params and returns the url to request the data
 * @param {array} dependencyList the dependency list
 */

function useInfiniteFetch(pageSize, getUrl, dependencyList = []) {
    const [items, setItems] = useState([]);
    const [lastData, setLastData] = useState(null);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);

    const url = useMemo(() => (
        getUrl(page, pageSize)
    ), [page, pageSize, ...dependencyList])

    const fetchData = useCallback(async () => {
        try {
            const { data } = await axios.get(url)
            if (!data.next || data.results.length === 0 || data.results.length < pageSize)
                setHasMore(false);
            setItems([...items, ...data.results]);
            setLastData(data);
            setPage(page => page + 1)
        } catch (err) { }
    }, [url, ...dependencyList])

    useEffect(() => {
        if (!url) return;
        fetchData();
    }, [...dependencyList])

    return {
        items, lastData, hasMore, fetchData
    }
}

export default useInfiniteFetch;