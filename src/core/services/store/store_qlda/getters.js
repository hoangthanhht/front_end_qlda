
import { CONFIG_ACCESS_TOKEN } from '../../constants';
export default {
    // test: state => {
    //     return state
    // }
    isLogin: state => {
        if(state[CONFIG_ACCESS_TOKEN]) {
            return true;
        } else {
            return false;
        }
    },
    getListDataDinhMuc: state => {
        return state.listDataDM;
    },
    getListDataUserGTer: state => {
        return state.listDataUser;
    },
    getListDataRoleGTer: state => {
        return state.listDataRole;
    },
    getListDataBGia: state => {
        return state.listDataBGia;
    },
    getTokenStorage: state => {
        return state[CONFIG_ACCESS_TOKEN];
    },
    currentUser: state => {
        return state.currentUser;
    },
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