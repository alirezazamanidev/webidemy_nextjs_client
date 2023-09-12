import { useInfiniteQuery, useQueries, useQuery } from "react-query";
import { CallApi } from "../helpers/callApi";

interface optionProps {
  url: string;
  key: string;
  limit?: number;
  sort?: string;
  text?: string;
  category?: string;
}
export const useSearchInfinite = ({
  url,
  text = "",
  limit = 8,
  category='all',
  sort='default',
  key,
}: optionProps) => {
  const { data, isFetchingNextPage, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteQuery(
      [key, sort, category, text],
      async ({ pageParam }) => {
        console.log(pageParam);

        const res = await CallApi().get(
          `${url}?sort=${sort}&category=${category}&limit=${limit}&page=${pageParam}&search=${text}`
        );

        return res?.data;
      },
      {
        refetchOnWindowFocus: false,

        getNextPageParam: (lastPage, pages) => {
          if (pages.length < limit) {
            return pages.length + 1;
          }
          return false;
        },
      }
    );

  return { data, isFetchingNextPage, isLoading, hasNextPage, fetchNextPage };
};

// export const useSearch = ({ key, url, text }: optionProps) => {
//   const { data, isLoading, refetch } = useQuery([key, text], async () => {
//     const res = await CallApi().get(`${url}?text=${text}`);
//     return res.data;
//   });

//   return {
//     data,
//     isLoading,
//     refetch
//   };
// };
