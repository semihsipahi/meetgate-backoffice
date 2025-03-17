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
import React, { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';

function createData(adi, sekli, turu, davetli, durum) {
  return { adi, sekli, turu, davetli, durum };
}

// 50 satırlık örnek veri
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
      {/* TABLO */}
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
              <TableCell sx={{ fontWeight: 600 }} align="center">
                Adı
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">
                Şekli
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">
                Türü
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">
                Davetli
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">
                Durum
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">
                Adaylar
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">
                Düzenle / Sil
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleRows.map((row, index) => {
              const durumLabel = row.durum === 'Aktif' ? 'Aktif' : 'Pasif';

              return (
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

                  {/* Durum (Ortada) */}
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Chip
                        label={durumLabel}
                        sx={{
                          fontWeight: 'bold',
                          backgroundColor:
                            row.durum === 'Aktif' ? '#d1e7dd' : '#f8d7da',
                          color: row.durum === 'Aktif' ? '#0f5132' : '#842029',
                          fontSize: '0.875rem',
                          borderRadius: '8px',
                          textAlign: 'center',
                          // Arka planı büyütmek için padding değerlerini artırıyoruz
                          px: 2,
                          py: 1,
                          // Label'ı da ortalamak istersek
                          '.MuiChip-label': {
                            padding: 0,
                          },
                        }}
                      />
                    </Box>
                  </TableCell>

                  {/* Adaylar */}
                  <TableCell align="center">
                    <IconButton>
                      <VisibilityIcon
                        sx={{ color: '#171fb7', fontSize: '1.4rem' }}
                      />
                    </IconButton>
                  </TableCell>

                  {/* Düzenle / Sil */}
                  <TableCell align="center">
                    <IconButton>
                      <EditIcon sx={{ color: '#333' }} />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon sx={{ color: 'red' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* SAYFALAMA (Pagination) */}
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
