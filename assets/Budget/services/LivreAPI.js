import axios from "axios";

function findAll() {
    return axios
    .get("http://localhost:8000/api/livres")
    .then(response => response.data["hydra:member"]);
}

function find(id) {
    return axios 
    .get("http://localhost:8000/api/livres" + id)
    .then(response => response.data);
}

function deleteLivre(id){
    return axios
    .delete("http://localhost:8000/api/livres" + id);
}
function create(livre) {
    return axios
    .post("http://localhost:8000/api/livres", livre)
}

function update(id, livre){
    return axios
    .put("http://localhost:8000/api/livres/" + id, livre);
}

export default {
    findAll,
    find,
    update,
    create,
    delete: deleteLivre
};