import API from "../API";

class TutorialDataService {
  getCourseWithSubject() {
    return API.get("/coursewithsubject");
  }
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
  get(id) {
    return API.get(`/tutorials/${id}`);
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

  // findByID(id) {
  //   return API.get(`/courseView/${id}`);
  // }
}

export default new TutorialDataService();