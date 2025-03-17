'use client';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/Common/dashboard/DashboardLayout';
import TableLayout from '../../../components/Common/Table/TableLayout';
import { useQuestionSet } from '../../../hooks/QuestionSet/QuestionSetContext';
import { fetchTypeList } from '../../../service/Common/CommonService';
import {
  fetchQuestionSets,
  removeQuestionSets,
} from '../../../service/QuestionSet/QuestionSetService';
import CreateQuestionSet from '../Creation/CreateQuestionSet';
import './style.css';

function ListQuestionSet() {
  const { createModalState, setCreateModalState } = useQuestionSet();

  const [types, setTypes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [removeDialog, setRemoveDialog] = useState(false);

  useEffect(() => {
    (async () => {
      await init();
    })();
  }, []);

  const init = async () => {
    await Promise.all([fetchTypeList(), fetchQuestionSets()]).then(
      ([typesResponse, setsResponse]) => {
        setTypes(typesResponse?.data);
        setQuestions(
          setsResponse?.data.map((item) => {
            const temp = item;
            temp.name = item.name;
            temp.description = item.description;
            temp.status = typesResponse?.data.find(
              (x) => x.id === item?.statusId
            )?.name;
            return temp;
          })
        );
      }
    );
  };

  const handleOnAfterSave = async () => {
    await init();
  };

  const handleModalTransaction = (item) => {
    setSelectedRow(item);
    setCreateModalState(!createModalState);
  };

  const handleRemoveDialogClose = () => {
    setRemoveDialog(false);
  };

  const handleRemoveDialogSubmit = async () => {
    setRemoveDialog(false);

    await removeQuestionSets(selectedRow?.id);
    await init();
  };

  const handleOnEdit = async (item) => {
    setSelectedRow(item);
    setCreateModalState(!createModalState);
  };

  const handleOnRemove = async (item) => {
    setRemoveDialog(true);
    setSelectedRow(item);
  };

  return (
    <>
      <DashboardLayout>
        <div>
          <main className="main-content">
            <section className="page-header">
              <br />
              <button
                className="add-category-btn"
                onClick={handleModalTransaction}
              >
                Yeni Soru Seti
              </button>
            </section>
            {questions && questions?.length > 0 && (
              <>
                <TableLayout
                  title="Soru Setleri"
                  columns={[
                    { label: 'Adı', field: 'name', normal: true },
                    {
                      label: 'Açıklama',
                      field: 'description',
                      normal: true,
                    },
                    {
                      label: 'Durum',
                      field: 'status',
                      showChips: true,
                      status: 'Aktif',
                    },
                    {
                      label: 'Aksiyonlar',
                      action: true,
                    },
                  ]}
                  rows={questions}
                  handleOnEdit={(e) => handleOnEdit(e)}
                  handleOnRemove={(e) => handleOnRemove(e)}
                />
              </>
            )}
          </main>

          {createModalState && (
            <div style={{ zIndex: 99999 }}>
              <CreateQuestionSet
                types={types}
                record={selectedRow}
                onAfterSave={handleOnAfterSave}
              />
            </div>
          )}
        </div>
      </DashboardLayout>
      <Dialog
        open={removeDialog}
        onClose={handleRemoveDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Kaydı Silmek İstediğinize Emin misiniz?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Seçmiş olduğunuz '${selectedRow?.name}' başlıklı soruyu sistemden tamamen kaldırmak istediğinize eminmisiniz ?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRemoveDialogClose}>Vazgeç</Button>
          <Button onClick={handleRemoveDialogSubmit} autoFocus>
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ListQuestionSet;
