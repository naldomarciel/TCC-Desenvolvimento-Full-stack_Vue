<template>
    <div class="sidebar">
        <div class="sidebar-brand">
            <div class="brand-flex">
                <img src="" width="40px" alt="">

                <div class="brand-icons">
                    <span class="las la-bell"></span>
                    <span class="las la-user-circle"></span>
                </div>
            </div>
        </div>

        <div class="sidebar-main">
            <div class="sidebar-menu">
                <div class="menu">

                    <div class="menu-head">
                        <span>Menu</span>
                    </div>

                    <div class="item"><a href="/admin/dashboard"><i class="las la-desktop"></i>Admin</a></div>
                    <div class="item">
                        <a class="sub-btn" @click="mostrarElementoS2"><i class="las la-cogs"></i>Operações
                            <i
                                :class="{ 'las la-angle-up dropdown': showElementS2, 'las la-angle-down dropdown': !showElementS2 }"></i>
                        </a>
                        <div class="sub-menu" v-show="showElementS2">

                            <a href="/serviceOrder" class="sub-item">
                                <i class="las la-circle"></i>
                                Agendamentos </a>
                            <a href="/admin/register" class="sub-item">
                                <i class="las la-circle"></i>
                                Atendimentos </a>
                            <a href="/admin/service" class="sub-item">
                                <i class="las la-circle"></i>
                                Vendas </a>

                        </div>
                    </div>
                    <div class="item">
                        <a class="sub-btn" @click="mostrarElementoS3"><i class="las la-file-invoice-dollar"></i>Financeiro
                            <i
                                :class="{ 'las la-angle-up dropdown': showElementS3, 'las la-angle-down dropdown': !showElementS3 }"></i>
                        </a>
                        <div class="sub-menu" v-show="showElementS3">
                            <a href="/service" class="sub-item">
                                <i class="las la-circle"></i>
                                Contas a Receber </a>
                            <a href="/service" class="sub-item">
                                <i class="las la-circle"></i>
                                Contas a Pagar </a>

                        </div>
                    </div>
                    <div class="item">
                        <a class="sub-btn" @click="mostrarElemento"><i class="las la-archive"></i>Cadastros Básicos
                            <i
                                :class="{ 'las la-angle-up dropdown': showElement, 'las la-angle-down dropdown': !showElement }"></i>
                        </a>
                        <div class="sub-menu" v-show="showElement">

                            <a href="/admin/service" class="sub-item">
                                <i class="las la-circle"></i>
                                Serviços </a>
                            <a href="/admin/products" class="sub-item">
                                <i class="las la-circle"></i>
                                Produtos </a>
                            <a href="/admin/categories" class="sub-item">
                                <i class="las la-circle"></i>
                                Categorias</a>
                            <a href="/admin/client" class="sub-item">
                                <i class="las la-circle"></i>
                                Clientes</a>
                            <a href="/admin/supplier" class="sub-item">
                                <i class="las la-circle"></i>
                                Fornecedores</a>
                            <a href="/admin/professional" class="sub-item">
                                <i class="las la-circle"></i>
                                Profissionais</a>
                        </div>
                    </div>
                    <div class="menu-head">
                        <span>Configurações</span>
                    </div>

                    <div class="item">
                        <a class="sub-btn" @click="mostrarElementoS4"><i class="las la-user-lock"></i>Controle de Acesso
                            <i
                                :class="{ 'las la-angle-up dropdown': showElementS4, 'las la-angle-down dropdown': !showElementS4 }"></i>
                        </a>
                        <div class="sub-menu" v-show="showElementS4">

                            <a href="/user" class="sub-item">
                                <i class="las la-user"></i>
                                Usuários </a>
                            <a href="/products" class="sub-item">
                                <i class="las la-circle"></i>
                                Produtos </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div class="sidebar-footer">
            <div class="footer-icons">
                <a href="/login"><i class="las la-sign-out-alt"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            showElement: false,
            showElementS2: false,
            showElementS3: false,
            showElementS4: false,
            showElementS5: false,
        }
    },

    methods: {
        mostrarElemento: function () {
            this.showElement = !this.showElement
        },
        mostrarElementoS2: function () {
            this.showElementS2 = !this.showElementS2
        },
        mostrarElementoS3: function () {
            this.showElementS3 = !this.showElementS3
        },
        mostrarElementoS4: function () {
            this.showElementS4 = !this.showElementS4
        },
        mostrarElementoS5: function () {
            this.showElementS5 = !this.showElementS5

        }
    }
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

body {
    width: 100%;
}

#sidebar-toggle {
    display: none;
}

#sidebar-toggle:checked~.body-label {
    position: fixed;
    height: 100%;
    width: calc(100% - 280px);
    z-index: 30;
    right: 0;
    top: 0;
    background: red;
}

#sidebar-toggle:checked~.sidebar {
    display: block;
    width: 280px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: var(--color-main);
    color: #fff;
    z-index: 20;
    transition: left 300ms;
}


#sidebar-toggle:checked~.main-content {
    margin-left: 280px;
}

/*Estilo geral da barra lateral */
.sidebar {
    display: none;
}

/*Estilo do cabeçalho */
.sidebar-brand {
    height: 60px;
    background-color: blue;
}

.brand-flex {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand-icons span {
    font-size: 1.5rem;
    margin-left: .5rem;
}

/*Estilo do menu central */
.sidebar-main {
    height: calc(100% - 100px);
    overflow: auto;
    text-align: left;
}

.menu-head {
    line-height: 50px;
    padding: 5px 30px;
    color: #8da2fb;
    font-size: 16px;
}

.menu .item {
    position: relative;
    cursor: pointer;
    line-height: 40px;
}

.menu .item a {
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    display: block;
    padding: 5px 30px;

}

.menu .item a:hover {
    background: rgba(255, 255, 255, 0.15);
    transition: 0.3s ease;
}

.menu .item i {
    margin-right: 15px;

}

.menu .item a .dropdown {
    position: absolute;
    right: 0;
    margin: 10px;
    transition: 0.3s ease;
}

.menu .item a .down {
    position: absolute;
    right: 0;
    margin: 10px;
    transition: 0.3s ease;
}

.menu .item .sub-menu {
    background: rgba(255, 255, 255, 0.1);

}

.sub-menu a {
    line-height: 30px;
}

.menu .item .sub-menu a {
    padding-left: 40px;
    color: #8aa4af;
}

.menu .item .sub-menu a:hover {
    color: #fff;
}

/*Estilo do Footer */
.sidebar-footer {
    background: rgba(255, 255, 255, 0.05);
    height: 40px;

}

.footer-icons {
    margin-top: 2px;
    font-size: 1.5rem;
    margin-left: .5rem;
    padding-left: 70%;

}
</style>
    