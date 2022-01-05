import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layouts/Footer/Footer";
import Header from "./components/Layouts/Header/Header";
import { routes } from "./configs";
function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Routes>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={<route.component title={route.title} />}
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
