<template>
  <div>
    <section class="content-header">
      <h1>Article List
        <small></small>
      </h1>
    </section>

    <section class="content">
      <div v-for="article in articles" class="row">
        <float-box :title="article.title" :body="article.content"></float-box>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    created() {
      this.page = 1;
      this.fetchArticles()
    },
    data() {
      return {
        articles: this.articles,
        page: this.page,
      }
    },
    methods: {
      fetchArticles() {
        this.$http.get('/api/articles', {params: {page: this.page}})
          .then(res => {
            this.articles = res.data.data
          })
      }
    }
  }
</script>
