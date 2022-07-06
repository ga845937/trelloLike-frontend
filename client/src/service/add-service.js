import axios from "axios";
const API_URL = "http://localhost:8080/";

class AddService {
  taskPost(taskName) {
    return axios.post(API_URL, { taskName, _id });
  }

  taskGet(taskName) {
    return axios.get(API_URL, { taskName, _id });
  }
}

export default new AddService();
