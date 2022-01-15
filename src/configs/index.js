import Rated from '../pages/AUTH/Rated/Rated';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Register from '../pages/Register/Register';
import Search from '../pages/Search/Search';
import Logout from '../pages/Logout/Logout';

export const routes = [
  {
    path: '/',
    exact: true,
    protected: false,
    title: 'Trang chủ',
    component: Home,
  },
  {
    path: '/details/:id',
    exact: true,
    protected: false,
    title: 'Chi tiết phim',
    component: MovieDetails,
  },
  {
    path: '/login',
    exact: true,
    protected: false,
    title: 'Đăng nhập',
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    protected: false,
    title: 'Đăng kí',
    component: Register,
  },
  {
    path: '/rated',
    exact: true,
    protected: true,
    title: 'Danh sách đã đánh giá',
    component: Rated,
  },
  {
    path: '/search',
    exact: true,
    protected: false,
    title: 'Tìm kiếm',
    component: Search,
  },
  {
    path: '/logout',
    exact: true,
    protected: false,
    title: 'Đăng xuất',
    component: Logout,
  },
];
