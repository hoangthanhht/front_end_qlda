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
  },
  computed: {

  },
  data() {
	return {

	};
  },
  methods: {
	...mapActions({
	 actionHandleDelete: "handleDelete",
	 actionHandleEdit: "handleEdit",
	}),
	handleEdit() {
	 this.actionHandleEdit(this.user);
	},
	handleDelete() {
	 if (confirm("Bạn có muốn xóa user có tên là " + this.user.name)) {
	   // this.$emit('handleDelete', this.user);
	   console.log("handleDelete TodoListItem.vue");
	   this.actionHandleDelete(this.user);
	 }
	},
  },
};
</script>

<style>
</style>
