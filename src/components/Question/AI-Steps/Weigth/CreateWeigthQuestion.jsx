import styles from './styles.module.css';

const CreateWeigthQuestion = () => {
  return (
    <div className={styles.weights_container}>
      <div className={styles.header_section}>
        <h2 className={styles.main_title}>Set the Weight of Your Questions</h2>
        <p className={styles.sub_title}>
          You can reorder or adjust the weighting of your interview questions
          below.
        </p>
      </div>
      <div className={styles.content_section}>
        <div className={styles.questions_list}>
          <div className={styles.question_card}>
            <div className={styles.question_number}>01</div>
            <div className={styles.question_text_block}>
              <p className={styles.question_text}>
                Explain, as a Social Media Expert, how would you manage the
                brand's online reputation?
              </p>
            </div>
            <div className={styles.weight_section}>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="70"
                className={styles.weight_slider}
              />
              <span className={styles.weight_label}>70%</span>
            </div>
          </div>
          <div className={styles.question_card}>
            <div className={styles.question_number}>02</div>
            <div className={styles.question_text_block}>
              <p className={styles.question_text}>
                In your opinion, how important is social listening for brand
                awareness?
              </p>
            </div>
            <div className={styles.weight_section}>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="85"
                className={styles.weight_slider}
              />
              <span className={styles.weight_label}>85%</span>
            </div>
          </div>

          {/* Örnek 3 */}
          <div className={styles.question_card}>
            <div className={styles.question_number}>03</div>
            <div className={styles.question_text_block}>
              <p className={styles.question_text}>
                Describe a scenario where negative brand feedback was handled
                effectively.
              </p>
            </div>
            <div className={styles.weight_section}>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                className={styles.weight_slider}
              />
              <span className={styles.weight_label}>50%</span>
            </div>
          </div>
        </div>

        <div className={styles.summary_section}>
          <h3 className={styles.summary_title}>
            Total Weight of Your Questions
          </h3>

          <div className={styles.circle_container}>
            <svg
              className={styles.donut_chart}
              width="120"
              height="120"
              viewBox="0 0 42 42"
            >
              <circle
                className={styles.donut_ring}
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke="#eee"
                strokeWidth="4"
              ></circle>
              <circle
                className={styles.donut_segment}
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke="#4c6fff"
                strokeWidth="4"
                strokeDasharray="85 15" /* 85% dolu, 15% boş */
                strokeDashoffset="25" /* Daire başlangıç noktası ayarı */
              ></circle>
            </svg>
            <div className={styles.percentage_label}>85%</div>
          </div>

          <p className={styles.summary_text}>
            Once the total weighting reaches 100%, your question set is ready.
          </p>
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
export default CreateWeigthQuestion;
