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
          v-model="rolename"
          type="text"
          class="form-control user_name"
          placeholder="Tên vai trò"
        />
      </div>
      <div class="form-group">
        <label class="sr-only" for="">label</label>
        <input
          v-model="roledescrip"
          type="text"
          class="form-control user_email"
          placeholder="Mô tả vai trò"
        />
      </div>

     
      <button
        v-if="roleSelected === null"
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
      rolename: "",
      roledescrip: "",
      roleId: Number,
    };
  },

  computed: {
    ...mapGetters([
      "storeqlda/getListDataRoleGTer",
      "storeqlda/getListDataRoleOfAllUserGTer",
    ]),
    ...mapState({
      isShowForm: (state) => state.storeqlda.isShowForm,
      roleSelected: (state) => state.storeqlda.roleSelected,
    }),

  },

  watch: { // hàm này để theo dõi khi ta click vào nút edits thì sẽ binding dữ liệu lên
    roleSelected: function (newData) {
      if (newData !== null) {
        this.rolename = newData.slug;
        this.roledescrip = newData.name;
        this.roleId = newData.id;
      }
    },
  },
  methods: {
    ...mapActions([
      "storeqlda/toggleForm",
      "storeqlda/handleAddNewRole",
      "storeqlda/handleEditRoleById",
	  "storeqlda/getListDataUser"
    ]),

    getRoleOfUserForEdit() {
      console.log("getRoleOfUserForEdit");
      let arrTemp = this["storeqlda/getListDataRoleOfAllUserGTer"];
      console.log("getRoleOfUserForEdit", arrTemp);
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

    handleEditTask() {
      let objRoleEdit = {
        slug: this.rolename,
        name: this.roledescrip,
        role_id: this.roleId,
      };

      this["storeqlda/handleEditRoleById"](objRoleEdit).then(()=>{
		  this["storeqlda/getListDataUser"]();// lấy lại user vì trong api này có role đê cập nhập lại role
	  })
      this.handleResetData();
    },

    handleAddNew() {
      // Kiểm tra dữ liệu
      if (this.roledescrip.trim() && this.rolename.trim()) {
       
        //chú ý là key :'name','email','password' của data phải trùng với các đối số của action mà hàm này gọi không thì sẽ không nhận đúng dữ liệu để gửi đi gây lỗi 500
        // khi truyền 1 mảng hay obj sang serve thì cần phải stringify nó sau đó bên serve phải decode lại cái json này thì nó mới đúng định dạng của từng phía khong có sẽ gây lỗi

        var data = {
          name: this.roledescrip,
          slug: this.rolename,

        };
        this["storeqlda/handleAddNewRole"](data).then(()=>
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
      this.rolename = "";
      this.roledescrip = "";
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
