import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/Common/dashboard/DashboardLayout';
import { useQuestionSet } from '../../../hooks/QuestionSet/QuestionSetContext';
import { useSideBar } from '../../../hooks/SideBar/SideBarContext';
import { fetchTypeList } from '../../../service/Common/CommonService';
import { fetchQuestionSets } from '../../../service/QuestionSet/QuestionSetService';
import CreateQuestionSet from '../Creation/CreateQuestionSet';
import './style.css';

function ListQuestionSet() {
  const { setActiveMenu } = useSideBar();
  const { createModalState, setCreateModalState } = useQuestionSet();

  const [types, setTypes] = useState();
  const [questionSets, setQuestionSet] = useState();

  useEffect(() => {
    setActiveMenu('question-set-list');
  }, [setActiveMenu]);

  useEffect(() => {
    (async () => {
      const typesResponse = await fetchTypeList();
      const questionSetResponse = await fetchQuestionSets();

      if (!questionSetResponse || !typesResponse) {
        return;
      }

      setTypes(typesResponse?.data);
      setQuestionSet(questionSetResponse?.data);
    })();
  }, []);

  const bindTypeName = async (id) => {
    return types.find((x) => x.id === id)?.name;
  };

  const bindTypeNameClass = (id) => {
    const current = types.find((x) => x.id === id);

    return current?.id === '6e9b76d5-040e-4f2e-af07-5e301bd8c505'
      ? 'status status--published'
      : 'status status--passive';
  };

  return (
    <DashboardLayout>
      <div>
        <main className="main-content">
          <section className="page-header">
            <br />
            <h1 className="page-header__title">Soru Setleri</h1>
            <p className="page-header__description">
              Bu ekran üzerinden sadece Soru Setlerini yönetebilirsiniz
            </p>
            <button
              className="add-category-btn"
              onClick={() => {
                setCreateModalState(!createModalState);
              }}
            >
              Ekle
            </button>
          </section>
          <section className="category-table-section">
            <table className="category-table">
              <thead>
                <tr>
                  <th className="table-head">Adı</th>
                  <th className="table-head">Açıklama</th>
                  <th className="table-head">Durum</th>
                  <th className="table-head">Düzenle / Sil</th>
                </tr>
              </thead>
              <tbody>
                {questionSets?.map((item) => {
                  return (
                    <tr key={item?.id}>
                      <td className="table-data">{item.name}</td>
                      <td className="table-data">{item.description}</td>
                      <td className="table-data">
                        <span className={bindTypeNameClass(item?.statusId)}>
                          {bindTypeName(item.statusId)}
                        </span>
                      </td>
                      <td className="table-data">
                        <button className="edit-btn" title="Düzenle">
                          ✏️
                        </button>
                        <button className="delete-btn" title="Sil">
                          🗑️
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </main>

        {createModalState && <CreateQuestionSet />}
      </div>
    </DashboardLayout>
  );
}
export default ListQuestionSet;
