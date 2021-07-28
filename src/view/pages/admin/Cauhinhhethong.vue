<template>
  <div>
    <b-container fluid class="email_container">
      <div class="form_item">
        <b-row class="my-1">
          <b-col sm="2">
            <label>Tên công ty</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="nameCompany" type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label>Từ khóa</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="keyWord" type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label>Địa chỉ</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="address" type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label>Bản quyền</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="license" type="text"></b-form-input>
          </b-col>
        </b-row>

            <b-row class="my-1">
          <b-col sm="2">
            <label>Mô tả</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="description" type="text"></b-form-input>
          </b-col>
        </b-row>
      </div>

      <div class="form_item">

        <b-row class="my-1">
          <b-col sm="2">
            <label>Tiêu đề</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="titleSys" type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1 pl-5">
          <b-col sm="2">
            <label>Vị trí tọa độ</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="coordinate_location" type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1 pl-5">
          <b-col sm="2">
            <label>Khu vực</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="area" type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1 pl-5">
          <b-col sm="2">
            <label>Tác giả</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="author" type="text"></b-form-input>
          </b-col>
        </b-row>

		<b-row class="my-1">
          <b-col sm="2">
            <label></label>
          </b-col>
          <b-col sm="10">
             <b-form-group label="Tắt/Bật hệ thống" v-slot="{ ariaDescribedby }">
				<b-form-radio-group
					v-model="selected"
					:options="options"
					:aria-describedby="ariaDescribedby"
					name="radio-inline"
				></b-form-radio-group>
				</b-form-group>
          </b-col>
        </b-row>

      </div>
    </b-container>
	<b-container>
    <div>
      <b-button
        @click="handleOnOffSys"
        size="sm"
        class="mb-2 add-cv icon-tvgs"
      >
        Xác nhận
      </b-button>
    </div>
	</b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
export default {

 data() {
    return {
      nameCompany : '',
      keyWord : '',
      address : '',
      license:'',
      description:'',
      titleSys:'',
      coordinate_location:'',
      area:'',
      author:'',
	   selected: 'on',
        options: [
          { text: 'Bật hệ thống', value: 'on' },
          { text: 'Tắt hệ thống', value: 'off' },
        ]
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Hệ thống", route: "/cauhinhemail" },
      { title: "Cấu hình hệ thống" }
    ]);
  },
methods : {
	...mapActions(['storeqlda/offSystem','storeqlda/onSystem']),
	handleOnOffSys() {
		if(this.selected === "on") {

			this['storeqlda/onSystem']();
		} else{
			this['storeqlda/offSystem']();

		}
	}
}

};
</script>

<style lang="scss" scoped>
.my-1 {
  padding-top: 60px;
}
.email_container {
  display: flex;
}
.form_item {
  flex: 1;
}
.breadcrumb-item {
  display: flex;
}
</style>