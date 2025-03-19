import { useQuestionSet } from '../../../../hooks/QuestionSet/QuestionSetContext';
import CreateAIQuestion from '../Creation/CreateAIQuestion';
import CreateAIQuestionDefine from '../Define/CreateAIQuestionDefine';
import CreateQuestionFinal from '../Final/CreateQuestionFinal';
import Steps from '../Steps/Steps';
import CreateWeigthQuestion from '../Weigth/CreateWeigthQuestion';
import styles from './styles.module.css';

const StepLayout = () => {
  const { createStep } = useQuestionSet();

  const stepFactory = () => {
    switch (createStep) {
      case 'Creation':
        return <CreateAIQuestion />;
      case 'Define':
        return <CreateAIQuestionDefine />;
      case 'Weight':
        return <CreateWeigthQuestion />;
      case 'Ready':
        return <CreateQuestionFinal />;
      default:
        break;
    }
  };

  return (
    <div className={styles.page_container}>
      <Steps />
      {stepFactory()}
    </div>
  );
};
export default StepLayout;
