<template>
  <!--begin::Advance Table Widget 9-->

  <div class="card card-custom card-stretch gutter-b">
    <!-- <Formfile></Formfile> -->
    <div class="control_bao_gia">
      <div class="select-cbb">
        <div>
          <b-form-select v-model="selectedTinh" :options="tinh">
            <template #first>
              <b-form-select-option :value="null" disabled
                >-- Chọn tỉnh thành --</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>
        <div>
          <b-form-select v-model="selectedKhuVuc" :options="khuvuc">
            <template #first>
              <b-form-select-option :value="null"
                >-- Chọn khu vực --</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>

        <div>
          <b-form-select
            v-model="selectedThang"
            :options="thang"
            v-bind:disabled="isMonthDisabled"
          >
            <template #first>
              <b-form-select-option :value="null"
                >-- Báo giá theo tháng--</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>

        <div>
          <b-form-select
            v-model="selectedQuy"
            :options="quy"
            v-bind:disabled="isQuyDisabled"
          >
            <template #first>
              <b-form-select-option :value="null"
                >-- Báo giá theo quý--</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>

        <div>
          <b-form-select
            v-model="selectedDay"
            :options="day"
            v-bind:disabled="isDayDisabled"
          >
            <template #first>
              <b-form-select-option :value="null"
                >-- Báo giá theo ngày--</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>

        <div>
          <b-form-select v-model="selectedLoaiBg" :options="loaibg">
            <template #first>
              <b-form-select-option :value="null" disabled
                >-- Chọn loại báo giá --</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>
      </div>

      <div class="import_excel_bao_gia">
        <div>
          <b-button
            @click="handleApproveBaoGia"
            size="sm"
            class="mb-2 add-cv icon-tvgs"
          >
            Approve báo giá
          </b-button>
        </div>

        <div>
          <b-form-select v-model="selectedPersionUpBg" :options="persionupbg">
            <template #first>
              <b-form-select-option :value="null"
                >-- Chọn người up giá --</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>

        <div>
          <b-button
            @click="handleXemBG"
            size="sm"
            class="mb-2 add-cv icon-tvgs"
          >
            Xem báo giá
          </b-button>
        </div>
      </div>
    </div>
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
    <!--begin::Body-->

    <!--phan de hien thi ket qua tim kiem-->
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
                <th>mã vật tư</th>
                <th>tên vật tư</th>
                <th>đơn vị</th>
                <th>giá</th>
                <th>khu vực</th>
                <th>thời điểm</th>
                <th>nguồn</th>
                <th>ghi chú</th>
                <th>tỉnh</th>
                <th>người đăng</th>
              </tr>
            </thead>
            <tbody v-if="dataArrBaoGiaSerch.length !== 0">
              <template v-for="(item, index) in dataArrBaoGiaSerch">
                <tr v-bind:key="index" class="row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickMaDM"
                      class="ma_vat_tu text-muted font-weight-bold"
                      >{{ item.maVatTu !== null ? item.maVatTu : "null" }}</span
                    >
                  </td>
                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="ten_vat_tu text-muted font-weight-bold"
                      >{{
                        item.tenVatTu !== null ? item.tenVatTu : "null"
                      }}</span
                    >
                  </td>
                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="don_vi text-muted font-weight-bold"
                      >{{ item.donVi !== null ? item.donVi : "null" }}</span
                    >
                  </td>
                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="gia_vat_tu text-muted font-weight-bold"
                      >{{
                        item.giaVatTu !== null ? item.giaVatTu : "null"
                      }}</span
                    >
                  </td>

                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="gia_vat_tu text-muted font-weight-bold"
                      >{{
                        item.giaVatTu !== null ? item.giaVatTu : "null"
                      }}</span
                    >
                  </td>

                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="gia_vat_tu text-muted font-weight-bold"
                      >{{
                        item.giaVatTu !== null ? item.giaVatTu : "null"
                      }}</span
                    >
                  </td>

                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="nguon text-muted font-weight-bold"
                      >{{ item.nguon !== null ? item.nguon : "null" }}</span
                    >
                  </td>
                  <td v-if="item.ghiChu">
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="ghi_chu text-muted font-weight-bold"
                      >{{ item.ghiChu !== null ? item.ghiChu : "null" }}</span
                    >
                  </td>

                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="tinh text-muted font-weight-bold"
                      >{{ item.tinh !== null ? item.tinh : "null" }}</span
                    >
                  </td>

                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="tac_gia text-muted font-weight-bold"
                      >{{ item.tacGia !== null ? item.tacGia : "null" }}</span
                    >
                  </td>
                  <!-- 
                  <td class="pr-0 text-right">
                    <a
                      class="btn btn-light-success font-weight-bolder font-size-sm"
                      >Edit</a
                    >
                  </td> -->
                  <!-- <td class="pr-0 text-right">
                    <a
                    @blur="handleSave($event, index)"
                      v-on:click="handleSave($event, index)"
                      class="
                        btn btn-light-success
                        font-weight-bolder font-size-sm
                      "
                      >Save</a
                    >
                  </td> -->
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!--end::Table-->
      </div>
    </div>

    <!-- ket thuc hien thi kq tim kiem -->

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
                <th>mã vật tư</th>
                <th>tên vật tư</th>
                <th>đơn vị</th>
                <th>giá</th>
                <th>khu vực</th>
                <th>thời điểm</th>
                <th>nguồn</th>
                <th>ghi chú</th>
                <th>tỉnh</th>
                <th>người đăng</th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template v-for="(item, index) in dataArrBaoGia">
                <tr v-bind:key="index" class="row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickMaDM"
                      class="ma_vat_tu text-muted font-weight-bold"
                      >{{ item.maVatTu !== null ? item.maVatTu : "null" }}</span
                    >
                  </td>
                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="ten_vat_tu text-muted font-weight-bold"
                      >{{
                        item.tenVatTu !== null ? item.tenVatTu : "null"
                      }}</span
                    >
                  </td>
                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="don_vi text-muted font-weight-bold"
                      >{{ item.donVi !== null ? item.donVi : "null" }}</span
                    >
                  </td>
                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="gia_vat_tu text-muted font-weight-bold"
                      >{{
                        item.giaVatTu !== null ? item.giaVatTu : "null"
                      }}</span
                    >
                  </td>

                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="gia_vat_tu text-muted font-weight-bold"
                      >{{
                        item.giaVatTu !== null ? item.giaVatTu : "null"
                      }}</span
                    >
                  </td>

                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="gia_vat_tu text-muted font-weight-bold"
                      >{{
                        item.giaVatTu !== null ? item.giaVatTu : "null"
                      }}</span
                    >
                  </td>

                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="nguon text-muted font-weight-bold"
                      >{{ item.nguon !== null ? item.nguon : "null" }}</span
                    >
                  </td>
                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="ghi_chu text-muted font-weight-bold"
                      >{{ item.ghiChu !== null ? item.ghiChu : "null" }}</span
                    >
                  </td>

                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="tinh text-muted font-weight-bold"
                      >{{ item.tinh !== null ? item.tinh : "null" }}</span
                    >
                  </td>

                  <td>
                    <span
                      @blur="handleSave($event, index)"
                      v-on:click="hadleClickTenMaDM"
                      class="tac_gia text-muted font-weight-bold"
                      >{{ item.tacGia !== null ? item.tacGia : "null" }}</span
                    >
                  </td>
                  <!-- 
                  <td class="pr-0 text-right">
                    <a
                      class="btn btn-light-success font-weight-bolder font-size-sm"
                      >Edit</a
                    >
                  </td> -->
                  <!-- <td class="pr-0 text-right">
                    <a
                    @blur="handleSave($event, index)"
                      v-on:click="handleSave($event, index)"
                      class="
                        btn btn-light-success
                        font-weight-bolder font-size-sm
                      "
                      >Save</a
                    >
                  </td> -->
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
    <!-- <Pagination
      v-bind:pagination="pagination"
      v-on:click.native="dataArr(pagination.current_page)"
      :offset="4"
    ></Pagination> -->
  </div>
  <!--end::Advance Table Widget 9-->
</template>

<script>
import Excel from "exceljs";
//import Excel from "exceljs/dist/es5/exceljs.browser";
//import Pagination from "../../../pages/plugins/Pagination.vue";
import { mapActions, mapGetters, mapState } from "vuex";
import { removeVietnameseTones } from "../../../../core/services/helpers";
//import Formfile from '@/view/pages/vue-bootstrap/FormFile.vue'
export default {
  name: "Approve_material_cost",
  components: {
    //Pagination,
  },
  data() {
    return {
      rows: 100,
      currentPage: 1,
      isMonthDisabled: false,
      isQuyDisabled: false,
      isDayDisabled: false,
      selectedTinh: null, // Array reference
      tinh: [],
      selectedKhuVuc: null, // Array reference
      khuvuc: [
        { value: "", text: "" },
        // { value: "Báo giá nhân công", text: "Báo giá nhân công" },
        // { value: "Báo giá ca máy", text: "Báo giá ca máy" },
      ],
      markCost: null,
      selectedPersionUpBg: null, // Array reference
      persionupbg: [
        { value: "", text: "" },
        // { value: "Báo giá nhân công", text: "Báo giá nhân công" },
        // { value: "Báo giá ca máy", text: "Báo giá ca máy" },
      ],
      selectedLoaiBg: null, // Array reference
      loaibg: [
        { value: "Báo giá vật tư", text: "Báo giá vật tư" },
        // { value: "Báo giá nhân công", text: "Báo giá nhân công" },
        // { value: "Báo giá ca máy", text: "Báo giá ca máy" },
      ],

      selectedDay: null,
      day: [],
      selectedThang: null, // Array reference
      thang: [],
      selectedQuy: null, // Array reference
      quy: [],
      dataArrBaoGia: [],
    };
  },
  created() {
    this["storeqlda/getAllListDataBaoGia"](); // khi load lai trang
    this["storeqlda/getUserGuestUpBgia"]().then((data) => {
      this.persionupbg = data.data;
    });
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
      "storeqlda/getListDataBGia", // phuc vu viec search
      "storeqlda/arrBaoGiaSearch",
      "currentUserPersonalInfo",
      "storeqlda/currentUser",
    ]),
    dataArrBaoGiaSerch() {
      return this["storeqlda/arrBaoGiaSearch"];
    },
  },
  watch: {
    dataArr: function () {},
    // quan sát sự lựa chọn người đăng bao giá
    selectedPersionUpBg: function () {
      this["storeqlda/getInfoBaoGiaOfUserGuest"](this.selectedPersionUpBg).then(
        (data) => {
          this.tinh = data.data.tinh;
          this.khuvuc = data.data.khuvuc;
          for (var i in data.data.thoidiem) {
            if (data.data.thoidiem[i].value.search("Thang") >= 0) {
              this.thang.push(data.data.thoidiem[i]);
            } else if (data.data.thoidiem[i].value.search("Quy") >= 0) {
              this.quy.push(data.data.thoidiem[i]);
            } else {
              this.day.push(data.data.thoidiem[i]);
            }
          }
        }
      );
    },
    selectedThang: function () {
      if (this.selectedThang) {
        this.isQuyDisabled = true;
        this.isDayDisabled = true;
      } else {
        this.isQuyDisabled = false;
        this.isDayDisabled = false;
      }
    },
    selectedQuy: function () {
      if (this.selectedQuy) {
        this.isMonthDisabled = true;
        this.isDayDisabled = true;
      } else {
        this.isMonthDisabled = false;
        this.isDayDisabled = false;
      }
    },
    selectedDay: function () {
      if (this.selectedDay) {
        this.isQuyDisabled = true;
        this.isMonthDisabled = true;
      } else {
        this.isQuyDisabled = false;
        this.isMonthDisabled = false;
      }
    },
    selectedTinh: function () {},
  },
  methods: {
    ...mapActions([
      "storeqlda/getAllListDataBaoGia",
      "storeqlda/updateDataGiaVatTuWithId",
      "storeqlda/getListDataBaoGiaGuestHasPaging",
      "storeqlda/guestCreateBaoGia",
      "storeqlda/getUserGuestUpBgia",
      "storeqlda/getInfoBaoGiaOfUserGuest",
      "storeqlda/viewBaoGiaWithSelecttionOfGuest",
    ]),
    dataArr(page) {
		let thoidiem = "";
      if (!this.isMonthDisabled) {
        thoidiem = this.selectedThang;
      }
      if (!this.isQuyDisabled) {
        thoidiem = this.selectedQuy;
      }
      if (!this.isDayDisabled) {
        thoidiem = this.selectedDay;
      }
      var data = {
        user_id: this.selectedPersionUpBg,
        tinh: this.selectedTinh,
        khuvuc: this.selectedKhuVuc,
        thoidiem: thoidiem,
		page:page
      };
      this["storeqlda/viewBaoGiaWithSelecttionOfGuest"](data).then((response) => {
		  console.log('reponse',response)
        // this.dataArrBaoGia = response.data.data;
        // this.pagination = response.data;
        // this.rows = response.data.data.total;
      });
    },
    handleXemBG() {
      let thoidiem = "";
      if (!this.isMonthDisabled) {
        thoidiem = this.selectedThang;
      }
      if (!this.isQuyDisabled) {
        thoidiem = this.selectedQuy;
      }
      if (!this.isDayDisabled) {
        thoidiem = this.selectedDay;
      }
      var data = {
        user_id: this.selectedPersionUpBg,
        tinh: this.selectedTinh,
        khuvuc: this.selectedKhuVuc,
        thoidiem: thoidiem,
      };
      if (
        this.selectedTinh &&
        this.selectedKhuVuc &&
        this.selectedPersionUpBg &&
        (this.selectedDay || this.selectedThang || this.selectedQuy)
      ) {
        this["storeqlda/viewBaoGiaWithSelecttionOfGuest"](data);
      } else {
        alert(
          "Bạn chưa chọn người up báo giá hoặc chưa chọn tỉnh hoặc khu vực hoặc báo giá theo tháng quý hoặc ngày"
        );
      }
    },
    handleApproveBaoGia() {
      if (
        this.selectedTinh &&
        this.selectedKhuVuc &&
        (this.selectedDay || this.selectedThang || this.selectedQuy)
      ) {
        var workbook = new Excel.Workbook();
        let arrHeader = [];
        //let arrDataJson =[];
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(this.selectedFile);
        fileReader.onload = () => {
          let data = fileReader.result;
          workbook.xlsx
            .load(data)
            .then(() => {
              var worksheet = workbook.getWorksheet(1);
              // let dataArray = changeRowsToDict(worksheet);
              // console.log(dataArray)
              worksheet.eachRow(function (row) {
                var filtered = row.values.filter(function (el) {
                  return el != undefined;
                });
                arrHeader.push(filtered);
              });
              let index = 0;
              let temp = "";
              let tempRs = "";
              let tempFinalRs = "";
              let title = arrHeader[0];
              // lặp qua từng phần tử và làm gì đó với nó trong mảng dung map
              title = title.map(function (item) {
                return removeVietnameseTones(item)
                  .replace(/ /g, "")
                  .toLowerCase();
              });

              var headerGiaVt = [
                "mavattu",
                "tenvattu",
                "donvi",
                "giavattu",
                "nguon",
                "ghichu",
                "tinh",
                "tacgia",
              ];
              worksheet.eachRow((row) => {
                let tempPrice = "";
                row.eachCell({ includeEmpty: true }, (cell, number) => {
                  if (number <= title.length) {
                    if (title[index] === "giavattu") {
                      if (!this.isMonthDisabled) {
                        tempPrice = this.selectedThang;
                      }
                      if (!this.isQuyDisabled) {
                        tempPrice = this.selectedQuy;
                      }
                      if (!this.isDayDisabled) {
                        tempPrice = this.selectedDay;
                      }
                      temp = `"${title[index]}":"${tempPrice},${this.selectedKhuVuc}:${cell.value}",`;
                      tempRs = tempRs + temp;
                      index++;
                      tempPrice = "";
                    } else {
                      temp = `"${title[index]}":"${
                        cell.value !== null && typeof cell.value !== "number"
                          ? cell.value.replace(/\\/g, "").replace(/"/g, "''")
                          : cell.value
                      }",`;
                      tempRs = tempRs + temp;
                      index++;
                      //tempPrice = "";
                    }
                  }
                });
                //tempRs = tempRs.substring(0, tempRs.length - 1); // bỏ dáu ngăn cách , ở cuối
                if (!this.isMonthDisabled) {
                  tempPrice = this.selectedThang;
                }
                if (!this.isQuyDisabled) {
                  tempPrice = this.selectedQuy;
                }
                if (!this.isDayDisabled) {
                  tempPrice = this.selectedDay;
                }
                temp = `"tinh":"${this.selectedTinh}",`;
                tempRs = tempRs + temp;
                temp = `"vote_mark":"${tempPrice},${this.selectedKhuVuc},vote:0|mark:${this.markCost}"`;
                tempRs = tempRs + temp;
                tempRs = `{${tempRs}},`; // 1 obj của 1 dòng
                tempFinalRs = tempFinalRs + tempRs;
                tempRs = "";
                index = 0; // đưa veeg 0 để bắt đầu hàng mới
              });
              tempFinalRs = tempFinalRs.substring(0, tempFinalRs.length - 1); // string của cả bảng tính
              tempFinalRs = `[${tempFinalRs}]`;
              //console.log(tempFinalRs);
              var arrTemp = JSON.parse(tempFinalRs);
              //console.log(arrTemp);
              arrTemp.shift(); // bỏ đi thằng dòng đầu tiên là tiêu đề
              // lặp qua để xem còn file đọc vào có dòng tiêu đề thiếu những cột nào so với cột chuẩn
              for (var i in arrTemp) {
                var keyObj = Object.keys(arrTemp[i]);
                for (var j in headerGiaVt) {
                  if (!keyObj.includes(headerGiaVt[j])) {
                    //console.log('title',title[j]);
                    arrTemp[i][headerGiaVt[j]] = null;
                    break;
                  }
                }
              }
              tempFinalRs = JSON.stringify(arrTemp);
              let dataImport = {
                tempFinalRs: tempFinalRs,
                idUserImport: this.currentUserPersonalInfo.user.id,
              };

              this["storeqlda/guestCreateBaoGia"](dataImport).then((data) => {
                console.log("data lan 1", data);
                if (data.ok === false) {
                  alert(data.error);
                } else {
                  if (data.data.exist === true) {
                    if (
                      confirm(
                        "Báo giá này đã có trong cơ sở dữ liêu. Bạn có muốn ghi đè các dữ liệu này không?"
                      )
                    ) {
                      dataImport = {
                        tempFinalRs: tempFinalRs,
                        idUserImport: this.currentUserPersonalInfo.user.id,
                        agreeOverride: 1,
                      };
                      this["storeqlda/guestCreateBaoGia"](dataImport).then(
                        (data) => alert(data.data.message)
                      );
                    } else {
                      dataImport = {
                        tempFinalRs: tempFinalRs,
                        idUserImport: this.currentUserPersonalInfo.user.id,
                        agreeOverride: 2,
                      };
                      this["storeqlda/guestCreateBaoGia"](dataImport);
                    }
                  } else {
                    alert(data.data.message);
                  }
                }
              });
            })
            .catch((err) => {
              console.log(err);
            });
        };
      } else {
        alert(
          "Bạn chưa chọn file import dữ liệu, hoặc bạn chưa chọn tỉnh hoặc khu vực hoặc báo giá theo tháng quý hoặc ngày"
        );
      }
      //document.getElementById("jsondata").innerHTML = JSON.stringify(row.value,undefined,4);
      //}).catch(err => console.log(`Caught by .catch ${err}`));
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

    handleSave(e, index) {
      //var a = document.querySelector('.textthanh')
      //console.log(this.dataArr[index].id);
      var elParentLarge = this.getParentSelect(e.target, ".row_table_note");
      var maVatTu = elParentLarge.querySelector(".ma_vat_tu").innerText;
      var tenVatTu = elParentLarge.querySelector(".ten_vat_tu").innerText;
      var donVi = elParentLarge.querySelector(".don_vi").innerText;
      var giaVatTu = elParentLarge.querySelector(".gia_vat_tu").innerText;
      var nguon = elParentLarge.querySelector(".nguon").innerText;
      var ghiChu = elParentLarge.querySelector(".ghi_chu").innerText;
      var tinh = elParentLarge.querySelector(".tinh").innerText;
      var tacGia = elParentLarge.querySelector(".tac_gia").innerText;

      var idVatTu = this.dataArrBaoGia[index].id;
      var idUser = this["storeqlda/currentUser"].id;
      var data = {
        maVatTu: maVatTu,
        tenVatTu: tenVatTu,
        donVi: donVi,
        giaVatTu: giaVatTu,
        ghiChu: ghiChu,
        nguon: nguon,
        tinh: tinh,
        tacGia: tacGia,
        idVatTu: idVatTu,
        idUser: idUser,
      };

      // this.$store.dispatch('storeqlda/updateDataWithId', data);
      this["storeqlda/updateDataGiaVatTuWithId"](data).then((data) => {
        if (data.ok === false) {
          alert(data.error);
        }
        this["storeqlda/getAllListDataBaoGia"]();
      });

      //   console.log('tenMaDinhMuc',tenMaDinhMuc);
      //   console.log('noteDinhMuc',noteDinhMuc);
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