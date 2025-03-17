import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';

export default function ModernTable({
  columns,
  rows,
  handleOnEdit,
  handleOnRemove,
}) {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const visibleRows = rows?.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: '12px',
          overflow: 'auto',
          maxHeight: '495px',
          zIndex: 0,
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#ffffff' }}>
              {columns?.map((col, index) => (
                <TableCell
                  key={index}
                  align={col.align ? col.align : 'center'}
                  sx={{ fontWeight: 600 }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows?.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{
                  '&:hover': { backgroundColor: '#f5f7ff' },
                  backgroundColor: rowIndex % 2 === 0 ? '#fafbff' : '#ffffff',
                  transition: 'background-color 0.3s ease',
                }}
              >
                {columns.map((col, cellIndex) => (
                  <>
                    {col.showChips && (
                      <TableCell align="center" key={cellIndex}>
                        <Box
                          sx={{ display: 'flex', justifyContent: 'center' }}
                          key={cellIndex}
                        >
                          <Chip
                            key={cellIndex}
                            label={row[col.field]}
                            sx={{
                              fontWeight: 'bold',
                              backgroundColor:
                                col.status === 'Aktif' ? '#d1e7dd' : '#f8d7da',
                              color:
                                col.status === 'Aktif' ? '#0f5132' : '#842029',
                              fontSize: '0.875rem',
                              borderRadius: '8px',
                              textAlign: 'center',
                              px: 2,
                              py: 1,
                              '.MuiChip-label': {
                                padding: 0,
                              },
                            }}
                          />
                        </Box>
                      </TableCell>
                    )}

                    {col?.normal && (
                      <TableCell key={cellIndex} align={'center'}>
                        {row[col.field]}
                      </TableCell>
                    )}

                    {col?.action && (
                      <TableCell key={cellIndex} align={'center'}>
                        <IconButton
                          onClick={() => {
                            handleOnEdit(row);
                          }}
                        >
                          <EditIcon sx={{ color: '#333' }} />
                        </IconButton>
                        <IconButton onClick={() => handleOnRemove(row)}>
                          <DeleteIcon sx={{ color: 'red' }} />
                        </IconButton>
                      </TableCell>
                    )}
                  </>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        spacing={2}
        sx={{
          marginTop: '1rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
        }}
      >
        <Pagination
          count={Math.ceil(rows?.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          showFirstButton
          showLastButton
          renderItem={(item) => <PaginationItem {...item} />}
        />

        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20]}
          component="div"
          count={rows?.length}
          rowsPerPage={rowsPerPage}
          page={page - 1}
          onPageChange={(e, newPage) => setPage(newPage + 1)}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Rows per page"
          labelDisplayedRows={() => ''}
          ActionsComponent={() => null}
        />
      </Stack>
    </Box>
  );
}
