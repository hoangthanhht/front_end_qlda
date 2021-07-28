<template>
  <div>
<CompCreatePost></CompCreatePost>
  </div>
</template>

<script>
import CompCreatePost from "@/view/content/widgets/advance-table/Dangbaiviet.vue";
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
export default {
 name: "createpost",
  components: {
    CompCreatePost,
  },
      mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Tạo bài viết" }]);
  },
}
</script>

<style>

</style>