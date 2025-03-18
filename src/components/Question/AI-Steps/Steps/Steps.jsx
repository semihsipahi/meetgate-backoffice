import { useQuestionSet } from '../../../../hooks/QuestionSet/QuestionSetContext';
import styles from './styles.module.css';

const Steps = () => {
  const { createStep, setCreateStep } = useQuestionSet();

  const handleWhichStep = (currentStep) => {
    setCreateStep(currentStep);
  };

  return (
    <div className={styles.question_set_wrapper}>
      <div className={styles.question_set_container}>
        <div className={styles.header_section}>
          <h1 className={styles.main_title}>Soru Seti Adımları</h1>
          <p className={styles.sub_title}>
            Adımları tamamlayarak soru setinizi oluşturun
          </p>
        </div>
        <div className={styles.steps_list}>
          <div
            onClick={() => handleWhichStep('Creation')}
            className={`${styles.step_item} ${createStep === 'Creation' ? styles.step_item_active : ''}`}
          >
            <div className={styles.step_icon}>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+"
                alt="icon"
              />
            </div>
            <span className={styles.step_label}>Soru Setinizi Oluşturun</span>
          </div>
          <div
            onClick={() => handleWhichStep('Define')}
            className={`${styles.step_item} ${createStep === 'Define' ? styles.step_item_active : ''}`}
          >
            <div className={styles.step_icon}>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+"
                alt="icon"
              />
            </div>
            <span className={styles.step_label}>
              Soruları ve Cevapları Belirleyin
            </span>
          </div>
          <div
            onClick={() => handleWhichStep('Weight')}
            className={`${styles.step_item} ${createStep === 'Weight' ? styles.step_item_active : ''}`}
          >
            <div className={styles.step_icon}>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+"
                alt="icon"
              />
            </div>
            <span className={styles.step_label}>
              Soruların Ağırlığını Belirleyin
            </span>
          </div>
          <div
            onClick={() => handleWhichStep('Ready')}
            className={`${styles.step_item} ${createStep === 'Ready' ? styles.step_item_active : ''}`}
          >
            <div className={styles.step_icon}>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIi8+"
                alt="icon"
              />
            </div>
            <span className={styles.step_label}>Soru Setiniz Hazır </span>
          </div>
        </div>
        <div className={styles.footer_section}>
          <button className={styles.cta_button}>Hazır Soru Setleri</button>
          <p className={styles.footer_text}>Daha Hızlı Soru Seti Oluştur</p>
        </div>
      </div>
    </div>
  );
};
export default Steps;
