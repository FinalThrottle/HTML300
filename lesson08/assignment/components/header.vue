<template lang="html">
  <div>
    <header>
  // The header component that incorporates the 'slot'.
      <slot name="heading">Song of the Seasons</slot>
    </header>
  </div>
</template>

<script>
export default {
  name: "theHeader"
}
</script>

<style lang="css" scoped>
</style>
