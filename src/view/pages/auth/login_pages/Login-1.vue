<template>
  <div class="d-flex flex-column flex-root">
    <div
      class="login login-1 d-flex flex-column flex-lg-row flex-column-fluid bg-white"
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
          <!--begin::Signin-->
          <div class="login-form login-signin">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signin_form"
            >
              <div class="login-sys pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Welcome to GXD System
                </h3>
               
              </div>
              <div class="form-group">
                <label class="font-size-h6 font-weight-bolder text-dark"
                  >Email</label
                >
                <div
                  id="example-input-group-1"
                  label=""
                  label-for="example-input-1"
                >
                  <input
				  	placeholder="Nhập email"
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="text"
                    name="email"
                    ref="email"
                    v-model="form.email"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-between mt-n5">
                  <label class="font-size-h6 font-weight-bolder text-dark pt-5"
                    >Password</label
                  >
							<a
                    class="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                    id="kt_login_forgot"
                    @click="showForm('forgot')"
                    >Quên mật khẩu</a>
                </div>
                <div
                  id="example-input-group-2"
                  label=""
                  label-for="example-input-2"
                >
                  <input
				  	        placeholder="Nhập password"
                    class="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="password"
                    name="password"
                    ref="password"
                    v-model="form.password"
                    autocomplete="off"
                  />
                </div>
              </div>
              <div class="pb-lg-0 pb-5">
                <button				 
                  ref="kt_login_signin_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3"
                >
                  Sign In
                </button>
			
				<!-- <button

				  	class="btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3"
                    id="kt_login_forgot"
                    @click="showForm('forgot')"
                    >thanh
				</button> -->
                <button
                  type="button"
				  class="btn btn-primary font-weight-bolder font-size-h6 px-15 py-4 my-3 mr-3"
                 @click="showForm('signup')"
	                >
				 Tạo tài khoản mới
                </button>
              </div>
            </form>
          </div>
          <!--end::Signin-->
          <!--begin::Signup-->
          <div class="login-form login-signup">
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_signup_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"	
                >
                  Sign Up
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Nhập các thông tin sau để đăng ký tài khoản
                </p>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="text"
                  placeholder="Fullname"
                  name="fullname"
                  ref="fullname"
                  autocomplete="off"
                 
                />
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
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="kt_login_signup_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')"
                >
                  Cancel
                </button>
              </div>
            </form>
            <div class="verify_email" v-if="isVerify">
            <h4>{{notify_verify}}</h4>
                <button
                  type="button"
                  id="kt_login_signup_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="handleResendVerify()"
                >
                  Gửi lại link xác nhận email
                </button>
            </div>
          </div>
          <!--end::Signup-->
          <!--begin::Forgot-->
          <div class="login-form login-forgot">
            <!--begin::Form-->
            <form
              class="form"
              novalidate="novalidate"
              id="kt_login_forgot_form"
              ref="kt_login_forgot_form"
            >
              <div class="pb-13 pt-lg-0 pt-5">
                <h3
                  class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg"
                >
                  Forgotten Password ?
                </h3>
                <p class="text-muted font-weight-bold font-size-h4">
                  Enter your email to reset your password
                </p>
              </div>
              <div class="form-group">
                <input
                  class="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                  type="email"
                  placeholder="Email"
                  name="email"
                  autocomplete="off"
				  v-model="inputForgot"
                />
              </div>
              <div class="form-group d-flex flex-wrap pb-lg-0">
                <button
                  type="button"
                  id="kt_login_forgot_submit"
                  class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
				  @click="handleResetPassWord()"
                >
                  Submit
                </button>
                <button
                  type="button"
                  id="kt_login_forgot_cancel"
                  class="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  @click="showForm('signin')"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
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
import {LOGIN,  LOGOUT, REGISTER } from "@/core/services/store/store_metronic/auth.module";
import Swal from "sweetalert2";
import { mapActions } from 'vuex';
export default {
  name: "Login",
  data() {
    return {
	  inputForgot:'',
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
    const signin_form = KTUtil.getById("kt_login_signin_form");
    const signup_form = KTUtil.getById("kt_login_signup_form");
    const forgot_form = KTUtil.getById("kt_login_forgot_form");

    this.fv = formValidation(signin_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Username is required"
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: "Password is required"
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

    this.fv2 = formValidation(forgot_form, {
      fields: {
        email: {
          validators: {
            notEmpty: {
              message: "Email is required"
            },
            emailAddress: {
              message: "The value is not a valid email address"
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

    this.fv.on("core.form.valid", () => {
      var email = this.form.email;
      var password = this.form.password;
      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signin_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay

	    this.handleSubmitLogin();
	 
        // send login request
        this.$store
          .dispatch(LOGIN, { email, password })
          // go to which page after successfully login
          .then(() => {
         
              this.$router.push({ name: "dashboard" })
          
          })
          .catch(() => {});

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      
    });

    this.fv.on("core.form.invalid", () => {
      Swal.fire({
        title: "",
        text: "Please, provide correct data!",
        icon: "error",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      });
    });

    this.fv1.on("core.form.valid", () => {
      const email = this.$refs.remail.value;
      const password = this.$refs.rpassword.value;
      const fullname = this.$refs.fullname.value;

      // clear existing errors
      this.$store.dispatch(LOGOUT);

      // set spinner to submit button
      const submitButton = this.$refs["kt_login_signup_submit"];// lay phan tu dom ra bang cach dat refs
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
	  
      // dummy delay

        // send register request
		
        this.$store
          .dispatch(REGISTER, {
            email: email,
            password: password,
            name:fullname
          })
          .then((data) => {
               if (data.code === 500) {
              alert(data.message)
            }else{
			this.isVerify = true
              //this.$router.push({ name: "dashboard" });
            }
          })
		  .catch(() => {});
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
  methods: {
	  ...mapActions(['storeqlda/login','storeqlda/resendVerifyEmail','storeqlda/sendEmailResetPW']),
	handleResendVerify() {
		  this['storeqlda/resendVerifyEmail']();
	  },
	handleResetPassWord() {
		this['storeqlda/sendEmailResetPW'](this.inputForgot).then((data)=>{
			if(data.status === 200) {
				alert(data.data.message);
			}
		});
	},
	handleSubmitLogin() {
            let data = {
                email: this.form.email,
                password: this.form.password
            }
            this['storeqlda/login'](data).then(res => {
                 if(!res.ok) {
                //     if(typeof res.error === 'string') {
                //         alert(res.error);
                //     } else {
                //         alert(res.error.join(' '));
                //     }   
                // } else {
					
                   //this.$router.push('/dashboard');
                }
            })
        },
    showForm(form) {
      this.state = form;
      var form_name = "kt_login_" + form + "_form";
      KTUtil.animateClass(
        KTUtil.getById(form_name),
        "animate__animated animate__backInUp"
      );
    }
  }
};
</script>
