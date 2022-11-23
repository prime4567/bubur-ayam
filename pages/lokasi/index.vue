<template>
  <main>
    <PageHeader />
    <div class="container mx-auto pt-8 px-2 lg:pt-24">
      <h3 class="section-header">Lokasi</h3>
      <div class="grid lg:grid-cols-3 lg:gid-flow-col lg:gap-x-8 gap-y-4">
        <NuxtLink v-for="lokasi in daftarLokasi" :key="lokasi.tag" class="location-item" :to="`/lokasi/${lokasi.tag}`">
          <div class="location-label">{{ lokasi.name }}</div>
        </NuxtLink>
      </div>
    </div>
    <PageFooter />
  </main>
</template>
<script>
export default {
  data() {
    return {
      daftarLokasi: [
        { tag: 'bsd', name: 'BSD' },
        { tag: 'ciawi', name: 'Ciawi' },
        { tag: 'jombang', name: 'Jombang' },
        { tag: 'jaksel', name: 'Jakarta Selatan' },
        { tag: 'pamulang', name: 'Pamulang' },
        { tag: 'tangsel', name: 'Tangerang Selatan' },
      ]
    }
  }
};
</script>