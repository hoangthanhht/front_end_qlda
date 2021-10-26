<template>
  <div class="d-flex flex-column flex-root">
    <div
      class=" d-flex flex-column flex-lg-row flex-column-fluid bg-white"
      :class="{
        'login-signin-on': this.state == 'signin',
        'login-signup-on': this.state == 'signup',
        'login-forgot-on': this.state == 'forgot'
      }"
      id="kt_login"
    >
      <!--begin::Aside-->
      <!-- <div
        class="login-aside d-flex flex-column flex-row-auto"
        style="background-color: #F2C98A;"
      >
        <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
          <a href="#" class="text-center mb-10">
            <img
              src="media/logos/logo-letter-1.png"
              class="max-h-70px"
              alt=""
            />
          </a>
          <h3
            class="font-weight-bolder text-center font-size-h4 font-size-h1-lg"
            style="color: #986923;"
          >
            Discover Amazing Metronic <br />with great build tools
          </h3>
        </div>
        <div
          class="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
          :style="{ backgroundImage: `url(${backgroundImage})` }"
        ></div>
      </div> -->
      
      <!--begin::Aside-->
      <!--begin::Content-->
      <div
        class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto"
      >
        <div class="d-flex flex-column-fluid flex-center">


          <div class="login-form login-signup">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_reset_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"	
                >
                  Reset password
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Nhập các thông tin sau để thay đổi mật khẩu
                </p>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="Email"
                  name="email"
                  ref="remail"
                  autocomplete="off"
                  
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref="rpassword"
                  autocomplete="off"
                 
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="password"
                  placeholder="Confirm password"
                  name="cpassword"
                  ref="cpassword"
                  autocomplete="off"
                />
              </div>
              <div class="form-group">
                <!-- <label class="checkbox mb-0">
                  <input type="checkbox" name="agree" />
                  <span class="mr-2"></span>
                  I Agree the
                  <a href="#" class="ml-2">terms and conditions</a>.
                </label> -->
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0 pb-3">
                <button
                  ref="kt_login_signup_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                  style="width:150px;"
				          @click="handleSubmitReset"
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="kt_login_signup_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm()"
                >
                  Cancel
                </button>
              </div>
            </form>
     
          </div>
          <!--end::Signup-->
          <!--begin::Forgot-->
          
          <!--end::Forgot-->
        </div>
        <!--begin::Content footer-->
        <div
          class="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0"
        >
          <a href="#" class="text-primary font-weight-bolder font-size-h5"
            >Terms</a
          >
          <a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5"
            >Plans</a
          >
          <a href="#" class="text-primary ml-10 font-weight-bolder font-size-h5"
            >Contact Us</a
          >
        </div>
        <!--end::Content footer-->
      </div>
      <!--end::Content-->
    </div>
  </div>
</template>

<!-- Load login custom page styles -->
<style lang="scss">
@import "@/assets/sass/pages/login/login-1.scss";
.btn-primary {
  margin-right: 0 !important;

}
.login-sys {
  display: flex;
  justify-content: center;
}
.pb-lg-0 {
  display: flex;
  justify-content: space-between;
}
.verify_email {
	display: flex;
    flex-direction: column;
}
</style>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";

// FormValidation plugins
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";

import KTUtil from "@/assets/js/components/util";
import { mapGetters, mapState } from "vuex";
import {LOGOUT } from "@/core/services/store/store_metronic/auth.module";
import Swal from "sweetalert2";
import { mapActions } from 'vuex';
export default {
  name: "resetpass",
  data() {
    return {
	  notify_verify: 'Bạn vui lòng xác nhận đường link đã được gửi qua email của bạn sau đó quay trở lại đăng nhập',
	  isVerify:false,
      state: "signin",
      // Remove this dummy login info
      form: {
        email: "user1@gmail.com",
        password: ""
      }
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    }),
    ...mapGetters(["currentUser"]),

    backgroundImage() {
      return (
        process.env.BASE_URL + "media/svg/illustrations/login-visual-1.svg"
      );
    }
  },

  mounted() {
    //const signin_form = KTUtil.getById("kt_login_signin_form");
    const signup_form = KTUtil.getById("kt_login_reset_form");
    //const forgot_form = KTUtil.getById("kt_login_forgot_form");



    this.fv1 = formValidation(signup_form, {
      fields: {
        fullname: {
          validators: {
            notEmpty: {
              message: "Full name is required"
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: "Email is required"
            },
            emailAddress: {
              message: "The value is not a valid email address"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "Password is required"
            }
          }
        },
        cpassword: {
          validators: {
            notEmpty: {
              message: "Confirm password is required"
            },
            identical: {
              compare: function() {
                return signup_form.querySelector('[name="password"]').value;
              },
              message: "The password and its confirm are not the same"
            }
          }
        },
        agree: {
          validators: {
            notEmpty: {
              message: "You should agree terms and conditions"
            }
          }
        }
      },
      plugins: {
        trigger: new Trigger(),
        submitButton: new SubmitButton(),
        bootstrap: new Bootstrap()
      }
    });


    this.fv1.on("core.form.valid", () => {
      //const email = this.$refs.remail.value;
      //const password = this.$refs.rpassword.value;
      //const fullname = this.$refs.fullname.value;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signup_submit"];// lay phan tu dom ra bang cach dat refs
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
	  
      // dummy delay

        // send register request
		
        // this.$store
        //   .dispatch(REGISTER, {
        //     email: email,
        //     password: password,
        //     name:fullname
        //   })
        //   .then((data) => {
        //        if (data.code === 500) {
        //       alert(data.message)
        //     }else{
		// 	this.isVerify = true
        //       //this.$router.push({ name: "dashboard" });
        //     }
        //   })
		//   .catch(() => {});

		  // chú ý ở đây phải dùng hàm để triển khai việc xóa spin sau 2 s nếu không dùng hàm thì không đc
		setTimeout(
       ()=> submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        ),3000);

    });

    this.fv1.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "Please, provide correct data!",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });
  },
  created() {
	
  },
  methods: {
	  ...mapActions(['storeqlda/changePass']),

	        //const email = this.$refs.remail.value;
      //const password = this.$refs.rpassword.value;
      //const fullname = this.$refs.fullname.value;
	handleSubmitReset() {
            let data = {
                email: this.$refs.remail.value,
                password: this.$refs.rpassword.value,
                token: this.$route.params.token
            }
            this['storeqlda/changePass'](data).then(res => {
                 if(res.data.success === true) {
            		alert('Mật khẩu đã được thay đổi');
					 this.$router.push("/login");
                }
            })
        },
    showForm() {
       this.$router.push("/login");
    }
  }
};
</script>
