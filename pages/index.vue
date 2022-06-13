<template>
  <main>
    <header>
        <h1 class="flex justify-center font-medium leading-tight text-5xl mt-0 text-blue-600 block">Bubur Ayam</h1>
        <h2 class="flex justify-center font-medium leading-tight text-2xl mt-0 text-blue-600 block">#timbuburdiaduk</h2>
    </header>
    <ul>
      <li v-for="blog of blogs" :key="blog.slug">
        <NuxtLink :to="blog.slug">
          <div>
            <nuxt-img :src="blog.cover_image" />
            <h2>{{ blog.title }}</h2>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    const blogs = await $content('blog')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      blogs
    };
  }
};
</script>