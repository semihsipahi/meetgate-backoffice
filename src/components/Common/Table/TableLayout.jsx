import { Box, Typography } from '@mui/material';
import React from 'react';
import ModernTable from './ModernTable';

export default function TableLayout({
  title,
  columns,
  rows,
  handleOnEdit,
  handleOnRemove,
}) {
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: '12px',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: '600',
          color: '#333',
          marginBottom: '16px',
        }}
      >
        {title}
      </Typography>
      <ModernTable
        columns={columns}
        rows={rows}
        handleOnEdit={handleOnEdit}
        handleOnRemove={handleOnRemove}
      />
    </Box>
  );
}
