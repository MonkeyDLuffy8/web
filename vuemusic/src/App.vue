<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    padding-bottom: 50/37.5rem;
    padding-top: 50/37.5rem;
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "微软雅黑","Times New Roman",Georgia,Serif;
        font-size: 12/37.5rem;
    }
}

input {
    outline:none;
}

a{
  text-decoration: none;
  color: #222;
}
li{
  list-style: none;
}
</style>
