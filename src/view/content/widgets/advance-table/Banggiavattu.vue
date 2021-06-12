<template>
  <!--begin::Advance Table Widget 9-->
  <div class="card card-custom card-stretch gutter-b">
    <!-- <Formfile></Formfile> -->

	<div>
   <!-- Styled -->
   <b-form-file
     v-model="file"
     :state="Boolean(file)"
     placeholder="Choose a file or drop it here..."
     drop-placeholder="Drop file here..."
   ></b-form-file>
   <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
	<button
	@click="readFileExcel"
	>bam vao day</button>
   <!-- Plain mode -->
   <b-form-file 
    v-on:change="handleChange"
   v-model="file2" class="mt-3" plain></b-form-file>
   <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div>
 </div>
  <div class="col-md-12">
                <pre id="jsondata"></pre>
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
            class="table table-head-custom table-vertical-center table-head-bg table-borderless"
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
              <template  v-for="(item, index) in dataArr">
                <tr v-bind:key="index" class="row_table_note">
                  <!-- <td contenteditable="true">
						<span class="text-muted font-weight-bold">{{item.id}}
                		</span>
                  </td> -->
                  <td>
                    <span 
					v-on:click="hadleClickMaDM"
					class="ma_dinh_muc text-muted font-weight-bold">{{
                      item.maDinhMuc
                    }}</span>
                  </td>
                  <td>
                    <span 
					v-on:click="hadleClickTenMaDM"
					class="ten_ma_dinh_muc text-muted font-weight-bold">{{
                      item.tenMaDinhMuc
                    }}</span>
                  </td>
                  <td>
                    <textarea 		
						 :value = noteDM(index)
				          class="area_notes"
					      name="" id="" cols="60" rows="3" >
						  
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
                  <td class="pr-0 text-right">
                    <a
					  v-on:click="handleSave($event,index)"
                      class="btn btn-light-success font-weight-bolder font-size-sm"
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
import Excel from 'exceljs'
//import Excel from "exceljs/dist/es5/exceljs.browser";
import { mapActions, mapGetters } from "vuex";
//import Formfile from '@/view/pages/vue-bootstrap/FormFile.vue'
export default {
  name: "gia_vat_tu",
  components: {
   
  },
  data() {
    return {
		file: null,
        file2: null
		
    };
  },
  created() {
    this["storeqlda/getListDataDm"]();// khi load lai trang
  },
  mounted() {
    //this.dataArr = this["storeqlda/getListDataDinhMuc"];
  },
  computed: {
    ...mapGetters(["storeqlda/getListDataDinhMuc","storeqlda/arrDmSearch"]),
    dataArr() {
      return this["storeqlda/arrDmSearch"];
    },
  },
  watch: {
	  dataArr: function () {
 
    },
  },
  methods: {
    ...mapActions(["storeqlda/getListDataDm","storeqlda/updateDataWithId"]),
	  handleChange(event) {
      this.selectedFile = event.target.files[0];
    },
	 readFileExcel() {
		  var workbook = new Excel.Workbook();
			let arrHeader=[];
			//let arrDataJson =[];
			let fileReader = new FileReader();
			fileReader.readAsBinaryString(this.selectedFile);
			fileReader.onload = () => {
			let data = fileReader.result;
		  	workbook.xlsx.load(data)
      		.then(function(){
				var worksheet = workbook.getWorksheet(1);
				// let dataArray = changeRowsToDict(worksheet);
				// console.log(dataArray)
				worksheet.eachRow(function(row) {
					var filtered = row.values.filter(function (el) {
					return el != undefined;
					});
					arrHeader.push(filtered);
					
			});
			let index=0;
			let temp='';
			let tempRs='';
			let tempFinalRs='';
			let title = arrHeader[0];
			let jsonGiaVatTu = [];
				worksheet.eachRow(function(row) {
					row.eachCell(function(cell){
						temp = `"${title[index]}":"${cell.value}",`
						tempRs = tempRs + temp;
						index++;
					});
					tempRs = `{${tempRs}},`;
					tempFinalRs = tempFinalRs + tempRs;
					
					jsonGiaVatTu.push(tempRs);
					tempRs='';
					index=0;
			});
			tempFinalRs = `[${tempFinalRs}]`
			console.log(JSON.parse(tempFinalRs));
			//console.log(jsonGiaVatTu);
			  })
			}
			//document.getElementById("jsondata").innerHTML = JSON.stringify(row.value,undefined,4);
 		 //}).catch(err => console.log(`Caught by .catch ${err}`));
	  },
    getParentSelect(el,select) {
      while(el.parentElement) {
        var pr = el.parentElement;
        if(pr.matches(select)) {
          return pr
        }
        el = pr
      }
    },
	hadleClickMaDM(e) {
	 e.target.setAttribute('contenteditable','true');
	},
	hadleClickTenMaDM(e) {
	 e.target.setAttribute('contenteditable','true');
	},
	noteDM(index) {
		return this.dataArr[index].ghiChuDinhMuc;
	},
	handleSave(e,index) {
		 //var a = document.querySelector('.textthanh')
	  //console.log(this.dataArr[index].id);
     var elParentLarge = this.getParentSelect(e.target,'.row_table_note');
	 var maDinhMuc = elParentLarge.querySelector('.ma_dinh_muc').innerText;
	 var tenMaDinhMuc = elParentLarge.querySelector('.ten_ma_dinh_muc').innerText;
	 var noteDinhMuc = elParentLarge.querySelector('.area_notes').value;
     var idDinhMuc = this.dataArr[index].id;

	  var data = {
		  maDinhMuc:maDinhMuc,
		  tenMaDinhMuc:tenMaDinhMuc,
		  noteDinhMuc:noteDinhMuc,
		  idDinhMuc:idDinhMuc
	  }

	// this.$store.dispatch('storeqlda/updateDataWithId', data);
	  this["storeqlda/updateDataWithId"](data);

	//   console.log('tenMaDinhMuc',tenMaDinhMuc);
	//   console.log('noteDinhMuc',noteDinhMuc);
	 
  }
  },


};
</script>
<style lang="scss" scoped>
button,input,select,textarea {
  background-color: transparent;
  border-style: solid;
}
</style>