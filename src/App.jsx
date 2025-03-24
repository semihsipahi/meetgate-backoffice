import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../src/global.css';
import routes from './config/routes';
import { AuthProvider } from './hooks/Auth/AuthContext';
import { MeetingProvider } from './hooks/Meeting/MeetingContext';
import { QuestionSetProvider } from './hooks/QuestionSet/QuestionSetContext';
import { SideBarProvider } from './hooks/SideBar/SideBarContext';
('./i18n');

function App() {
  return (
    <Router>
      <AuthProvider>
        <SideBarProvider>
          <MeetingProvider>
            <QuestionSetProvider>
              <ToastContainer />
              <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
                <AppRoutes />
              </div>
            </QuestionSetProvider>
          </MeetingProvider>
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
