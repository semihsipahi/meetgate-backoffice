import Modal from 'react-modal';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../src/global.css';
import routes from './config/routes';
import { AuthProvider } from './hooks/Auth/AuthContext';
import { QuestionSetProvider } from './hooks/QuestionSet/QuestionSetContext';
import { SideBarProvider } from './hooks/SideBar/SideBarContext';
('./i18n');

Modal.setAppElement('#root');

function App() {
  return (
    <Router>
      <AuthProvider>
        <SideBarProvider>
          <QuestionSetProvider>
            <ToastContainer />
            <div style={{ backgroundColor: '#E9EEFA', minHeight: '100vh' }}>
              <AppRoutes />
            </div>
          </QuestionSetProvider>
        </SideBarProvider>
      </AuthProvider>
    </Router>
  );
}

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
