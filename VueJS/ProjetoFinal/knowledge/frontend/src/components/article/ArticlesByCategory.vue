<template>
  <div id="articles-by-category">
    <Page-title icon="fa fa-folder-o" :main="category.name" sub="Categoria" />
    <ul>
      <li v-for="article in articles" :key="article.id">
        <Article-item :article="article" />
      </li>
    </ul>
    <div class="load-more">
      <button
        class="bnt btn-lg btn-outline-primary"
        v-if="loadMore"
        @click="getArticles"
      >
        Carregar +
      </button>
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/templates/PageTitle";
import { baseApiUrl } from "@/global";
import axios from "axios";
import ArticleItem from "./ArticleItem.vue";

export default {
  name: "ArticlesByCategory",
  components: { PageTitle, ArticleItem },
  data: function () {
    return {
      category: {},
      articles: [],
      page: 1,
      loadMore: true,
    };
  },
  methods: {
    getCategory() {
      const url = `${baseApiUrl}/categories/${this.category.id}`;
      axios.get(url).then((res) => (this.category = res.data));
    },
    getArticles() {
      const url = `${baseApiUrl}/categories/${this.category.id}/articles?page=${this.page}`;
      axios.get(url).then((res) => {
        this.articles = this.articles.concat(res.data);
        this.page++;

        if (res.data.length == 0) this.loadMore = false;
      });
    },
  },
  watch: {
    $route(to) {
      this.category.id = to.params.id;
      this.articles = [];
      this.page = 1;
      this.loadMore = true;

      this.getCategory();
      this.getArticles();
    },
  },
  mounted() {
    this.category.id = this.$route.params.id;
    this.getCategory();
    this.getArticles();
  },
};
</script>

<style>
#articles-by-category ul {
  list-style-type: none;
  padding: 0;
}

#articles-by-category .load-more {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}
</style>