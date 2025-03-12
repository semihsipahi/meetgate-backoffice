import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../src/global.css';
import routes from './config/routes';
import { AuthProvider } from './hooks/Auth/AuthContext';
import './i18n';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastContainer />
        <div style={{ backgroundColor: '#E9EEFA', minHeight: '100vh' }}>
          <AppRoutes />
        </div>
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
