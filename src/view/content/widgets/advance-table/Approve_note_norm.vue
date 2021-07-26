<template>
  <!--begin::Advance Table Widget 9-->
  <div class="card card-custom card-stretch gutter-b">
    <!-- <div class="select-cbb">
          <div>
          <b-button
            @click="handleApproveBaoGia"
            size="sm"
            class="mb-2 add-cv icon-tvgs"
          >
            Phê duyệt định mức
          </b-button>
        </div>

        <div>
          <b-form-select v-model="selectedPersionUpDm" :options="persionupdm">
            <template #first>
              <b-form-select-option :value="null"
                >-- Chọn người up định mức --</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>

        <div>
          <b-button
            @click="handleXoaBG"
            size="sm"
            class="mb-2 add-cv icon-tvgs"
          >
            Xóa định mức
          </b-button>
        </div>

        <div>
          <b-button
            @click="handleXemBG"
            size="sm"
            class="mb-2 add-cv icon-tvgs"
          >
            Xem định mức
          </b-button>
        </div>

    </div> -->
    <!--begin::Header-->
    <!-- <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Agents Stats</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-sm"
          >More than 400+ new members</span
        >
      </h3>
      <div class="card-toolbar">
        <a class="btn btn-info font-weight-bolder font-size-sm mr-3"
          >New Arrivals</a
        >
        <a class="btn btn-danger font-weight-bolder font-size-sm">Create</a>
      </div>
    </div> -->
    <!--end::Header-->
    <!--begin::Table result serch-->

    <div v-if="stringSearch" class="card-body pt-0 pb-3">
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
                <th>mã định mức</th>
                <th>tên mã VI</th>
                <th>đơn vị VI</th>
                <th>tên mã EN</th>
                <th>đơn vị EN</th>
                <th>ghi chú</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="dataArrDinhMuc.length !== 0">
              <template v-for="(item, index) in dataArrDinhMuc">
                <tr v-bind:key="index" class="row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                     <td  style="display:none">
                    <textarea
                    style="max-width: 60px"
                    :value="nodeSearch(index,'id')"
                      @keypress="handleSave($event)"
                      class="id_dinh_muc text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                  <td style="max-width: 60px">
                    <textarea
                      style="max-width: 60px"
                      :value="nodeSearch(index, 'maDinhMuc')"
                      @keypress="handleSave($event)"
                      class="ma_dinh_muc text-muted font-weight-bold"
                    ></textarea>
                  </td>
                  <td>
                    <textarea
                      :value="nodeSearch(index, 'tenMaDinhMuc')"
                      @keypress="handleSave($event)"
                      class="ten_ma_dinh_muc text-muted font-weight-bold"
                    ></textarea>
                  </td>
                  <td style="max-width: 60px">
                    <textarea
                      style="max-width: 60px"
                      :value="nodeSearch(index, 'donVi_VI')"
                      @keypress="handleSave($event)"
                      class="don_vi_vi text-muted font-weight-bold"
                    ></textarea>
                  </td>

                  <td>
                    <textarea
                      :value="nodeSearch(index, 'tenCv_EN')"
                      @keypress="handleSave($event)"
                      class="ten_cv_en text-muted font-weight-bold"
                    ></textarea>
                  </td>
                  <td style="max-width: 60px">
                    <textarea
                      style="max-width: 60px"
                      :value="nodeSearch(index, 'donVi_EN')"
                      @keypress="handleSave($event)"
                      class="don_vi_en text-muted font-weight-bold"
                    ></textarea>
                  </td>

                  <td>
                    <textarea
                      :value="nodeSearch(index, 'ghiChuDinhMuc')"
                      @keypress="handleSave($event)"
                      class="area_notes"
                    ></textarea>

                    <!-- <input class="text-dark-75 font-weight-bolder d-block font-size-lg text-muted font-weight-bold"
					type="text"> -->
                  </td>

                  <td class="pr-0 text-right">
                    <a
                      @click="handleDelete($event, index)"
                      class="
                        btn btn-light-danger
                        font-weight-bolder font-size-sm
                      "
                      >Delete</a
                    >
                  </td>
                  <td class="pr-0 text-right">
                    <a
                      @click="handleApprove($event, index)"
                      class="
                        btn btn-light-success
                        font-weight-bolder font-size-sm
                      "
                      >Duyệt</a
                    >
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!--end::Table-->
      </div>
    </div>
    <!--end::Table result search-->

    <div v-else class="card-body pt-0 pb-3">
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
                <th>mã định mức</th>
                <th>tên mã VI</th>
                <th>đơn vị VI</th>
                <th>tên mã EN</th>
                <th>đơn vị EN</th>
                <th>ghi chú</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody v-if="dataArrDinhMuc.length !== 0">
              <template v-for="(item, index) in dataArrDinhMuc">
                <tr v-bind:key="index" class="row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                   <td  style="display:none">
                    <textarea
                    style="max-width: 60px"
                    :value="node(index,'id')"
                      @keypress="handleSave($event)"
                      class="id_dinh_muc text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                  <td style="max-width: 60px">
                    <textarea
                      style="max-width: 60px"
                      :value="node(index, 'maDinhMuc')"
                      @keypress="handleSave($event)"
                      class="ma_dinh_muc text-muted font-weight-bold"
                    ></textarea>
                  </td>
                  <td>
                    <textarea
                      :value="node(index, 'tenMaDinhMuc')"
                      @keypress="handleSave($event)"
                      class="ten_ma_dinh_muc text-muted font-weight-bold"
                    ></textarea>
                  </td>
                  <td style="max-width: 60px">
                    <textarea
                      style="max-width: 60px"
                      :value="node(index, 'donVi_VI')"
                      @keypress="handleSave($event)"
                      class="don_vi_vi text-muted font-weight-bold"
                    ></textarea>
                  </td>

                  <td>
                    <textarea
                      :value="node(index, 'tenCv_EN')"
                      @keypress="handleSave($event)"
                      class="ten_cv_en text-muted font-weight-bold"
                    ></textarea>
                  </td>
                  <td style="max-width: 60px">
                    <textarea
                      style="max-width: 60px"
                      :value="node(index, 'donVi_EN')"
                      @keypress="handleSave($event)"
                      class="don_vi_en text-muted font-weight-bold"
                    ></textarea>
                  </td>

                  <td>
                    <textarea
                      :value="node(index, 'ghiChuDinhMuc')"
                      @keypress="handleSave($event)"
                      class="area_notes"
                    ></textarea>

                    <!-- <input class="text-dark-75 font-weight-bolder d-block font-size-lg text-muted font-weight-bold"
					type="text"> -->
                  </td>

                  <td class="pr-0 text-right">
                    <a
                      @click="handleDelete(index)"
                      class="
                        btn btn-light-danger
                        font-weight-bolder font-size-sm
                      "
                      >Delete</a
                    >
                  </td>
                  <td class="pr-0 text-right">
                    <a
                      @click="handleApprove($event,index)"
                      class="
                        btn btn-light-success
                        font-weight-bolder font-size-sm
                      "
                      >Duyệt</a
                    >
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
import { mapActions, mapGetters, mapState } from "vuex";
//import Excel from "exceljs";
//import Excel from "exceljs/dist/es5/exceljs.browser";
//import Pagination from "../../../pages/plugins/Pagination.vue";
//import { removeVietnameseTones } from "../../../../core/services/helpers";
export default {
  name: "ApproveNorm",
  data() {
    return {
      rows: 100,
      currentPage: 1,
      selectedPersionUpDm: null, // Array reference
      persionupdm: [
        { value: "", text: "" },
        // { value: "Báo giá nhân công", text: "Báo giá nhân công" },
        // { value: "Báo giá ca máy", text: "Báo giá ca máy" },
      ],
      dataArrDinhMuc: [],
    };
  },
  created() {
    this["storeqlda/getAllDataTableDmContribute"](); // khi load lai trang
  },
  mounted() {
    //this.dataArr = this["storeqlda/getListDataDinhMuc"];
    this.dataArr(this.currentPage);
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
  watch: {},
  methods: {
    ...mapActions([
      "storeqlda/getListDataDmContributeHasPaging", //action nay goi den api co pagination
      "storeqlda/getAllDataTableDmContribute",
      "storeqlda/updateDataDmContributeWithId",
      "storeqlda/handleApproveContributeWithId",
      
      "storeqlda/deleteDmContributeWithId",
    ]),
    handleDelete(index) {
         if (
        confirm(
          "Bạn có chắc chắn muốn xóa dữ liệu này không?"
        )
      ) {
      var idDinhMuc = this.dataArrDinhMuc[index].id;
       var idUser = this["storeqlda/currentUser"].id;
      var data = {
        iddm: idDinhMuc,
         idUser:idUser
      };
      this["storeqlda/deleteDmContributeWithId"](data).then((data)=>{
        this.dataArr(this.currentPage);
        if (data.ok === true) {
              alert(data.data);
            }
      });
      }
    },
    handleApprove(e, index) {
            if (
        confirm(
          "Bạn có chắc chắn muốn duyệt dữ liệu này không?"
        )
      ) {

        var elParentLarge = this.getParentSelect(e.target, ".row_table_note");
        var maDinhMuc = elParentLarge.querySelector(".ma_dinh_muc").value;
        var tenMaDinhMuc = elParentLarge.querySelector(".ten_ma_dinh_muc").value;
        var donVi_Vi = elParentLarge.querySelector(".don_vi_vi").value;
        var tenCongViec_En = elParentLarge.querySelector(".ten_cv_en").value;
        var donVi_En = elParentLarge.querySelector(".don_vi_en").value;
        var noteDinhMuc = elParentLarge.querySelector(".area_notes").value;
        var idDinhMuc = this.dataArrDinhMuc[index].id;
        var idUser = this["storeqlda/currentUser"].id;
        var data = {
          maDinhMuc: maDinhMuc,
          tenMaDinhMuc: tenMaDinhMuc,
          noteDinhMuc: noteDinhMuc,
          idDinhMuc: idDinhMuc,
          donVi_VI: donVi_Vi,
          tenCv_EN:tenCongViec_En,
          donVi_EN: donVi_En,
          idUser:idUser
        };
          // this.$store.dispatch('storeqlda/updateDataWithId', data);
          this["storeqlda/handleApproveContributeWithId"](data).then((data) => {
             this.dataArr(this.currentPage);
            if (data.ok === true) {
              alert(data.data);
            }
          });
        
      }
    },
    dataArr(page) {
      this["storeqlda/getListDataDmContributeHasPaging"](page).then(
        (response) => {
          this.dataArrDinhMuc = response.data.data;
          this.rows = response.data.total;
        }
      );
    },
    handleChange(event) {
      this.selectedFile = event.target.files[0];
    },
  
    node(index, headerColumn) {
      return this.dataArrDinhMuc[index][`${headerColumn}`];
    },
    nodeSearch(index, headerColumn) {
      return this.dataArrDmSearch[index][`${headerColumn}`];
    },
    nodeDmSearch(index) {
      return this["storeqlda/arrDmSearch"][index].ghiChuDinhMuc;
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
    hadleClickMaDM(e) {
      e.target.setAttribute("contenteditable", "true");
    },
    hadleClickTenMaDM(e) {
      e.target.setAttribute("contenteditable", "true");
    },

    handleSave(e) {
      //var a = document.querySelector('.textthanh')
      //console.log(this.dataArr[index].id);
      var elParentLarge = this.getParentSelect(e.target, ".row_table_note");
      var maDinhMuc = elParentLarge.querySelector(".ma_dinh_muc").value;
      var tenMaDinhMuc = elParentLarge.querySelector(".ten_ma_dinh_muc").value;
      var donVi_Vi = elParentLarge.querySelector(".don_vi_vi").value;
      var tenCongViec_En = elParentLarge.querySelector(".ten_cv_en").value;
      var donVi_En = elParentLarge.querySelector(".don_vi_en").value;
      var noteDinhMuc = elParentLarge.querySelector(".area_notes").value;
      var idDinhMuc = elParentLarge.querySelector(".id_dinh_muc").value;
      var idUser = this["storeqlda/currentUser"].id;
      var data = {
        maDinhMuc: maDinhMuc,
        tenMaDinhMuc: tenMaDinhMuc,
        noteDinhMuc: noteDinhMuc,
        idDinhMuc: idDinhMuc,
        donVi_VI:donVi_Vi,
        tenCv_EN:tenCongViec_En,
        donVi_EN:donVi_En,
		    idUser:idUser
      };
      if (e.key == "Enter") {
        // this.$store.dispatch('storeqlda/updateDataWithId', data);
        this["storeqlda/updateDataDmContributeWithId"](data).then((data) => {
          if (data.ok === false) {
            alert(data.error);
          }
        });
      }

      //   console.log('tenMaDinhMuc',tenMaDinhMuc);
      //   console.log('noteDinhMuc',noteDinhMuc);
    },
  },
};
</script>
<style lang="scss" scoped>
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