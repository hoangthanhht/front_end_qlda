<template>
  <tr>
	<td class="text-center">{{ index }}</td>
	<td>{{ role.slug }}</td>
	<td class="text-center">
	 <span class="badge" >{{ role.name }}</span>
	</td>
	<td>
	 <button v-on:click="handleEdit" type="button" class="btn btn-warning">
	   Edit
	 </button>
	 <button v-on:click="handleDelete" type="button" class="btn btn-danger">
	   Delete
	 </button>
	</td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "user-list-item",
  props: {
	role: { type: Object, default: null },
	index: Number,
	roleId:Number
  },
  computed: {

  },
  data() {
	return {

	};
  },
  methods: {
	...mapActions([
	 //actionHandleDelete: "handleDelete",
	 "storeqlda/handleEditRole",
	 "storeqlda/handleDeleteRoleById",
	 "storeqlda/getListDataUser"
	]),
	handleEdit() {
	 this['storeqlda/handleEditRole'](this.role);
	},
	handleDelete() {
		console.log('this.roleId',this.roleId)
	 if (confirm("Bạn có muốn xóa role có tên là " + this.role.name)) {
		 
	  this['storeqlda/handleDeleteRoleById'](this.roleId).then(()=>
	   this["storeqlda/getListDataUser"]());
	 }
	},
  },
};
</script>

<style>
</style>
