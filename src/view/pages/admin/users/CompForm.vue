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
      <div class="form-group">
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
    };
  },

  computed: {
    ...mapGetters([
      "storeqlda/getListDataRoleGTer",
      "storeqlda/getListDataRoleOfAllUserGTer",
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
  },

  watch: {
    userSelected: function (newData) {
      if (newData !== null) {
        this.username = newData.name;
        this.useremail = newData.email;
        this.userId = newData.id;
      }
      this.getRoleOfUserForEdit();
    },
  },
  methods: {
    ...mapActions([
      "storeqlda/toggleForm",
      "storeqlda/handleAddNewUser",
      "storeqlda/handleEditTaskById",
      "storeqlda/handleEditUserById",
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
      let role_id = [];
      for (var i in this.select) {
        role_id.push(this.select[i].role_id);
      }
      var password = document.querySelector(".password").value;
      let objUserEdit = {
        name: this.username,
        email: this.useremail,
        password: password,
        idUser: this.userId,
        role_id: JSON.stringify(role_id),
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
        for (var i in this.select) {
          role_id.push(this.select[i].role_id);
        }
        var data = {
          name: this.username,
          email: this.useremail,
          password: password,
          role_id: JSON.stringify(role_id),
        };
        this["storeqlda/handleAddNewUser"](data);
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
    },
  },
};
</script>

<style>
</style>
