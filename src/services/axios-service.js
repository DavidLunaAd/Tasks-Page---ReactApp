import APIRquest from "../utils/config/axios.config";

export function getRandomUser(){
    return APIRquest.get('/', {
        validateStatus: function (status) {
            return status < 500; // defecto
        }});
    }