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

import UserTable from './admin/roles/UsersTable';
import CompTitle from './admin/roles/CompTitle';
//import CompControl from './admin/roles/CompControl';
import CompForm from './admin/roles/CompForm';
export default {
	components: {
		CompForm,
		CompTitle,
		
		UserTable
	},
}
</script>

<style>

</style>