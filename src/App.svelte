<script>
  import "carbon-components-svelte/css/g10.css";
  import Search from "./lib/Search.svelte";
</script>

<main>
  <h1>Procurai</h1>

  <div class="card">
    <Search />
  </div>
</main>

<style>
  .card {
    width: 100%;
  }
  
  main {
    position: relative;
  }
</style>
