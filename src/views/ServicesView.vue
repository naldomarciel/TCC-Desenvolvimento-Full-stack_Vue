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
            <h2>Cadastro de Serviços</h2>
          </div>
          <!--Migalhas de Pão - Navegalçao Histórica-->
          <nav class="breadcrumb is-right is-small" aria-label="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Cadastros</a></li>
              <li class="is-active"><a href="#" aria-current="page">Serviço</a></li>
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
                    <input class="input is-small" type="text" placeholder="ID" v-model="bId">
                  </div>
                  <div class="field"> <!--Usuario-->
                    <input class="input is-small" type="text" placeholder="Serviço" v-model="bServico">
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
              <table class="table is-hoverable is-fullwidth">
                <thead class="is-fixed">
                  <tr>
                    <th>ID</th>
                    <th>Serviço</th>
                    <th>Tempo Médio</th>
                    <th>Valor</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="servico in dadosPaginados" :key="servico.id">
                    <td>{{ servico.id }}</td>
                    <td>{{ servico.servico }}</td>
                    <td>{{ servico.tempo }}</td>
                    <td>{{ servico.valor }}</td>
                    <td>{{ servico.status}}</td>
                    <td>
                      <button class="button is-warning is-small" @click="ShowModalUpdate(servico.id)">Editar</button>
                      <button class="button is-danger is-small" @click="ShowModalDelete(servico.id)">Deletar</button>
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
              <p class="modal-card-title">Novo Serviço</p>
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
                      <label class="label is-small">Serviço:</label>
                      <input class="input" type="text" placeholder="Descrição do Seviço" v-model="servico">
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Nome do Usuario-->
                    <p class="control is-expanded has-icons-left">
                      <label class="label is-small">Tempo Médio:</label>
                      <input class="input" type="number" placeholder="Tempo Médio em Minutos" v-model="tempo">
                    </p>
                  </div>
                  <div class="field"> <!--Usuario-->
                    <p class="control is-expanded has-icons-left">
                      <label class="label is-small">Preço:</label>
                      <input class="input input-small" type="number" placeholder="R$ 00,00" v-model="valor">
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
                  Deseja realmente Deletar este Serviço?

                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item" @click="deleteService">Deletar</a>
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
              <p class="modal-card-title">Editar Serviço</p>
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
                      <input class="input" type="text" v-model="servico">
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Usuario-->
                    <p class="control is-expanded">
                      <input class="input input-small" type="number" v-model.number="tempo">
                    </p>
                  </div>
                  <div class="field"> <!--Usuario-->
                    <p class="control is-expanded">
                      <input class="input input-small" type="number" v-model.number="valor">
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
              <button class="button is-success" @click="updateService">Salvar</button>
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
      .get("https://barberapi-db08894f5bfd.herokuapp.com/api/service", req)
      .then((res) => {
        this.servicos = res.data;
        this.filteredServicos = res.data.filter(service => service.status.match(this.bStatus));
        this.dadosPaginados = this.filteredServicos.slice(0, this.elementosPorPagina);
        console.log(res);
      })
      .catch((err) => {
        var msgErro = err.response.data.err;
        this.error = msgErro;
      });//consulta 

  },

  data() {
    return {
      //consulta de dados do BD//
      servicos: [],
      filteredServicos: [],

      //Variaveis
      id: -1,
      servico: "",
      tempo: "",
      valor: "",
      status: "A",
      error: undefined,
      //ID para exclusão
      deleteServiceId: -1,
      //Campos para Pesquisa
      bId: "",
      bServico: "",
      bValor: "",
      bTempo: "",
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

      newFileName: "Cadastro de Serviços"

    }
  },
  props: {

  },


  methods: {

    mostrarElemento: function () {
      this.showElement = !this.showElement
    },
    totalPaginas() {
      return Math.ceil(this.filteredServicos.length / this.elementosPorPagina)
    },
    getDataPagina(numPagina) {
      this.paginaAtual = numPagina;
      this.dadosPaginados = [];
      var ini = (numPagina * this.elementosPorPagina) - this.elementosPorPagina;
      var fin = (numPagina * this.elementosPorPagina);
      this.dadosPaginados = this.filteredServicos.slice(ini, fin);
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
      this.deleteServiceId = id;
      this.showModalDelete = true;
    },
    ShowModalUpdate(id) {
      console.log("Id do Seviço:" + id);
      this.deleteServiceId = id;
      this.showModalUpdate = true;

      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };//validação da API
      axios
        .get("https://barberapi-db08894f5bfd.herokuapp.com/api/service/" + this.deleteServiceId, req)
        .then(res => {
          console.log(res);
          this.servico = res.data.servico;
          this.tempo = res.data.tempo;
          this.valor = res.data.valor;
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
      this.servico = "";
      this.tempo = "";
      this.valor = ""

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
        .post("https://barberapi-db08894f5bfd.herokuapp.com/api/service", {
          servico: this.servico,
          tempo: this.tempo,
          valor: this.valor,
          status: "A"
        }, req)
        .then(res => {
          // pesquisa
          axios
            .get("https://barberapi-db08894f5bfd.herokuapp.com/api/service", req)
            .then((res) => {
              this.servicos = res.data;
              this.filteredServicos = res.data.filter(service => service.status.match(this.bStatus));
              this.dadosPaginados = this.filteredServicos.slice(0, this.elementosPorPagina);
              console.log(res);
              alert("Cadastrado com Sucesso!")
              this.id = "";
              this.servico = "";
              this.tempo = "";
              this.valor = ""
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
    deleteService() {

      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      axios
        .delete("https://barberapi-db08894f5bfd.herokuapp.com/api/service/" + this.deleteServiceId, req)
        .then(res => {
          console.log(res);
          this.showModalDelete = false;
          // pesquisa
          axios
            .get("https://barberapi-db08894f5bfd.herokuapp.com/api/service", req)
            .then((res) => {
              this.servicos = res.data;
              this.filteredServicos = res.data.filter(service => service.status.match(this.bStatus));
              this.dadosPaginados = this.filteredServicos.slice(0, this.elementosPorPagina);
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
    updateService() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };//validação da API
      axios
        .put("https://barberapi-db08894f5bfd.herokuapp.com/api/service/" + this.deleteServiceId, {
          servico: this.servico,
          valor: this.valor,
          tempo: this.tempo,
          id: this.id,
          status: this.status,
        }, req)
        .then(res => {
          this.showModalUpdate = false;

          // pesquisa
          axios
            .get("https://barberapi-db08894f5bfd.herokuapp.com/api/service", req)
            .then((res) => {
              this.servicos = res.data;
              this.filteredServicos = res.data.filter(service => service.status.match(this.bStatus));
              this.dadosPaginados = this.filteredServicos.slice(0, this.elementosPorPagina);
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
      this.dadosPaginados = this.servicos;
      if (
        this.bId != '' || this.bId != ' ' &&
        this.bService != '' || this.bService != ' ' &&
        this.bStatus != '' || this.bStatus != ' '
      ) {
        this.dadosPaginados = this.servicos.filter(service => service.servico.match(this.bServico) && service.status.match(this.bStatus));

      } else {
        this.dadosPaginados = this.servicos;
      }

    },
    ExportExcel() {
      excelParser().exportDataFromJSON(this.filteredServicos, this.newFileName, "PDF");
    },

  },
  computed: {
    


}
}
</script>

<style scoped></style>