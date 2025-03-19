'use client';

import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/Common/dashboard/DashboardLayout';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import TableLayout from '../../../components/Common/Table/TableLayout';
import {
  fetchQuestionList,
  removeQuestion,
} from '../../../service/Question/QuestionService';
import './style.css';

function ListQuestion() {
  const [questions, setQuestions] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [removeDialog, setRemoveDialog] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const res = await fetchQuestionList();
    if (res && res.data) {
      setQuestions(res.data);
    }
  };

  const handleOnEdit = async (item) => {
    console.log('Düzenlenecek soru:', item);
    setSelectedRow(item);
  };

  const handleOnRemove = async (item) => {
    setSelectedRow(item);
    setRemoveDialog(true);
  };

  const handleRemoveDialogClose = () => {
    setRemoveDialog(false);
    setSelectedRow(null);
  };

  const handleRemoveDialogSubmit = async () => {
    setRemoveDialog(false);
    if (!selectedRow) return;
    await removeQuestion(selectedRow.id);
    await init();
  };

  return (
    <DashboardLayout>
      <div className="main-content-question">
        <section className="page-header">
          <br />
          <Button
            variant="contained"
            onClick={() => {
              console.log('Yeni Soru Ekle modalı açılabilir...');
            }}
          >
            Yeni Soru Ekle
          </Button>
        </section>

        {questions && questions.length > 0 && (
          <TableLayout
            title="Soru Listesi"
            columns={[
              { label: 'Title', field: 'title', normal: true },
              { label: 'Description', field: 'description', normal: true },
              { label: 'Weight', field: 'weight', normal: true },
              {
                label: 'Aksiyonlar',
                action: true,
              },
            ]}
            rows={questions}
            handleOnEdit={(e) => handleOnEdit(e)}
            handleOnRemove={(e) => handleOnRemove(e)}
          />
        )}
      </div>
      <Dialog
        open={removeDialog}
        onClose={handleRemoveDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Soru Silinecek</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {selectedRow
              ? `'${selectedRow.title}' başlıklı soruyu silmek istediğinize emin misiniz?`
              : ''}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemoveDialogClose}>Vazgeç</Button>
          <Button onClick={handleRemoveDialogSubmit} autoFocus>
            Sil
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default ListQuestion;
