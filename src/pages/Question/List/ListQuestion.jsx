import React, { useState } from 'react';
import Modal from 'react-modal';
import DashboardLayout from '../../../components/Common/dashboard/DashboardLayout';
import styles from './modal.module.css';
import './style.css';

Modal.setAppElement('#root');

function ListQuestion() {
  const [categoryName, setCategoryName] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [categoryDescription, setCategoryDescription] = useState('');

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
      <div>
        <main className="main-content">
          <section className="page-header">
            <br />
            <h1 className="page-header__title">Soru Kategorileri</h1>
            <p className="page-header__description">
              Bu ekran üzerinden sadece Soru Kategorileri yönetebilirsiniz
            </p>
            <button
              className="add-category-btn"
              onClick={() => {
                setModalIsOpen(true);
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
                <tr>
                  <td className="table-data">Tasarım Grubu</td>
                  <td className="table-data">Tasarım ile ilgili sorular</td>
                  <td className="table-data">
                    <span className="status status--published">Yayınlandı</span>
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
                <tr>
                  <td className="table-data">İş Analizi</td>
                  <td className="table-data">Tasarım ile ilgili sorular</td>
                  <td className="table-data">
                    <span className="status status--passive">Pasif</span>
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
                <tr>
                  <td className="table-data">İş Analizi</td>
                  <td className="table-data">Tasarım ile ilgili sorular</td>
                  <td className="table-data">
                    <span className="status status--passive">Pasif</span>
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
              </tbody>
            </table>
          </section>
        </main>

        <Modal
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Soru Kategorisi Ekle"
        >
          <div className={styles.container}>
            <h2 className={styles.title}>Soru Kategorisi Düzenle</h2>
            <p className={styles.subtitle}>
              Soru setlerinizi kategoriler altında toplayarak daha kolay
              erişilebilir hale getirebilirsiniz
            </p>
            <div className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="categoryName">
                  Kategori Adı
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
                  Kategori Açıklaması
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
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.clearButton} onClick={handleClear}>
                Temizle
              </button>
              <button className={styles.updateButton} onClick={handleUpdate}>
                Güncelle
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </DashboardLayout>
  );
}
export default ListQuestion;
