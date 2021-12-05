import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Link, useHistory } from 'react-router-dom'
import { courseCategory } from '../../Redux/action/loadCourse'
import { getUserInfo } from '../../Redux/action/UserAction'
import './Header.css'


export default function Header(props) {
    let keyInput = useRef(null)

    const history = useHistory()

    const courseCate = useSelector(state => state.CourseReducer.coursesCategary)

    const loginInfo = useSelector(state => state.UserReducer.credentials)
    // console.log(loginInfo);

    // const [infoStudent, setInfoStudent] = useState(loginInfo.taiKhoan)
    // console.log(infoStudent);  

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(courseCategory)

    }, [])

    const renderCourseCate = () => {
        return courseCate.map((courseCate, index) => {
            return (
                <li key={index}>
                    <NavLink to={`/danhmuckhoahoc/${courseCate.maDanhMuc}`}>{courseCate.tenDanhMuc}</NavLink>
                </li>
            )
        })
    }

    const handleSubmitSearch = async (e) => {
        e.preventDefault()
        if (keyInput.current.value !== '') {
            await history.push(`/timkiem/${keyInput.current.value}`)
            keyInput.current.value = ''
        }
    }

    // Log out
    const logOut = () => {
        localStorage.removeItem("credentials")
        loginInfo.taiKhoan = null
        // console.log(infoStudent);
    }

    const hanleBtnLogin = () => { 
        if (loginInfo.taiKhoan) {
            return (
                <div className=''>
                    <NavLink to="/thongtincanhan">
                        <img className='avatar' src={loginInfo.img}></img>
                    </NavLink>
                    <NavLink to='/trangchu' className='custom-btn' onClick={logOut}>đăng xuất</NavLink>
                </div>
            )
        } else {
            return <NavLink to='/login' className='custom-btn btnGlobal textBtn ml-3'>Đăng nhập</NavLink>
        }
    }

    

    return (
        <>
            <div className='navBody'>
                <nav className='homeHeader'>
                    <div className='homeHeader'>
                        <NavLink to="/" className='mr-5  active textLogo'><span className='textE'>E</span>-learning <i className="far fa-keyboard iconLogo"></i></NavLink>

                        <form onSubmit={handleSubmitSearch}>
                            <input ref={keyInput} className='searchForm GlobalForm' type="text" placeholder='Tìm kiếm ...' />
                        </form>

                        <NavLink to="/trangchu" className='ml-4 textMenu'>Trang chủ</NavLink>
                        <div className='ml-3'>
                            <div className='custom-btn btnGlobal textBtn'><i className="fas fa-bars mr-1"></i>
                                <span>Danh mục khóa học</span>
                                <ul className='courseCate'>
                                    {renderCourseCate()}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='homeHeader'>
                        {hanleBtnLogin()}
                    </div>
                </nav>
            </div>
        </>
    )
}
