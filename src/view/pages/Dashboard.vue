<template>
  <div>
       <template v-for="(item, index) in dataArrPost">
        <div v-bind:key="index" class="row_table_note">
          <h3>{{item.tieuDe}}</h3>
          <div 
          class="content_post"
          v-html="item.editorData">
            
          </div>
        </div>
          </template>

      <b-pagination
      class="pt-10"
      v-model="currentPage"
      align="right"
      pills
      @page-click="dataArr(currentPage)"
      perPage="20"
      :total-rows="rows"
      size="lg"
    >
    </b-pagination>
  </div>
</template>

<script>
 import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "dashboard",
  components: {

  },
   data() {
    return {
      rows: 100,
      currentPage: 1,
      dataArrPost: [],
    };
  },

   computed: {
    ...mapState({
      stringSearch: (state) => state.storeqlda.stringSearch, // rieng doi voi map state thi phai dùng như này để  lấy state
    }),
    ...mapGetters([
      "storeqlda/arrDmSearchContribute",
      "storeqlda/currentUser",
      "currentUserPersonalInfo",
    ]),
    dataArrDmSearch() {
      return this["storeqlda/arrDmSearchContribute"];
    },
  },
   created() {
    //this["storeqlda/getAllDataTableDmContribute"](); // khi load lai trang
  },
    mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Trang Chủ" }]);
    this.dataArr(this.currentPage);
  },
  methods: {
  ...mapActions([
  "storeqlda/getListArticleHasPaging", //action nay goi den api co pagination

    ]),
 dataArr(page) {
      this["storeqlda/getListArticleHasPaging"](page).then(
        (response) => {
          this.dataArrPost = response.data.data;
          this.rows = response.data.total;
        }
      );
    },
    /**
     * Set current active on click
     * @param event
     */

  }
};
</script>
<style lang="scss" scoped>
.breadcrumb-item {
  display: flex;
  background-color: red !important;
}
.content_post{
  height: 5rem;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp: 3;
}
</style>