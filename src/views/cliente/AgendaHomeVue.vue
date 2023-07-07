<template>
  <div>
    <nav class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          Velho Barbeiro
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">
                Agendamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!--NAV BAR-->
    <main class="main-homepage">
      <div class="column is-three-fifths is-offset-one-fifth">
      <div class="card">
      <div class="columns is-flex is-flex-direction-column">
        <h2>Acesse sua conta</h2>
        <hr />
        <div class="column">
          <div v-if="error != undefined">
            <div class="notification is-primary">
              <button class="delete"></button>
              {{ error }}
            </div>
          </div>
          <div class="column">
            <label for="email">E-mail</label>
            <input class="input is-primary" type="email" placeholder="exemplo@mail.com" v-model="email">
          </div>
          <div class="column">
            <label for="Name">Senha</label>
            <input class="input is-primary" type="password" placeholder="***********" v-model="senha">
            <a href="#" class="is-size-7 has-text-primary">Esqueceu Senha?</a>
          </div>

          <div class="column">
            <button class="button is-primary is-fullwidth" @click="login">Login</button>
          </div>


        </div>
        </div>
      </div>
    </div>
    </main>

    <footer>
      <div class="footer-content">
        <h2>nOSSO SERVIÇOS</h2>
      </div>
    </footer>
  </div>
</template>
 
<script>

export default {
  props: {

  },
  methods: {






  }
};
</script>

<style>
* {

  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin: 0;
}

.main-homepage {
  padding: 0;


}


.slider {
  overflow: hidden;
}

.slider-select {
  position: absolute;
  top: 90%;
  padding-left: 50%;
}

.slider>.slider-content {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  transition: all 500ms ease;
  height: 30rem;

}


.slider>.slider-content>.slider-item {
  flex: 0 0 auto;
  width: 100%;

}

.sobre-content {
  display: inline-block;
  width: 100%;
  background-color: #f1f5f9;
  align-content: center;
  margin-block-end: 40px;
}

.servico-content {
  background-color: lightgray;
  display: inline-block;
  width: 100%;
  padding: 40px 0px 4px 0px;
}

.footer-content {
  background-color: black;
  height: 30vh;
  display: flex;
  width: 100%;
}

.row {
  margin-top: 10px;
  width: 100%;
  text-align: center;
  padding: 0px 40px 0px 40px;
}

.row .title {
  color: #040303;

  text-transform: uppercase;
  margin-bottom: 15px;
  line-height: 1.3em;
}

.row>p {
  font-family: Pangram, serif;
  font-size: 15px;
}

.card {
  margin-block-end: 30px;
}
</style>