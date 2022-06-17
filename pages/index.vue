<template>
  <main>
    <header>
        <h1 class="flex justify-center font-medium leading-tight text-5xl mt-0 text-blue-600 block">Bubur Ayam</h1>
        <h2 class="flex justify-center font-medium leading-tight text-2xl mt-0 text-blue-600 block">#timbuburdiaduk</h2>
    </header>
    <div class="container mx-auto pt-16 px-2 lg:pt-32">
      <div class="grid lg:grid-rows-3 lg:grid-flow-col">
        <div :class="getCols(index)" v-for="(blog, index) of blogs" :key="blog.slug">
          <NuxtLink :to="blog.slug">
            <div v-if="index===0">
              <h3 class="font-medium text-3xl mt-2 mb-4">Latest Post</h3>
              <nuxt-img :src="blog.cover_image" sizes="sm:100vw lg:600px"/>
              <h4 class="font-medium text-2xl mt-2">{{ blog.title }}</h4>
            </div>
            <div v-else>
              <nuxt-img :src="blog.cover_image" sizes="sm:100vw md:100vw lg:200px"/>
              <h4 class="font-medium text-2xl mt-2">{{ blog.title }}</h4>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
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