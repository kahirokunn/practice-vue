<template>
  <div class="box" v-if="isShow" @click="hidden()">
    <div class="box-header with-border">
      <h3 class="box-title">{{ getTitle }}</h3>
      <div class="box-tools pull-right">
        <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
      </div>
    </div>
    <div class="box-body">{{ getBody }}</div>
  </div>
</template>

<style lang="scss" scoped>
.box {box-shadow: 5px 5px 10px gray;}
</style>


<script>
  export default {
    props: {
      title: {
        type: [String, Number], // バリデーション
        default: 'empty title'  // default値
      },
      body: {
        type: [String, Number],
        default: 'empty body'
      },
      is_show: {
        type: [String, Boolean],
        default: 'True'
      }
    },
    computed: { // 依存関係にある値が変更された際のみ再算出
      getTitle: function () {
        return this.title;
      },
      getBody: function () {
        return this.body;
      },
      isShow: function () {
        if (typeof(this.is_show) == 'boolean') {
          return this.is_show
        }
        return this.is_show == 'True'
      }
    },
    methods: {
      hidden: function() {
        this.is_show = false
      }
    }
  };
</script>
