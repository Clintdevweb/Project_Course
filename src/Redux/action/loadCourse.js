// import axios from "axios";
import { http } from "../../Util/setting";
import { GET_COURSE_CATEGORY, GET_COURSE_CATEGORY_LIST, GET_COURSE_DETAIL, GET_COURSE_LIST, GET_COURSE_SEARCH_LIST } from "../types/courseTypes";

export const loadListCourse = async (dispatch) => {
    try {
        let result = await http.get('api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')

        const action = {
            type: GET_COURSE_LIST,
            data: result.data
        }

        dispatch(action)
    } catch (error) {
        // console.log(error)
    }
}

export const courseCategory = async (dispatch) => {
    try {
        let result = await http.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
        
        const action = {
            type: GET_COURSE_CATEGORY,
            data: result.data
        }

        dispatch(action)
    } catch (error) {
        // console.log(error)
    }
}

export const courseCategoryList = (maDanhMuc) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`)
            
            const action = {
                type: GET_COURSE_CATEGORY_LIST,
                data: result.data
            }
    
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}

export const courseSearchList = (tuKhoa) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tuKhoa}&MaNhom=GP01`)

            const action = {
                type: GET_COURSE_SEARCH_LIST,
                data: result.data
            }

            dispatch(action)
        } catch (error) {
            console.log(error)
            
        }
    }
}

export const getCourseDetail = (maKHoaHoc) => {
    return async (dispatch) => {
        try {
             let result = await http.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKHoaHoc}`)

             const action ={
                 type: GET_COURSE_DETAIL,
                 data: result.data
             }

             dispatch(action)
        } catch (error) {
            console.log(error)           
        }
    }
}