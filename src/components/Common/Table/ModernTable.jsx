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

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';

function createData(adi, sekli, turu, davetli, durum) {
  return { adi, sekli, turu, davetli, durum };
}

const rows = Array.from({ length: 50 }, (_, i) =>
  createData(
    `İş Analisti ${i + 1}`,
    'Standart',
    ['Yeterlilik', 'Envanter'],
    `${10 + i} Kişi`,
    i % 2 === 0 ? 'Pasif' : 'Aktif'
  )
);

export default function ModernTable() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = (event, value) => {
    setPage(value);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const visibleRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* TABLE */}
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: '12px',
          overflow: 'auto',
          maxHeight: '495px',
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#ffffff' }}>
              {[
                'Adı',
                'Şekli',
                'Türü',
                'Davetli',
                'Durum',
                'Adaylar',
                'Düzenle / Sil',
              ].map((header, index) => (
                <TableCell
                  key={index}
                  sx={{
                    fontWeight: 600,
                    color: '#333',
                    textAlign: 'center',
                  }}
                  align="center"
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleRows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:hover': { backgroundColor: '#f5f7ff' },
                  backgroundColor: index % 2 === 0 ? '#fafbff' : '#ffffff',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <TableCell align="center">{row.adi}</TableCell>
                <TableCell align="center">{row.sekli}</TableCell>
                <TableCell align="center" sx={{ whiteSpace: 'pre-line' }}>
                  {Array.isArray(row.turu) ? row.turu.join('\n') : row.turu}
                </TableCell>
                <TableCell align="center">{row.davetli}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={row.durum}
                    sx={{
                      fontWeight: 'bold',
                      backgroundColor:
                        row.durum === 'Aktif' ? '#D4EDDA' : '#FFF3CD',
                      color: row.durum === 'Aktif' ? '#155724' : '#721C24',
                      fontSize: '0.875rem',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100px',
                      textAlign: 'center',
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton>
                    <VisibilityIcon
                      sx={{ color: '#171fb7', fontSize: '1.4rem' }}
                    />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton>
                    <EditIcon sx={{ color: '#333' }} />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon sx={{ color: 'red' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* PAGINATION */}
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
          count={Math.ceil(rows.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          showFirstButton
          showLastButton
          renderItem={(item) => <PaginationItem {...item} />}
        />

        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20]}
          component="div"
          count={rows.length}
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
