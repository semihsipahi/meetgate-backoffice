import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { notify } from '../../../components/ScreenMessages/Toastify';
import { useQuestionSet } from '../../../hooks/QuestionSet/QuestionSetContext';
import { fetchTypeList } from '../../../service/Common/CommonService';
import { createQuestionSet } from '../../../service/QuestionSet/QuestionSetService';
import styles from './modal.module.css';

const CreateQuestionSet = () => {
  const [types, setTypes] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [selectedStatus, setSelectedStatus] = useState();

  const { createModalState, setCreateModalState } = useQuestionSet();

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

  useEffect(() => {
    (async () => {
      const response = await fetchTypeList();

      if (!response) {
        return;
      }

      setTypes(response?.data);
    })();
  }, []);

  const handleOnSave = async () => {
    const response = await createQuestionSet({
      name: categoryName,
      description: categoryDescription,
      statusId: selectedStatus,
    });

    if (response.status) {
      notify('Ekleme işlemi başarılı');
    }

    setCreateModalState(false);
  };

  return (
    <Modal
      style={customStyles}
      isOpen={createModalState}
      onClose={() => setCreateModalState(!createModalState)}
      onRequestClose={() => setCreateModalState(!createModalState)}
      contentLabel="Soru Seti"
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Soru Seti</h2>
        <p className={styles.subtitle}>
          Sorularınızı soru setlerinin altında toplayarak daha kolay
          erişilebilir hale getirebilirsiniz
        </p>
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="categoryName">
              Soru Seti Adı
            </label>
            <input
              id="categoryName"
              type="text"
              className={styles.input}
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="categoryDescription">
              Soru Seti Açıklaması
            </label>
            <textarea
              id="categoryDescription"
              className={styles.textarea}
              maxLength={74}
              value={categoryDescription}
              onChange={(e) => setCategoryDescription(e.target.value)}
            />
            <div className={styles.charCount}>
              {categoryDescription.length} / 74
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="statusDropdown">Status</label>
              <select
                id="statusDropdown"
                className={styles.dropdown}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {types.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.updateButton} onClick={handleOnSave}>
            Kaydet
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default CreateQuestionSet;
