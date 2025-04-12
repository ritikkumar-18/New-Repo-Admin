
import { post_data } from "./index"

// API functions for authentication

export const loginUser = (payload) => post_data("admin/login", payload)


export const sendOTP = (payload) => post_data("/admin/forgotPassword", payload)


export const verifyOTP = (payload,OtpToken) => {
    const headers = {
        headers: {
          "Content-Type": "application/json",
          "otp-token": otpToken,
        },
      }

return post_data("/admin/verifyOtp", payload, headers)
}


export const resetPassword = (payload) => post_data("/admin/resetPassword", payload)

export const logoutUser = () => post_data("/admin/logout");

