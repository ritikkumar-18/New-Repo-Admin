
import { post_data } from "./index"

// API functions for authentication

export const loginUser = (payload) => post_data("admin/login", payload)


export const sendOTP = (payload) => post_data("/admin/forgotPassword", payload)


export const verifyOTP = (payload,token) => {
  const token2 = localStorage.getItem("otpToken")
  // console.log("tokeeeeen", token2)

    const headers = {
        headers: {
          "Content-Type": "application/json",
          "token": token2
        },
      }
      
      return post_data("/admin/verifyOtp", payload, headers)
}


export const resetPassword = (payload) => post_data("/admin/resetPassword", payload)

export const changePassword =(payload)=> post_data("/admin/chagePassword", payload)

export const logoutUser = () => post_data("/admin/logout");

