<script setup lang="ts">
     import SidebarNav from '../../components/SidebarMenu.vue';
     import { Separator } from '../ui/separator';
     import { Button } from '../ui/button';
</script>

<template>
  <div class="space-y-6 p-10 pb-16 block">
    <div class="space-y-0.5 relative">
      <h2 class="text-2xl font-bold tracking-tight">
        Settings
      </h2>
      <p class="text-muted-foreground">
        Manage your account settings and set e-mail preferences.
      </p>
      <Button class="absolute font-medium text-sm right-0 top-0" variant="ghost">
          <router-link to="/dashboard/analytics" class="flex items-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4">
                    <polyline points="15 18 9 12 15 6"></polyline>
               </svg>

               Back
          </router-link>
     </Button>
    </div>
    <Separator class="my-6" />
    <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside class="-mx-4 lg:w-1/5">
        <SidebarNav />
      </aside>
      <div class="flex-1 lg:max-w-2xl">
        <div class="space-y-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>