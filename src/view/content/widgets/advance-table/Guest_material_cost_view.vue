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
          <b-form-select v-model="selectedPersionUpBg" :options="persionupbg">
            <template #first>
              <b-form-select-option :value="null"
                >-- Chọn người up giá --</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>

          <div>
          <label class="pr-3" for="fname">Số điểm cần để xem báo giá:</label>
            <input
              v-model="markCost"
              style="height: 34px; border: 0.3px solid"
              type="text"
              name="birthday"
            />
          </div>

          <div>
          <label class="pr-3" for="fname">Số điểm hiện có của bạn:</label>
            <input
              v-model="markUserView"
              style="height: 34px; border: 0.3px solid"
              type="text"
              name="birthday"
            />
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


       <div class="import_excel_bao_gia">
        
          
      <div ref="element_vote" >
        <label class="pl-3">
          Lượt vote của báo giá :
        </label>
        <span>
          {{currentVote}}
        </span>
      <i 
	  ref="icon-element_vote"
      @click="handleLike"
      class="flaticon-like icon-2x pl-4" 
      style="cursor: pointer;disabled: true"></i>
      </div>

       <div>
          <b-button
            @click="handleXemBG"
            size="sm"
            class="mb-2 add-cv icon-tvgs"
          >
          Chuyển đến trang đổi điểm
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
                      class="ma_vat_tu text-muted font-weight-bold"
                      >{{ item.maVatTu !== null ? item.maVatTu : "null" }}</span
                    >
                  </td>
                  <td>
                    <span
                      class="ten_vat_tu text-muted font-weight-bold"
                      >{{
                        item.tenVatTu !== null ? item.tenVatTu : "null"
                      }}</span
                    >
                  </td>
                  <td>
                    <span
                      class="don_vi text-muted font-weight-bold"
                      >{{ item.donVi !== null ? item.donVi : "null" }}</span
                    >
                  </td>
                  <td>
                    <span
                      class="gia_vat_tu text-muted font-weight-bold"
                      >{{
                        item.giaVatTu !== null ? item.giaVatTu : "null"
                      }}</span
                    >
                  </td>

                  <td>
                    <span
                      class="khu_vuc text-muted font-weight-bold"
                      >{{
                        item.khuVuc !== null ? item.khuVuc : "null"
                      }}</span
                    >
                  </td>

                  <td>
                    <span
                      class="thoi_diem text-muted font-weight-bold"
                      >{{
                        item.thoiDiem !== null ? item.thoiDiem : "null"
                      }}</span
                    >
                  </td>

                  <td>
                    <span
                      class="nguon text-muted font-weight-bold"
                      >{{ item.nguon !== null ? item.nguon : "null" }}</span
                    >
                  </td>
                  <td>
                    <span
                      class="ghi_chu text-muted font-weight-bold"
                      >{{ item.ghiChu !== null ? item.ghiChu : "null" }}</span
                    >
                  </td>

                  <td>
                    <span
                      class="tinh text-muted font-weight-bold"
                      >{{ item.tinh !== null ? item.tinh : "null" }}</span
                    >
                  </td>

                  <td>
                    <span
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
                      class="ma_vat_tu text-muted font-weight-bold"
                      >{{ item.maVatTu !== null ? item.maVatTu : "null" }}</span
                    >
                  </td>
                  <td>
                    <span
                      class="ten_vat_tu text-muted font-weight-bold"
                      >{{
                        item.tenVatTu !== null ? item.tenVatTu : "null"
                      }}</span
                    >
                  </td>
                  <td>
                    <span
                      class="don_vi text-muted font-weight-bold"
                      >{{ item.donVi !== null ? item.donVi : "null" }}</span
                    >
                  </td>
                  <td>
                    <span
                      class="gia_vat_tu text-muted font-weight-bold"
                      >{{
                        item.giaVatTu !== null ? item.giaVatTu : "null"
                      }}</span
                    >
                  </td>

                  <td>
                    <span
                      class="khu_vuc text-muted font-weight-bold"
                      >{{
                        item.khuVuc !== null ? item.khuVuc : "null"
                      }}</span
                    >
                  </td>

                  <td>
                    <span
                      class="thoi_diem text-muted font-weight-bold"
                      >{{
                        item.thoiDiem !== null ? item.thoiDiem : "null"
                      }}</span
                    >
                  </td>

                  <td>
                    <span
                      class="nguon text-muted font-weight-bold"
                      >{{ item.nguon !== null ? item.nguon : "null" }}</span
                    >
                  </td>
                  <td>
                    <span
                      class="ghi_chu text-muted font-weight-bold"
                      >{{ item.ghiChu !== null ? item.ghiChu : "null" }}</span
                    >
                  </td>

                  <td>
                    <span
                      class="tinh text-muted font-weight-bold"
                      >{{ item.tinh !== null ? item.tinh : "null" }}</span
                    >
                  </td>

                  <td>
                    <span
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
//import Excel from "exceljs";
//import Excel from "exceljs/dist/es5/exceljs.browser";
//import Pagination from "../../../pages/plugins/Pagination.vue";
import { mapActions, mapGetters, mapState } from "vuex";
//import { removeVietnameseTones } from "../../../../core/services/helpers";
//import Formfile from '@/view/pages/vue-bootstrap/FormFile.vue'
export default {
  name: "Approve_material_cost",
  components: {
    //Pagination,
  },
  data() {
    return {
      currentVote:0,
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
      markUserView:null,
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
    let check = {check:1}
    this["storeqlda/getUserGuestUpBgia"](check).then((data) => {
      this.persionupbg = data.data;
    });
	
  },
  mounted() {
    //this.dataArr = this["storeqlda/getListDataDinhMuc"];
    //this.dataArr(this.pagination.current_page);
    //this.dataArr(this.currentPage);
	
		  const voteEle = this.$refs["element_vote"];
		  //voteEle.classList.add("spinner", "spinner-light", "spinner-right");
		  voteEle.style.display = 'none'
	  	
  },
  computed: {
    ...mapState({
      stringSearch: (state) => state.storeqlda.stringSearch, // rieng doi voi map state thi phai dùng như này để  lấy state
    }),
    ...mapGetters([
      "storeqlda/getListDataBGia", // phuc vu viec search
      "storeqlda/arrBaoGiaSearchForApprove",
      "currentUserPersonalInfo",
      "storeqlda/currentUser",
    ]),
    dataArrBaoGiaSerch() {
      return this["storeqlda/arrBaoGiaSearchForApprove"];
    },
  },
  watch: {
    // quan sát sự lựa chọn người đăng bao giá
    selectedPersionUpBg: function () {
       let data = {check:1,
                  idUserImport:this.selectedPersionUpBg
      }
      this["storeqlda/getInfoTinhBaoGiaOfUserGuest"](data).then(
        (data) => {
          this.tinh = data.data.tinh;
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
    selectedTinh: function () {
      let data = {
        check:1,
        idUserImport:this.selectedPersionUpBg,
        tinh:this.selectedTinh,
      }
       this["storeqlda/getInfoBaoGiaOfUserGuest"](data).then(
        (data) => {
          this.khuvuc = data.data.khuvuc;
          
        }
      );
    },
    selectedKhuVuc: function () {
      let data = {
        check: 1,
        idUserImport: this.selectedPersionUpBg,
        tinh: this.selectedTinh,
        khuvuc:this.selectedKhuVuc
      };
      this["storeqlda/getThoiDiemBaoGiaOfUserGuest"](data).then((data) => {
        this.thang = [];
        this.quy = [];
        this.day = [];
        for (var i in data.data.thoidiem) {
          if (data.data.thoidiem[i].value.search("Thang") >= 0) {
            this.thang.push(data.data.thoidiem[i]);
          } else if (data.data.thoidiem[i].value.search("Quy") >= 0) {
            this.quy.push(data.data.thoidiem[i]);
          } else {
            this.day.push(data.data.thoidiem[i]);
          }
        }
      });
    },
  },
  methods: {
    ...mapActions([
      "storeqlda/getAllListDataBaoGiaGuest",
      "storeqlda/updateDataGiaVatTuGuestUp",
      "storeqlda/approveGiaVtGuest",
      "storeqlda/getUserGuestUpBgia",
      "storeqlda/getInfoBaoGiaOfUserGuest",
      "storeqlda/getInfoTinhBaoGiaOfUserGuest",
      "storeqlda/viewBaoGiaWithSelecttionOfGuest",
      "storeqlda/getThoiDiemBaoGiaOfUserGuest",
      "storeqlda/apiHandleLike",
      
    ]),
    handleLike(){
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
        idUserView: this.currentUserPersonalInfo.user.id,
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
		  this['storeqlda/apiHandleLike'](data).then((res)=>{
        this.currentVote = res.data;
      });
	  const eleIcon = this.$refs["icon-element_vote"];
	  let strClass = eleIcon.className;
	  if(strClass.indexOf("text-success") !== -1){
		  eleIcon.classList.remove('text-success');
		  eleIcon.classList.add('text-dark');
	  }else {
		  eleIcon.classList.remove('text-dark');
		  eleIcon.classList.add('text-success');
	  }
	  }else{
		const voteEle = this.$refs["element_vote"];
      	voteEle.style.display = 'none'
	  }
    },
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
        check:3,
        idUserView: this.currentUserPersonalInfo.user.id,
        user_id: this.selectedPersionUpBg,
        tinh: this.selectedTinh,
        khuvuc: this.selectedKhuVuc,
        thoidiem: thoidiem,
		    page:page
      };
      this["storeqlda/viewBaoGiaWithSelecttionOfGuest"](data).then((response) => {
        if(response) {
          this.dataArrBaoGia = response.data.pagi.data;
            this.pagination = response.data.pagi;
            this.rows = response.data.pagi.total;
            
        }
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
        check:1,
        idUserView: this.currentUserPersonalInfo.user.id,
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
        this["storeqlda/viewBaoGiaWithSelecttionOfGuest"](data).then((response) => {
        if(response) {
          if(response.data.isbuy) {
			  console.log('das mua')
                    this.markCost = response.data.mark;
                    this.markUserView = response.data.markuserview;
                    this.dataArrBaoGia = response.data.pagi.data;
                    this.pagination = response.data.pagi;
                    this.rows = response.data.pagi.total;
                    this.currentVote = response.data.votecur;
					const voteEle = this.$refs["element_vote"];
					const eleIcon = this.$refs["icon-element_vote"];
					voteEle.style.display = 'block'
					if(response.data.isvote){
					  //voteEle.classList.add("spinner", "spinner-light", "spinner-right");
						eleIcon.classList.add('text-success');

					}else{
						eleIcon.classList.remove('text-success');
						eleIcon.classList.add('text-dark');
					}
                      
          }else {
			  console.log('chua mua')
            this.markCost = response.data.mark;
            this.markUserView = response.data.markuserview;
            if(parseInt(this.markCost) <= parseInt(this.markUserView)) {
               if (
                      confirm(
                        `Để xem báo giá bạn sẽ phải chuyển số điểm là : ${this.markCost} điểm cho người đăng báo giá này`
                      )
                    ) {
                      this.dataArrBaoGia = response.data.pagi.data;
                      this.pagination = response.data.pagi;
                      this.rows = response.data.pagi.total;
                      this.currentVote = response.data.votecur;
                      const voteEle = this.$refs["element_vote"];
                    //voteEle.classList.add("spinner", "spinner-light", "spinner-right");
                      voteEle.style.display = 'block'
                      data = {
                        check:1,
                        idUserView: this.currentUserPersonalInfo.user.id,
                        user_id: this.selectedPersionUpBg,
                        tinh: this.selectedTinh,
                        khuvuc: this.selectedKhuVuc,
                        thoidiem: thoidiem,
                        agreebuy:1
                        };
                         this["storeqlda/viewBaoGiaWithSelecttionOfGuest"](data).then((res)=>{
                            this.markUserView = res.data.mark;
                         })
  
                      }
            } else {
              alert('Bạn không đủ điểm để xem báo giá này')
            }
          }
        }
      });
      
      this['storeqlda/getAllListDataBaoGiaGuest'](data);
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
              let temp='';
              if (!this.isMonthDisabled) {
                temp = this.selectedThang;
              }
              if (!this.isQuyDisabled) {
                temp = this.selectedQuy;
              }
              if (!this.isDayDisabled) {
                temp = this.selectedDay;
              }
              let dataApprove = {
                giaVt :temp +','+ this.selectedKhuVuc,
                tinh:this.selectedTinh,
                user_id: this.selectedPersionUpBg,
                idUserApprove: this.currentUserPersonalInfo.user.id,
              };

              this["storeqlda/approveGiaVtGuest"](dataApprove).then((data) => {
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
                      dataApprove = {
                        giaVt :temp + ',' + this.selectedKhuVuc,
                        tinh:this.selectedTinh,
                        user_id : this.selectedPersionUpBg,
                        idUserApprove: this.currentUserPersonalInfo.user.id,
                        agreeOverride: 1,
                      };
                      this["storeqlda/approveGiaVtGuest"](dataApprove).then(
                        (data) => alert(data.data.message)
                      );
                    } else {
                      dataApprove = {
                        giaVt :temp+','+this.selectedKhuVuc,
                        tinh:this.selectedTinh,
                        user_id : this.selectedPersionUpBg,
                        idUserApprove: this.currentUserPersonalInfo.user.id,
                        agreeOverride: 2,
                      };
                      this["storeqlda/approveGiaVtGuest"](dataApprove);
                    }
                  } else {
                    alert(data.data.message);
                  }
                }
              });

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
      var khuvuc = elParentLarge.querySelector(".khu_vuc").innerText;
      var thoidiem = elParentLarge.querySelector(".thoi_diem").innerText;
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
        khuvuc: khuvuc,
        thoidiem: thoidiem,
        ghiChu: ghiChu,
        nguon: nguon,
        tinh: tinh,
        tacGia: tacGia,
        idVatTu: idVatTu,
        idUser: idUser,
      };

      // this.$store.dispatch('storeqlda/updateDataWithId', data);
      this["storeqlda/updateDataGiaVatTuGuestUp"](data).then((data) => {
        if (data.ok === false) {
          alert(data.error);
        }else {
          
          this.handleXemBG();
        }
      });

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