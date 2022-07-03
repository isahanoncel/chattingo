import axios from "axios";

const instance = axios.create({
    baseURL:
        process.env.NEXT_PUBLIC_SERVICE_BASE_URL
});

export default instance;
