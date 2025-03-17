import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import DashboardLayout from '../../../components/Common/dashboard/DashboardLayout';
import './style.css';

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

Modal.setAppElement('#root');

function ListQuestion() {
  const [categoryName, setCategoryName] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [categoryDescription, setCategoryDescription] = useState('');

  const [questions, setQuestions] = useState([]);

  useEffect(() => {}, []);

  const handleUpdate = () => {
    console.log('Kategori Güncellendi!');
  };

  const handleClear = () => {
    setCategoryName('');
    setCategoryDescription('');
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <DashboardLayout>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Category Modal"
      >
        <h2>Kategori Güncelle</h2>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Kategori Adı"
        />
        <textarea
          value={categoryDescription}
          onChange={(e) => setCategoryDescription(e.target.value)}
          placeholder="Kategori Açıklaması"
        />
        <button onClick={handleUpdate}>Güncelle</button>
        <button onClick={handleClear}>Temizle</button>
        <button onClick={() => setModalIsOpen(false)}>Kapat</button>
      </Modal>

      <Box sx={{ marginTop: 2 }}>
        <h2>Soru Listesi</h2>
        <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {questions.map((question, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{question.title}</TableCell>
                  <TableCell align="left">{question.description}</TableCell>
                  <TableCell align="left">{question.weight}</TableCell>
                </TableRow>
              ))}
              {questions.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    Henüz soru bulunmuyor.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </DashboardLayout>
  );
}

export default ListQuestion;
