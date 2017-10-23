<template>
  <simple-navbar :title="title" :links="links"></simple-navbar>
</template>

<script>
  export default {
    data(){
      return {
        title: 'トップ',
        links: [
          {
            href: '/about',
            title: 'About'
          }
        ]
      }
    }
  }
</script>
