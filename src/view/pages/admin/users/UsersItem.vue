<template>
  <tr>
	<td class="text-center">{{ index }}</td>
	<td>{{ user.name }}</td>
	<td class="text-center">
	 <span class="badge" >{{ user.email }}</span>
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
	user: { type: Object, default: null },
	index: Number,
	userId:Number
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
	 "storeqlda/handleEdit",
	 "storeqlda/handleDeleteUserById",
	 "storeqlda/getListDataUser"
	]),
	handleEdit() {
	 this['storeqlda/handleEdit'](this.user);
	},
	handleDelete() {
		console.log('this.userId',this.userId)
	 if (confirm("Bạn có muốn xóa user có tên là " + this.user.name)) {
		 
	  this['storeqlda/handleDeleteUserById'](this.userId).then(()=>
	   this["storeqlda/getListDataUser"]())
	 }
	},
  },
};
</script>

<style>
</style>
