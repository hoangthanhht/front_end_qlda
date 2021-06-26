
import { CONFIG_ACCESS_TOKEN } from '../../constants';
export default {

    /* HÀM CHO LOGIN LOGOUT */
    isLogin: state => {
        if(state[CONFIG_ACCESS_TOKEN]) {
            return true;
        } else {
            return false;
        }
    },
    currentUser: state => {
        return state.currentUser;
    },
    getTokenStorage: state => {
        return state[CONFIG_ACCESS_TOKEN];
    },
    /* HÀM CHO ĐỊNH MỨC */
    getListDataDinhMuc: state => {
        return state.listDataDM;
    },
    /* HÀM CHO PHÂN QUYỀN */
    getListDataUserGTer: state => {
        return state.listDataUser;
    },
    getListDataRoleGTer: state => {
        return state.listDataRole;
    },

    getListDataPermissionGTer: state => {
        return state.listDataPermission;
    },
    getListDataRoleOfAllUserGTer: state => {
        return state.listDataRoleOfAllUser;
    },
    getListDataPermissionOfAllUserGTer: state => {
        return state.listDataPermissionOfAllUser;
    },
    /* HÀM CHO BÁO GIÁ */
    getListDataBGia: state => {
        return state.listDataBGia;
    },

    /* HÀM XỬ LÝ TÌM KIẾM */
    arrDmSearch: state => {
        const { stringSearch } = state
        var newArr = state.listDataDM.filter(item => {
            let rs = item.tenMaDinhMuc.toLowerCase().includes(stringSearch.toLowerCase());
            if(rs == false) {
                rs = item.maDinhMuc.toLowerCase().includes(stringSearch.toLowerCase());
            }
            return rs;
        });
        return newArr;
    },

    arrBaoGiaSearch: state => {
        const { stringSearch } = state
        var newArr = state.listDataBGia.filter(item => {
            let rs = item.maVatTu.toLowerCase().includes(stringSearch.toLowerCase());
            if(item.tenVatTu && rs == false) {
                rs = item.tenVatTu.toLowerCase().includes(stringSearch.toLowerCase());
            }
            if(item.donVi && rs == false) {
                rs = item.donVi.toLowerCase().includes(stringSearch.toLowerCase());
            }
            if(item.nguon && rs == false) {
                rs = item.nguon.toLowerCase().includes(stringSearch.toLowerCase());
            }
            if(item.ghiChu && rs == false) {
                rs = item.ghiChu.toLowerCase().includes(stringSearch.toLowerCase());
            }
            if(item.khuVuc && rs == false) {
                rs = item.khuVuc.toLowerCase().includes(stringSearch.toLowerCase());
            }
            return rs;
        });
        return newArr;
    }
}