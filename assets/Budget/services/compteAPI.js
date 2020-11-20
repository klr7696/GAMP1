import axios from "axios";

function findAll() {
    return axios
    .get("http://localhost:8000/api/lignes/32")
    .then(response => response.data["hydra:member"]);
}

function find(id) {
    return axios 
    .get("http://localhost:8000/api/lignes/32")
    .then(response => response.data);
}

function deleteChapitre(id) {
    return axios
    .delete("http://localhost:8000/api/lignes/32" + id);
}

function create(chapitre) {
    return axios
    .post("http://localhost:8000/api/lignes/32", chapitre)
}

function update(id, chapitre) {
    return axios
    .put("http://localhost:8000/api/lignes/32/" + id, chapitre);
}

export default {
    findAll,
    find,
    update,
    create,
    delete: deleteChapitre
};