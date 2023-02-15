<template>
  <div>
    <h2>this is app</h2>
    <div>
      <h2>this is Home component</h2>
      <Home></Home>
    </div>
    <div>
      <h2>this is Home component</h2>
      <About></About>
    </div>

    <button @click="handleAdd">增加</button>

    <p>{{ count }}</p>
  </div>
</template>

<script>
import Home from "./pages/Home";
import About from "./pages/About";
export default {
  components: { Home, About },
  data() {
    return {
      count: 1
    };
  },

  mounted() {
    console.log(hah);
  },
  methods: {
    handleAdd() {
      this.count++;
    }
  }
};
</script>

