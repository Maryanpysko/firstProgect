<template>
  <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" >
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cars">Cars</router-link>
            </li >
            
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Пошук">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Пошук</button>
          </form>
        </div>
      </nav> 
      <router-view></router-view>
  </div>
    
</template>

<script>

export default {}
</script>

<style>


</style>
