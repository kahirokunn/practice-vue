<template>
  <div>
    <section class="content-header">
      <h1>Article List
        <small></small>
      </h1>
    </section>

    <section class="content">
      <div v-for="article in articles" class="row">
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title">
              <router-link :to="'/articles/' + article.id">{{ article.title }}</router-link>
            </h3>
            <div class="box-tools pull-right">
              <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="box-body">{{ article.content }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    created() {
      this.fetchArticles()
    },
    data() {
      return {
        articles: this.articles
      }
    },
    methods: {
      fetchArticles() {
        this.$http.get('/api/articles')
          .then(res => {
            this.articles = res.data
          })
      }
    }
  }
</script>
