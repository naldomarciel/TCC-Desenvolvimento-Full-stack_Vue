<template>
    <div class="main-content">
        <main>
            <div class="page-header">
                <div>
                    <h1>Analytics Dashboard</h1>
                    <small>Monitor Key metrics. Check reporting</small>
                </div>
                <div class="header-actions">
                    <button>
                        <span class="las la-file-export"></span>
                        Export
                    </button>
                    <button>
                        <span class="las la-tools"></span>
                        Settings
                    </button>
                </div>
            </div>
            <div class="cards">
                <div class="card-single">
                    <div class="card-flex">
                        <div class="card-info">
                            <div class="card-head">
                                <span>Purchases</span>
                                <small>Clientes Agendados</small>
                            </div>
                            <h2>{{ Math.ceil(bdAgendamentos.length) }}</h2>
                            <small>2% less purchasse</small>
                        </div>
                        <div class="card-chart sucess">
                            <span class="las la-chart-line"></span>
                        </div>
                    </div>
                </div>
                <div class="card-single">
                    <div class="card-flex">
                        <div class="card-info">
                            <div class="card-head">
                                <span>Visitantes</span>
                                <small>Numero de Visitantes</small>
                            </div>
                            <h2>17,663</h2>
                            <small>2% less purchasse</small>
                        </div>
                        <div class="card-chart danger">
                            <span class="las la-chart-line"></span>
                        </div>
                    </div>
                </div>
                <div class="card-single">
                    <div class="card-flex">
                        <div class="card-info">
                            <div class="card-head">
                                <span>Refunds</span>
                                <small>Number of Purchases</small>
                            </div>
                            <h2>17,663</h2>
                            <small>2% less purchasse</small>
                        </div>
                        <div class="card-chart yellow">
                            <span class="las la-chart-line"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="jobs-grid">
                <div class="analytics-card">
                    <div class="analytics-head">
                        <h2>Actions Needed</h2>
                        <span class="las la-ellipsis-h"></span>
                    </div>
                    <div class="analytics-chart">
                        <div class="chart-circle">
                            <h1>74%</h1>
                        </div>
                        <div class="analytics-note">
                            <small>Note: Current sprint requires etc</small>
                        </div>
                    </div>
                    <div class="analytics-btn">
                        <button>
                            Generate Report
                        </button>
                    </div>
                </div>
             
            </div>
        </main>
    </div>
    <!--<label for="sidebar-toggle" class="body-label"></label>-->
</template>
<script>
// @ is an alias to /src

import axios from "axios";

export default {
    name: 'HomeView',
    components: {
    },
    data() {
        return {
            bdAgendamentos: [],
            bdAtendimentos: [],
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

        }
    },
    created() {

        var req = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        };//Validação da API

        axios
            .get("http://localhost:8686/api/appointmentDash", req)
            .then((res) => {
               
                this.bdAgendamentos = res.data

                console.log()
            })
            .catch((err) => {
                var msgErro = err.response.data.err;
                this.error = msgErro;
            });//consulta de usuarios


    },

}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

:root {

    --color-main: #1a202e
}

* {

    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.main-content {

    transition: margin-left 300ms;
}

#sidebar-toggle:checked~.main-content {
    margin-left: 280px;
}

main {
    padding: 1.5rem;
    background: #f1f5f9;
    min-height: calc(100vh - 70px);
}

.page-header {
    display: flex;
    justify-content: space-between;

}

.header-actions button {
    outline: none;
    color: #fff;
    background: #5850ec;
    border: none;
    padding: .6rem 1rem;
    margin-left: 1rem;
    border-radius: 3px;
    font-weight: 600;
}

.header-actions button:hover {
    outline: none;
    color: #333;
    background: transparent;
    border: 1px solid #333;
    padding: .6rem 1rem;
    margin-left: 1rem;
    border-radius: 3px;
    font-weight: 600;
}

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    margin-top: 1rem;
}

.card-single {
    background: #fff;
    padding: 2rem;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.card-flex {
    display: grid;
    grid-template-columns: 70% auto;
    align-items: center;
}

.card-head span {
    display: block;
    text-transform: uppercase;
    color: #555;
    font-size: .9rem;
}

.card-head small {
    font-weight: 600;
    color: #555;
}

.card-info h2 {
    font-size: 2.2rem;
    color: #333;

}

.card-chart span {
    font-size: 5rem;

}

.card-chart.sucess span {
    color: seagreen;
}

.card-chart.danger span {
    color: tomato;
}

.card-chart.yellow span {
    color: orangered;
}

.jobs-grid {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: auto 66%;
    grid-gap: 1.5rem;
}

.analytics-card {
    background: #fff;
    padding: 1.5rem;
}

.analytics-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
}

.analytics-head span {
    font-size: 1.5rem;
}

.chart-circle {
    height: 150px;
    width: 150px;
    border-left: 10px solid transparent;
    border-right: 10px solid #5850ec;
    border-bottom: 10px solid #5850ec;
    border-top: 10px solid #5850ec;
    display: grid;
    place-items: center;
    margin: auto;
    border-radius: 50%;
}

.analytics-card button {
    display: block;
    padding: .6rem 1rem;
    width: 100%;
    height: 45%;
    background: #5850ec;
    color: #fff;
    border: 1px solid #5850ec;
    border-radius: 3%;
}

.jobs h2 small {
    color: #5850ec;
    font-weight: 600;
    display: inline-block;
    margin-left: 1rem;
    font-size: .9rem;
}

.table-responsive {
    overflow: hidden;
}

@media only screen and (max-width: 1124px) {

    .sidebar {
        left: -100%;
        z-index: 30;
    }

    .main-content {
        margin-left: 0;
    }

    header {
        left: 0;
        width: 100%;
    }

    #sidebar-toggle:checked~.sidebar {
        left: 0;
    }

    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width: 768px) {

    .sidebar {
        left: -100%;
    }

    .cards {
        grid-template-columns: 100%;
    }

    .jobs-grid {
        grid-template-columns: 100%;
    }

    .page-header {
        display: block;
        text-align: right;
    }

    .header-actions {
        margin-top: 1rem;
    }

    .page-actions button:first-child {
        margin-left: 0rem;
    }
}</style>
    