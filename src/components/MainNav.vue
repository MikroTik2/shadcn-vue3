<script setup lang="ts">
  import { cn } from '../lib/utils';

  const links = [
    { href: "/dashboard/overview", text: "Overview" },
    { href: "/dashboard/vustomers", text: "Customers" },
    { href: "/dashboard/products", text: "Products" },
    { href: "/dashboard/settings/profile", text: "Settings" },
  ];
</script>

<template>
  <nav :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')">
    <router-link v-for="(link, index) in links" :key="index" :to="link.href" class="text-sm first:text-foreground font-medium text-muted-foreground transition-colors hover:text-primary">{{ link.text }}</router-link>
  </nav>
</template>
