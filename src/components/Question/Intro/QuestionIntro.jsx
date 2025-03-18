import styles from './styles.module.css';

const QuestionInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <h1>Sorular</h1>
        <p>
          Bu ekran üzerinden Yapay Zeka tabanlı soru üretebilir yada kendi
          sorularınızı oluşturabilirsiniz
        </p>
      </div>

      <div className={styles.buttons}>
        <button className={`${styles.btn} ${styles.btn_elite}`}>Ekle +</button>
        <button className={`${styles.btn} ${styles.btn_hazir}`}>
          Hazır Soru Setleri
        </button>
        <button className={`${styles.btn} ${styles.btn_taslaklar}`}>
          Taslaklar
        </button>
      </div>
    </div>
  );
};
export default QuestionInfo;
