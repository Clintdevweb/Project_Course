import './App.css';
import BackToTop from './Components/BackTop/BackToTop';
import FooterPage from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import DanhMucKhoaHoc from './Pages/DanhMucKhoaHoc/DanhMucKhoaHoc';
import DetailCourse from './Pages/DetailCouse/DetailCourse';
import Home from './Pages/Home/Home';
import PersonalPages from './Pages/PersonalPages/PersonalPages';
import SearchPage from './Pages/SearchPage/SearchPage';


function App() {
  return (
    <div className='position-relative'>
    <Header />
    <Home />
    <DanhMucKhoaHoc />
    <SearchPage />
    <DetailCourse />
    <PersonalPages />
    <BackToTop />
    <FooterPage />
    </div>
  )
}

export default App;
  