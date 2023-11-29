import * as React from "react";
// @ts-ignore
import Pagination from "@mui/material/Pagination";
// @ts-ignore
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { changePage } from "../../store/posts/postsSlice";
import { getPosts } from "../../store/posts/postsAction";

export default function PostPagination() {
  const { totalPages, currentPage } = useSelector(
    (state: RootState) => state.posts
  );
  const dispatch: AppDispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const typeLS = localStorage.getItem("typePost");
    const type: number = typeLS ? parseInt(typeLS) : 1;
    dispatch(changePage({ page: value }));
    dispatch(getPosts(type));
  };

  return (
    <Stack className="pt-10" spacing={2}>
      {/* <Pagination count={10} shape="rounded" /> */}
      <Pagination
        count={totalPages}
        page={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  );
}
