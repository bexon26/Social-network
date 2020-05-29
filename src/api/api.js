import axios from "axios";


export const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "661c2bc1-6191-422e-8bd7-cdea2d0259e3"
   }
})


export const usersAPI = {
   requestUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(response => {
            return response.data;
         });

   },
   follow(userid) {
      return instance.post(`follow/${userid}`)
   },
   unfollow(userid) {
      return instance.delete(`follow/${userid}`)
   },
   getProfile(userId) {
      console.log('Absolute method. Please profileApi object')
      return profileAPI.getProfile(userId)
   }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`);
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`);
   },
   updateStatus(status) {
      return instance.put(`profile/status`, { status: status });
   }
}


export const authAPI = {
   me() {
      return instance.get(`auth/me`);
   },
   login(email, password, rememberMe = false) {
      return instance.post(`auth/login`, { email, password, rememberMe });
   },
   logout() {
      return instance.delete(`auth/login`);
   },
}

