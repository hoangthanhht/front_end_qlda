<template>
  <!--begin::Advance Table Widget 9-->

  <div class="card card-custom card-stretch gutter-b">
    <!-- <Formfile></Formfile> -->
    <div class="control_bao_gia">
      <div class="select-cbb">
        <div>
          <b-form-select
            v-model="selected1"
            :options="options1"
          ></b-form-select>
        </div>
        <div>
          <b-form-select
            v-model="selected2"
            :options="options2"
          ></b-form-select>
        </div>
        <div>
          <b-form-select
            v-model="selected3"
            :options="options3"
          ></b-form-select>
        </div>
      </div>

      <div class="import_excel_bao_gia">
        <div>
          <b-button
            @click="importExcelBaoGia"
            size="sm"
            class="mb-2 add-cv icon-tvgs"
          >
            Thêm báo giá
          </b-button>
        </div>

        <div>
          <b-form-file
            v-on:change="handleChange"
            v-model="file2"
            class="mt-3"
            plain
          ></b-form-file>
        </div>

        <div>
          <b-button size="sm" class="mb-2 add-cv icon-tvgs">
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
    <div class="card-body pt-0 pb-3">
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
                <th style="min-width: 120px">mã vật tư</th>
                <th style="min-width: 100px">tên vật tư</th>
                <th style="min-width: 100px">đơn vị</th>
                <th style="min-width: 100px">nguồn</th>
                <th style="min-width: 100px">ghi chú</th>
                <th style="min-width: 100px">khu vực</th>

                <th style="min-width: 100px"></th>
              </tr>
            </thead>
            <tbody v-if="dataArr.length !== 0">
              <template v-for="(item, index) in dataArr">
                <tr v-bind:key="index" class="row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                  <td>
                    <span
                      v-on:click="hadleClickMaDM"
                      class="ma_vat_tu text-muted font-weight-bold"
                      >{{ item.maVatTu }}</span
                    >
                  </td>
                  <td>
                    <span
                      v-on:click="hadleClickTenMaDM"
                      class="ten_vat_tu text-muted font-weight-bold"
                      >{{ item.tenVatTu }}</span
                    >
                  </td>
                  <td>
                    <span
                      v-on:click="hadleClickTenMaDM"
                      class="don_vi text-muted font-weight-bold"
                      >{{ item.donVi }}</span
                    >
                  </td>
                  <td>
                    <span
                      v-on:click="hadleClickTenMaDM"
                      class="nguon text-muted font-weight-bold"
                      >{{ item.nguon }}</span
                    >
                  </td>
                  <td v-if="item.ghiChu">
                    <span
                      v-on:click="hadleClickTenMaDM"
                      class="ghi_chu text-muted font-weight-bold"
                      >{{ item.ghiChu }}</span
                    >
                  </td>

                  <td>
                    <span
                      v-on:click="hadleClickTenMaDM"
                      class="khu_vuc text-muted font-weight-bold"
                      >{{ item.khuVuc }}</span
                    >
                  </td>
                  <!-- 
                  <td class="pr-0 text-right">
                    <a
                      class="btn btn-light-success font-weight-bolder font-size-sm"
                      >Edit</a
                    >
                  </td> -->
                  <td class="pr-0 text-right">
                    <a
                      v-on:click="handleSave($event, index)"
                      class="
                        btn btn-light-success
                        font-weight-bolder font-size-sm
                      "
                      >Save</a
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
  </div>
  <!--end::Advance Table Widget 9-->
</template>

<script>
import Excel from "exceljs";
//import Excel from "exceljs/dist/es5/exceljs.browser";
import { mapActions, mapGetters } from "vuex";
import { removeVietnameseTones } from "../../../../core/services/helpers";
//import Formfile from '@/view/pages/vue-bootstrap/FormFile.vue'
export default {
  name: "gia_vat_tu",
  components: {},
  data() {
    return {
      file: null,
      file2: null,
      selected1: "1", // Array reference
      options1: [
        { value: "1", text: "Chọn báo giá quý" },
        { value: "a", text: "Báo giá quý I" },
        { value: "b", text: "Báo giá quý II" },
        { value: "c", text: "Báo giá quý III" },
        { value: "d", text: "Báo giá quý IV" },
      ],
      selected2: "1", // Array reference
      options2: [
        { value: "1", text: "Chọn tỉnh thành" },
        { value: "a", text: "Hà Nội" },
        { value: "b", text: "Hồ Chí Minh" },
        { value: "c", text: "Đà Nẵng" },
        { value: "d", text: "Hải Phòng" },
      ],
      selected3: "1", // Array reference
      options3: [
        { value: "1", text: "Chọn loại báo giá" },
        { value: "a", text: "Báo giá vật tư" },
        { value: "b", text: "Báo giá nhân công" },
        { value: "c", text: "Báo giá ca máy" },
      ],
    };
  },
  created() {
    this["storeqlda/getListDataBaoGia"](); // khi load lai trang
  },
  mounted() {
    //this.dataArr = this["storeqlda/getListDataDinhMuc"];
  },
  computed: {
    ...mapGetters(["storeqlda/getListDataBGia", "storeqlda/arrBaoGiaSearch"]),
    dataArr() {
      return this["storeqlda/arrBaoGiaSearch"];
    },
  },
  watch: {
    dataArr: function () {},
  },
  methods: {
    ...mapActions([
      "storeqlda/getListDataBaoGia",
      "storeqlda/createBaoGia",
    ]),
    handleChange(event) {
      this.selectedFile = event.target.files[0];
    },
    importExcelBaoGia() {
      if (this.selectedFile) {
        var workbook = new Excel.Workbook();
        let arrHeader = [];
        //let arrDataJson =[];
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(this.selectedFile);
        fileReader.onload = () => {
          let data = fileReader.result;
          workbook.xlsx.load(data).then( () => {
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
            title = title.map(function (item) {
              return removeVietnameseTones(item)
                .replace(/ /g, "")
                .toLowerCase();
            });
            worksheet.eachRow(function (row) {
              row.eachCell(function (cell) {
                temp = `"${title[index]}":"${cell.value}",`;
                tempRs = tempRs + temp;
                index++;
              });
              tempRs = tempRs.substring(0, tempRs.length - 1);

              tempRs = `{${tempRs}},`;
              tempFinalRs = tempFinalRs + tempRs;
              tempRs = "";
              index = 0;
            });
            tempFinalRs = tempFinalRs.substring(0, tempFinalRs.length - 1);
            tempFinalRs = `[${tempFinalRs}]`;
			console.log('tempFinalRs',tempFinalRs);
            var arrTemp = JSON.parse(tempFinalRs);
            arrTemp.shift();
            for (var i in arrTemp) {
              var keyObj = Object.keys(arrTemp[i]);
              for (var j in title) {
                if (!keyObj.includes(title[j])) {
                  //console.log('title',title[j]);
                  arrTemp[i][title[j]] = null;
                  break;
                }
              }
            }
            tempFinalRs = JSON.stringify(arrTemp);
          
		   this["storeqlda/createBaoGia"](tempFinalRs);
          });
        };
      } else {
        alert("Bạn chưa chọn file import dữ liệu");
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
    noteDM(index) {
      return this.dataArr[index].ghiChuDinhMuc;
    },
    handleSave(e, index) {
      //var a = document.querySelector('.textthanh')
      //console.log(this.dataArr[index].id);
      var elParentLarge = this.getParentSelect(e.target, ".row_table_note");
      var maVatTu = elParentLarge.querySelector(".ma_vat_tu").innerText;
      var tenVatTu = elParentLarge.querySelector(".ten_vat_tu").innerText;
      var donVi = elParentLarge.querySelector(".don_vi").innerText;
      var nguon = elParentLarge.querySelector(".nguon").innerText;
      var ghiChu = elParentLarge.querySelector(".ghi_chu").innerText;
      var khuVuc = elParentLarge.querySelector(".khu_vuc").innerText;

      var idDinhMuc = this.dataArr[index].id;

      var data = {
        maVatTu: maVatTu,
        tenVatTu: tenVatTu,
        donVi: donVi,
        nguon: nguon,
        ghiChu: ghiChu,
        khuVuc: khuVuc,
        idDinhMuc: idDinhMuc,
      };

      // this.$store.dispatch('storeqlda/updateDataWithId', data);
      this["storeqlda/updateDataWithId"](data);

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