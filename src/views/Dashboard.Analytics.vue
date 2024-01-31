<template>
     <div class="flex-col flex">
          <Header />

          <div class="flex-1 space-y-4 p-8 pt-6">
               <div class="flex items-center justify-between space-y-2">
                    <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>

                    <div class="sm:flex items-center space-x-2 hidden">
                         <DateRangePicker />
                         <Button>Download</Button>
                    </div>
               </div>

               <Tabs default-value="overview" class="space-y-4">
                    <TabsList>
                         <TabsTrigger value="overview">Overview</TabsTrigger>
                         <TabsTrigger value="analytics">Analytics</TabsTrigger>
                         <TabsTrigger value="reports">Reports</TabsTrigger>
                         <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview">
                         <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                              <Card v-for="element in overviewItems" :key="element">
                                   <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle>{{ element.title }}</CardTitle>
                                        
                                        <div v-html="element.icon" class="text-muted-foreground"></div>
                                   </CardHeader>

                                   <CardContent>
                                        <div class="text-2xl font-bold">$45,231.98</div>
                                        <p class="text-xs text-muted-foreground">+20.1% from last month</p>
                                   </CardContent>

                              </Card>
                         </div>
                    </TabsContent>
                    <TabsContent value="analytics">
                         <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                              Analytics
                         </div>
                    </TabsContent>
                    <TabsContent value="reports">
                         <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                              Reports
                         </div>
                    </TabsContent>
                    <TabsContent value="notifications">
                         <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                              Notifications
                         </div>
                    </TabsContent>
               </Tabs>

               <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card class="col-span-4">
                         <CardHeader>
                              <CardTitle>Overview</CardTitle>
                         </CardHeader>

                         <CardContent class="p-0 pt-0 pb-6 pl-0 sm:p-6 sm:pl-2">
                              <Overview />
                         </CardContent>
                    </Card>

                    <Card class="col-span-4 lg:col-span-3">
                         <CardHeader>
                              <CardTitle>Recent Sales</CardTitle>
                              <CardDescription>You made 265 sales this month.</CardDescription>
                         </CardHeader>

                         <CardContent class="h-[410px] overflow-y-auto">
                              <RecentSales />
                         </CardContent>
                    </Card>
               </div>
               
          </div>


     </div>
</template>

<script setup lang="ts"> 
     import RecentSales from '@/components/RecentSales.vue'
     import Overview from '@/components/Overview.vue'
     import DateRangePicker from '@/components/DateRangePicker.vue';
     import Header from '@/components/layouts/Header.vue';

     import { ref } from 'vue';
     import { Button } from '@/components/ui/button';
     import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
     import { Card, CardHeader, CardDescription, CardTitle, CardContent } from '../components/ui/card';

     const overviewItems = ref([
          { 
               title: "Total Revenue", 
               num: `$45,231.89`, 
               description: "+20.1% from last month",
               month: 20.1, 
               icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>` 
          },
          { 
               title: "Subscriptions", 
               num: "+2350", 
               description: "+180.1% from last month",
               month: 20.1, 
               icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="h-4 w-4 text-muted-foreground"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>` 
          },
          { 
               title: "Sales", 
               num: "+12,234", 
               description: "+19% from last month",
               month: 20.1, 
               icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="h-4 w-4 text-muted-foreground"><rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path></svg>` 
          },
          { 
               title: "Active Now", 
               num: "+573", 
               description: "+201 since last hour",
               month: 20.1, 
               icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="h-4 w-4 text-muted-foreground"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>` 
          },
     ]);
</script>