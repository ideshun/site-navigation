<template>
  <div class="hello">
    <ul class="bdrs">
      <li v-for="items in urlData" class="border">
        <a :href="items.url" :target="items.target== 0 ? '':'_blank'">
          <img class="logo" :src="items.logo" alt="">
        </a>
      </li>
    </ul>
    <ul class="tmp1">
      <li v-for="items in urlData" class="border">
        <a :href="items.url" :target="items.target== 0 ? '':'_blank'">
          <img class="logo" :src="items.logo" alt="">
          <div class="text">
            <h2>{{items.name}}</h2>
          </div>
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="items in urlData" class="border">
        <a :href="items.url" :target="items.target== 0 ? '':'_blank'">
        <img class="logo" :src="items.logo" alt="">
          <div class="text">
            <h1>{{items.name}}</h1>
            <p>{{items.description}}</p>
          </div>
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="items in urlData" class="line">
        <a :href="items.url" :target="items.target== 0 ? '':'_blank'">
          <img class="logo" :src="items.logo" alt="">
          <h2>{{items.name}}</h2>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      urlData: [],
    }
  },
  mounted(){
    this.axios.get("api/list").then((res)=>{
      this.urlData = res.data;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "style.css";
</style>
