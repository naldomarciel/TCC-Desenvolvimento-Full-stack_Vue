<template>
  <div>
    <!--Barras de navegação horizontal e vertical-->
    <NavBar />
    <Side-bar />
    <!--Conteúdo-->
    <div class="main-content">
      <main>
        <div class="page-header">
          <div>
            <h2>Cadastro de Usuários</h2>
          </div>
          <!--Migalhas de Pão - Navegalçao Histórica-->
          <nav class="breadcrumb is-right is-small" aria-label="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Cadastros</a></li>
              <li class="is-active"><a href="#" aria-current="page">Usuário</a></li>
            </ul>
          </nav>
        </div>
        <!--Cabeçalho de Pesquisa -->
        <div class="card" id="card-pesquisa">
          <header class="card-header" id="header-card">
            <p class="card-header-title">
              <span class="icon">
                <i class="las la-filter"></i>
              </span>
              <span>Filtros</span>
            </p>
            <button class="card-header-icon" aria-label="more options" @click="mostrarElemento">
              <span class="icon">
                <i :class="{ 'las la-angle-up': showElement, 'las la-angle-down': !showElement }" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div class="card-content" v-show="showElement">
            <div class="content">

              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Usuario-->
                    <input class="input is-small" type="text" placeholder="ID">
                  </div>
                  <div class="field"> <!--Usuario-->
                    <input class="input is-small" type="text" placeholder="Nome de Usuário" v-model="bNome">
                  </div>
                  <div class="field"> <!--Usuario-->
                    <input class="input is-small" type="email" placeholder="e-mail" v-model="bEmail">
                  </div>
                  <div class="field"> <!--Usuario-->
                    <input class="input is-small" type="text" placeholder="Usuário" v-model="bUsuario">
                  </div>
                  <div class="field"> <!--Usuario-->
                    <div class="select is-small">

                      <select v-model="bStatus">
                        <option selected value="A">Ativo</option>
                        <option value="H">Inativo</option>
                      </select>
                    </div>
                  </div>

                  <button class="button is-info is-small" @click="buscarUser">Pesquisar</button>

                </div>
              </div>

            </div>
          </div>
          <!--Pesquisas-->
        </div>
        <!--Cabeçalho do Formulario/tabela-->
        <div class="card">
          <header class="card-header is-small" id="header-card-form">
            <p class="card-header-title">
              <button class="button is-info is-outlined" @click="ShowModal">Adicionar</button>
              <button class="button is-info is-outlined" @click="ExportExcel">
               <i class="las la-file-excel"> Exportar </i>
             </button>
            </p>
          
          </header>
          <div class="card-content">
            <div class="content">
              <table class="table is-narrow is-hoverable is-fullwidth">
                <thead class="is-fixed">
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="usuario in dadosPaginados" :key="usuario.id">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nome }}</td>
                    <td>{{ usuario.email }}</td>
                    <td>{{ usuario.status }}</td>
                    <td>
                      <button class="button is-warning is-small" @click="ShowModalUpdate(usuario.id)">Editar</button>
                      <button class="button is-danger is-small" @click="ShowModalDelete(usuario.id)">Deletar</button>
                    </td>
                  </tr>
                </tbody>    
              </table>
              <nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
              <a class="pagination-previous is-centered" v-on:click="getPreviusPage()"> <i class="las la-angle-left"></i></a>
              <a class="pagination-next" v-on:click="getNextPage()"><i class="las la-angle-right"></i></a>
              <ul class="pagination-list">
                <li><a v-for="pagina in totalPaginas()" :key=pagina.id v-on:click="getDataPagina(pagina)"
                    class="pagination-link" v-bind:class="isActive(pagina)" aria-label="Goto page 1">{{ pagina }}</a></li>
              </ul>
            </nav>
            </div>
          </div>
          <footer class="card-footer">

          </footer>
        </div>


        <!--MODAL - Cadastro de Usuários-->

        <div :class="{ modal: true, 'is-active': showModal }">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Novo Usuário</p>
              <button class="delete" aria-label="close" @click="HideModal"></button>
            </header>
            <section class="modal-card-body">
              <!-- Content ... -->
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Nome do Usuario-->
                    <div v-if="error != undefined">
                      <div class="notification is-danger">
                        {{ error }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-body">

                  <div class="field"> <!--Nome do Usuario-->
                    <p class="control is-expanded has-icons-left">
                      <input class="input" type="text" placeholder="Nome Completo" v-model="nome">
                      <span class="icon is-small is-left">
                        <i class="las la-user"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Usuario-->
                    <p class="control is-expanded has-icons-left">
                      <input class="input input-small" type="email" placeholder="contato@mail.com" v-model="email">
                      <span class="icon is-small is-left">
                        <i class="las la-envelope"></i>
                      </span>
                    </p>

                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Usuario-->
                    <p class="control is-expanded has-icons-left">
                      <input class="input input-small" type="text" placeholder="Usuário" v-model="usuario">
                      <span class="icon is-small is-left">
                        <i class="las la-user"></i>
                      </span>
                    </p>
                  </div>

                  <div class="field">
                    <p class="control has-icons-left">
                      <input class="input" type="password" placeholder="Senha" v-model="senha">
                      <span class="icon is-small is-left">
                        <i class="las la-lock"></i>
                      </span>
                    </p>
                  </div>


                </div>
              </div>


            </section>
            <footer class="modal-card-foot">
              <button class="button is-success" @click="register">Cadastrar</button>
              <button class="button" @click="HideModal">Cancelar</button>
            </footer>
          </div>
        </div> <!--MODAL - Cadastro de Usuários-->
        <!--MODAL - DELETE-->

        <div :class="{ modal: true, 'is-active': showModalDelete }">
          <div class="modal-background"></div>
          <div class="modal-card">


            <!-- Content ... -->


            <div class="card">
              <header class="card-header">
                <p class="card-header-title is-centered">
                  ATENÇÃO
                </p>

              </header>
              <div class="card-content">
                <div class="content">
                  Deseja realmente Deletar?

                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item" @click="deleteUser">Deletar</a>
                <a href="#" class="card-footer-item" @click="HideModal">Cancelar</a>
              </footer>
            </div>


          </div>
        </div> <!--MODAL - DELTE-->
        <!--MODAL - ALTERAR-->

        <div :class="{ modal: true, 'is-active': showModalUpdate }">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Editar Usuário</p>
              <button class="delete" aria-label="close" @click="HideModal"></button>
            </header>
            <section class="modal-card-body">
              <!-- Content ... -->
              <div class="field is-horizontal">

                <div class="field-body">

                  <div class="field"> <!--Nome do Usuario-->
                    <div v-if="error != undefined">

                      <div class="notification is-danger">
                        {{ error }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Nome do Usuario-->
                    <p class="control is-expanded has-icons-left">
                      <input class="input" type="text" placeholder="Nome Completo" v-model="nome">
                      <span class="icon is-small is-left">
                        <i class="las la-user"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Usuario-->
                    <p class="control is-expanded has-icons-left">
                      <input class="input input-small" type="email" placeholder="contato@mail.com" v-model="email">
                      <span class="icon is-small is-left">
                        <i class="las la-envelope"></i>
                      </span>
                    </p>

                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Usuario-->
                    <p class="control is-expanded has-icons-left">
                      <input class="input input-small" type="text" placeholder="Usuário" v-model="usuario">
                      <span class="icon is-small is-left">
                        <i class="las la-user"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field"> <!--Usuario-->


                    <div class="select">

                      <select v-model="status">
                        <option value="A">Ativo</option>
                        <option value="H">Inativo</option>
                      </select>

                    </div>


                  </div>
                </div>
              </div>


            </section>
            <footer class="modal-card-foot">
              <button class="button is-success" @click="updateUser">Salvar</button>
              <button class="button" @click="HideModal">Cancelar</button>
            </footer>
          </div>
        </div> <!--MODAL - ALTERAR-->
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from '@/components/inc/NavBar.vue'
import SideBar from '@/components/inc/SideBar.vue'
import { excelParser } from "../assets/js/excel-parser";

export default {
  name: 'UsersView',
  components: {
    NavBar,
    SideBar,

  },

  data() {
    return {
      usuarios: [],
      filteredUsuarios: [],
      showModal: false,
      showModalDelete: false,
      showModalUpdate: false,
      showElement: false,
      id: -1,
      nome: "",
      usuario: "",
      email: "",
      senha: "",
      error: undefined,
      deleteUserId: -1,
      bNome: "",
      bUsuario: "",
      bEmail: "",
      bStatus: "",
      /*PAGINAÇÃO*/
      elementosPorPagina: 10,
      dadosPaginados: [],
      paginaAtual: 1,

      newFileName: "Cadastro de Usuarios"
    }
  },
  props: {

  },
  computed: {
    /*
    resultadoBusca: function(){
      if(this.busca =='' || this.busca == ' '){
        return this.usuarios;
      }else{
        console.log(this.busca)
        return this.usuarios.filter(user => user.usuario.match(this.busca));
      }
    }*/
  },

  mounted() {
    this.getDataPagina(1);
  },
  created() {

    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };//Validação da API

    axios
      .get("https://barberapi-db08894f5bfd.herokuapp.com/api/user", req)
      .then((res) => {

        this.usuarios = res.data;
        this.filteredUsuarios = res.data;
        this.dadosPaginados = this.filteredUsuarios.slice(0, this.elementosPorPagina);
      })
      .catch((err) => {
        var msgErro = err.response.data.err;
        this.error = msgErro;
      });//consulta de usuarios


  },

  methods: {

    mostrarElemento: function () {
      this.showElement = !this.showElement
    },
    totalPaginas() {
      return Math.ceil(this.filteredUsuarios.length / this.elementosPorPagina)
    },
    getDataPagina(numPagina) {
      this.paginaAtual = numPagina;
      this.dadosPaginados = [];
      var ini = (numPagina * this.elementosPorPagina) - this.elementosPorPagina;
      var fin = (numPagina * this.elementosPorPagina);
      this.dadosPaginados = this.filteredUsuarios.slice(ini, fin);
    },
    getPreviusPage() {
      if (this.paginaAtual > 1) {
        this.paginaAtual--;
      }
      this.getDataPagina(this.paginaAtual)
    },
    getNextPage() {
      if (this.paginaAtual < this.totalPaginas()) {
        this.paginaAtual++;
      }
      this.getDataPagina(this.paginaAtual)
    },
    isActive(numPagina) {
      return numPagina == this.paginaAtual ? 'is-current' : ''
    },
    ShowModal() {
      this.showModal = true;
    },
    ShowModalDelete(id) {
      console.log("Id do Usuario:" + id);
      this.deleteUserId = id;
      this.showModalDelete = true;
    },
    ShowModalUpdate(id) {
      console.log("Id do Usuario:" + id);
      this.deleteUserId = id;
      this.showModalUpdate = true;

      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };//validação da API
      axios
        .get("https://barberapi-db08894f5bfd.herokuapp.com/api/user/" + this.deleteUserId, req)
        .then(res => {
          console.log(res);
          this.nome = res.data.nome;
          this.email = res.data.email;
          this.id = res.data.id;
          this.usuario = res.data.usuario

        }).catch(err => {
          console.log(err.response);
        });

    },
    HideModal() {
      //fechar moldais
      this.showModal = false;
      this.showModalDelete = false;
      this.showModalUpdate = false;

      //limpar dados

      this.id = "";
      this.nome = "";
      this.usuario = "";
      this.email = ""

    },
    register() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .post("https://barberapi-db08894f5bfd.herokuapp.com/api/user", {
          usuario: this.usuario,
          email: this.email,
          senha: this.senha,
          nome: this.nome,
          status: "A"
        }, req)
        .then(res => {
          // pesquisa
          axios
            .get("https://barberapi-db08894f5bfd.herokuapp.com/api/user", req)
            .then((res) => {
              this.usuarios = res.data;
              this.filteredUsuarios = res.data;
              console.log(res);
            })
            .catch((err) => {
              var msgErro = err.response.data.err;
              this.error = msgErro;
            });
          console.log(res);
        })
        .catch(err => {
          var msgErro = err.response.data.err;
          this.error = msgErro
          console.log(err)
        })

    },
    deleteUser() {

      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .delete("https://barberapi-db08894f5bfd.herokuapp.com/api/user/" + this.deleteUserId, req)
        .then(res => {
          console.log(res);
          this.showModalDelete = false;
          // pesquisa
          axios
            .get("https://barberapi-db08894f5bfd.herokuapp.com/api/user", req)
            .then((res) => {
              this.usuarios = res.data;
              this.filteredUsuarios = res.data;
              console.log(res);
            })
            .catch((err) => {
              var msgErro = err.response.data.err;
              this.error = msgErro;
            });
        })
        .catch(err => {
          console.log(err);
        })
    },//


    updateUser() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };//validação da API
      axios
        .put("https://barberapi-db08894f5bfd.herokuapp.com/api/user/" + this.deleteUserId, {
          usuario: this.usuario,
          email: this.email,
          id: this.id,
          nome: this.nome,
        }, req)
        .then(res => {
          this.showModalUpdate = false;

          // pesquisa
          axios
            .get("https://barberapi-db08894f5bfd.herokuapp.com/api/user", req)
            .then((res) => {
              this.usuarios = res.data;
              this.filteredUsuarios = res.data;
              console.log(res);
            })
            .catch((err) => {
              var msgErro = err.response.data.err;
              this.error = msgErro;
            });
          console.log(res);

        })
        .catch(err => {
          var msgErro = err.response.data.err;
          this.error = msgErro
          console.log(err)
        })

    },
    buscarUser: function () {
      this.filteredUsuarios = this.usuarios;
      if (
        this.bUsuario != '' || this.bUsuario != ' '


      ) {
        this.filteredUsuarios = this.usuarios.filter(user => user.usuario.match(this.bUsuario)
          && user.status.match(this.bStatus)
          && user.nome.match(this.bNome)
          && user.email.match(this.bEmail)

        );

      } else {
        this.filteredUsuarios = this.usuarios;
      }


    },
    ExportExcel() {
      excelParser().exportDataFromJSON(this.filteredUsuarios, this.newFileName, "xls");
    },
  }
};
</script>

<style scoped></style>