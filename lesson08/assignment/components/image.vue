// First part of the assignment was to create an image markup into a separate component.

<template lang="html">
  <div>
// Derived from the screencast that was shown - to make the images appear in VUE.
// Also incorporated a few of the 'props' that was required in the assignment.
    <img
      v-show="showPlease"
      :src="image.src"
      :title="image.title"
      :img-alt="image.alt"
      :key="image.id"
      width="700"
      class="my-5"
      id="border"
      @click="toggleClass">
  </div>
</template>


<script>
// This 'import' is necessary in order to fetch from the Javascript file that's in the 'mixin' folder.
// This will allow for the toggle on/off of the border around the image file.
import { showBorder } from "./mixins/border.js"
export default {
  name: "myImage",
  props: {
    image: {
      type: Object
    },
    src: {
      type: String
    },
    alt: {
      type: String
    },
    title: {
      type: String
    }
  },
  mixins: [showBorder],
  data() {
    return {
      showPlease: true
    };
  }
}
</script>

<!-- Stylizations for the borders, when the image is clicked on. -->
<style media="screen">
#border.active {
  border: 3px double Blue;
}
</style>
