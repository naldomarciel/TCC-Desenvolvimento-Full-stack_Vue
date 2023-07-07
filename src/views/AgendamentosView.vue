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
            <h2>Agendamento</h2>
          </div>
          <!--Migalhas de Pão - Navegalçao Histórica-->
          <nav class="breadcrumb is-right is-small" aria-label="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Operações</a></li>
              <li class="is-active"><a href="#" aria-current="page">Agenda</a></li>
            </ul>
          </nav>
        </div>
        <!--Cabeçalho do onteudo principal da pagina -->
        <div class="card">
          <header class="card-header is-small" id="header-card-form">
            <p class="card-header-title">
              <button class="button is-info is-outlined" @click="ShowModal"><i class="las la-plus-circle"> Adicionar </i>
              </button>
            </p>
          </header>
          <!--Conteudo principal da pagina -->
          <div class="calendar">
            <!--<button @click="toggleWeekends">toggle weekends</button>-->
            <FullCalendar :options="calendarOptions" />
          </div>
        </div>

        <!--MODAL -  Nova Agenda -->

        <div :class="{ modal: true, 'is-active': showModal }">
          <div class="modal-background"></div>
          <div class="modal-card ">
            <header class="modal-card-head">
              <p class="modal-card-title">Agendar</p>
              <button class="delete" aria-label="close" @click="HideModal"></button>
            </header>
            <section class="modal-card-body">
              <!-- Content ... -->
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Nome do Usuario-->
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Nome do Usuario-->
                    <label class="label is-small">Data:</label>
                    <input class="input is-small" type="date" placeholder="Data" v-model="dataSelecionada">
                  </div>
                  <div class="field"> <!--Nome do Usuario-->
                    <label class="label is-small">Hora</label>
                    <input class="input is-small" type="time" v-model="hora">
                  </div>
                  <div class="field"> <!--Usuario-->
                    <label class="label is-small">Serviço</label>
                    <div class="select is-small">
                      <select v-model="servico_id">
                        <option value="">--- Escolha um Serviço ---</option>
                        <option v-for="bd in bdService" :key="bd.id" :value="bd.id">{{ bd.servico }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field"> <!--Usuario-->
                    <label class="label is-small">Profisional:</label>
                    <div class="select is-small">
                      <select v-model="profissional_id">
                        <option value="">--- Escolha um Profissional ---</option>
                        <option v-for="bd in bdProfessional" :key="bd.id" :value="bd.id">{{ bd.profissional }}</option>
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

      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import NavBar from '@/components/inc/NavBar.vue'
import SideBar from '@/components/inc/SideBar.vue'

var moment = require('moment')

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    NavBar,
    SideBar,
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
        this.bdService = res.data.filter(bd => bd.status.match(this.bStatus));
        console.log(res);
      })
      .catch((err) => {
        var msgErro = err.response.data.err;
        this.error = msgErro;
      });//consulta
    axios
      .get("https://barberapi-db08894f5bfd.herokuapp.com/api/professional", req)
      .then((res) => {
        this.bdProfessional = res.data.filter(bd => bd.status.match(this.bStatus));
        console.log(res);
      })
      .catch((err) => {
        var msgErro = err.response.data.err;
        this.error = msgErro;
      });//

  },
  data() {

    return {
      moment:moment,
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        weekends: true, // initial value,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        dateClick: this.handleDateClick,

        unselect: this.handleSelect,
        eventClick: function (info) {
          alert(
            info.event.id + " - " +
            info.event.title)
        },

        locale: 'pt-br',
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'// user can switch between the two
        },

        events:
          "https://barberapi-db08894f5bfd.herokuapp.com/api/appointment"

      },

      dados: [],
      bdService: [],
      bdProfessional: [],
      filteredUsuarios: [],
      showModal: false,
      showModalDelete: false,
      showModalUpdate: false,
      showElement: false,
      dataSelecionada: "",
      horaSelecionada: "",

      //Variáveis de campos para input
      id: -1,
      cliente_id: "",
      profissional_id: "",
      servico_id: "",
      data: "",
      hora: "",
      horafim: "",
      situacao: "",



    }
  },
  methods: {
    handleDateClick(e) {
      this.dataSelecionada = e.dateStr
         this.showModal = true;
      console.log(e);
    },
    handleSelect(e) {
      console.log(e);
    },
    toggleWeekends: function () {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    },

    //APRESENTAÇÃO DE MODAL//
    HideModal() {
      //fechar moldais
      this.showModal = false;
      this.showModalDelete = false;
      this.showModalUpdate = false;
      //limpar dados
    },
    ShowModal() {
      this.showModal = true;
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
        .post("https://barberapi-db08894f5bfd.herokuapp.com/api/appointment", {
          cliente_id: 4,
          profissional_id:this.profissional_id,
          servico_id: this.servico_id,
          data: this.dataSelecionada,
          hora: this.hora,
          horafim: moment(this.hora,'HH:mm:ss').add(30,'minutes').format('HH:mm:ss'),
          situacao: "A"
    
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
  }
}
</script>

