<template>
  <div class="container bg-white grid grid-cols-4 gap-x-2 pt-10">
    <div class="pl-5 pr-5">
      <p><span>Chủ đề : </span>{{ getPostView.chuDe }}</p>
      <p><span>Người đăng bài : </span>{{ getPostView.tacGia }}</p>
      <p><span>Thời gian đăng bài : </span>{{ convertUTCDateToLocalDate(new Date(getPostView.created_at)) }}</p>
    </div>
    <div class="col-span-3">
      <h3>{{ getPostView.tieuDe }}</h3>
      <hr style="height:2px;border-width:0;color:gray;background-color:gray">
      <div
        class="content_post"
        v-html="getPostView.editorData"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "postview",
  data() {
    return {
      currentPost: null,
    };
  },
  methods: {
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
  computed: {
    ...mapGetters([
      "storeqlda/getListPost",
      "storeqlda/currentUser",
      "currentUserPersonalInfo",
    ]),
    dataArrPost() {
      return this["storeqlda/getListPost"];
    },
    getPostView() {
      let id = parseInt(this.currentPost);
      return this.dataArrPost[id];
    },
  },
  created() {
    this.currentPost = this.$route.params.id;
  },
};
</script>

<style>
</style>