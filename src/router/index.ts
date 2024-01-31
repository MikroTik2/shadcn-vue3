import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SignUp from '@/views/SignUp.vue';
import SignIn from '@/views/SignIn.vue';
import DashbaordAnalytics from '@/views/Dashboard.Analytics.vue';
import DashbaordSettingsProfile from '@/views/Dashboard.Settings.Profile.vue';
import DashbaordSettingsAccount from '@/views/Dashboard.Settings.Account.vue';

const routes: Array<RouteRecordRaw> = [
     { path: '/register', name: 'SignUp', component: SignUp, meta: { title: "Dashboard | SignUp" } },
     { path: '/login', name: 'SignIn', component: SignIn, meta: { title: "Dashboard | SignIn" } },
     { path: '/dashboard/analytics', name: 'DashbaordAnalytics', component: DashbaordAnalytics, meta: { title: "Dashboard | Analytics" } },
     { path: '/dashboard/settings/profile', name: 'DashbaordSetting', component: DashbaordSettingsProfile, meta: { title: "Dashboard | Settings - profile" } },
     { path: '/dashboard/settings/account', name: 'DashbaordSettingsAccount', component: DashbaordSettingsAccount, meta: { title: "Dashboard | Settings - account" } },
];

const router = createRouter({
     history: createWebHistory(),
     routes,
});

router.beforeEach((to, from, next) => {
     document.title = to.meta.title as string;
     next();
});
export default router;