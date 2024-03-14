import axios from 'axios';
class IdeasApi {
  #apiUrl = 'http://localhost:5001/api/ideas';
  getIdeas() {
    return axios.get(this.#apiUrl);
  }
  createIdea(data) {
    return axios.post(this.#apiUrl, data);
  }
}
export default new IdeasApi();
