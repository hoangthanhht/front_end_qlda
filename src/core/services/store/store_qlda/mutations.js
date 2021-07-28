
import Vue from 'vue';
import { CONFIG_ACCESS_TOKEN } from '../../constants';


export default {

    /* HÀM CHO LOGIN LOGOUT */
    SET_USER_INFO(state, user) {
         Vue.set(state.users, user.id, user);
    },
       /* HÀM CHO POST */
    SET_LIST_POST(state, data) {
    state.listPost = data;
   },
    
    SET_LOGIN_INFO(state, { user = null, token = '' }) {
        // xs
        localStorage.setItem(CONFIG_ACCESS_TOKEN, token);
        state[CONFIG_ACCESS_TOKEN] = token;
        state.currentUser = user;
    },
/* HÀM CHO ĐINH MỨC */
    SET_LIST_DATADM(state, data) {
        state.listDataDM = data;
    }, 
    /* HÀM CHO APPROVE ĐINH MỨC */
    SET_LIST_DATADM_CONTRIBUTE(state, data) {
        state.listDataDmContribte = data;
    }, 
     
/* HÀM CHO BÁO GIÁ */
    SET_LIST_DATABGIA(state, data) {
        state.listDataBGia = data;
    }, 
/* HÀM CHO APPROVE */
    SET_LIST_DATABGIA_GUEST(state, data) {
        state.listDataBGiaGuest = data;
    },
    /* HÀM CHO XEM BG SAU UP CUA NGUOI DUNG */
    SET_LIST_DATABGIA_GUEST_VIEW_SELF(state, data) {
        state.listDataBGiaGuestViewSelf = data;
    },
    /* HÀM CHO XEM BG SAU UP CUA NGUOI DUNG KHAC */
    SET_LIST_DATABGIA_GUEST_VIEW_OTHERPS(state, data) {
        state.listDataBGiaGuestViewOtherPs = data;
        console.log('state.listDataBGiaGuestViewOtherPs',state.listDataBGiaGuestViewOtherPs)
    },
    
/* HÀM CHO PHÂN QUYỀN */
    SET_LIST_DATAUSER(state, data) {
        state.listDataUser = data;
    },
    SET_LIST_DATAROLE(state, data) {
        state.listDataRole = data;
    },
    SET_LIST_DATA_PERMISSION(state, data) {
        state.listDataPermission = data;
    },
    SET_LIST_DATA_ROLE_OF_ALL_USER(state, data) {
        state.listDataRoleOfAllUser = data;
    },
    SET_LIST_DATA_PERMISSION_OF_ALL_USER(state, data) {
        state.listDataPermissionOfAllUser = data;
    },
    TOGGLE_FORM(state) {
        if(state.isShowForm) state.userSelected = null;
        if(state.isShowForm) state.roleSelected = null;
        // console.log("Mutation TOGGLE_FORM");
        state.isShowForm = !state.isShowForm;
    },
    ADD_NEW_TASK(state) {
        
        // console.log("Mutation TOGGLE_FORM");
        state.isShowForm = !state.isShowForm;
    },
    HANDLE_EDIT(state, userEdit) {
        state.isShowForm = true;
		state.userSelected = userEdit;
    },
    HANDLE_EDIT_ROLE(state, roleEdit) {
        state.isShowForm = true;
		state.roleSelected = roleEdit;
    },
    SET_LOGOUT(state) {
        state[CONFIG_ACCESS_TOKEN] = '';
        state.currentUser = null;
        localStorage.removeItem(CONFIG_ACCESS_TOKEN);
    },
    /* HÀM SỬ LÝ SEARCH */
    HANDLE_SEARCH(state,stringSearch){
        state.stringSearch = stringSearch
    },
    HANDLE_BLUR_SEARCH(state,stringSearch){
        state.stringSearch = stringSearch
    }
}

// TH nếu current = 1 -> Thay thế array gốc 
// TH nếu current = 2, 3, 4 -> Đẩy thêm dữ liệu vào ( nối 2 array lại với nhau )