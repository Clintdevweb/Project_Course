import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import SearchPage from './Pages/SearchPage/SearchPage';
import DetailCourse from './Pages/DetailCouse/DetailCourse';
import PersonalPages from './Pages/PersonalPages/PersonalPages';
import CourseCategory from './Pages/DanhMucKhoaHoc/CourseCategory';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import UserTemplate from './Templates/UseTemplate/UserTemplate';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import './App.css';
import { LOG_IN } from './Redux/types/userTypes';
import { _getCredentailFromLocal } from './Redux/action/UserAction';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(_getCredentailFromLocal)
  }, [])
  return (
    <BrowserRouter>     
      <Switch>
        <HomeTemplate path="/" exact component={Home} />
        <HomeTemplate path="/trangchu" exact component={Home} />
        <HomeTemplate path="/danhmuckhoahoc/:maDanhMuc" exact component={CourseCategory} />
        <HomeTemplate path="/timkiem/:tuKhoa" exact component={SearchPage} />
        <HomeTemplate path="/chitiet/:maKhoaHoc" exact component={DetailCourse} />
        <HomeTemplate path="/thongtincanhan" exact component={PersonalPages} />
        <UserTemplate path="/login" exact component={Login} />
      </Switch>            
    </BrowserRouter>
  )
}

export default App;
