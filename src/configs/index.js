import Rated from "../pages/AUTH/Rated/Rated";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Register from "../pages/Register/Register";
import Search from "../pages/Search/Search";

export const routes = [
  {
    path: "/",
    exact: true,
    protected: false,
    title: "Home Page",
    component: Home,
  },
  {
    path: "/details/:id",
    exact: true,
    protected: false,
    title: "Movie Details Page",
    component: MovieDetails,
  },
  {
    path: "/login",
    exact: true,
    protected: false,
    title: "Login Page",
    component: Login,
  },
  {
    path: "/register",
    exact: true,
    protected: false,
    title: "Register Page",
    component: Register,
  },
  {
    path: "/rated",
    exact: true,
    protected: true,
    title: "Rated Page",
    component: Rated,
  },
  {
    path: "/search",
    exact: true,
    protected: false,
    title: "Search Page",
    component: Search,
  },
];
