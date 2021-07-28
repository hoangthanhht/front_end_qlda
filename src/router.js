import Vue from "vue";
import Router from "vue-router";
import store from "@/core/services/store";
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			redirect: "/dashboard",
			component: () => import("@/view/layout/Layout"),
			children: [
				{
					path: "/dashboard",
					name: "dashboard",
					component: () => import("@/view/pages/Dashboard.vue"),			
				},
				{
					path: "/post/:id?",
					name: "post",
					component: () => import("@/view/pages/Post.vue"),
								
				},
				{
					path: "/bangdinhmuc",
					name: "bangdinhmuc",
					component: () => import("@/view/pages/Bangdinhmuc.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin']
					}
				},
				{
					path: "/giavattu",
					name: "giavattu",
					component: () => import("@/view/pages/Giavattu.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin']
					}
				},
				{
					path: "/materialcostforguest",
					name: "materialcostforguest",
					component: () => import("@/view/pages/MaterialCostForGuest.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(!userSlug) {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>next())
						}else{
							next();
						}
					}
				},
				{
					path: "/approvematerialcost",
					name: "approvematerialcost",
					component: () => import("@/view/pages/ApproveMaterialCost.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin','UserApprv']
					}
				},
				{
					path: "/guestviewmaterialcost",
					name: "guestviewmaterialcost",
					component: () => import("@/view/pages/GuestViewMaterialCost.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(!userSlug) {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>next())
						}else{
							next();
						}
					}
				},
				{
					path: "/approvenotenorm",
					name: "approvenotenorm",
					component: () => import("@/view/pages/ApproveNoteNorm.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin','UserApprv']
					}
				},
				{
					path: "/createarticle",
					name: "createarticle",
					component: () => import("@/view/pages/CreateArticle.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin','UserApprv','User']
					}
				},
				{
					path: "/dsnhanvien",
					name: "dsnhanvien",
					component: () => import("@/view/pages/Danhsachnhanvien.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin','UserApprv']
					}
				},
				{
					path: "/dsvaitro",
					name: "dsvaitro",
					component: () => import("@/view/pages/Danhsachvaitro.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin','Manage','Admin','UserApprv']
					}
				},	
				
				{
					path: "/cauhinhemail",
					name: "cauhinhemail",
					component: () => import("@/view/pages/admin/Cauhinhemail.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin']
					}
				},

				{
					path: "/cauhinhhethong",
					name: "cauhinhhethong",
					component: () => import("@/view/pages/admin/Cauhinhhethong.vue"),
					beforeEnter: (to, from, next) =>  {
						let userSlug = (store.getters.currentUserPersonalInfo.slug)
						if(userSlug) {
							let check = false;
							for(var i in userSlug)
							{
								//slugUser.push(userSlug[i]);
								if(to.meta.requiredRoles.includes(userSlug[i])){
									check = true;
									break;
								}
							}
	
							if (check === true) {
								next()
							} else {
								
								next({
									path: "/custom-error/page_error"
								})
							}
						}else {
							store.dispatch('storeqlda/checkLogin',null,{ root: true }).then(()=>{// cái này để dispatch 1 action có mudul dặt name space true
								// sử lý khi reload lại trang tại đúng route này
								let check = false;
								let userSlug = (store.getters.currentUserPersonalInfo.slug)
								for(var i in userSlug)
								{
									//slugUser.push(userSlug[i]);
									if(to.meta.requiredRoles.includes(userSlug[i])){
										check = true;
										break;
									}
								}
		
								if (check === true) {
									next()
								} else {
									
									next({
										path: "/custom-error/page_error"
									})
								}
							});
						}
					},
					meta: {
						requiredRoles: ['SuperAdmin']
					}
				},
				{
					path: "/profile",
					name: "profile",
					component: () => import("@/view/pages/profile/Profile.vue"),
					children: [
					  {
						path: "profile-2",
						name: "profile-2",
						component: () => import("@/view/pages/profile/Profile-2.vue")
					  }
					]
				}
				
			],
	
		},
		{
			path: "/custom-error",
			name: "error",
			component: () => import("@/view/pages/error/Error.vue"),
			children: [
				{
					path: "error-1",
					name: "error-1",
					component: () => import("@/view/pages/error/Error-1.vue")
				},
				{
					path: "error-2",
					name: "error-2",
					component: () => import("@/view/pages/error/Error-2.vue")
				},
				{
					path: "error-3",
					name: "error-3",
					component: () => import("@/view/pages/error/Error-3.vue")
				},
				{
					path: "error-4",
					name: "error-4",
					component: () => import("@/view/pages/error/Error-4.vue")
				},
				{
					path: "error-5",
					name: "error-5",
					component: () => import("@/view/pages/error/Error-5.vue")
				},
				{
					path: "error-6",
					name: "error-6",
					component: () => import("@/view/pages/error/Error-6.vue")
				},	
				{
					path: "page_error",
					name: "page_error",
					component: () => import("@/view/pages/error/page_error.vue")
				},
			]
		},
		{
			path: "/",
			component: () => import("@/view/pages/auth/login_pages/Login-1"),
			children: [
				{
					name: "login",
					path: "/login",
					component: () => import("@/view/pages/auth/login_pages/Login-1"),
					meta: {
						requiredRoles: ['user1', 'user1']
					}
				},
				{
					name: "register",
					path: "/register",
					component: () => import("@/view/pages/auth/login_pages/Login-1")
				}
			]
		},
		{
			name: "forgotPass",
			path: "/changepass/:token",
			component: () => import("@/view/pages/auth/login_pages/reset-password"),
			
		},
		{
			path: "*",
			redirect: "/404"
		},
		{
			// the 404 route, when none of the above matches
			path: "/404",
			name: "404",
			component: () => import("@/view/pages/error/Error-1.vue")
		}
	]
});
