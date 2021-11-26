import React from 'react'
import { Tabs, Rate, Progress } from 'antd';
import PaginationPages from '../../Components/Pagination/PaginationPages';
import './PersonalPages.css'

const { TabPane } = Tabs;
export default function PersonalPages() {
    return (
        <div>
            <div className='PersonalBody'>
                <div className='headerBackground'>
                    <div className='smallCard'>
                        <div className='row'>
                            <div className='col-9'>
                                <div className='smallCardLeft'>
                                    <img src={require("../../Assets/Img/imgPersonal/personcard.jpg").default} alt="" />
                                    <div>
                                        <div className='ml-3'>
                                            <div className='smallTitle'>
                                                <p className='smallCardTitle'>Hanh Clint</p>
                                                <p className='subTextDetail'>Học viên</p>
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
                                                <p>Email:<span className='ml-2'>hanhdevit@gmail.com</span></p>
                                                <p>Họ và tên: <span className='ml-2'>Ngô Văn Hạnh</span></p>
                                                <p>Số điện thoại: <span className='ml-2'>058 303 72734</span></p>

                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <p>Tài khoản: <span className='ml-2'>Bá đạo trên từng hạt gạo</span></p>
                                            <p>Mật khẩu: <span className='ml-2'>Ngô Văn Hạnh</span></p>
                                            <p>Số điện thoại: <span className='ml-2'>058 303 72734</span></p>
                                        </div>
                                        <div>
                                            <button className='custom-btn btnGlobal btnInfo'>Cập nhật</button>
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
            </div>
        </div>
    )
}
