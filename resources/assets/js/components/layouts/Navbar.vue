<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid" style="background-color: #3c8dbc;">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarEexample" style="background-color: white;">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/" style="color: white">トップ</a>
      </div>

      <div class="collapse navbar-collapse" id="navbarEexample">
        <ul class="nav navbar-nav">
          <li>
            <router-link class="active" to="/about" style="color: white;">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
