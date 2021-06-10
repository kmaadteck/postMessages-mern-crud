import axios from "axios";

const baseUrl = "http://localhost:4000/";

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
  postMessage(url = baseUrl + 'postMessages/') {
    return {
      fetchAll: () => axios.get(url),
<<<<<<< HEAD
      ftechById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
=======
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url+id, updatedRecord),
>>>>>>> develop
      delete: (id) => axios.delete(url + id),
    };
  },
};
