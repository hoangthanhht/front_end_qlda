<template>
  <div >
		<b-container>
			<CompTitle />

			<b-row>

				<CompForm />
			</b-row>

			<UserTable />
		</b-container>
	</div>
</template>

<script>
//import { mapState } from 'vuex'

import UserTable from './admin/users/UsersTable';
import CompTitle from './admin/users/CompTitle';
//import CompControl from './admin/users/CompControl';
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
import CompForm from './admin/users/CompForm';
export default {
	components: {
		CompForm,
		CompTitle,
		
		UserTable
	},
	 mounted() {

    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Danh sách nhân viên" }]);
  },
}
</script>

<style lang="scss" scoped>
.breadcrumb-item {
  display: flex;
}
</style>