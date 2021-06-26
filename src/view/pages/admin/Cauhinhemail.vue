<template>
  <div>
    <b-container fluid class="email_container">
      <div class="form_item">
        <b-row class="my-1">
          <b-col sm="2">
            <label>Driver</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="driver" type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label>Port</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="port" type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label>From Name</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="appName" type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label>User Name</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="userName" type="text"></b-form-input>
          </b-col>
        </b-row>
      </div>

      <div class="form_item">

        <b-row class="my-1">
          <b-col sm="2">
            <label>Host</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="host" type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label>From Email</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="addressMail" type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label>Encryption</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="encryption" type="text"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label>Password</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="password" type="text"></b-form-input>
          </b-col>
        </b-row>

      </div>
    </b-container>
    <div>
      <b-button
        @click="handleChangeEnv"
        size="sm"
        class="mb-2 add-cv icon-tvgs"
      >
        Xác nhận
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {

 data() {
    return {
      driver : '',
      port : '',
      host : '',
      addressMail:'',
      password:'',
      encryption:'',
      userName:'',
      appName:'',
    };
  },

methods : {
	...mapActions(['storeqlda/changeEnvSystem']),
	handleChangeEnv() {
		let data = [
			{MAILMAILER : this.driver},
			{MAILHOST : this.host},
			{MAILPORT : this.port},
			{MAILUSERNAME : this.addressMail},
			{MAILPASSWORD : this.password},
			{MAILENCRYPTION : this.encryption},
			{MAILFROMADDRESS : this.userName},
			{APPNAME : this.appName},
		]
		 this['storeqlda/changeEnvSystem'](JSON.stringify(data));
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
</style>