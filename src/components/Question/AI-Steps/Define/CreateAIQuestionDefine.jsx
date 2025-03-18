import styles from './styles.module.css';

const CreateAIQuestionDefine = () => {
  return (
    <div className={styles.qna_container}>
      <div className={styles.header_section}>
        <h2 className={styles.main_title}>Soruları ve Cevapları Belirleyin</h2>
        <p className={styles.sub_title}>
          Katılımcıların , değerlendirme sorularına verdikleri cevaplar
          üzerinden belirli bir puanlamaya tutulduğu görüşmelerdir.
        </p>
      </div>
      <div className={styles.button_group}>
        <button className={styles.primary_button}>Soru Ekle</button>
        <button className={styles.primary_button}>AI ile Soru Ekle</button>
      </div>
      <h3 className={styles.section_title}>Metageta Demo Sorular 1</h3>
      <div className={styles.question_card}>
        <div className={styles.question_number}>01</div>
        <div className={styles.question_content}>
          <p className={styles.question_text}>
            Anlatın , bir sosyal medya uzmanı olarak markanın cevrimiçi
            itibarını nasıl yönetirsiniz ?
          </p>
          <p className={styles.question_description}>
            1. The brand’s reputation management is crucial, especially in
            negative situations. 2. Monitoring brand mentions and responding
            quickly to feedback is key. 3. Build positive communication channels
            with your audience for crisis management.
          </p>
        </div>
        <div className={styles.question_actions}>
          <button className={styles.action_button} title="Edit Question">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzAwMDAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUuMzMzMyAxLjMzMzM0TDE0LjY2NjcgMC42NjY2NjVDMTQuNDQ0NCAwLjQ0NDQ0MSAxNC4xMTExIDAuMzM1MjkxIDEzLjc3NzcgMC4zMzUyOTFIMTMuNzc3N0wzLjUxMTExIDcuMzM1MjkxQzMuMTc3NzEgNy41NjU2NzYgMi45MTExOCA3Ljg1ODY4MyAyLjc3NzcxIDguMjIyMjI3TDIuMDAwMDEgMTAuOTU1NTNDMS45NjY2NyAxMS4wOTg4OCAyLjAwMDAxIDExLjI0NDQ0IDIuMTExMTEgMTEuMzU1NTNMMi45NTU1NSAxMi4yLjc1NTU0NiBDMy4wNjY2NyAxMi40NjY2NyAzLjQ0NDQ0IDEyLjY2NjY3IDMuODg4ODggMTIuNjY2NjdIMy44ODg4OEw2LjY2NjY3IDEyTDEzLjMzNTMgNS4zMzUzMDJIMTMuMzM1M0MxMy42NjY2NyA1LjMzNTMwMiAxMy44ODg4OCA1LjEwMDAyOSAxNC4wOTg4OCA0Ljg4ODg3OUMxNC4zMzUzMDIgNC42NjY2NyAxNC40NDQ0NCA0LjQ0NDQ0MSAxNC42NjY2NyA0LjIyMjI0TDE1LjMzMzMgMy41NTU1NjZDMTUuNzMxNCAzLjE1NTU2NiAxNS43MzE1IDIuNDQ0NDQxIDE1LjMzMzMgMi4wMDExMTJDMTUuMzMzMyAyLjAwMDAwMyAxNS4zMzMzIDEuMzMzMzQgMTUuMzMzMyAxLjMzMzM0WiIgZmlsbD0iI0FBQUFBQSIvPjwvc3ZnPg=="
              alt="edit-icon"
            />
          </button>
          <button className={styles.action_button} title="Delete Question">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzAwMDAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMi4wMDAxMyA0LjMzMzMxSDMuMzMzMzNIMTIlNkIxMi42NjY3IDQuMzMzMzEgMTMuMzMzMyA1IDI0NjY2N0w5LjMzMzMxQzUuMzMzMzEgNSAwIDUuMyAzLjMzMzMxIDUuMzMzMzFBQzUuMzMzMzEgNS4zMzMzMzEgMy44ODg4NyA1LjMzMzMzMSAzLjQ0NDQzIDUuMzMzMzMxeiIvPjwvc3ZnPg=="
              alt="delete-icon"
            />
          </button>
        </div>
      </div>
      <br />
      <div className={styles.action_buttons}>
        <button className={styles.prev_button}>Önceki Adım</button>
        <button className={styles.next_button}>Sonraki Adım</button>
      </div>
    </div>
  );
};
export default CreateAIQuestionDefine;
