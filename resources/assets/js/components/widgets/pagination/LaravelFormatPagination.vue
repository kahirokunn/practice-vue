<template>
  <nav>
    <ul class="pagination">
      <li v-if="pagination.per_page > 1" :class="{disabled: !(pagination.current_page > 1)}">
        <a v-if="pagination.current_page > 1" href="#" aria-label="Previous" @click.prevent="changePage(pagination.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
        <a v-else href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li v-for="page in getPagesNumber" :class="[ page == getCurrentPageNumber ? 'active' : '']">
        <a href="#" @click.prevent="changePage(page)">{{ page }}</a>
      </li>

      <li v-if="pagination.per_page > 1" :class="{disabled: !(pagination.current_page < pagination.last_page)}">
        <a v-if="pagination.current_page < pagination.last_page" href="#" aria-label="Next" @click.prevent="changePage(pagination.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
        <a v-else href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      pagination: {
        type: Object,
        default: function () {
          return {};
        }
      },
      // 引数にpage numberを設定することによりアイテムリストを更新するメソッドが必要です
      callback: {
        type: Function,
        default: function (page) {
        }
      }
    },
    data() {
      return {
        offset: 3
      }
    },
    computed: {
      getCurrentPageNumber: function () {
        return this.pagination.current_page;
      },
      getPagesNumber: function () {
        if (!this.pagination.to) return []

        let from = this.pagination.current_page - this.offset
        if (from < 1) from = 1

        let to = from + (this.offset * 2)
        if (to >= this.pagination.last_page) to = this.pagination.last_page

        let pagesArray = []
        while (from <= to) {
          pagesArray.push(from)
          from++
        }
        return pagesArray
      }
    },
    methods: {
      changePage: function (page) {
        this.pagination.current_page = page;
        this.callback(page);
      }
    }
  }
</script>
