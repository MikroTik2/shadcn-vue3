<template>
     <div class="border-b">
          <div class="flex h-16 justify-between">
               <MainNav class="mx-6 hidden sm:flex"/>

               <div class="ml-auto flex items-center mr-6 space-x-4">
                    <Search />
                    <UserNav />
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
     import MainNav from '../MainNav.vue';
     import Search from '../Search.vue';
     import UserNav from '../UserNav.vue';
</script>