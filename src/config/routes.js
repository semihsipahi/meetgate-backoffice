// src/config/routes.js
import { createElement } from 'react';
import PrivateRoute from '../components/Auth/PrivateRoute';
import AnalyseResult from '../pages/Analyse/Result/AnalyseResult';
import Login from '../pages/Auth/Login';
import Blank from '../pages/Blank/Blank';
import Home from '../pages/Home/Home';
import CreateQuestion from '../pages/Question/Creation/CreateQuestion';

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
    path: '/analyse/result',
    element: createElement(PrivateRoute, {}, createElement(AnalyseResult)),
    title: 'Analyse Result',
    protected: true,
  },
];

export default routes;
