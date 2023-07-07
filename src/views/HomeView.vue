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
            <div class="buttons" >
              <a href="/agendamento"    class="button is-light">
                Agendamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!--NAV BAR-->
    <main class="main-homepage">
      <div class="slider-content">
        <div class="slider-select">
          <input name='slide' type="radio">
          <input name='slide' type="radio" checked>
          <input name='slide' type="radio">

        </div>

        <div class="slider-item">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/images/barber02.jpg" alt="" width="1280" height="600" />
            </figure>
    </div>
  </div>
</div>
      <div class="sobre-content">

        <div class="row">
          <br>
          <h1 class="title is-1">Sobre Nós</h1>
          <br>
        </div>
        <div class="row">
          <p>
            A Confraria da Barba é a barbearia da sua época. Focada em excelência, a Confraria conta com tudo que o homem
            moderno precisa. Um ambiente confortável, descontraído e exclusivamente masculino, com cuidados para todos os
            estilos de barba e cabelo, além de serviços como massagem, podologia, estética masculina e dia do noivo. Uma
            barbearia premium, para cuidar do visual, tomar uma cerveja gelada, assistir aos seus esportes favoritos ou
            jogar uma partida de sinuca.

            Seja um confrade. Cadastre-se e receba as novidades, eventos e condições especiais da Confraria da Barba.
          </p>
        </div>
      </div>
      <div class="servico-content">
        <div class="row">
          <h1 class="title is-1">Nossos Serviços</h1>
        </div>
        <div class="row">
          <div class="columns">
            <div class="column is-4">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <h1 class="subtitle is-1">Subtitle 1</h1>
                    <figure class="image is-128x128">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                    Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida
                    at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Cras mattis consectetur purus sit amet fermentum.
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card">
                <h1 class="subtitle is-1">Subtitle 1</h1>
                    <figure class="image is-128x128">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                <div class="card-content">
                  <div class="content">
                    Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida
                    at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Cras mattis consectetur purus sit amet fermentum.
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card">
                <div class="card-content">
                  <h1 class="subtitle is-1">Subtitle 1</h1>
                    <figure class="image is-128x128">
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                  <div class="content">
                    Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida
                    at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Cras mattis consectetur purus sit amet fermentum.
                  </div>
                </div>
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
padding-top: 0%;
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
.card{
  margin-block-end: 30px;
}
</style>