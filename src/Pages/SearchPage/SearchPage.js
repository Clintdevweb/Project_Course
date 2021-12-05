import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Rate } from 'antd';
import PaginationPages from '../../Components/Pagination/PaginationPages';
import 'antd/dist/antd.css';
import './SearchPage.css'
import { courseSearchList } from '../../Redux/action/loadCourse';

export default function SearchPage(props) {
    // console.log(props.match.params.tuKhoa)
    const getCourseSearchList = useSelector(state => state.CourseReducer.coursesSearchList)

    // console.log(getCourseSearchList);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(courseSearchList(props.match.params.tuKhoa))
    }, [props.match.params.tuKhoa])

    const renderSearchPage = () => {
        return getCourseSearchList.map((course, index) => {
            return (
                <div key={index} className='searchModel cardSearchBox'>
                    <div className='row'>
                        <div className='col-3'>
                            <img className='imgSearch' src="https://picsum.photos/200/300" alt="..." />
                        </div>
                        <div className='col-8 searchContent'>
                            <btn className='btnCard'>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</btn>
                            <h4 className="textCard textCardSearch">{course.tenKhoaHoc}</h4>
                            <p className='textCardSearch'>{course.moTa}</p>
                            <div className='textCardSearch'>
                                <span className='textCardTitle'><i class="far fa-clock iconOclock"></i> 8 giờ 21 phút</span>
                                <span className='textCardTitle'><i class="far fa-calendar iconCalendar"></i> 23 giờ</span>
                                <span className='textCardTitle'><i class="fas fa-signal iconLevel "></i> All level</span>
                            </div>

                            <div className='d-flex'>
                                <span><Rate disabled allowHalf defaultValue={4.5} /></span>

                            </div>

                            <div className=''>
                                <div>
                                    <img src={course.hinhAnh} className='imgCardFooter' alt="" />
                                    <span className='textCardTitle ml-2'>{course.nguoiTao.hoTen}</span>
                                </div>
                            </div>
                            <NavLink to={`/chitiet/${course.maKhoaHoc}`} className='custom-btn btnGlobal btnSearch'>Xem chi tiết</NavLink>
                        </div>
                        <div className='col-1'>
                            <div className=''>
                                <span className='textCardTitle' style={{ color: 'rgb(234 76 137)' }} >$119.55</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div class='searchPage'>
            <div className='row'>
                <div className='col-2'>
                    <div className='searchModel'>
                        <span className='mb-3 navSearchTitle'>
                            <i class="fas fa-book-open navSearchIcon"></i>Lọc</span>
                        <div className='navSearch'>
                            <h5> Khóa học</h5>
                            <div className=''>
                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Tất cả</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Front End</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Back End</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>HTML / CSS</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Angular</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='navSearch'>
                            <h5>Cấp độ</h5>
                            <div className=''>
                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Tất cả</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Mới bắt đầu</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Trung cấp</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='levelBox '>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state">
                                            <i class=" icon fas fa-check"></i>
                                            <label>Cao cấp</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='navSearch'>
                            <h5>Đánh giá </h5>
                            <div className=''>
                                <div>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state starBox">
                                            <i class=" icon fas fa-check"></i>
                                            <label>
                                                <div>
                                                    <Rate allowHalf disabled defaultValue={1} />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state starBox">
                                            <i class=" icon fas fa-check"></i>
                                            <label>
                                                <div>
                                                    <Rate allowHalf disabled defaultValue={2} />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state starBox">
                                            <i class=" icon fas fa-check"></i>
                                            <label>
                                                <div>
                                                    <Rate allowHalf disabled defaultValue={3} />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state starBox">
                                            <i class=" icon fas fa-check"></i>
                                            <label>
                                                <div>
                                                    <Rate allowHalf disabled defaultValue={4} />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="pretty p-icon p-curve p-jelly mt-3">
                                        <input type="checkbox" />
                                        <div class="state starBox">
                                            <i class=" icon fas fa-check"></i>
                                            <label>
                                                <div>
                                                    <Rate allowHalf disabled defaultValue={5} />
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <h6 className=''>Hiển thị {getCourseSearchList.length} kết quả</h6>
                    <div className='mt-3'>
                        {renderSearchPage()}
                        <div className='mt-3'>
                            <PaginationPages />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
