<template>
  <v-container>
    <v-row>
      <v-col>
        <post-page />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostPage from "@/components/Posts/PostPage";

export default {
  name: "Post",

  components: {
    PostPage
  }
};
</script>