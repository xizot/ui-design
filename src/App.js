import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/Common/PrivateRoute/PrivateRoute';
import Footer from './components/Layouts/Footer/Footer';
import Header from './components/Layouts/Header/Header';
import { routes } from './configs';
import { authActions } from './redux/actions/auth.action';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('isAuthenticated')) {
      dispatch(authActions.loginSuccess());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Routes>
        {routes.map((route, i) =>
          route.protected ? (
            <Route
              path={route.path}
              exact={route.exact}
              key={i}
              element={
                <PrivateRoute backUrl={route.path}>
                  <route.component title={route.title} />
                </PrivateRoute>
              }
            />
          ) : (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              element={<route.component title={route.title} />}
            />
          )
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
