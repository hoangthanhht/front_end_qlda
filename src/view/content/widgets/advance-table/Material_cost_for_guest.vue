<template>
  <!--begin::Advance Table Widget 9-->

  <div class="card card-custom card-stretch gutter-b">
    <!-- <Formfile></Formfile> -->
    <div class="control_bao_gia">
      <div>
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
            <input
              v-model="selectedKhuVuc"
              type="text"
              class="form-control user_email"
              placeholder="- Nhập khu vực up giá -"
            />
          </div>

          <div>
            <input
              v-model="markCost"
              style="height: 34px; border: 0.3px solid"
              type="text"
              placeholder="Nhập điểm báo giá"
              name="birthday"
            />
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

        <div class="select-cbb pt-5">
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
            <form action="">
              <input
                v-model="selectedDay"
                style="height: 34px; border: 0.3px solid"
                type="date"
                id="birthday"
                name="birthday"
                placeholder="Nhập ngày up giá"
                v-bind:disabled="isDayDisabled"
              />
            </form>
          </div>

          <div>
            <b-form-select v-model="selectedKhuVucView" :options="khuvucView">
              <template #first>
                <b-form-select-option :value="null"
                  >-- Chọn khu vực xem bao giá --</b-form-select-option
                >
              </template>
            </b-form-select>
          </div>
        </div>

        <div class="select-cbb pt-5">
          <div>
            <b-form-select
              v-model="selectedThangView"
              :options="thangView"
              v-bind:disabled="isMonthDisabledView"
            >
              <template #first>
                <b-form-select-option :value="null"
                  >-- Chọn tháng xem báo giá --</b-form-select-option
                >
              </template>
            </b-form-select>
          </div>

          <div>
            <b-form-select
              v-model="selectedQuyView"
              :options="quyView"
              v-bind:disabled="isQuyDisabledView"
            >
              <template #first>
                <b-form-select-option :value="null"
                  >-- Chọn quý xem bao giá--</b-form-select-option
                >
              </template>
            </b-form-select>
          </div>

          <div>
            <b-form-select
              v-model="selectedDayView"
              :options="dayView"
              v-bind:disabled="isDayDisabledView"
            >
              <template #first>
                <b-form-select-option :value="null"
                  >-- Chọn ngày xem báo giá --</b-form-select-option
                >
              </template>
            </b-form-select>
          </div>

          <div>
            <b-form-select v-model="selectedTinhView" :options="tinhView">
              <template #first>
                <b-form-select-option :value="null" disabled
                  >-- Chọn tỉnh xem báo giá --</b-form-select-option
                >
              </template>
            </b-form-select>
          </div>
        </div>
      </div>

      <div class="import_excel_bao_gia">
        <div>
          <b-button
            @click="importExcelBaoGia"
            size="sm"
            class="mb-2 add-cv icon-tvgs"
          >
            Up báo giá
          </b-button>
        </div>

        <div>
          <b-form-file
            v-on:change="handleChange"
            class="mt-3"
            plain
          ></b-form-file>
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
                <th style="display:none">Id</th>
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
                      <td style="display:none">
                    <span class="id_vat_tu text-muted font-weight-bold">{{
                      item.id !== null ? item.id : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="ma_vat_tu text-muted font-weight-bold">{{
                      item.maVatTu !== null ? item.maVatTu : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.tenVatTu !== null ? item.tenVatTu : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="don_vi text-muted font-weight-bold">{{
                      item.donVi !== null ? item.donVi : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="gia_vat_tu text-muted font-weight-bold">{{
                      item.giaVatTu !== null ? item.giaVatTu : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="khu_vuc text-muted font-weight-bold">{{
                      item.khuVuc !== null ? item.khuVuc : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      item.thoiDiem !== null ? item.thoiDiem : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="nguon text-muted font-weight-bold">{{
                      item.nguon !== null ? item.nguon : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ghi_chu text-muted font-weight-bold">{{
                      item.ghiChu !== null ? item.ghiChu : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="tinh text-muted font-weight-bold">{{
                      item.tinh !== null ? item.tinh : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="tac_gia text-muted font-weight-bold">{{
                      item.tacGia !== null ? item.tacGia : "null"
                    }}</span>
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
                <th style="display:none">Id</th>
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
                  <td style="display:none">
                    <span class="id_vat_tu text-muted font-weight-bold">{{
                      item.id !== null ? item.id : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ma_vat_tu text-muted font-weight-bold">{{
                      item.maVatTu !== null ? item.maVatTu : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ten_vat_tu text-muted font-weight-bold">{{
                      item.tenVatTu !== null ? item.tenVatTu : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="don_vi text-muted font-weight-bold">{{
                      item.donVi !== null ? item.donVi : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="gia_vat_tu text-muted font-weight-bold">{{
                      item.giaVatTu !== null ? item.giaVatTu : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="khu_vuc text-muted font-weight-bold">{{
                      item.khuVuc !== null ? item.khuVuc : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="thoi_diem text-muted font-weight-bold">{{
                      item.thoiDiem !== null ? item.thoiDiem : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="nguon text-muted font-weight-bold">{{
                      item.nguon !== null ? item.nguon : "null"
                    }}</span>
                  </td>
                  <td>
                    <span class="ghi_chu text-muted font-weight-bold">{{
                      item.ghiChu !== null ? item.ghiChu : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="tinh text-muted font-weight-bold">{{
                      item.tinh !== null ? item.tinh : "null"
                    }}</span>
                  </td>

                  <td>
                    <span class="tac_gia text-muted font-weight-bold">{{
                      item.tacGia !== null ? item.tacGia : "null"
                    }}</span>
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
  name: "Material_cost_for_guest",
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
      isMonthDisabledView: false,
      isQuyDisabledView: false,
      isDayDisabledView: false,
      selectedTinh: null, // Array reference
      tinh: [
        { text: "An Giang", value: "AG" },
        { text: "Bà Rịa – Vũng Tàu", value: "BV" },
        { text: "Bạc Liêu", value: "BL" },
        { text: "Bắc Kạn", value: "BK" },
        { text: "Bắc Giang", value: "BG" },
        { text: "Bắc Ninh", value: "BN" },
        { text: "Bến Tre", value: "BT" },
        { text: "Bình Dương", value: "BD" },
        { text: "Bình Định", value: "BĐ" },
        { text: "Bình Phước", value: "BP" },
        { text: "Bình Thuận", value: "BTh" },
        { text: "Cà Mau", value: "CM" },
        { text: "Cao Bằng", value: "CB" },
        { text: "Cần Thơ", value: "CT" },
        { text: "Đà Nẵng", value: "ĐNa" },
        { text: "Đắk Lắk", value: "ĐL" },
        { text: "Đắk Nông", value: "ĐNo" },
        { text: "Điện Biên", value: "ĐB" },
        { text: "Đồng Nai", value: "ĐN" },
        { text: "Đồng Tháp", value: "ĐT" },
        { text: "Gia Lai", value: "GL" },
        { text: "Hà Giang", value: "HG" },
        { text: "Hà Nam", value: "HNa" },
        { text: "Hà Nội", value: "HN" },
        { text: "Hà Tĩnh", value: "HT" },
        { text: "Hải Dương", value: "HD" },
        { text: "Hải Phòng", value: "HP" },
        { text: "Hậu Giang", value: "HGi" },
        { text: "Hòa Bình", value: "HB" },
        { text: "Thành phố Hồ Chí Minh", value: "SG" },
        { text: "Hưng Yên", value: "HY" },
        { text: "Khánh Hoà", value: "KH" },
        { text: "Kiên Giang", value: "KG" },
        { text: "Kon Tum", value: "KT" },
        { text: "Lai Châu", value: "LC" },
        { text: "Lạng Sơn", value: "LS" },
        { text: "Lào Cai", value: "LCa" },
        { text: "Lâm Đồng", value: "LĐ" },
        { text: "Long An", value: "LA" },
        { text: "Nam Định", value: "NĐ" },
        { text: "Nghệ An", value: "NA" },
        { text: "Ninh Bình", value: "NB" },
        { text: "Ninh Thuận", value: "NT" },
        { text: "Phú Thọ", value: "PT" },
        { text: "Phú Yên", value: "PY" },
        { text: "Quảng Bình", value: "QB" },
        { text: "Quảng Nam", value: "QNa" },
        { text: "Quảng Ngãi", value: "QNg" },
        { text: "Quảng Ninh", value: "QN" },
        { text: "Quảng Trị", value: "QT" },
        { text: "Sóc Trăng", value: "ST" },
        { text: "Sơn La", value: "SL" },
        { text: "Tây Ninh", value: "TN" },
        { text: "Thái Bình", value: "TB" },
        { text: "Thái Nguyên", value: "TNg" },
        { text: "Thanh Hóa", value: "TH" },
        { text: "Thừa Thiên Huế", value: "TTH" },
        { text: "Tiền Giang", value: "TG" },
        { text: "Trà Vinh", value: "TV" },
        { text: "Tuyên Quang", value: "TQ" },
        { text: "Vĩnh Long", value: "VL" },
        { text: "Vĩnh Phúc", value: "VP" },
        { text: "Yên Bái", value: "YB" },
      ],
      selectedTinhView: null,
      tinhView: [
        { value: "", text: "" },
        // { value: "Báo giá nhân công", text: "Báo giá nhân công" },
        // { value: "Báo giá ca máy", text: "Báo giá ca máy" },
      ],
      selectedKhuVuc: "", // Array reference
      selectedKhuVucView: null, // Array reference
      khuvucView: [
        { value: "", text: "" },
        // { value: "Báo giá nhân công", text: "Báo giá nhân công" },
        // { value: "Báo giá ca máy", text: "Báo giá ca máy" },
      ],
      markCost: null,
      selectedLoaiBg: null, // Array reference
      loaibg: [
        { value: "Báo giá vật tư", text: "Báo giá vật tư" },
        // { value: "Báo giá nhân công", text: "Báo giá nhân công" },
        // { value: "Báo giá ca máy", text: "Báo giá ca máy" },
      ],

      selectedDay: null,
      selectedDayView: null,
      dayView: [],
      selectedThang: null, // Array reference
      thang: [
        { value: "Thang1", text: "Thang 1" },
        { value: "Thang2", text: "Thang 2" },
        { value: "Thang3", text: "Thang 3" },
        { value: "Thang4", text: "Thang 4" },
        { value: "Thang5", text: "Thang 5" },
        { value: "Thang6", text: "Thang 6" },
        { value: "Thang7", text: "Thang 7" },
        { value: "Thang8", text: "Thang 8" },
        { value: "Thang9", text: "Thang 9" },
        { value: "Thang10", text: "Thang 10" },
        { value: "Thang11", text: "Thang 11" },
        { value: "Thang12", text: "Thang 12" },
      ],
      selectedThangView: null, // Array reference
      thangView: [{ value: "", text: "" }],
      selectedQuy: null, // Array reference
      quy: [
        { value: "Quy I", text: "Quy I" },
        { value: "Quy II", text: "Quy II" },
        { value: "Quy III", text: "Quy III" },
        { value: "Quy IV", text: "Quy IV" },
      ],
      selectedQuyView: null, // Array reference
      quyView: [{ value: "", text: "" }],
      dataArrBaoGia: [],
    };
  },
  created() {
    let data = { check: 0, 
      idUserImport: this.currentUserPersonalInfo.user.id,
      };
      this["storeqlda/getInfoTinhBaoGiaOfUserGuest"](data).then((data) => {
        this.tinhView = data.data.tinh;
      });
  },
  mounted() {
    //this.dataArr = this["storeqlda/getListDataDinhMuc"];
    //this.dataArr(this.pagination.current_page);
    //this.dataArr(this.currentPage);
  },
  computed: {
    ...mapState({
      stringSearch: (state) => state.storeqlda.stringSearch, // rieng doi voi map state thi phai dùng như này để  lấy state
    }),
    ...mapGetters([
      "storeqlda/getListDataBGia", // phuc vu viec search
      "storeqlda/arrBaoGiaSearchGuestSelfView",
      "currentUserPersonalInfo",
      "storeqlda/currentUser",
    ]),
    dataArrBaoGiaSerch() {
      return this["storeqlda/arrBaoGiaSearchGuestSelfView"];
    },
  },
  watch: {
    selectedKhuVucView: function () {
      let data = {
        check: 0,
        idUserImport: this.currentUserPersonalInfo.user.id,
        tinh: this.selectedTinhView,
        khuvuc:this.selectedKhuVucView
      };
      this["storeqlda/getThoiDiemBaoGiaOfUserGuest"](data).then((data) => {
        this.thangView = [];
        this.quyView = [];
        this.dayView = [];
        for (var i in data.data.thoidiem) {
          if (data.data.thoidiem[i].value.search("Thang") >= 0) {
            this.thangView.push(data.data.thoidiem[i]);
          } else if (data.data.thoidiem[i].value.search("Quy") >= 0) {
            this.quyView.push(data.data.thoidiem[i]);
          } else {
            this.dayView.push(data.data.thoidiem[i]);
          }
        }
      });
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
    selectedThangView: function () {
      if (this.selectedThangView) {
        this.isQuyDisabledView = true;
        this.isDayDisabledView = true;
      } else {
        this.isQuyDisabledView = false;
        this.isDayDisabledView = false;
      }
    },
    selectedQuyView: function () {
      if (this.selectedQuyView) {
        this.isMonthDisabledView = true;
        this.isDayDisabledView = true;
      } else {
        this.isMonthDisabledView = false;
        this.isDayDisabledView = false;
      }
    },
    selectedDayView: function () {
      if (this.selectedDayView) {
        this.isQuyDisabledView = true;
        this.isMonthDisabledView = true;
      } else {
        this.isQuyDisabledView = false;
        this.isMonthDisabledView = false;
      }
    },
    selectedTinhView: function () {
      let data = {
        check: 0,
        idUserImport: this.currentUserPersonalInfo.user.id,
        tinh: this.selectedTinhView,
      };
      this["storeqlda/getInfoBaoGiaOfUserGuest"](data).then((data) => {
        this.khuvucView = data.data.khuvuc;
      });
    },
  },
  methods: {
    ...mapActions([
      "storeqlda/guestCreateBaoGia",

      "storeqlda/getAllListDataBaoGiaGuest",
      "storeqlda/updateDataGiaVatTuGuestUp",
      "storeqlda/approveGiaVtGuest",
      "storeqlda/getUserGuestUpBgia",
      "storeqlda/getInfoBaoGiaOfUserGuest",
      "storeqlda/getInfoTinhBaoGiaOfUserGuest",
      "storeqlda/viewBaoGiaWithSelecttionOfGuest",
      "storeqlda/getThoiDiemBaoGiaOfUserGuest",
      
    ]),
    dataArr(page) {
      let thoidiem = "";
      if (!this.isMonthDisabledView) {
        thoidiem = this.selectedThangView;
      }
      if (!this.isQuyDisabledView) {
        thoidiem = this.selectedQuyView;
      }
      if (!this.isDayDisabledView) {
        thoidiem = this.selectedDayView;
      }
      var data = {
        check: 0,
        user_id: this.currentUserPersonalInfo.user.id,
        idUserView: this.currentUserPersonalInfo.user.id,
        tinh: this.selectedTinhView,
        khuvuc: this.selectedKhuVucView,
        thoidiem: thoidiem,
        page: page,
      };
      this["storeqlda/viewBaoGiaWithSelecttionOfGuest"](data).then(
        (response) => {
          this.dataArrBaoGia = response.data.pagi.data;
            this.pagination = response.data.pagi;
            this.rows = response.data.pagi.total;
        }
      );
    },
    handleChange(event) {
      this.selectedFile = event.target.files[0];//biến selected file không cần phải khai báo trong data 
      // khi sử dụng như thế này this.selectedFile thì có nghĩa là đối tượng vue này sẽ có biến này kể từ khi hàm change này đc chạy
      // và nó tồn tại cho đến khi reload lại trang. nếu khai bào trong data thì biến sẽ có giá trị luôn 
    },
    handleXemBG() {
      let thoidiem = "";
      if (!this.isMonthDisabledView) {
        thoidiem = this.selectedThangView;
      }
      if (!this.isQuyDisabledView) {
        thoidiem = this.selectedQuyView;
      }
      if (!this.isDayDisabledView) {
        thoidiem = this.selectedDayView;
      }
      var data = {
        check: 0,
        user_id: this.currentUserPersonalInfo.user.id,
        idUserView: this.currentUserPersonalInfo.user.id,
        tinh: this.selectedTinhView,
        khuvuc: this.selectedKhuVucView,
        thoidiem: thoidiem,
      };
      if (
        this.selectedTinhView &&
        this.selectedKhuVucView &&
        (this.selectedDayView || this.selectedThangView || this.selectedQuyView)
      ) {
        this["storeqlda/viewBaoGiaWithSelecttionOfGuest"](data).then(
          (response) => {
            this.dataArrBaoGia = response.data.pagi.data;
            this.pagination = response.data.pagi;
            this.rows = response.data.pagi.total;
          }
        );

      } else {
        alert(
          "Bạn chưa chọn người up báo giá hoặc chưa chọn tỉnh hoặc khu vực hoặc báo giá theo tháng quý hoặc ngày"
        );
      }
    },
    importExcelBaoGia() {
      if (
        confirm(
          "Bạn có chắc chắn muốn up dữ liệu này không?"
        )
      ) {
        if (
          this.selectedFile &&
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
                      //break;
                    }
                  }
                }
                tempFinalRs = JSON.stringify(arrTemp);
                let dataImport = {
                  tempFinalRs: tempFinalRs,
                  idUserImport: this.currentUserPersonalInfo.user.id,
                };

                this["storeqlda/guestCreateBaoGia"](dataImport)
                  .then((res) => {
                    if (res.ok === false) {
                      alert(res.error);
                    } else {
                      if (res.data.exist === true) {
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
                          this["storeqlda/guestCreateBaoGia"](dataImport)
                            .then((data) => alert(data.data.message))
                            .then(() => {
                              let data = {
                                check: 0,
                                idUserImport:
                                  this.currentUserPersonalInfo.user.id,
                              };
                              this["storeqlda/getInfoTinhBaoGiaOfUserGuest"](
                                data
                              ).then((data) => {
                                this.tinhView = data.data.tinh;
                              });
                            });
                        } else {
                          dataImport = {
                            tempFinalRs: tempFinalRs,
                            idUserImport: this.currentUserPersonalInfo.user.id,
                            agreeOverride: 2,
                          };
                          this["storeqlda/guestCreateBaoGia"](dataImport).then(
                            () => {
                              let data = {
                                check: 0,
                                idUserImport:
                                  this.currentUserPersonalInfo.user.id,
                              };
                              this["storeqlda/getInfoTinhBaoGiaOfUserGuest"](
                                data
                              ).then((data) => {
                                this.tinhView = data.data.tinh;
                              });
                            }
                          );
                        }
                      } else {
                        alert(res.data.message);
                        let data = {
                          check: 0,
                          idUserImport: this.currentUserPersonalInfo.user.id,
                        };
                        this["storeqlda/getInfoTinhBaoGiaOfUserGuest"](
                          data
                        ).then((data) => {
                          this.tinhView = data.data.tinh;
                        });
                      }
                    }
                  })
                  .catch((err) => {
                    console.log(err);
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

    handleSave(e) {
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

      var idVatTu = elParentLarge.querySelector(".id_vat_tu").innerText;
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