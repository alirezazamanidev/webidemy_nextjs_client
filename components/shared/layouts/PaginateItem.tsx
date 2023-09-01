"use client";
import { Pagination, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import PaginationItem from "@mui/material/PaginationItem";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function PaginateItem({
  page,
  pages,
  url,
}: {
  page: number;
  pages: number;
  url: string;
}) {
  console.log(page);
  
  const router = useRouter();

  return (
    <>
      {pages > 1 && (
        <Stack spacing={3} className=" mt-3">
          <Pagination
            count={pages}
            onChange={(e,page:number) => router.push(`${url}?page=${page}`)}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: IoIosArrowForward, next: IoIosArrowBack }}
                {...item}
                variant="outlined"
                color="secondary"
              />
            )}
          />
        </Stack>
      )}
    </>
  );
}
