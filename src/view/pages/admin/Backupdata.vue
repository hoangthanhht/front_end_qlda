<template>
  <!--begin::Advance Table Widget 9-->

  <div class="card card-custom card-stretch gutter-b">

    <!--phan de hien thi ket qua tim kiem-->
    <div class="pl-10 pb-5 pt-5">
        <i 
          class="menu-icon flaticon2-time pr-3 text-green-400">
          </i>
          Sao lưu dữ liệu
    </div>
    <div  class="card-body pt-0 pb-3">
      <div class="tab-content">
        <!--begin::Table-->
        <div class="table-responsive">
          <table
            class="
              table
              table-head-custom
              table-vertical-center
              table-head-bg
              table-borderless
            "
          >
            <thead>
              <tr class="text-left">
                <!-- <th style="max-width: 50px" class="pl-7">
                  id
                </th> -->
                <th style="display:none">Id</th>
                <th>Stt</th>
                <th>tên file</th>
                <th>kích thước</th>
                <th>ngày tạo</th>
                <th>hành động</th>
              </tr>
            </thead>
            <tbody v-if="dataArrFile.length !== 0">
              <template v-for="(item, index) in dataArrFile">
                <tr v-bind:key="index" class="border-b row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                  <td style="display:none">
                    <span
                      class="id_vat_tu text-muted font-weight-bold"
                      >{{ index }}</span
                    >
                  </td>
                  <td>
                    <span
                      class="ma_vat_tu text-muted font-weight-bold"
                      >{{ index + 1 }}</span
                    >
                  </td>
                  <td>
                    <span
                      class="ten_vat_tu text-muted font-weight-bold"
                      >{{
                        item.file !== null ? item.file : "null"
                      }}</span
                    >
                  </td>
                  <td>
                    <span
                      class="don_vi text-muted font-weight-bold"
                      >{{ item.size !== null ? item.size : "null" }}</span
                    >
                  </td>

                      <td>
                    <span
                      class="don_vi text-muted font-weight-bold"
                      >{{ item.date !== null ? item.date : "null" }}</span
                    >
                  </td>

                  <td>
                    <span class="nguon text-muted font-weight-bold">
                      <i 
                      @click="handleDownLoad(index)"
                      class="menu-icon cursor-pointer flaticon2-download 
                      text-white pl-2 pr-2 mr-5 bg-green-400"></i>
                      <i 
                      @click="handleDelete(index)"
                      class="menu-icon cursor-pointer flaticon2-rubbish-bin
                      text-white pl-2 pr-2 bg-red-600"></i>
                    </span>
                  
                  </td>
               

                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!--end::Table-->
      </div>
    </div>

    <!--end::Body-->
    <b-pagination
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
  <!--end::Advance Table Widget 9-->
</template>

<script>
//import Excel from "exceljs/dist/es5/exceljs.browser";
//import Pagination from "../../../pages/plugins/Pagination.vue";
import { mapActions, mapGetters, mapState } from "vuex";
//import Formfile from '@/view/pages/vue-bootstrap/FormFile.vue'
export default {
  name: "gia_vat_tu",
  components: {
    //Pagination,
  },
  data() {
    return {
      rows: 100,
      currentPage: 1,
      dataArrFile: [],
    };
  },
  created() {
  },
  mounted() {
    //this.dataArr = this["storeqlda/getListDataDinhMuc"];
    //this.dataArr(this.pagination.current_page);
    this.dataArr(this.currentPage);
   
  },
  computed: {
    ...mapState({
      stringSearch: (state) => state.storeqlda.stringSearch, // rieng doi voi map state thi phai dùng như này để  lấy state
    }),
    ...mapGetters([
      "currentUserPersonalInfo",
      "storeqlda/currentUser",
    ]),
    dataArrFileSearch() {
      return this["storeqlda/arrBaoGiaSearch"];
    },
  },
  watch: {
    
  },
  methods: {
    ...mapActions([
      "storeqlda/getListFileBKHasPaging",
      "storeqlda/deleteFile",
      "storeqlda/downFile",
    ]),
    dataArr(page) {
      this["storeqlda/getListFileBKHasPaging"](page).then((response) => {
        this.dataArrFile = response.data.data;
        this.pagination = response.data;
        this.rows = response.data.total;
      });
    },
    handleChange(event) {
      this.selectedFile = event.target.files[0];
    },
 
    getParentSelect(el, select) {
      while (el.parentElement) {
        var pr = el.parentElement;
        if (pr.matches(select)) {
          return pr;
        }
        el = pr;
      }
    },

    handleDownLoad(index) {
      //this["storeqlda/downFile"](this.dataArrFile[index].file)
      //window.location.href = `http://127.0.0.1:8000/api/downLoadFile/${this.dataArrFile[index].file}`;
      window.location.href = `http://vue.gxd.vn/api/downLoadFile/${this.dataArrFile[index].file}`;
    },
     handleDelete(index) {
      this["storeqlda/deleteFile"](this.dataArrFile[index].file).then((res)=>
      {
        alert(res.data.msg)
        this.dataArr(this.currentPage);
      })
    },
  },
};
</script>
<style lang="scss" scoped>
button[data-v-577b6d74],
input[data-v-577b6d74],
select[data-v-577b6d74],
textarea[data-v-577b6d74] {
  background-color: transparent;
}
.mt-3,
.my-3 {
  margin-top: 0 !important;
}
.import_excel_bao_gia {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
}
.select-cbb {
  display: flex;
  justify-content: space-between;
}
button,
input,
select,
textarea {
  background-color: transparent;
  border-style: solid;
}
</style>