<template>
  <main>
    <PageHeader />
    <div class="container mx-auto pt-16 lg:pt-32 px-2 md:px-16 lg:px-32 xl:px-64">
      <NuxtLink :to="article.slug">
        <div>
          <nuxt-img :src="article.cover_image" sizes="sm:100vw md:100vw lg:100vw" />
          <h3 class="font-medium text-2xl mt-2 mb-4">{{ article.title }}</h3>
          <nuxt-content :document="article" />
        </div>
      </NuxtLink>
    </div>
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    let article;
    article = await $content("blog", params.slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      article
    };
  }
};
</script>