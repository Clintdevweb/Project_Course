import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik'
import { Tabs, Rate, Progress } from 'antd';
import * as Yup from 'yup'

import PaginationPages from '../../Components/Pagination/PaginationPages';
import './PersonalPages.css'
import { http } from '../../Util/setting';
import { _userUpdate } from '../../Redux/action/UserAction';

const { TabPane } = Tabs;
export default function PersonalPages (props) {

    const dispatch = useDispatch()

    const studentInfo = useSelector(state => state.UserReducer.credentials)
    // console.log(studentInfo);

    const _handleUpdate = (values, formik) => {

        // console.log(values.soDT)
        const action = _userUpdate(values, formik)
        dispatch(action)
    }

    // Formik form
    const formik = useFormik({
        initialValues: {
            taiKhoan: studentInfo.taiKhoan,
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: "",
            maLoaiNguoiDung: studentInfo.maLoaiNguoiDung,
            maNhom: "GP01",
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string()
                .min(2, 'Tài khoản quá ít kí tự')
                .max(16, 'Tài khoản quá 16 kí tự')
                .required('Tài khoản không được để trống'),

            matKhau: Yup.string()
                .required('Tài khoản không được để trống')
                .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Mật khẩu phải ít nhất 8 tự gồm chữ, số, và kí tự đặc biệt'),

            hoTen: Yup.string()
                .required('Tên không được để trống')
                .matches(/^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, 'Chỉ nhập kí tự chữ'),

            email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),

            soDT: Yup.string()
                .required('Số điện thoại không được để trống')
                .matches(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/, 'Số điện thoại chưa đúng định đạng'),
        }),
        onSubmit: _handleUpdate
    })

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <div className='PersonalBody'>
                <div className='headerBackground'>
                    <div className='smallCard'>
                        <div className='row'>
                            <div className='col-9'>
                                <div className='smallCardLeft'>
                                    <img src={studentInfo.img} alt="" />
                                    <div>
                                        <div className='ml-3'>
                                            <div className='smallTitle'>
                                                <p className='smallCardTitle'>{studentInfo.taiKhoan}</p>
                                                <p className='subTextDetail'>{studentInfo.hoTen}</p>
                                                <p className='subTextDetail'>24 / 11 / 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-3'>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='personalContent'>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Thông tin cá nhân" key="1">
                            <div className=''>
                                <div className='infoContentTop'>
                                    <div className='row left'>
                                        <div className='col-6'>
                                            <div>
                                                <p>Email:<span className='ml-2'>{studentInfo.email}</span></p>
                                                <p>Họ và tên: <span className='ml-2'>{studentInfo.hoTen}</span></p>
                                                <p>Số điện thoại: <span className='ml-2'>{studentInfo.soDt ? studentInfo.soDt : studentInfo.soDT}</span></p>

                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <p>Tài khoản: <span className='ml-2'>{studentInfo.taiKhoan}</span></p>
                                            <p>Nhóm: <span className='ml-2'>{studentInfo.maNhom}</span></p>
                                            <p>Đối tượng: <span className='ml-2'>{studentInfo.maLoaiNguoiDung === "HV" ? " Học viên" : " Giáo viên"}</span></p>
                                        </div>
                                        <div>
                                            <button data-toggle="modal" data-target="#myModal" className='custom-btn btnGlobal btnInfo'>Cập nhật</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-8'>
                                        <div className='infoContentBot'>
                                            <div>
                                                <h4 className='findTitle'>Kĩ năng của tôi</h4>

                                                <div className='skillBody'>
                                                    <button className='customSkillBtn skillBtnHtml mr-2'>HTML</button>
                                                    <Progress percent={100} strokeColor='#F9CA9A' showInfo={false} />
                                                </div>
                                                <div className='skillBody'>
                                                    <button className='customSkillBtn  skillBtnCss mr-2'>CSS</button>
                                                    <Progress percent={30} strokeColor='#F8BEBB' showInfo={false} />
                                                </div>
                                                <div className='skillBody'>
                                                    <button className='customSkillBtn skillBtnJs mr-2'>JS</button>
                                                    <Progress percent={50} strokeColor='#F9D678' showInfo={false} />
                                                </div>
                                                <div className='skillBody'>
                                                    <button className='customSkillBtn mr-2 skillBtnReact'>React</button>
                                                    <Progress percent={80} strokeColor='#113D3C' showInfo={false} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='row infoContentBot'>
                                            <div className='col-6'>
                                                <div className='rightTitleContent'>
                                                    <div className='rightContent'>
                                                        <i class="fas fa-user-clock mr-2"></i>
                                                        <div>
                                                            <h6>Giờ học</h6>
                                                            <p>80 giờ</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='rightTitleContent'>
                                                    <div className='rightContent'>
                                                        <i class="fas fa-user-clock mr-2"></i>
                                                        <div>
                                                            <h6>Buổi học</h6>
                                                            <p>40</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='rightTitleContent'>
                                                    <div className='rightContent'>
                                                        <i class="fas fa-user-clock mr-2"></i>
                                                        <div>
                                                            <h6>Bài tập</h6>
                                                            <p>4</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='rightTitleContent'>
                                                    <div className='rightContent'>
                                                        <i class="fas fa-user-clock mr-2"></i>
                                                        <div>
                                                            <h6>Điểm tổng</h6>
                                                            <p>98</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='rightTitleContent'>
                                                    <div className='rightContent'>
                                                        <i class="fas fa-user-clock mr-2"></i>
                                                        <div>
                                                            <h6>Cấp độ</h6>
                                                            <p>Trung cấp</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='rightTitleContent'>
                                                    <div className='rightContent'>
                                                        <i class="fas fa-user-clock mr-2"></i>
                                                        <div>
                                                            <h6>Học lực</h6>
                                                            <p>Giỏi</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </TabPane>
                        <TabPane tab="Khóa học" key="2">
                            <div className='findCourse'>
                                <h4 className='findTitle'>Khóa học của tôi</h4>
                                <input className='searchForm GlobalForm' type="text" placeholder='Tìm kiếm ...' />
                            </div>

                            <div className='searchModel cardSearchBox'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <img className='imgSearch' src="https://picsum.photos/200/300" alt="..." />
                                    </div>
                                    <div className='col-7'>
                                        <btn className='btnCard'>Lập trình</btn>
                                        <h4 className="textCard textCardSearch">Lập trình frontend với html css javascripts</h4>
                                        <p className='textCardSearch'>Khóa học chi tiết nhất về html, nhiều project thực hành giúp thành thạo html css và javascripts. Được cấp chứng chỉ và hỗ trợ phỏng vấn việc làm
                                        </p>

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
                                                <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                                <span className='textCardTitle'> ElunMask</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-2 cancelBody'>
                                        <div className=''>
                                            <btn className='btnGlobal custom-btn'>Hủy khóa học</btn>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='searchModel cardSearchBox'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <img className='imgSearch' src="https://picsum.photos/200/300" alt="..." />
                                    </div>
                                    <div className='col-7'>
                                        <btn className='btnCard'>Lập trình</btn>
                                        <h4 className="textCard textCardSearch">Lập trình frontend với html css javascripts</h4>
                                        <p className='textCardSearch'>Khóa học chi tiết nhất về html, nhiều project thực hành giúp thành thạo html css và javascripts. Được cấp chứng chỉ và hỗ trợ phỏng vấn việc làm
                                        </p>

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
                                                <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                                <span className='textCardTitle'> ElunMask</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-2 cancelBody'>
                                        <div className=''>
                                            <btn className='btnGlobal custom-btn'>Hủy khóa học</btn>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='searchModel cardSearchBox'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <img className='imgSearch' src="https://picsum.photos/200/300" alt="..." />
                                    </div>
                                    <div className='col-7'>
                                        <btn className='btnCard'>Lập trình</btn>
                                        <h4 className="textCard textCardSearch">Lập trình frontend với html css javascripts</h4>
                                        <p className='textCardSearch'>Khóa học chi tiết nhất về html, nhiều project thực hành giúp thành thạo html css và javascripts. Được cấp chứng chỉ và hỗ trợ phỏng vấn việc làm
                                        </p>

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
                                                <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                                <span className='textCardTitle'> ElunMask</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-2 cancelBody'>
                                        <div className=''>
                                            <btn className='btnGlobal custom-btn'>Hủy khóa học</btn>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='searchModel cardSearchBox'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <img className='imgSearch' src="https://picsum.photos/200/300" alt="..." />
                                    </div>
                                    <div className='col-7'>
                                        <btn className='btnCard'>Lập trình</btn>
                                        <h4 className="textCard textCardSearch">Lập trình frontend với html css javascripts</h4>
                                        <p className='textCardSearch'>Khóa học chi tiết nhất về html, nhiều project thực hành giúp thành thạo html css và javascripts. Được cấp chứng chỉ và hỗ trợ phỏng vấn việc làm
                                        </p>

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
                                                <img src={require("../../Assets/Img/imgCard/personcard.jpg").default} className='imgCardFooter' alt="" />
                                                <span className='textCardTitle'> ElunMask</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-2 cancelBody'>
                                        <div className=''>
                                            <btn className='btnGlobal custom-btn'>Hủy khóa học</btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <PaginationPages />
                            </div>

                        </TabPane>
                    </Tabs>
                </div>

                <div class="modal fade" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Chỉnh sửa thông tin cá nhân</h5>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div class="modal-body modalUpdateBody">
                                <form action="#" onSubmit={formik.handleSubmit}>
                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="text" placeholder="Tài khoản"
                                        name='taiKhoan'
                                        value={formik.values.taiKhoan}
                                        disabled />
                                    {formik.errors.taiKhoan && formik.touched.taiKhoan ? <div className='errorMessage'>{formik.errors.taiKhoan}</div> : <div className='message'></div>}

                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="text" placeholder="Họ tên"
                                        name='hoTen'
                                        value={formik.values.hoTen} />
                                    {formik.errors.hoTen && formik.touched.hoTen ? <div className='errorMessage'>{formik.errors.hoTen}</div> : <div className='message'></div>}

                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="password" placeholder="Mật khẩu"
                                        name='matKhau'
                                        value={formik.values.matKhau} />
                                    {formik.errors.matKhau && formik.touched.matKhau ? <div className='errorMessage' >{formik.errors.matKhau}</div> : <div className='message'></div>}

                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="email" placeholder="Email"
                                        name="email"
                                        value={formik.values.email} />
                                    {formik.errors.email && formik.touched.email ? <div className='errorMessage'>{formik.errors.email}</div> : <div className='message'></div>}

                                    <input
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="phone" placeholder="Số điện thoại"
                                        name='soDT'
                                        value={formik.values.soDT} />
                                    {formik.errors.soDT && formik.touched.soDT ? <div className='errorMessage'>{formik.errors.soDT}</div> : <div className='message'></div>}

                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-success" >Hoàn thành</button>
                                        <button type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
