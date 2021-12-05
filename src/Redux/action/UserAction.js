import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"
import { http } from "../../Util/setting"
import { LOG_IN, UP_DATE } from "../types/userTypes"

export const userLogin = (values, formikLogin) => {
    return async (dispatch) => {
        try {
            let resultLogin = await http.post('/api/QuanLyNguoiDung/DangNhap', values)

            const action = {
                type: LOG_IN,
                data: {
                    ...resultLogin.data,
                    img: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg'
                }
            }
            dispatch(action)

            if (resultLogin.request.status === 200) {
                localStorage.setItem('credentials', JSON.stringify(resultLogin.data))

                alert('Đăng nhập thành công')
                formikLogin.resetForm()

            }


        } catch (errors) {
            alert(errors.response.data)
        }

    }
}

export const _getCredentailFromLocal = async (dispatch) => {
    const credentailLocal = localStorage.getItem('credentials')

    if (credentailLocal) {
        const credentailvalues = JSON.parse
            (credentailLocal)

        const valuesLogin = {
            taiKhoan: credentailvalues.taiKhoan,
            matKhau: credentailvalues.matKhau
        }

        const headers = {
            "Authorization": `Bearer ${credentailvalues.accessToken}`
        }
        try {
            let result = await http.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan', valuesLogin, { headers })

            // console.log(result);

            const action = {
                type: LOG_IN,
                data: {
                    ...result.data,
                    img: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg', accessToken: credentailvalues.accessToken
                }

            }
            dispatch(action)

        } catch (errors) {
            console.log(errors.response.data);
        }

    }
}

export const _userUpdate = (values, formik) => {
    const credentailLocal = localStorage.getItem('credentials')

    if (credentailLocal) {

        const credentailvalues = JSON.parse
            (credentailLocal)
        const headers = {
            "Authorization": `Bearer ${credentailvalues.accessToken}`
        }
        return async (dispatch) => {
            try {
                let result = await http.put('api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', values, { headers })

                if (result.request.status === 200) {
                    formik.resetForm()
                    alert('Cập nhật thành công')
                }

                const action = {
                    type: UP_DATE,
                    data: result.data
                }

                dispatch(action)
            } catch (errors) {
                alert(errors.response.data)
            }
        }
    }

}