<template>
<div class="home">

  <div id="app">
    <button type="button" name="button" v-on:click="show = !show">Just Hit Me with Your Best Shot</button>
    <p v-if="show">Why don't you hit me with your best shot?</p>
  </div>

  <div class="container">
      <!-- Using Bootstrap, the 'bg-danger' color, will allow for a red background.
      While 'mt' stands for margin top, and is adjustable from 0-5. Padding was used
      in order to create a more aesthetically pleasing spacing for the lyrics.-->
      <div class="container bg-danger mt-3" style="padding: 3rem;">
      <!-- With the help of Bootstrap, this aligns the text to the left. -->
        <p class="text-left">When dawn breaks again, we'll say our farewells</p>
        <p class="text-left">Our dreams become distant phantoms</p>
        <p class="text-left">The times we were embraced</p>
        <p class="text-left">In the light that chased you</p>
        <p class="text-left">Relying on the warm winds</p>
      <!-- With the help of Bootstrap, this aligns the text to the center. -->
        <p class="text-center">Heralding spring,</p>
        <p class="text-center">The wild plants start to dance</p>
        <p class="text-center">Summer in Uji,</p>
        <p class="text-center">Such dry, arabesque fields</p>
        <p class="text-center">The round autumn moon,</p>
        <p class="text-center">Risen in celebration</p>
        <p class="text-center">Winter passes,</p>
        <p class="text-center">And I again count the days</p>
      <!-- With the help of Bootstrap, this aligns the text to the right. -->
        <p class="text-right">Under my eyelids still resides</p>
        <p class="text-right">Vestiges of summer</p>
        <p class="text-right">And those too-distant skies (it was warm)</p>
        <p class="text-right">Holding hands, as we picked the flowers -- we sang</p>
        <p class="text-right">Memories of that evening (I wasn't there)</p>
        <p class="text-right">For three months from August</p>
        <p class="text-right">The clouds fall under the sway of the moon</p>
        <p class="text-right">And I awaken to the fact</p>
        <p class="text-right">That you'll never come back</p>
        <p class="text-right">I realize I'm alone</p>
        <p class="text-right">I'll go on a journey to find you</p>
        <p class="text-right">Now my memories within awaken</p>
        <p class="text-right">And now I start to walk</p>
        <p class="text-right">To wherever you are</p>

        <ul class="list-inline">
          <li v-for="social in social"><a href="#">
            {{social}}
          </a></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      social: ['Instagram']
    }
  }
}
</script>
