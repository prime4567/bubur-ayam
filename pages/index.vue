<template>
  <main>
    <PageHeader />
    <!-- ---------------- Show latest post ---------------- -->
    <div class="container mx-auto pt-8 px-2 lg:pt-24">
      <h3 class="section-header">Latest Eat</h3>
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

    <!-- ---------------- Show older post ---------------- -->
    <div class="container mx-auto pt-16 px-2 lg:pt-32">
      <h3 class="section-header">Other Bubur Ayam</h3>
      <div class="grid lg:grid-cols-2 lg:gap-x-8 gap-y-4">
        <div v-for="blog in remaining_blogs" :key="blog.slug">
          <div class="lg:flex">
            <NuxtLink :to="blog.slug">
              <nuxt-img :src="blog.cover_image" sizes="sm:100vw md:100vw lg:200px" class="rounded-md lg:mr-4"/>
            </NuxtLink>
            <div>
              <NuxtLink :to="blog.slug"><h4 class="font-medium text-xl mt-2">{{ blog.title }}</h4></NuxtLink>
              <div class="flex gap-4 mt-2">
                <star-rating :rating="blog.rating"/>
                <map-link :location="blog.location" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PageFooter />
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    const blogs = await $content('blog')
      .sortBy('date', 'desc')
      .limit(6)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    const remaining_blogs = await $content('blog')
      .sortBy('date', 'desc')
      .skip(6)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      blogs, remaining_blogs
    };
  },
  methods: {
    getCols(index) {
      if(index == 0) {
        return "row-span-3";
      }
    }
  }
  
};
</script>