import { get_api, post_data, put_api } from "./index"

// API functions for authentication

export const loginUser = (payload) => post_data("admin/login", payload)


export const sendOTP = (payload) => post_data("/admin/forgotPassword", payload)


export const verifyOTP = (payload,token) => {
  const token2 = localStorage.getItem("otpToken")  
    const headers = {
        headers: {
          "Content-Type": "application/json",
          "token": token2
        },
      }
      
      return post_data("/admin/verifyOtp", payload, headers)
}


export const resetPassword = (payload, token) =>{
  const token3 = localStorage.getItem("otpToken")
  const headers = {
    headers: {
      "Content-Type": "application/json",
      "token": token3
      },
      }
       return put_api("/admin/resetPassword", payload, headers)
}
  

export const changePassword =(payload)=> put_api("/admin/chagePassword", payload)

export const logoutUser = (payload ) => {
 const headers = {
    headers: {
      "Content-Type": "application/json",
      "token": payload
      },
  }
  return get_api("admin/logout",headers);
}
  

