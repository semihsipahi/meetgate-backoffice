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
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
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
