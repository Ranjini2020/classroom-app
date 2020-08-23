import API from "../API";

class TutorialDataService {
  getAll() {
    return API.get("/tutorials");
  }
  getCourseById(id) {
    return API.get(`/tutorial/${id}`);
  }
  getCoursesByTeacherId(id){
    return API.get(`/tutorials/teacher/${id}`)
  }
  create(data) {
    return API.post("/tutorials", data);
  }
  deletecourse(data) {
    return API.put("/tutorialsdelete", data);
  }

  
  

  update(id, data) {
    return API.put(`/tutorials/${id}`, data);
  }
  delete(id) {
    return API.delete(`/tutorials/${id}`);
  }
  deleteAll() {
    return API.delete(`/tutorials`);
  }
  findByTitle(title) {
    return API.get(`/tutorials?title=${title}`);
  }
  subjectcreate(data) {
    return API.post("/subject", data);
  }
  subjectlist(_id) {
    return API.get(`/subject/${_id}`);
  }
  subjectdelete(data) {
    return API.put("/subjectdelete", data);
  }

}

export default new TutorialDataService();