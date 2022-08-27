<template>
  <main>
    <PageHeader />
    <div class="container mx-auto pt-4 mt-12 lg:mt-28 px-2 md:px-16 lg:px-32 xl:px-64">
      <div>
        <nuxt-img :src="article.cover_image" sizes="sm:100vw md:100vw lg:100vw" />
        <h3 class="font-medium text-4xl mt-2 mb-2">{{ article.title }}</h3>
        <div class="flex mb-4 text-lg font-bold">Rating: <star-rating :rating="article.rating" /></div>
        <nuxt-content :document="article" />
        <h4 class="font-medium text-2xl mt-2 mb-2">Lokasi</h4>
        Untuk menemukan lokasi, silahkan lihat peta di bawah ini. Klik untuk melihat lokasi lebih detil.
        <a :href=mapUrl><img class="w-full mt-2" :src=mapStaticUrl /></a>
      </div>
    </div>
    <PageFooter />
  </main>
</template>

<script>
import getSiteMeta from '@/utils/getSiteMeta';

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
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: "article:tag",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
        { name: "twitter:label1", content: "Written by" },
        { name: "twitter:data1", content: "Penikmat Bubur" },
        { name: "twitter:label2", content: "Filed under" },
        {
          name: "twitter:data2",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://buburayam.id/${this.$route.params.slug}`,
        },
      ],
    };
  },

  computed: {
    // a computed getter
    mapUrl() {
      // `this` points to the component instance
      return "https://www.google.com/maps/search/?api=1&query=" + JSON.parse(this.article.location).coordinates[1] + "," + JSON.parse(this.article.location).coordinates[0];
      //return "https://www.google.com/maps/embed/v1/place?key=AIzaSyAY7WtXiplvuGQAkNNiKnrv5FiZr7MD59o&q=" + this.article.title + 
      //  "&center=" + JSON.parse(this.article.location).coordinates[1] + "," + JSON.parse(this.article.location).coordinates[0];
    },
    mapStaticUrl() {
      // `this` points to the component instance
      //return "https://www.google.com/maps/search/?api=1&query=" + JSON.parse(this.article.location).coordinates[1] + "," + JSON.parse(this.article.location).coordinates[0];
      return "https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyAb_uizjteOq-jXi2yEf3AKechINF7-9Ng&size=1024x400&zoom=16&center="
        + JSON.parse(this.article.location).coordinates[1] + "," + JSON.parse(this.article.location).coordinates[0]
        + "&markers=color:0xFFFF00%7Clabel:X%7C" + JSON.parse(this.article.location).coordinates[1] + "," + JSON.parse(this.article.location).coordinates[0];
    },
    meta() {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `https://buburayam.id/${this.$route.params.slug}`,
        mainImage: this.article.cover_image,
      };
      return getSiteMeta(metaData);
    },
  }
};
</script>