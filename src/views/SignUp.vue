<template>
     <div class="min-h-screen">
          <div class="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
               <Button as-child class="absolute font-medium text-sm right-8 top-8" variant="ghost">
                    <router-link to="/login">Login</router-link>
               </Button>
               
               <div class="hidden h-full bg-muted lg:block"></div>

               <div class="lg:p-8">
                    <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                         <div class="flex flex-col space-y-2 text-center">
                              <h1 class="text-2xl font-semibold tracking-tighter">Create an account</h1>

                              <p class="text-sm text-muted-foreground">Enter your email below to create your account</p>
                         </div>

                         <SignUpAuthForm />
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
     import { Button } from '@/components/ui/button';
     import SignUpAuthForm from '@/components/SignUpAuthForm.vue';

</script>
