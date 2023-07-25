import axios from "axios";

const baseURL = "https://glittery-dull-snickerdoodle.glitch.me/";

export const fetchPets = () => axios.get(`${baseURL}v1/pets`);
