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
                <select v-if="listRole.length !== 0"
                multiple
                 v-model="select"
                 class="form-control">
                    <option 
                     v-for="(role,index) in listRole" 
                    v-bind:value="role.id"
                    v-bind:key="index"
                    >{{ role.slug }}</option>
                    
                </select>
                <span>Selected: {{ select }}</span>
            </div>
      <button
        v-if="taskSelected === null"
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

      <button 
      v-on:click="handleCancel" 
      type="button" 
      class="btn btn-secondary">
        Cancel
      </button>
    </form>
  </b-col>
</template>

<script>
import { mapState, mapActions,mapGetters} from "vuex";
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
      select:[]
    };
  },

  computed: {
    ...mapGetters(["storeqlda/getListDataRoleGTer"]),
    ...mapState({
      isShowForm: (state) => state.storeqlda.isShowForm,
      taskSelected: (state) => state.storeqlda.taskSelected,
    }),
    listRole() {
      return this["storeqlda/getListDataRoleGTer"];
    },
  },
 
  watch: {},
  methods: {
    ...mapActions(["storeqlda/toggleForm", "storeqlda/handleAddNewUser", "storeqlda/handleEditTaskById"]),
    handleEditTask() {
      let objTaskEdit = {
        id: this.taskSelected.id,
        name: this.taskname,
        level: parseInt(this.level),
      };
      // this.$emit('handleEditTaskById', objTaskEdit);
      this.handleEditTaskById(objTaskEdit);
      this.handleResetData();
    },
    handleAddNew() {
      // Kiểm tra dữ liệu
      if (this.username.trim()&& this.useremail.trim()) {
     var userName = document.querySelector(".user_name").value;
     var userEmail = document.querySelector(".user_email").value;
     var password = document.querySelector(".password").value;
     var data = {
         userName:userName,
         userEmail:userEmail,
         password:password,
         role_id: this.select
     }
        this['storeqlda/handleAddNewUser'](data);
        this.handleCancel();
      } else {
        alert("Vui lòng nhập task name");
      }
    },
    handleCancel() {
      this['storeqlda/toggleForm']();
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
