<template>
  <div>
    <div class="row justify-center">这是第1行</div>
    <div class="row">
      <div class="col-4 bg-blue-3 q-pa-md">
        <q-card dark bordered class="bg-grey-9 my-card">
          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>

          <q-separator dark inset></q-separator>

          <q-card-section>{{ myText }}</q-card-section>
        </q-card>
      </div>
      <div class="col-4 bg-green-2">one sixth</div>
      <div class="col items-center bg-yellow-3">
        <div class="col self-center">aaaa</div>
      </div>
    </div>
    <div class="row">
      <div class="col-4 bg-red-3">two thirds</div>
      <div class="col-4 bg-yellow-2">one sixth</div>
      <div class="col-4 bg-blue-3">make a new line</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pg810',
  data: function () {
    return {
      // eslint-disable-next-line no-multi-str
      myText: '常用的页面布局，其实就那么几个。下面我会介绍5个经典布局，只要掌握了它们，就能应对绝大多数常规页面。\
这几个布局都是自适应的，自动适配桌面设备和移动设备。代码实现很简单，核心代码只有一行，有很大的学习价值，内容也很实用。\
      我会用到 CSS 的 Flex 语法和 Grid 语法，不过只用到一点点，不熟悉的朋友可以先看看教程链接，熟悉一下基本概念。每一个布局都带有 CodePen 示例，也可以到这个网页统一查看。'
    }
  }
}
</script>

<style scoped>
.mycolor1 {
  background-color: aqua;
}
.my-card {
  width: 100%;
  max-width: 50ch;
}
</style>
