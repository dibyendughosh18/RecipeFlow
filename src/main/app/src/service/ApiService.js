import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8000/user';

class ApiService {
	

	 addUser(user) {
	        return axios.post(""+USER_API_BASE_URL+"/registration", user);
	    }
	 
	 existUser(user) {
	        return axios.post(""+USER_API_BASE_URL+"/login", user);
	    }

}
export default new ApiService();
