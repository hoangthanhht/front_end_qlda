<template>
  <div class="bg-white">
    <template v-for="(item, index) in dataArrPost">
      <div v-bind:key="index" class="grid grid-cols-4 gap-x-2 pt-10">
        <div class="pl-5 pr-5">
          <p><span>Chủ đề : </span>{{ item.chuDe }}</p>
          <p><span>Người đăng bài : </span>{{ item.tacGia }}</p>
          <p><span>Thời gian đăng bài : </span>{{ convertUTCDateToLocalDate(new Date(item.created_at)) }}</p>
        </div>
        <div class="col-span-3">
          <router-link
            class="cursor-pointer"
            tag="h3"
            v-bind:to="`/post/${index}`"
          >
            {{ item.tieuDe }}
          </router-link>
          <hr style="height:2px;border-width:0;color:gray;background-color:gray">
          <div class="content_post" v-html="item.editorData">

          </div>
        </div>
      <hr style="height:2px;border-width:0;color:gray;background-color:gray">
      </div>
    </template>

    <b-pagination
      class="pt-10 pb-10"
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
  components: {},
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
  // watch:{
  //   '$route' (to,from) {

  //   }
  // },
  methods: {
    ...mapActions([
      "storeqlda/getListArticleHasPaging", //action nay goi den api co pagination
    ]),
    dataArr(page) {
      this["storeqlda/getListArticleHasPaging"](page).then((response) => {
        this.dataArrPost = response.data.data;
        this.rows = response.data.total;
      });
    },
    convertUTCDateToLocalDate(date) {
        var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();

        newDate.setHours(hours - offset);
        //newDate.indexOf("GMT");
        let rsTime = newDate.getHours() + ' : ' + newDate.getMinutes() + ' Ngày ' +
          newDate.getDate() + ' / ' + newDate.getMonth() + ' / ' + newDate.getFullYear(); 
        return rsTime  
    }

  },
};
</script>
<style lang="scss" scoped>
.breadcrumb-item {
  display: flex;
  background-color: red !important;
}
.content_post {
  height: 5rem;
  overflow: hidden;
  display: block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>