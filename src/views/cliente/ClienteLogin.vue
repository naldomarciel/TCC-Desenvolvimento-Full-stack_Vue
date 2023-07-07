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
          <a href="/" class="navbar-item">
            Home
          </a>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a href="/agendamento" class="button is-light">
              Agendamento
            </a>
          </div>
        </div>
      </div>

    </nav>
    <!--NAV BAR-->
    <div class="main-loginClient">
      <div class="column is-5 left-login">
        <div class="columns is-flex is-flex-direction-column">
          <h2>Acesse sua conta</h2>
          <hr />
          <div class="column" v-show="showElement">
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
            </div>

            <div class="column">
              <button class="button is-primary is-fullwidth" @click="login">Login</button>
            </div>
            <p class="link" @click="mostrarElemento">
              Ainda não tem conta?
              <a>Cadastre-se</a>
            </p>
          </div>
          <div class="column" v-show="showElementII">
            <div v-if="error != undefined">
              <div class="notification is-danger">
                <button class="delete"></button>
                {{ error }}
              </div>
            </div>
            <div class="column">
              <label for="email">Nome</label>
              <input class="input is-primary" type="text" placeholder="Fulano de tal" v-model="nome">
            </div>
            <div class="column">
              <label for="email">E-mail</label>
              <input class="input is-primary" type="email" placeholder="exemplo@mail.com" v-model="email">
            </div>
            <div class="column">
              <label for="Name">Senha</label>
              <input class="input is-primary" type="password" placeholder="***********" v-model="senha">
            </div>

            <div class="column">
              <button class="button is-primary is-fullwidth" @click="register">Cadastrar</button>
            </div>
            <p class="link" @click="mostrarElementoII">
              Já tem conta?
              <a>Ir para Login</a>
            </p>
          </div>

        </div>
      </div>

      <div class="column is-7 right-login">
        <img src="../../assets/images/login.svg" class="img-login" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      senha: "",
      nome: "",
      celular: "",
      error: undefined,
      showElement: true,
      showElementII: false,
    };
  },
  //criando método de registro
  methods: {
    login() {
      axios.post("https://barberapi-db08894f5bfd.herokuapp.com/api/login", {

        email: this.email,
        senha: this.senha,

      }).then(res => {

        console.log(res);
        localStorage.setItem('token', res.data.token)
        this.$router.push({ name: 'home' });
      }).catch(err => {
        var msgErro = err.response.data.err;
        this.error = msgErro
      })

    },
    register() {

      if (
        this.nome != '' || this.nome != ' ' &&
        this.email != '' || this.email != ' ' &&
        this.senha != '' || this.senha != ' '

      ) {
        axios
          .post("https://barberapi-db08894f5bfd.herokuapp.com/api/user", {
            email: this.email,
            senha: this.senha,
            nome: this.nome,
            status: "A",

          })
          .post("https://barberapi-db08894f5bfd.herokuapp.com/api/client", {
            tipo: "PF",
            cliente: this.nome,
            email: this.email,
            celular:this.celular,
            status: "A",

          })
          .then(res => {
            this.showElementII = !this.showElementII
            this.showElement = true
            this.email = "",
            this.senha = "",
            console.log(res);

          })
          .catch(err => {
            var msgErro = err.response.data.err;
            this.error = msgErro
            console.log(err)
       
          })

      }
    },
    mostrarElemento: function () {
      this.showElement = !this.showElement
      this.showElementII = true
    },
    mostrarElementoII: function () {
      this.showElementII = !this.showElementII
      this.showElement = true
    },
  },
};
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;

}

body * {
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 100%;
}

.column {
  display: flexbox;
}

.main-loginClient {
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 110px;
}

.right-login {
  width: 40vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

.left-login {
  background-color: gainsboro;
  width: 60vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media only screen and (max-width: 600px) {
  .main-login {
    flex-direction: column;
  }

  .left-login {
    width: 100%;
    height: auto;
  }

  .right-login {
    display: none;
  }

  .img-login {
    display: none;
  }

}

/*marcando os links para mudar de um formulário para outro */
.link {
  position: absolute;

  color: #820101;
  left: 0px;
  height: 20px;
  width: 440px;
  padding: 17px 30px 20px 30px;
  font-size: 16px;
  text-align: right;


  -webkit-border-radius: 0 0 5px 5px;
  border-radius: 0 0 5px 5px;
}

.link a {
  font-weight: bold;
  background: #f7f8f1;
  padding: 6px;
  color: #820101;
  margin-left: 10px;
  border: 1px solid #032236;

  -webkit-border-radius: 4px;
  border-radius: 4px;

  -webkit-transition: all 0.4s linear;
  transition: all 0.4s linear;
}

.link a:hover {
  color: #39bfd7;
  background: #f7f7f7;
  border: 1px solid #4ab3c6;
}
</style>