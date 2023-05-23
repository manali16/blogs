import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function agination({ currentPage, totalPages, onChangePage }) {
  const handlePageChange = (_, page) => {
    onChangePage(page);
  };

  return (
    <Stack spacing={2} direction="row" justifyContent="right" alignItems="right">
      <Pagination
        variant="outlined"
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="error"
      />
     </Stack>
  );
}
