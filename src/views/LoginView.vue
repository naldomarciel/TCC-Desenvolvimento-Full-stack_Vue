<template>
  <div class="main-login">
   
      <div class="column is-5 left-login">
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
                  <input class="input is-primary" type="email" placeholder="exemplo@mail.com" v-model="email" >
              </div>
              <div class="column">
                  <label for="Name">Senha</label>
                  <input class="input is-primary" type="password" placeholder="***********" v-model="senha" >
                  <a href="#" class="is-size-7 has-text-primary">Esqueceu Senha?</a>
              </div>
            
              <div class="column">
                  <button class="button is-primary is-fullwidth" @click="login">Login</button>
              </div>

          
           
          </div>
        </div>
      </div>

      <div class="column is-7 right-login">
        <img src="../assets/images/login.svg" class="img-login" />
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
      error: undefined,
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
        this.$router.push({ name: 'adminHome' });
      }).catch(err => {
        var msgErro = err.response.data.err;
        this.error = msgErro
      })

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
body *{
  box-sizing: border-box;
}
.container{
width: 100%;
height: 100%;
}
.column{
  display: flexbox;
}

.main-login{
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-login{
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

@media only screen and ( max-width: 600px){
  .main-login{
  flex-direction:column;
}
  .left-login{
  width: 100%;
  height: auto;
}

.right-login{
 display: none;
}
.img-login{
  display: none;
}

}
 
</style>