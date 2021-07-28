<template>
  <div>
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
//import { mapActions } from "vuex";

import UserTable from "./admin/roles/UsersTable";
import CompTitle from "./admin/roles/CompTitle";
//import CompControl from './admin/roles/CompControl';
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
import CompForm from "./admin/roles/CompForm";
export default {
  components: {
    CompForm,
    CompTitle,

    UserTable,
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Danh sách vai trò" }]);
  },

};
</script>

<style lang="scss" scoped>
.breadcrumb-item {
  display: flex;
}
</style>