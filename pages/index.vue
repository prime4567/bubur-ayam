<template>
  <main>
    <PageHeader />
    <div class="container mx-auto pt-16 px-2 lg:pt-32">
      <h3 class="font-medium text-3xl mt-2 mb-4">Latest Post</h3>
      <div class="grid lg:grid-rows-3 lg:grid-flow-col lg:gap-x-8 gap-y-4">
        <div :class="getCols(index)" v-for="(blog, index) of blogs" :key="blog.slug">
          <NuxtLink :to="blog.slug">
            <div v-if="index===0">
              <nuxt-img :src="blog.cover_image" sizes="sm:100vw lg:600px"/>
              <h4 class="font-medium text-2xl mt-2">{{ blog.title }}</h4>
              <star-rating :rating="blog.rating"/>
            </div>
            <div class="lg:flex" v-else>
              <nuxt-img :src="blog.cover_image" sizes="sm:100vw md:100vw lg:200px" class="lg:pr-4"/>
              <div>
                <h4 class="font-medium text-2xl mt-2">{{ blog.title }}</h4>
                <star-rating :rating="blog.rating"/>
              </div>
            </div>
          </NuxtLink>
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
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      blogs
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