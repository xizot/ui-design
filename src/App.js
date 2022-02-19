import { CssBaseline } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/Common/PrivateRoute/PrivateRoute';
import Footer from './components/Layouts/Footer/Footer';
import Header from './components/Layouts/Header/Header';
import { routes } from './configs';
import { authActions } from './redux/actions/auth.action';
import { ratedActions } from './redux/actions/rated.action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      dispatch(authActions.loginSuccess(JSON.parse(auth)));
    }

    var rated = localStorage.getItem('rated');
    if (rated) {
      dispatch(ratedActions.loadRated(JSON.parse(rated)));
    }
  }, [dispatch]);
  return (
    <div className="App">
      <ToastContainer />
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
