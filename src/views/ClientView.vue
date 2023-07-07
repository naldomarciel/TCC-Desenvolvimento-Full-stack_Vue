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
            <h2>Cadastro de Clientes</h2>
          </div>
          <!--Migalhas de Pão - Navegalçao Histórica-->
          <nav class="breadcrumb is-right is-small" aria-label="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Cadastros</a></li>
              <li class="is-active"><a href="#" aria-current="page">Cliente</a></li>
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
                    <input class="input is-small" type="text" placeholder="Cliente" v-model="bCliente">
                  </div>
                  <div class="field"> <!--Usuario-->
                    <input class="input is-small" type="e-mail" placeholder="e-mail" v-model="bEmail">
                  </div>
                  <div class="field"> <!--Usuario-->
                    <div class="select is-small">
                      <select v-model="bStatus">
                        <option selected value="A">Ativo</option>
                        <option value="H">Inativo</option>
                      </select>
                    </div>
                  </div>
                  <button class="button is-info is-small" @click="buscarService">Pesquisar</button>
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
              <button class="button is-info is-outlined" @click="ShowModal">
                <i class="las la-plus-circle"> Adicionar </i> </button>
              <button class="button is-info is-outlined" @click="ExportExcel">
                <i class="las la-file-excel"> Exportar </i>
              </button>
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <table class="table is-hoverable is-narrow  is-fullwidth">
                <thead class="is-fixed">
                  <tr>
                    <th>Id</th>
                    <th>Cliente</th>
                    <th>Celular</th>
                    <th>E-mail</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="bd in dadosPaginados" :key="bd.id">
                    <td>{{ bd.id }}</td>
                    <td>{{ bd.cliente }}</td>
                    <td>{{ bd.celular }}</td>
                    <td>{{ bd.email }}</td>
                    <td>{{ bd.status }}</td>
                    <td>
                      <button class="button is-warning is-small" @click="ShowModalUpdate(bd.id)">Editar</button>
                      <button class="button is-danger is-small" @click="ShowModalDelete(bd.id)">Deletar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
                <a class="pagination-previous is-centered" v-on:click="getPreviusPage()"> <i
                    class="las la-angle-left"></i></a>
                <a class="pagination-next" v-on:click="getNextPage()"><i class="las la-angle-right"></i></a>
                <ul class="pagination-list">
                  <li><a v-for="pagina in totalPaginas()" :key=pagina.id v-on:click="getDataPagina(pagina)"
                      class="pagination-link" v-bind:class="isActive(pagina)" aria-label="Goto page 1">{{ pagina }}</a>
                  </li>
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
              <p class="modal-card-title">Novo Cliente</p>
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
                    <p class="control is-expanded">
                      <label class="label is-small">Cliente:</label>
                      <input class="input" type="text" placeholder="Descrição do Cliente" v-model="cliente">
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Nome do Usuario-->
                    <p class="control is-expanded">
                      <label class="label is-small">E-Mail:</label>
                      <input class="input" type="text" placeholder="contato@mail" v-model="email">
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Usuario-->
                    <p class="control is-expanded">
                      <label class="label is-small">Celular:</label>
                      <input class="input input-small" type="text" placeholder="(##) ####-####" v-model="celular">
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
                  Deseja realmente Deletar este Registro?
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item" @click="deleteItem">Deletar</a>
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
              <p class="modal-card-title">Editar Cliente</p>
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
                    <p class="control is-expanded">
                      <label class="label is-small">Cliente:</label>
                      <input class="input" type="text" v-model="cliente">
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Usuario-->
                    <p class="control is-expanded">
                      <label class="label is-small">E-mail:</label>
                      <input class="input input-small" type="email" v-model="email">
                    </p>
                  </div>
                  <div class="field"> <!--Usuario-->
                    <p class="control is-expanded">
                      <label class="label is-small">Celular:</label>
                      <input class="input input-small" type="text" v-model="celular">
                    </p>
                  </div>
                  <div class="field"> <!--Usuario-->
                    <label class="label is-small">Status:</label>
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
              <button class="button is-success" @click="updateItem">Salvar</button>
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
  name: 'ClientsView',
  components: {
    NavBar,
    SideBar,
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
    // PESQUISA NO BANCO DE DADOS//
    axios
      .get("https://barberapi-db08894f5bfd.herokuapp.com/api/client", req)
      .then((res) => {
        this.bd = res.data;
        this.filteredBd = res.data.filter(bd => bd.status.match(this.bStatus));
        this.dadosPaginados = this.filteredBd.slice(0, this.elementosPorPagina);
        console.log(res);
      })
      .catch((err) => {
        var msgErro = err.response.data.err;
        this.error = msgErro;
      });//consulta de usuarios


  },
  data() {
    return {
      //consulta de dados do BD//
      bd: [],
      filteredBd: [],

      //Variaveis
      id: -1,
      cliente: "",
      celular: "",
      email: "",
      status: "A",
      tipo: "PF",
      error: undefined,
      //ID para exclusão
      deleteItemId: -1,
      //Campos para Pesquisa
      bCliente: "",
      bCelular: "",
      bEmail: "",
      bStatus: "A",
      //Controle de Elementos HTML
      showModal: false,
      showModalDelete: false,
      showModalUpdate: false,
      showElement: false,
      /*PAGINAÇÃO*/
      elementosPorPagina: 10,
      dadosPaginados: [],
      paginaAtual: 1,
     /*EXPORTAÇÃO*/
      newFileName:"Cadastro de Clientes"
    }
  },
  props: {

  },
  computed: {

  },

  methods: {

    mostrarElemento: function () {
      this.showElement = !this.showElement
    },
    totalPaginas() {
      return Math.ceil(this.filteredBd.length / this.elementosPorPagina)
    },
    getDataPagina(numPagina) {
      this.paginaAtual = numPagina;
      this.dadosPaginados = [];
      var ini = (numPagina * this.elementosPorPagina) - this.elementosPorPagina;
      var fin = (numPagina * this.elementosPorPagina);
      this.dadosPaginados = this.filteredBd.slice(ini, fin);
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
      console.log("Id do Serviço:" + id);
      this.deleteItemId = id;
      this.showModalDelete = true;
    },
    ShowModalUpdate(id) {
      console.log("Id do Seviço:" + id);
      this.deleteItemId = id;
      this.showModalUpdate = true;

      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };//validação da API
      axios
        .get("https://barberapi-db08894f5bfd.herokuapp.com/api/client/" + this.deleteItemId, req)
        .then(res => {
          console.log(res);
          this.cliente = res.data.cliente;
          this.celular = res.data.celular;
          this.email = res.data.email;
          this.id = res.data.id;
          this.status = res.data.status

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
      this.cliente = "";
      this.celular = "";
      this.email = ""

    },
    //===================CRUD===============================//
    //inclusão
    register() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .post("https://barberapi-db08894f5bfd.herokuapp.com/api/client", {
          cliente: this.cliente,
          celular: this.celular,
          email: this.email,
          status: "A",
          tipo: "PF"
        }, req)
        .then(res => {
          // pesquisa
          axios
            .get("https://barberapi-db08894f5bfd.herokuapp.com/api/client", req)
            .then((res) => {
              this.bd = res.data;
              this.filteredBd = res.data.filter(bd => bd.status.match(this.bStatus));
              this.dadosPaginados = this.filteredBd.slice(0, this.elementosPorPagina);
              console.log(res);
              alert("Cadastrado com Sucesso!")
              this.id = "";
              this.cliente = "";
              this.celular = "";
              this.email = ""
            })
          console.log(res);
        })
        .catch(err => {
          var msgErro = err.response.data.err;
          this.error = msgErro
          console.log(err)
        })

    },
    //Exclusão
    deleteItem() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .delete("https://barberapi-db08894f5bfd.herokuapp.com/api/client/" + this.deleteItemId, req)
        .then(res => {
          console.log(res);
          this.showModalDelete = false;
          // pesquisa
          axios
            .get("https://barberapi-db08894f5bfd.herokuapp.com/api/client", req)
            .then((res) => {
              this.bd = res.data;
              this.filteredBd = res.data.filter(bd => bd.status.match(this.bStatus));
              this.dadosPaginados = this.filteredBd.slice(0, this.elementosPorPagina);
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

    //Edição
    updateItem() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };//validação da API
      axios
        .put("https://barberapi-db08894f5bfd.herokuapp.com/api/client/" + this.deleteItemId, {
          cliente: this.cliente,
          celular: this.celular,
          email: this.email,
          id: this.id,
          status: this.status,
        }, req)
        .then(res => {
          this.showModalUpdate = false;

          // pesquisa
          axios
            .get("https://barberapi-db08894f5bfd.herokuapp.com/api/client", req)
            .then((res) => {
              this.bd = res.data;
              this.filteredBd = res.data.filter(bd => bd.status.match(this.bStatus));
              this.dadosPaginados = this.filteredBd.slice(0, this.elementosPorPagina);
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

    buscarService: function () {
      this.dadosPaginados = this.bd;
      if (
        this.bCliente != '' || this.bCliente != ' ' &&
        this.bEmail != '' || this.bEmail != ' ' &&
        this.bStatus != '' || this.bStatus != ' '
      ) {
        this.dadosPaginados = this.bd.filter(client => client.cliente.match(this.bCliente) && client.email.match(this.bEmail) && client.status.match(this.bStatus));

      } else {
        this.dadosPaginados = this.bd;
      }
    },
    ExportExcel() {
      excelParser().exportDataFromJSON(this.filteredBd, this.newFileName, "xls");
    },
  }
};
</script>

<style scoped></style>