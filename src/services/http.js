import axios from 'axios'

export const INIT_REQUEST = () => {
    return axios.get('http://dev.zaitt3.zaittgroup.com/api/v1/stores/1/init')
}
