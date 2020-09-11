import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-hench-printworks.cloudfunctions.net/api'

    // 'http://localhost:5001/hench-printworks/us-central1/api',
})

export default instance;