<script setup lang="ts">
     import { ref } from 'vue';
     import { useRouter } from 'vue-router';
     
     import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, UserCredential } from 'firebase/auth';
     import { useToast } from '@/components/ui/toast/use-toast'
     import { Button } from './ui/button';
     import { Input } from './ui/input';
     import { Label } from './ui/label';
     import { cn } from '@/lib/utils';

     const { toast } = useToast();

     const router = useRouter();

     const isLoading = ref(false);

     const email = ref('');
     const password = ref('');

     let auth = getAuth();

     async function login():Promise<UserCredential> {
          return signInWithEmailAndPassword(auth, email.value, password.value);
     };

     async function onSubmit(event:Event) {
          event.preventDefault();
          isLoading.value = true;

          try {

               const userInfo = await login();

               localStorage.setItem('userTokens', JSON.stringify({
                    token: (userInfo.user as any).stsTokenManager.accessToken,
                    refreshToken: userInfo.user.refreshToken,
               }));

               router.push("/dashboard/analytics");

               toast({
                    title: "Authentication Successful 🎉",
                    description: "Congratulations! You have successfully authenticated and gained access to your account. Enjoy exploring our platform!",
               });

          } catch (err: any) {

               switch (err.code) {
                    case "auth/wrong-password":
                         toast({
                              title: "Wrong password",
                              description: "The provided email address is already associated with an existing account. Please use a different email or try to sign in.",
                         });
                         break;

                    case "auth/invalid-email":
                         toast({
                              title: "Invalid email",
                              description: "The email address you provided is not valid. Please double-check and try again with a valid email address.",
                         });
                         break;

                    case "auth/user-not-found":
                         toast({
                              title: "User not found",
                              description: "The provided password is too weak. Please choose a stronger password with a mix of letters, numbers, and symbols.",
                         });
                         break;

                    default:
                         toast({
                              title: "Email or password was incorrect",
                              description: "The provided email or password was incorrect. Please double-check your credentials and try again.",
                         });
                         break;
               };


          } finally {
               isLoading.value = false;
          };
     };

     async function googleSignIn(event:Event) {
          event.preventDefault();
          isLoading.value = true;

          const provider = new GoogleAuthProvider();

          try {

               const result = await signInWithPopup(auth, provider);
               const user = result.user;

               localStorage.setItem('userTokens', JSON.stringify({
                    token: (user as any).stsTokenManager.accessToken,
                    refreshToken: user.refreshToken,
               }));

               router.push("/dashboard/analytics");

               toast({
                    title: `Authentication Successful 🎉 - ${user.displayName}`,
                    description: "Congratulations! You have successfully authenticated and gained access to your account. Enjoy exploring our platform!",
               });


          } catch (err: any) {
               console.error(err.message);
          } finally {
               isLoading.value = false;
          };
     };

</script>

<template>
     <div :class="cn('grid gap-6', $attrs.class ?? '')">
          <form @submit="onSubmit">
               <div class="grid gap-2">
                    <div class="grid gap-1">
                         <Label class="sr-only" for="email">
                              Email
                         </Label>
                         <Input
                              id="email"
                              v-model="email"
                              placeholder="Your email"
                              type="email"
                              auto-capitalize="none"
                              auto-complete="email"
                              auto-correct="off"
                              :disabled="isLoading"
                         />
                         <Input
                              v-model="password"
                              id="password"
                              placeholder="Your password"
                              type="password"
                              auto-capitalize="none"
                              auto-correct="off"
                              required
                              :disabled="isLoading"
                         />
                    </div>

                    <Button :disabled="isLoading">
                         <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" v-if="isLoading" class="mr-2 h-4 w-4 animate-spin">
                              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                         </svg>
                         Sign In with Email
                    </Button>
               </div>
          </form>
          <div class="relative">
               <div class="absolute inset-0 flex items-center">
                    <span class="w-full border-t" />
               </div>
               <div class="relative flex justify-center text-xs uppercase">
                    <span class="bg-background px-2 text-muted-foreground">
                         Or continue with
                    </span>
               </div>
          </div>
          
          <Button variant="outline" type="button" :disabled="isLoading" @click="googleSignIn">
               <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" v-if="isLoading" class="mr-2 h-4 w-4 animate-spin">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-6.219-8.56"></path>
               </svg>

               <img class="w-4 h-4 mr-2" width="16" height="16" src="/svg/google-178-svgrepo-com.svg" v-else>
               
               Google
          </Button>
     </div>
</template>