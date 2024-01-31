<template>
     <DropdownMenu>
          <DropdownMenuTrigger as-child="">
               <Button variant="ghost" class="relative h-8 w-8 rounded-full">
                    
                    <Avatar class="h-8 w-8">
                         <AvatarImage src="https://avatars.githubusercontent.com/u/111369356?v=4" alt="avatar"/>
                         <AvatarFallback>SC</AvatarFallback>
                    </Avatar>

               </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent class="w-56" align="end">
               <DropdownMenuLabel class="font-normal flex">
                    <div class="flex flex-col space-y-1">
                         <p class="text-sm font-medium leading-none">Artur</p>
                         <p class="text-sm leading-none text-muted-foreground">dotsenk20034@gmail.com</p>
                    </div>
               </DropdownMenuLabel>

               <DropdownMenuSeparator />

               <DropdownMenuGroup>
                    <DropdownMenuItem>
                         Profile
                         <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                         Billing
                         <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                         Settings
                         <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                         <DropdownMenuItem>New Team</DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                         Log out

                         <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
               </DropdownMenuContent>
          </DropdownMenu>
</template>

<script setup lang="ts">
     import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
     import { Button } from './ui/button';
     import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from './ui/dropdown-menu';
</script>