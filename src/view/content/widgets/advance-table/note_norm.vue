<template>
  <!--begin::Advance Table Widget 9-->
  <div class="card card-custom card-stretch gutter-b">
    <div class="control_bao_gia flex">
         <div class="pl-9 mt-1.5">
          <b-button
            @click="importExcelBaoGia"
            size="sm"
            class="mb-2 add-cv icon-tvgs"
          >
            Cập nhật dữ liệu
          </b-button>
        </div>

        <div class="pl-96">
          <b-form-file
            v-on:change="handleChange"
            class="mt-3"
            plain
          ></b-form-file>
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
               <th >mã định mức</th>
                <th >tên mã VI</th>
                <th >đơn vị VI</th>
                <th >tên mã EN</th>
                <th >đơn vị EN</th>
                <th >URL</th>
                <th >ghi chú</th>
              </tr>
            </thead>
            <tbody v-if="dataArrDmSearch.length !== 0">
              <template v-for="(item, index) in dataArrDmSearch">
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
                    :value="nodeSearch(index,'maDinhMuc')"
                      @keypress="handleSave($event)"
                      class="ma_dinh_muc text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                  <td>
                    <textarea
                    :value="nodeSearch(index,'tenMaDinhMuc')"
                     @keypress="handleSave($event)"
                      class="ten_ma_dinh_muc text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                   <td style="max-width: 60px">
                    <textarea
                    style="max-width: 60px"
                    :value="nodeSearch(index,'donVi_VI')"
                     @keypress="handleSave($event)"
                      class="don_vi_vi text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                  
                   <td>
                    <textarea
                    :value="nodeSearch(index,'tenCv_EN')"
                     @keypress="handleSave($event)"
                      class="ten_cv_en text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                   <td style="max-width: 60px">
                    <textarea
                    style="max-width: 60px"
                    :value="nodeSearch(index,'donVi_EN')"
                     @keypress="handleSave($event)"
                      class="don_vi_en text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                   <td>
                    <textarea
                    :value="nodeSearch(index,'url')"
                     @keypress="handleSave($event)"
                      class="url text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                  <td>
                    <textarea
					            :value="nodeSearch(index,'ghiChuDinhMuc')"
                      @keypress="handleSave($event)"
                      class="area_notes"
                    >
                    </textarea>
                    <!-- <input class="text-dark-75 font-weight-bolder d-block font-size-lg text-muted font-weight-bold"
					type="text"> -->
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
                <th style="display:none" >Id</th>
                <th >mã định mức</th>
                <th >tên mã VI</th>
                <th >đơn vị VI</th>
                <th >tên mã EN</th>
                <th >đơn vị EN</th>
                <th >URL</th>
                <th >ghi chú</th>

              </tr>
            </thead>
            <tbody v-if="dataArrDinhMuc.length !== 0">
              <template v-for="(item, index) in dataArrDinhMuc">
                <tr v-bind:key="index" class="row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                  <td style="display:none">
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
                    :value="node(index,'maDinhMuc')"
                      @keypress="handleSave($event)"
                      class="ma_dinh_muc text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                  <td>
                    <textarea
                    :value="node(index,'tenMaDinhMuc')"
                     @keypress="handleSave($event)"
                      class="ten_ma_dinh_muc text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                   <td style="max-width: 60px">
                    <textarea
                    style="max-width: 60px"
                    :value="node(index,'donVi_VI')"
                     @keypress="handleSave($event)"
                      class="don_vi_vi text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                  
                   <td>
                    <textarea
                    :value="node(index,'tenCv_EN')"
                     @keypress="handleSave($event)"
                      class="ten_cv_en text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                   <td style="max-width: 60px">
                    <textarea
                    style="max-width: 60px"
                    :value="node(index,'donVi_EN')"
                     @keypress="handleSave($event)"
                      class="don_vi_en text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                   <td>
                    <textarea
                    :value="node(index,'url')"
                     @keypress="handleSave($event)"
                      class="url text-muted font-weight-bold"
                      ></textarea
                    >
                  </td>
                  <td>
                    <textarea
					            :value="node(index,'ghiChuDinhMuc')"
                      @keypress="handleSave($event)"
                      class="area_notes"
                    ></textarea
                    >
                    
                    <!-- <input class="text-dark-75 font-weight-bolder d-block font-size-lg text-muted font-weight-bold"
					type="text"> -->
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
  <b-pagination v-model="currentPage" 
  align="right"
  pills 
  @page-click="dataArr(currentPage)"
  perPage="20"
  :total-rows="rows" size="lg">
  </b-pagination>
  </div>
  <!--end::Advance Table Widget 9-->
</template>

<script>
import { mapActions, mapGetters, mapState} from "vuex";
import Excel from "exceljs";
//import Excel from "exceljs/dist/es5/exceljs.browser";
//import Pagination from "../../../pages/plugins/Pagination.vue";
import { removeVietnameseTones } from "../../../../core/services/helpers";
export default {
  name: "widget-3",
  data() {
    return {
    	rows: 100,
	  	currentPage:1,
    	dataArrDinhMuc:[],
    };
  },
  created() {
    this["storeqlda/getAllListDataDm"](); // khi load lai trang
  },
  mounted() {
    //this.dataArr = this["storeqlda/getListDataDinhMuc"];
	 this.dataArr(this.currentPage);
  },
  computed: {
	   ...mapState({
      stringSearch: state=>state.storeqlda.stringSearch,// rieng doi voi map state thi phai dùng như này để  lấy state
    }),
    ...mapGetters([
      "storeqlda/getListDataDinhMuc",// phuc vu viec search
      "storeqlda/arrDmSearch",
      "storeqlda/currentUser",
      "currentUserPersonalInfo",
    ]),
    dataArrDmSearch() {
      return this["storeqlda/arrDmSearch"];
    },
  },
  watch: {
   
  },
  methods: {
    ...mapActions([
      "storeqlda/getListDataDmHasPaging",//action nay goi den api co pagination
		  "storeqlda/getAllListDataDm", 
    	"storeqlda/updateDataWithId",
    	"storeqlda/CreateDinhMucFromFile",
      ]),
     dataArr (page) {
        this["storeqlda/getListDataDmHasPaging"](page)
            .then((response) => {
                this.dataArrDinhMuc = response.data.data
                this.rows = response.data.total
            })
    },
    handleChange(event) {
      this.selectedFile = event.target.files[0];
    },
    importExcelBaoGia() {
      if (
        confirm(
          "Bạn có chắc chắn muốn up dữ liệu này không?"
        )
      ) {
        if (this.selectedFile ) 
        {
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
                  "madongia",
                  "tendongiavi",
                  "donvivi",
                  "tendongiaen",
                  "donvien",
                  "url",
                  "note",
                ];
                worksheet.eachRow((row) => {
                  row.eachCell({ includeEmpty: true }, (cell, number) => {
                    if (number <= title.length) {
                      
                        temp = `"${title[index]}":"${
                          cell.value !== null && typeof cell.value !== "number"
                            ? cell.value.replace(/\\/g, "").replace(/"/g, "''")
                            : cell.value
                        }",`;
                        tempRs = tempRs + temp;
                        index++;
                        //tempPrice = "";
                      
                    }
                  });
                  tempRs = tempRs.substring(0, tempRs.length - 1); // bỏ dáu ngăn cách , ở cuối
                 
                  tempRs = `{${tempRs}},`; // 1 obj của 1 dòng
                  tempFinalRs = tempFinalRs + tempRs;
                  tempRs = "";
                  index = 0; // đưa veeg 0 để bắt đầu hàng mới
                });
                tempFinalRs = tempFinalRs.substring(0, tempFinalRs.length - 1); // string của cả bảng tính
                tempFinalRs = `[${tempFinalRs}]`;
                //console.log(tempFinalRs);
                var arrTemp = JSON.parse(tempFinalRs);
                console.log(arrTemp);
                arrTemp.shift(); // bỏ đi thằng dòng đầu tiên là tiêu đề
                // lặp qua để xem còn file đọc vào có dòng tiêu đề thiếu những cột nào so với cột chuẩn
                for (var i in arrTemp) {
                  var keyObj = Object.keys(arrTemp[i]);
                  for (var j in headerGiaVt) {
                    if (!keyObj.includes(headerGiaVt[j])) {//keyObj.includes(headerGiaVt[j] xem aray có chứa key là headerGiaVt[j] hay không
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

                this["storeqlda/CreateDinhMucFromFile"](dataImport)
                  .then((res) => {
                    console.log('res',res)
                    if (res.ok === false) {
                      alert(res.error);
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
            "Bạn chưa chọn file import dữ liệu"
          );
        }
      }
      //document.getElementById("jsondata").innerHTML = JSON.stringify(row.value,undefined,4);
      //}).catch(err => console.log(`Caught by .catch ${err}`));
    },
	node(index,headerColumn) {
		return this.dataArrDinhMuc[index].[`${headerColumn}`]
	},
  nodeSearch(index,headerColumn) {
		return this.dataArrDmSearch[index].[`${headerColumn}`]
	},
	nodeDmSearch(index) {
		return this["storeqlda/arrDmSearch"][index].ghiChuDinhMuc
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
     
      var elParentLarge = this.getParentSelect(e.target, ".row_table_note");
      var maDinhMuc = elParentLarge.querySelector(".ma_dinh_muc").value;
      var tenMaDinhMuc = elParentLarge.querySelector(".ten_ma_dinh_muc").value;
      var donVi_Vi = elParentLarge.querySelector(".don_vi_vi").value;
      var tenCongViec_En = elParentLarge.querySelector(".ten_cv_en").value;
      var donVi_En = elParentLarge.querySelector(".don_vi_en").value;
      var url = elParentLarge.querySelector(".url").value;
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
        url:url,
		    idUser:idUser
      };
    if(e.key == 'Enter') {

      // this.$store.dispatch('storeqlda/updateDataWithId', data);
      this["storeqlda/updateDataWithId"](data).then((data) => {
        
        if (data.ok === false) {
          alert(data.error);
        }
        this["storeqlda/getAllListDataDm"]();
      });
      }

      //   console.log('tenMaDinhMuc',tenMaDinhMuc);
      //   console.log('noteDinhMuc',noteDinhMuc);
    },
  },
};
</script>
<style lang="scss" scoped>
button,
input,
select,
textarea {
  background-color: transparent;
  border-style: solid;
}
</style>