<template>
  <div>
    <h1 class="text-center">Posts</h1>

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
        </v-list-item-content>
      </v-list-item>

      <v-card-text>{{ item.body }}</v-card-text>
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
      const id = item.id;
      this.$router.push(`/posts/${id}`);
    }
  },

  mounted() {
    this.fetchItems();
  }
};
</script>