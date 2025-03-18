import styles from './styles.module.css';

const CreateQuestionFinal = () => {
  return (
    <div className={styles.finalize_container}>
      <div className={styles.header_section}>
        <h2 className={styles.main_title}>Set the Weights of Your Questions</h2>
        <p className={styles.sub_title}>
          You can reorder or adjust the weighting of your interview questions
          below.
        </p>
      </div>
      <div className={styles.questions_list}>
        <div className={styles.question_item}>
          <div className={styles.check_icon}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnL3N2ZyI+PHBhdGggZD0iTTkgMTYuMTcsNC41NyAxMC43N2MuNDItLjQyLDEtLjQyLDEuNDEgMGwuNzkuNzljLjQyLjQyLjQyIDEgMCAxLjQxbC02LjI5IDYuMjljLS40Mi40Mi0xIC40Mi0xLjQxIDBsLS43OS0uNzljLS40Mi0uNDItLjQyLTEgMC0xLjQxbDUuMDktNS4wOXptMCAwIi8+PHBhdGggZD0iTTkgMTYuMTcsNC41NyAxMC43N2MuNDItLjQyLDEtLjQyLDEuNDEgMGwuNzkuNzljLjQyLjQyLjQyIDEgMCAxLjQxbC02LjI5IDYuMjljLS40Mi40Mi0xIC40Mi0xLjQxIDBsLS43OS0uNzljLS40Mi0uNDItLjQyLTEgMC0xLjQxbDUuMDktNS4wOXptMCAwIiBmaWxsPSIjMzFkMDdhIi8+PC9zdmc+"
              alt="check-icon"
            />
          </div>
          <p className={styles.question_text}>
            Explain, as a Social Media Expert, how would you manage the brand's
            online reputation?
          </p>
          <div className={styles.question_weight}>50</div>
        </div>

        <div className={styles.question_item}>
          <div className={styles.check_icon}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnL3N2ZyI+PHBhdGggZD0iTTkgMTYuMTcsNC41NyAxMC43N2MuNDItLjQyLDEtLjQyLDEuNDEgMGwuNzkuNzljLjQyLjQyLjQyIDEgMCAxLjQxbC02LjI5IDYuMjljLS40Mi40Mi0xIC40Mi0xLjQxIDBsLS43OS0uNzljLS40Mi0uNDItLjQyLTEgMC0xLjQxbDUuMDktNS4wOXptMCAwIi8+PHBhdGggZD0iTTkgMTYuMTcsNC41NyAxMC43N2MuNDItLjQyLDEtLjQyLDEuNDEgMGwuNzkuNzljLjQyLjQyLjQyIDEgMCAxLjQxbC02LjI5IDYuMjljLS40Mi40Mi0xIC40Mi0xLjQxIDBsLS43OS0uNzljLS40Mi0uNDItLjQyLTEgMC0xLjQxbDUuMDktNS4wOXptMCAwIiBmaWxsPSIjMzFkMDdhIi8+PC9zdmc+"
              alt="check-icon"
            />
          </div>
          <p className={styles.question_text}>
            How important is social listening for brand awareness, in your
            opinion?
          </p>
          <div className={styles.question_weight}>50</div>
        </div>

        <div className={styles.question_item}>
          <div className={styles.check_icon}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnL3N2ZyI+PHBhdGggZD0iTTkgMTYuMTcsNC41NyAxMC43N2MuNDItLjQyLDEtLjQyLDEuNDEgMGwuNzkuNzljLjQyLjQyLjQyIDEgMCAxLjQxbC02LjI5IDYuMjljLS40Mi40Mi0xIC40Mi0xLjQxIDBsLS43OS0uNzljLS40Mi0uNDItLjQyLTEgMC0xLjQxbDUuMDktNS4wOXptMCAwIi8+PHBhdGggZD0iTTkgMTYuMTcsNC41NyAxMC43N2MuNDItLjQyLDEtLjQyLDEuNDEgMGwuNzkuNzljLjQyLjQyLjQyIDEgMCAxLjQxbC02LjI5IDYuMjljLS40Mi40Mi0xIC40Mi0xLjQxIDBsLS43OS0uNzljLS40Mi0uNDItLjQyLTEgMC0xLjQxbDUuMDktNS4wOXptMCAwIiBmaWxsPSIjMzFkMDdhIi8+PC9zdmc+"
              alt="check-icon"
            />
          </div>
          <p className={styles.question_text}>
            Describe a scenario where negative brand feedback was handled
            effectively.
          </p>
          <div className={styles.question_weight}>50</div>
        </div>
      </div>

      <div className={styles.ready_section}>
        <div className={styles.ready_icon}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnL3N2ZyI+PHBhdGggZD0iTTkgMTYuMTcsNC41NyAxMC43N2MuNDItLjQyLDEtLjQyLDEuNDEgMGwuNzkuNzljLjQyLjQyLjQyIDEgMCAxLjQxbC02LjI5IDYuMjljLS40Mi40Mi0xIC40Mi0xLjQxIDBsLS43OS0uNzljLS40Mi0uNDItLjQyLTEgMC0xLjQxbDUuMDktNS4wOXptMCAwIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+"
            alt="ready-icon"
          />
        </div>
        <h3 className={styles.ready_title}>Everything is Ready</h3>
        <p className={styles.ready_description}>
          You can add or revise your question set if you wish, then save it.
        </p>
      </div>

      <div className={styles.footer_actions}>
        <button className={styles.prev_button}>Previous Step</button>
        <button className={styles.create_button}>Create Question Set</button>
      </div>
    </div>
  );
};
export default CreateQuestionFinal;
