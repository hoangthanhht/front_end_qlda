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
import CompForm from './admin/users/CompForm';
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