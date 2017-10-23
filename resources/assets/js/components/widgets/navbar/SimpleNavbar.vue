<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid" :style="getColor">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarEexample"
                style="background-color: white;">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/" style="color: white">{{ title }}</a>
      </div>

      <div class="collapse navbar-collapse" id="navbarEexample">
        <ul class="nav navbar-nav">
          <li v-for="link in links">
            <router-link class="active" :to="link.href" style="color: white;">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    props: {
      title: {
        type: [String, Number],
        default: 'empty title'
      },
      links: {
        type: Array,
        default: []
      },
      color: {
        type: String,
        default: '#3c8dbc'
      }
    },
    computed: {
      getTitle() {
        return this.title;
      },
      getLinks() {
        return this.links;
      },
      getColor() {
        return 'background-color: ' + this.color;
      }
    }
  }
</script>
