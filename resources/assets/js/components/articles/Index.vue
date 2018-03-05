<template>
  <div>
    <section class="content-header">
      <h1>Article List
        <small></small>
      </h1>
    </section>

    <section class="content">
      <div v-for="(id, article) in articles" class="row" :key="id">
        <float-box :title="article.title" :body="article.content"></float-box>
      </div>
      <div v-if="pagination">
        <laravel-format-pagination :pagination="pagination" :callback="fetchArticles"></laravel-format-pagination>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    created() {
      this.fetchArticles(1)
    },
    data() {
      return {
        articles: this.articles,
        pagination: this.pagination
      }
    },
    methods: {
      fetchArticles(page) {
        this.$http.get('/api/articles', {params: {page: page}})
          .then(res => {
            this.pagination = res.data
            this.articles = this.pagination.data
          })
      }
    }
  }
</script>
