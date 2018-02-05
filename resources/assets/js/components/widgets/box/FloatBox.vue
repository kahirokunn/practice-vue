<template>
  <div class="box" style="box-shadow: 5px 5px 10px gray;">
    <div class="box-header with-border">
      <h3 class="box-title">{{ getTitle }}</h3>
      <div class="box-tools pull-right">
        <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
      </div>
    </div>
    <div class="box-body">{{ getBody }}</div>
  </div>
</template>

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
      }
    },
    computed: { // 依存関係にある値が変更された際のみ再算出
      getTitle: function () {
        return this.title;
      },
      getBody: function () {
        return this.body;
      }
    }
  };
</script>
