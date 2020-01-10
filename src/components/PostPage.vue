<template>
  <div>
    <v-card
      class="mx-auto mb-5"
      max-width="344"
      outlined
      v-for="(item, i) in allPosts"
      :key="i"
      @click="openCard(item)"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.body }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PostPage",

  computed: {
    ...mapGetters("posts", ["allPosts"])
  },

  methods: {
    ...mapActions("posts", ["fetchItems"]),
    openCard(item) {
      console.log(item);
      this.$router.push({ path: `/posts/${item.id}` });
    }
  },

  async mounted() {
    this.fetchItems();
  }
};
</script>