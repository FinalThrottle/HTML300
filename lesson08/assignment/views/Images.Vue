<template>
<div class="home">
  <div v-for="image in images">
    <img v-bind:src="require(`../images/${image}.jpg`)" class="img-fluid mx-0 my-4" height="400">
  </div>
</div>
</template>

<script>
// This is to import the image component using the following code:
import myImage from "@/components/image.vue";

export default {
  name: 'gallery',
  components: {
    myImage
  },
  data() {
    return {
      intro: 'The seasons are revolving. ',
      images: [
        {
          src: require("@/images/fall.jpg"),
          title: "poem",
          alt: "The rouge turns up at the unexpected places.",
          id: 0
        },
      ]
    };
  }
};
</script>
