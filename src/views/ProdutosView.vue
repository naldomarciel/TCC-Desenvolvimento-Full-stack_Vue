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
            <h2>Cadastro de Produtos</h2>
          </div>
          <!--Migalhas de Pão - Navegalçao Histórica-->
          <nav class="breadcrumb is-right is-small" aria-label="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Cadastros</a></li>
              <li class="is-active"><a href="#" aria-current="page">Produtos</a></li>
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
                    <input class="input is-small" type="text" placeholder="Produto" v-model="bProduto">
                  </div>
                  <div class="field"> <!--Usuario-->             
                    <div class="select is-small">
                      <select v-model="produtoCategoria">
                        <option value="">--- Escolha Categoria ---</option>
                        <option v-for="bd in bdCategoria" :key="bd.id" :value="bd.categoria">{{ bd.categoria }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="field"> <!--Usuario-->
                    <div class="select is-small">
                      <select v-model="bStatus">
                        <option selected value="A">Ativo</option>
                        <option value="H">Inativo</option>
                      </select>
                    </div>
                  </div>
                  <button class="button is-info is-small" @click="buscaAvc">Pesquisar</button>
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
              <table class="table is-hoverable is-narrow is-fullwidth">
                <thead class="is-fixed">
                  <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="bd in dadosPaginados" :key="bd.id">
                    <td>{{ bd.id }}</td>
                    <td>{{ bd.produto }}</td>
                    <td>{{ bd.vlrvenda }}</td>
                    <td>{{ bd.categoria }}</td>
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


        <!--MODAL - Cadastro de Registros-->

        <div :class="{ modal: true, 'is-active': showModal }">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Novo Produto</p>
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
                      <input class="input" type="text" placeholder="Produto" v-model="produto">
                    </p>
                  </div>
                  <div class="field"> <!--Nome do Usuario-->
                    <p class="control is-expanded">
                      <input class="input" type="text" placeholder="Valor" v-model="vlrvenda">
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Usuario-->
                
                    <div class="select">
                      <select v-model="idCategoria">
                        <option value="">--- Escolha Categoria ---</option>
                        <option v-for="bd in bdCategoria" :key="bd.id" :value="bd.id">{{ bd.categoria }}</option>
                      </select>
                    </div>
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
                  Deseja realmente Deletar este Produto?

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
              <p class="modal-card-title">Editar Produto</p>
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
                      <input class="input" type="text" v-model="produto">
                    </p>
                  </div>
                  <div class="field"> <!--Nome do Usuario-->
                    <p class="control is-expanded">
                      <input class="input" type="text" v-model="vlrvenda">
                    </p>
                  </div>
                  <div class="field"> <!--Nome do Usuario-->
                    <p class="control is-expanded">
                      <input class="input" type="text" v-model="categoria_id">
                    </p>
                  </div>
                  <div class="field"> <!--Usuario-->             
                    <div class="select is-small">
                      <select >
                        <option value=""></option>
                        <option v-for="bd in bdCategoria" :key="bd.id" :value="bd.id">{{ bd.categoria}}</option>
                      </select>
                    </div>
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
  name: 'ProductsView',
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
      .get("https://barberapi-db08894f5bfd.herokuapp.com/api/product", req)
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
    axios
      .get("https://barberapi-db08894f5bfd.herokuapp.com/api/category", req)
      .then((res) => {

        this.bdCategoria = res.data.filter(bd => bd.status.match(this.status));

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
      bd: [],
      filteredBd: [],
      bdCategoria: [],

      //Variaveis
      id: -1,
      produto: "",
      vlrvenda: "",
      categoria: "",
      status: "A",
      categoria_id: "",
      error: undefined,
      idCategoria: "",
      produtoCategoria: "",
      //ID para exclusão
      deleteItemId: -1,
      //Campos para Pesquisa
      bProduto: "",
      bCategoria: "",
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
      newFileName: "Cadastro de Produtos"
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
      console.log("Id do Item:" + id);
      this.deleteItemId = id;
      this.showModalDelete = true;
    },
    ShowModalUpdate(id) {
      console.log("Id do Item:" + id);
      this.deleteItemId = id;
      this.showModalUpdate = true;

      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };//validação da API
      axios
        .get("https://barberapi-db08894f5bfd.herokuapp.com/api/product/" + this.deleteItemId, req)
        .then(res => {
          console.log(res);
          this.produto = res.data.produto;
          this.vlrvenda = res.data.vlrvenda;
          this.categoria = res.data.categoria;
          this.categoria_id = res.data.categoria_id;
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
      this.produto = "";
      this.vlrvenda = "";
      this.categoria = ""

    },
    //===============================CRUD===============================//
    //inclusão
    register() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      axios
        .post("https://barberapi-db08894f5bfd.herokuapp.com/api/product", {
          produto: this.produto,
          vlrvenda: this.vlrvenda,
          categoria_id: this.idCategoria,
          status: "A"
        }, req)
        .then(res => {
          // pesquisa
          axios
            .get("https://barberapi-db08894f5bfd.herokuapp.com/api/product", req)
            .then((res) => {
              this.bd = res.data;
              this.filteredBd = res.data.filter(bd => bd.status.match(this.bStatus));
              this.dadosPaginados = this.filteredBd.slice(0, this.elementosPorPagina);
              console.log(res);
              alert("Cadastrado com Sucesso!")
              this.id = "";
              this.produto = "";
              this.vlrvenda = "";
              this.categoria_id= "";
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
        .delete("https://barberapi-db08894f5bfd.herokuapp.com/api/product/" + this.deleteItemId, req)
        .then(res => {
          console.log(res);
          this.showModalDelete = false;
          // pesquisa
          axios
            .get("https://barberapi-db08894f5bfd.herokuapp.com/api/product", req)
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
        .put("https://barberapi-db08894f5bfd.herokuapp.com/api/product/" + this.deleteItemId, {

          produto: this.produto,
          vlrvenda: this.vlrvenda,
          categoria_id: this.categoria_id,
         
          id: this.id,
          status: this.status,
        }, req)
        .then(res => {
          this.showModalUpdate = false;

          // pesquisa
          axios
            .get("https://barberapi-db08894f5bfd.herokuapp.com/api/product", req)
            .then((res) => {
              this.bd = res.data;
              this.filteredBd = res.data.filter(bd => bd.status.match(this.bStatus));
              this.dadosPaginados = this.filteredBd.slice(0, this.elementosPorPagina);
              console.log(res);
              alert("Atualizado com Sucesso!")
              this.id = "";
              this.produto = "";
              this.vlrvenda = "";
              this.categoria_id= "";
            });
          console.log(res);

        })
        .catch(err => {
          var msgErro = err.response.data.err;
          this.error = msgErro
          console.log(err)
        })

    },

    buscaAvc: function () {
      this.dadosPaginados = this.bd;
      if (
        this.bProduto != '' || this.bproduto != ' ' &&
        this.produtoCategoria != '' || this.produtoCategoria != ' ' &&
        this.bStatus != '' || this.bStatus != ' '
      ) {
        this.dadosPaginados = this.bd.filter(bd => bd.produto.match(this.bProduto) && bd.categoria.match(this.produtoCategoria) && bd.status.match(this.bStatus));

      } else {
        this.dadosPaginados = this.bd;
      }

      console.log(this.dadosPaginados)
    },
    ExportExcel() {
      excelParser().exportDataFromJSON(this.filteredBd, this.newFileName, "xls");
    },

  }
};
</script>

<style scoped></style>