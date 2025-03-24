import { createElement } from 'react';
import PrivateRoute from '../components/Auth/PrivateRoute';
import AnalyseResult from '../pages/Analyse/Result/AnalyseResult';
import Login from '../pages/Auth/Login';
import Blank from '../pages/Blank/Blank';
import Home from '../pages/Home/Home';
import CreateMeet from '../pages/Meet/Creation/CreateMeet';
import CreateQuestion from '../pages/Question/Creation/CreateQuestion';
import ListQuestion from '../pages/Question/List/ListQuestion';
import ListQuestionSet from '../pages/QuestionSet/List/ListQuestionSet';

const routes = [
  {
    path: '/',
    element: createElement(PrivateRoute, {}, createElement(Home)),
    title: 'Home',
    protected: true,
  },
  {
    path: '/login',
    element: createElement(Login),
    title: 'Login',
    protected: false,
  },
  {
    path: '/blank',
    element: createElement(Blank),
    title: 'Blank',
    protected: false,
  },
  {
    path: '/question/create',
    element: createElement(PrivateRoute, {}, createElement(CreateQuestion)),
    title: 'Create Question',
    protected: true,
  },
  {
    path: '/question/list',
    element: createElement(PrivateRoute, {}, createElement(ListQuestion)),
    title: 'Create Question',
    protected: true,
  },
  {
    path: '/question-set/list',
    element: createElement(PrivateRoute, {}, createElement(ListQuestionSet)),
    title: 'List Question Set',
    protected: true,
  },
  {
    path: '/analyse/result',
    element: createElement(PrivateRoute, {}, createElement(AnalyseResult)),
    title: 'Analyse Result',
    protected: true,
  },
  {
    path: '/meet/createmeet',
    element: createElement(PrivateRoute, {}, createElement(CreateMeet)),
    title: 'Create Meet',
    protected: true,
  },
];

export default routes;
