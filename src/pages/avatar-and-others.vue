<template>
  <div>
    <div class="row justify-center">
      <q-avatar rounded color="teal" text-color="white" size="250px" icon="sick"></q-avatar>
      <q-avatar rounded color="red" text-color="white" size="250px" icon="sports_rugby"></q-avatar>
    </div>
    <div class="row">
      <div class="col-8 mycolor4">
        two thirds
        <button v-ripple>Click me. I got ripples.</button>
      </div>
      <div class="col-2 mycolor3 justify-center">one sixth</div>
      <!-- <div class="col-auto mycolor1">auto size </div> -->
      <div class="col-auto mycolor1">
        auto size ocupy the size what it needs if it's not big enough ,it will
        make a new line
      </div>
      <div
        class="col mycolor2 justify-center"
      >fills remaining available space dispite whatever inner elements' size</div>
    </div>
    <div class="row">
      <div style="order:1">this is first div</div>
      <div style="order:3">this is 3 div</div>
      <div style="order:2">this is 2nd div</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'avatar-and-others'
}
</script>

<style scoped>
.mycolor1 {
  background-color: aqua;
}
.mycolor2 {
  background-color: blueviolet;
}
.mycolor3 {
  background-color: blue;
}
.mycolor4 {
  background-color: yellowgreen;
}
</style>
