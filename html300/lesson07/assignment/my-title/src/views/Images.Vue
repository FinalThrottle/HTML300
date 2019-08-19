<template>
<div class="home">
  <div v-for="image in images">
    <img v-bind:src="require(`../images/${image}.jpg`)" class="img-fluid mx-0 my-4" height="400">
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      images: ['fall']
    }
  }
}
</script>
