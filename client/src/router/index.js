import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import swal from 'sweetalert';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/login',
		name: 'login',
		props: true,
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
	},
	{
		path: '/register',
		name: 'register',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
	},
	{
		path: '/profile',
		name: 'profile',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/new',
		name: 'NewMountain',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/NewMountainView.vue'),
		props: true,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/:id',
		name: 'MountainDetails',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/DetailsView.vue'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/profile',
		name: 'ProfileDetail',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue')
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (localStorage.getItem('jwt') == null) {
			swal('Error', 'You have to log in for this function', 'error');
			next({
				name: 'login'
			});
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router;
