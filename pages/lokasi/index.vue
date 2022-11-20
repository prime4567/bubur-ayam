<template>
  <main>
    <PageHeader />
    <div class="container mx-auto pt-8 px-2 lg:pt-24">
      <h3 class="section-header">Lokasi</h3>
      <div class="grid lg:grid-cols-3 lg:gid-flow-col lg:gap-x-8 gap-y-4">
        <NuxtLink class="location-item" to="/lokasi/bsd"><div class="location-label">BSD</div></NuxtLink>
        <NuxtLink class="location-item" to="/lokasi/tangsel"><div class="location-label">Tangerang Selatan</div></NuxtLink>
        <NuxtLink class="location-item" to="/lokasi/pamulang"><div class="location-label">Pamulang</div></NuxtLink>
      </div>
    </div>
    <PageFooter />
  </main>
</template>
<script>
export default {

};
</script>