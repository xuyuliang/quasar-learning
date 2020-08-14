<template>
  <div>
    <!-- <div class="allcentrolized">
      <p>哈哈</p>
    </div>-->

    <!-- <div class="parallel">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>-->

    <div class="two-colums">
      <div class="sidebar">asdfaf 左边</div>
      <div class="content">
        ssdfadfasfasdfasdfadsfsdaf
        skfja;ljfa;sdlfja;slfjsfja;l
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'testpage'
}
</script>

<style scoped>
.allcentrolized {
  background-color: aqua;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 500px;
  height: 600px;
}
.parallel {
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  resize: both;
  overflow: auto;
  background-color: aqua;
}
.item {
  /* flex: 0 1 300px; */
  /* flex: 1 1 300px; */
  flex-basis: 300px;
  flex-grow: true;
  flex-shrink: flase;
  border: 1px solid red;
  background: lightpink;
  font-size: 2rem;
  /* text-align: center; */
}
.two-colums {
  display: grid;
  grid-template-columns: minmax(150px, 23%);
}
.sidebar {
  height: 100vh;
  background: lightpink;
  font-size: 2rem;
  text-align: center;
}

.content {
  background-color: burlywood;
  padding: 2rem;
}
</style>
