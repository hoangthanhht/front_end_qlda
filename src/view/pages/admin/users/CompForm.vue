<template>
  <b-col cols="12" lg="6">
    <!-- ADD : START -->
    <form-add />
    <!-- ADD :  END -->

    <form
      v-if="isShowForm"
      action=""
      method="POST"
      class="form-inline justify-content-between"
    >
      <div class="form-group">
        <label class="sr-only" for="">label</label>
        <input
          v-model="username"
          type="text"
          class="form-control user_name"
          placeholder="User Name"
        />
      </div>
      <div class="form-group">
        <label class="sr-only" for="">label</label>
        <input
          v-model="useremail"
          type="text"
          class="form-control user_email"
          placeholder="User Email"
        />
      </div>

      <div class="form-group">
        <label class="sr-only" for="">label</label>
        <input
          type="password"
          class="form-control password"
          placeholder="User Password"
        />
      </div>
     
      <button
        v-if="userSelected === null"
        v-on:click="handleAddNew"
        type="button"
        class="btn btn-primary"
      >
        Submit
      </button>
      <button
        v-else
        v-on:click="handleEditTask"
        type="button"
        class="btn btn-primary"
      >
        Update
      </button>

      <button v-on:click="handleCancel" type="button" class="btn btn-secondary">
        Cancel
      </button>
    </form>
     <div 
     v-if="isShowForm"
     class="form-group">
        <label class="sr-only" for="">label</label>
        <v-app>
          <v-select
            label="Select"
            v-bind:items="listRole"
            v-model="select"
            hint="Chọn vai trò"
            persistent-hint
            item-text="slug"
            chips
            multiple
            return-object
            outlined
          />
        </v-app>


        <v-app>
          <v-select
            label="Select"
            v-bind:items="listPermission"
            v-model="selectPermission"
            hint="Chọn vai trò"
            persistent-hint
            item-text="slug"
            chips
            multiple
            return-object
            outlined
          />
        </v-app>
        <!-- <select v-if="listRole.length !== 0"
                multiple
                 v-model="select"
                 class="form-control">
                    <option 
                     v-for="(role,index) in listRole" 
                    v-bind:value="role.id"
                    v-bind:key="index"
                    >{{ role.slug }}</option>
                    
                </select> -->
      </div>
  </b-col>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import FormAdd from "./FormAdd";
export default {
  name: "comp-form",
  components: {
    FormAdd,
  },
  data() {
    return {
      username: "",
      useremail: "",
      userId: Number,
      select: [],
      selectPermission: [],
    };
  },

  computed: {
    ...mapGetters([
      "storeqlda/getListDataRoleGTer",
      "storeqlda/getListDataRoleOfAllUserGTer",
      "storeqlda/getListDataPermissionOfAllUserGTer",
      "storeqlda/getListDataPermissionGTer"
    ]),
    ...mapState({
      isShowForm: (state) => state.storeqlda.isShowForm,
      userSelected: (state) => state.storeqlda.userSelected,
    }),
    listRole() {
      let arrVselect = [];
      let arrrole = this["storeqlda/getListDataRoleGTer"];
      for (var i in arrrole) {
        let obj = {
          role_id: arrrole[i].id,
          slug: arrrole[i].slug,
        };
        arrVselect.push(obj);
      }
      return arrVselect;
    },

	listPermission() {
      let arrVselect = [];
      let arrpermission = this["storeqlda/getListDataPermissionGTer"];
      for (var i in arrpermission) {
        let obj = {
          permission_id: arrpermission[i].id,
          slug: arrpermission[i].slug,
        };
        arrVselect.push(obj);
      }
      return arrVselect;
    },
  },

  watch: {
    userSelected: function (newData) {
      if (newData !== null) {
        this.username = newData.name;
        this.useremail = newData.email;
        this.userId = newData.id;
      }
      this.getRoleOfUserForEdit();
      this.getPermissionOfUserForEdit();
    },
  },
  methods: {
    ...mapActions([
      "storeqlda/toggleForm",
      "storeqlda/handleAddNewUser",
      "storeqlda/handleEditUserById",
	  "storeqlda/getListDataUser"
    ]),

    getRoleOfUserForEdit() {
      let arrTemp = this["storeqlda/getListDataRoleOfAllUserGTer"];
     
      let arrTemp1 = arrTemp;
      let kt = false;
      for (var i in arrTemp1) {
        for (let key in arrTemp1[i]) {
          if (arrTemp1[i].hasOwnProperty(key)) {
            if (parseInt(key) === this.userId) {
              arrTemp = arrTemp1[i][key];
              kt = true;
              break;
            }
          }
        }
        if (kt === true) {
          break;
        }
      }

      this.select = [];
      for (var j in arrTemp) {
        for (let m in this.listRole) {
          if (this.listRole[m]["slug"] === arrTemp[j]) {
            this.select.push(this.listRole[m]);
          }
        }
      }
    },

 getPermissionOfUserForEdit() {
      let arrTemp = this["storeqlda/getListDataPermissionOfAllUserGTer"];
      let arrTemp1 = arrTemp;
      let kt = false;
      for (var i in arrTemp1) {
        for (let key in arrTemp1[i]) {
          if (arrTemp1[i].hasOwnProperty(key)) {
            if (parseInt(key) === this.userId) {
              arrTemp = arrTemp1[i][key];
              kt = true;
              break;
            }
          }
        }
        if (kt === true) {
          break;
        }
      }

      this.selectPermission = [];
      for (var j in arrTemp) {
        for (let m in this.listPermission) {
          if (this.listPermission[m]["slug"] === arrTemp[j]) {
            this.selectPermission.push(this.listPermission[m]);
          }
        }
      }
    },

    handleEditTask() {
      let role_id = [];
      for (var i in this.select) {
        role_id.push(this.select[i].role_id);
      }
	   let permission_id = [];
      for (var j in this.selectPermission) {
        permission_id.push(this.selectPermission[j].permission_id);
      }
      var password = document.querySelector(".password").value;
      let objUserEdit = {
        name: this.username,
        email: this.useremail,
        password: password,
        idUser: this.userId,
        role_id: JSON.stringify(role_id),
        permission_id: JSON.stringify(permission_id),
      };

      this["storeqlda/handleEditUserById"](objUserEdit).then(()=>{
		  this["storeqlda/getListDataUser"]();
	  })

      this.handleResetData();
    },

    handleAddNew() {
      // Kiểm tra dữ liệu
      if (this.username.trim() && this.useremail.trim()) {
        var password = document.querySelector(".password").value;
        //chú ý là key :'name','email','password' của data phải trùng với các đối số của action mà hàm này gọi không thì sẽ không nhận đúng dữ liệu để gửi đi gây lỗi 500
        // khi truyền 1 mảng hay obj sang serve thì cần phải stringify nó sau đó bên serve phải decode lại cái json này thì nó mới đúng định dạng của từng phía khong có sẽ gây lỗi
        let role_id = [];
        for (var i in this.select) {// vong lap lay ra vai tro cua user tu model select cua v-select
          role_id.push(this.select[i].role_id);
        }
		  let permission_id = [];
      for (var j in this.selectPermission) {
        permission_id.push(this.selectPermission[j].permission_id);
      }
        var data = {
          name: this.username,
          email: this.useremail,
          password: password,
          role_id: JSON.stringify(role_id),
          permission_id: JSON.stringify(permission_id),
        };
        this["storeqlda/handleAddNewUser"](data).then(()=>
	   this["storeqlda/getListDataUser"]());
        this.handleCancel();
      } else {
        alert("Vui lòng nhập đầy đủ các trường");
      }
    },
    handleCancel() {
      this["storeqlda/toggleForm"]();
      this.handleResetData();
    },
    handleResetData() {
      this.username = "";
      this.useremail = "";
      this.select = null;
    },
  },
};
</script>

<style lang="scss" scope>
.btn.btn-warning {
    margin-right: 10px;
}
.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box .v-select__selections, .v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed .v-select__selections {
     min-height: 30px !important;
}
.v-menu__content {
    position: absolute;
    /* display: inline-block; */
    /* max-width: 80%; */
    /* overflow-y: auto; */
    /* overflow-x: hidden; */
    /* contain: content; */
    /* will-change: transform; */
    /* -webkit-box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%); */
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
    border-radius: 4px;
    left: 12px !important;
    top: 216px !important;
}
.v-application--wrap {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 0 !important;
    max-width: 100%;
    position: relative;
}
.form-inline {
  padding-bottom: 20px;
}
@media (min-width: 992px) {

.col-lg-6 {
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100% !important;
}
}
</style>
