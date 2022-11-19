<template>
  <main>
    <PageHeader />
    <!-- ---------------- Show latest post ---------------- -->
    <div class="container mx-auto pt-16 px-2 lg:pt-32">
      <h3 class="section-header">Bubur Ayam di {{ capitalizeFirstLetter(lokasi) }}</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 gap-y-16">
        <div v-for="(blog) of blogs" :key="blog.slug">          
            <NuxtLink :to="blog.slug">
              <nuxt-img class="rounded-2xl" :src="blog.cover_image" sizes="sm:100vw lg:600px"/>
              <h4 class="font-medium text-2xl mt-2">{{ blog.title }}</h4>
            </NuxtLink>
            <div class="flex gap-4 mt-2">
              <star-rating :rating="blog.rating"/>
              <map-link :location="blog.location" />
            </div>
        </div>
      </div>
    </div>
    <PageFooter />
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params, error, route }) {
    const routeComponent = route.path.split("/");
    const lokasi = routeComponent[2];
    const blogs = await $content('blog')
      .sortBy('date', 'desc')
      .where({ 'tags': { $contains: routeComponent[2] } })
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      blogs, lokasi
    };
  },
  methods: {
    getCols(index) {
      if(index == 0) {
        return "row-span-3";
      }
    },
    capitalizeFirstLetter(string) {
      return string[0].toUpperCase() + string.slice(1);
    }
  }
  
};
</script>