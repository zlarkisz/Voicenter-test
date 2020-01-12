<template>
  <div>
    <h1 class="text-center">Post id: {{ id }}</h1>
    <v-btn @click="goBack" class="ma-2" tile large color="primary" icon>
      <v-icon>mdi-arrow-left-circle</v-icon>
    </v-btn>

    <v-card class="mx-auto mb-5" width="344" shaped>
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SinglePost",

  data() {
    return {
      id: this.$route.params.id
    };
  },

  computed: {
    ...mapGetters("posts", ["item"])
  },

  watch: {
    $route(toR) {
      this.id = toR.params.id;
    }
  },

  methods: {
    ...mapActions("posts", ["fetchItem"]),
    goBack() {
      this.$router.go(-1);
    }
  },

  mounted() {
    this.fetchItem(this.id);
  }
};
</script>