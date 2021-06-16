
import { CONFIG_ACCESS_TOKEN } from '../../constants';
export default {
    [CONFIG_ACCESS_TOKEN]: localStorage.getItem(CONFIG_ACCESS_TOKEN),
    listDataDM:[],
    listDataBGia:[],
    listDataUser:[],
    listDataRole:[],
    currentUser: null, // Login
    users: {}, 
    stringSearch:'',
    isShowForm: false,
    taskSelected: null
}