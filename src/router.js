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
					meta: {
						requiredRoles: ['User']
					},
					
				},
				{
					path: "/bangdinhmuc",
					name: "bangdinhmuc",
					component: () => import("@/view/pages/Bangdinhmuc.vue"),
					beforeEnter: (to, from, next) =>  {
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
								path: "error-3"
							})
						}
					},
					meta: {
						requiredRoles: ['Admin','Manage']
					}
				},
				{
					path: "/giavattu",
					name: "giavattu",
					component: () => import("@/view/pages/Giavattu.vue"),
					beforeEnter: (to, from, next) =>  {
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
								path: "error-3"
							})
						}
					},
					meta: {
						requiredRoles: ['Admin','Manage','User']
					}
				},
				{
					path: "/dsnhanvien",
					name: "dsnhanvien",
					component: () => import("@/view/pages/Danhsachnhanvien.vue"),
					// beforeEnter: (to, from, next) =>  {
					// 	let check = false;
					// 	let userSlug = (store.getters.currentUserPersonalInfo.slug)
					// 	for(var i in userSlug)
					// 	{
					// 		//slugUser.push(userSlug[i]);
					// 		if(to.meta.requiredRoles.includes(userSlug[i])){
					// 			check = true;
					// 			break;
					// 		}
					// 	}

					// 	if (check === true) {
					// 		next()
					// 	} else {
							
					// 		next({
					// 			path: "error-3"
					// 		})
					// 	}
					// },
					// meta: {
					// 	requiredRoles: ['Admin','Manage']
					// }
				},
							
			],
			// beforeEnter: (to, from, next) =>  {
			// 	let check = false;
			// 	let userSlug = (store.getters.currentUserPersonalInfo.slug)
			// 	for(var i in userSlug)
			// 	{
			// 		//slugUser.push(userSlug[i]);
			// 		if(to.meta.requiredRoles.includes(userSlug[i])){
			// 			check = true;
			// 			break;
			// 		}
			// 	}

			// 	if (check === true) {
			// 		next()
			// 	} else {
			// 		alert('Bạn không được truy cập vào trang này.')
			// 		next({
			// 			path: '/'
			// 		})
			// 	}
			// },
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
				}
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
