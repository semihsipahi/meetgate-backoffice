import styles from './styles.module.css';

const CreateAIQuestion = () => {
  return (
    <div className={styles.form_container}>
      <h2 className={styles.form_title}>Soru Setinizi Oluşturun</h2>
      <p className={styles.form_subtitle}>
        Katılımcıların ,değerlendirme sorularına verdikleri cevaplar üzerinden
        belirli bir puanlamaya tutulduğu görüşmelerdir.
      </p>

      <div className={styles.form_group}>
        <label className={styles.form_label} htmlFor="questionSetName">
          Soru Setinizin Adı
        </label>
        <input
          className={styles.form_input}
          id="questionSetName"
          type="text"
          placeholder="Soru Setinizin adını giriniz"
        />
      </div>

      <div className={styles.form_group}>
        <label className={styles.form_label} htmlFor="interviewPurpose">
          Görüşme soruları Amacı
        </label>
        <select className={styles.form_input} id="interviewPurpose">
          <option value="">Seçiniz</option>
          <option value="evaluation">Değerlendirme</option>
        </select>
      </div>

      <div className={styles.form_group}>
        <label className={styles.form_label} htmlFor="questionSetDescription">
          Soru Seti Açıklama
        </label>
        <textarea
          className={styles.form_textarea}
          id="questionSetDescription"
          rows="3"
          placeholder="Açıklama Giriniz"
        />
        <div className={styles.char_counter}>0/50</div>
      </div>

      <div className={styles.toggle_group}>
        <div className={styles.toggle_item}>
          <input type="radio" id="draft" name="status" defaultChecked />
          <label htmlFor="draft">Taslak</label>
        </div>
        <div className={styles.toggle_item}>
          <input type="radio" id="active" name="status" />
          <label htmlFor="active">Aktif</label>
        </div>
        <div className={styles.toggle_item}>
          <input type="radio" id="archived" name="status" />
          <label htmlFor="archived">Arşiv</label>
        </div>
      </div>

      <p className={styles.info_text}>
        * Soru içermeyen yada soru ağırlıkları %100'e ulaşmış durumdaki soru
        setleri aktifleştiremezler.
      </p>
      <br />
      <div className={styles.action_buttons}>
        <button className={styles.prev_button}>Önceki Adım</button>
        <button className={styles.next_button}>Sonraki Adım</button>
      </div>
    </div>
  );
};
export default CreateAIQuestion;
