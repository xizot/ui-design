import { Routes, Route } from "react-router-dom";
import { routes } from "./configs";
function App() {
  return (
    <div className='App'>
      <header className='App-header'>this is header</header>
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
    </div>
  );
}

export default App;
