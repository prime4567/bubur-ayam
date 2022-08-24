<template>
  <main>
    <PageHeader />
    <!-- ---------------- Show latest post ---------------- -->
    <div class="container mx-auto pt-16 px-2 lg:pt-32">
      <h3 class="section-header">Latest Eat</h3>
      <div class="grid lg:grid-rows-3 lg:grid-flow-col lg:gap-x-8 gap-y-4">
        <div :class="getCols(index)" v-for="(blog, index) of blogs" :key="blog.slug">          
          <div v-if="index===0">
            <NuxtLink :to="blog.slug">
              <nuxt-img :src="blog.cover_image" sizes="sm:100vw lg:600px"/>
              <h4 class="font-medium text-2xl mt-2">{{ blog.title }}</h4>
            </NuxtLink>
            <div class="flex gap-4 mt-2">
              <star-rating :rating="blog.rating"/>
              <map-link :location="blog.location" />
            </div>
          </div>
          <div class="lg:flex" v-else-if="index<4">
            <NuxtLink :to="blog.slug">
              <nuxt-img :src="blog.cover_image" sizes="sm:100vw md:100vw lg:200px" class="lg:pr-4"/>
            </NuxtLink>
              <div>
                <NuxtLink :to="blog.slug">
                    <h4 class="font-medium text-2xl mt-2">{{ blog.title }}</h4>
                </NuxtLink>
                <div class="flex gap-4 mt-2">
                  <star-rating :rating="blog.rating"/>
                  <map-link :location="blog.location" />
                </div>
              </div>
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
              <nuxt-img :src="blog.cover_image" sizes="sm:100vw md:100vw lg:200px" class="lg:pr-4"/>
            </NuxtLink>
            <div>
              <NuxtLink :to="blog.slug"><h4 class="font-medium text-2xl mt-2">{{ blog.title }}</h4></NuxtLink>
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
      .limit(4)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    const remaining_blogs = await $content('blog')
      .sortBy('date', 'desc')
      .skip(4)
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