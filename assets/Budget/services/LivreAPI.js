import axios from "axios";

function findAll() {
    return axios
    .get("http://localhost:8000/api/categories")
    .then(response => response.data["hydra:member"]);
}

function find(id) {
    return axios 
    .get("http://localhost:8000/api/categories")
    .then(response => response.data);
}

function deleteCategorie(id){
    return axios
    .delete("http://localhost:8000/api/categories/" + id);
}

function update(id, categorie){
    return axios
    .put("http://localhost:8000/api/categories/" + id, categorie);
}

export default {
    findAll,
    find,
    update,
    delete: deleteCategorie
};