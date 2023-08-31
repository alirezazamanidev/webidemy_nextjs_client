"use client";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

export default function PaginateItem({
  page,
  pages,
  type,
}: {
  page: number;
  pages: number;
  type: string;
}) {
  const router = useRouter();

  return (
    <>
      {pages > 1 ? (
        <div className=" mt-3">
          <Stack spacing={3}>
            <Pagination
              page={page}
              onChange={(e, page) => {
                router.push(`/admin/${type}?page=${page}`);
              }}
              count={pages}
              renderItem={(item) => (
                <PaginationItem
                  slots={{
                    previous: ArrowForwardIcon,
                    next: ArrowBackIcon,
                  }}
                  {...item}
                />
              )}
            />
          </Stack>
        </div>
      ) : null}
    </>
  );
}
