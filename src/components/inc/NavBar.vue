
<template>
    <input type="checkbox" id="sidebar-toggle">
    <header class="header-nav">
        <div class="menu-toggle">
            <label for="sidebar-toggle">
                <span class="las la-bars"></span>
            </label>

        </div>

        <div class="header-icons">
            <span class="las la-search"></span>
            <span class="las la-bookmark"></span>
            <span class="las la-sms"></span>
        </div>
    </header>
</template>

<style>
* {

    margin: 0;
    padding: 0;
}

/*Estilo da barra de Navegação Horizonatal - navbar */

.header-nav {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #efefef;
    padding: 1rem 1.5rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 20;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    transition: left 300ms;
}

#sidebar-toggle:checked~.header-nav {
    margin-left: 280px;
    width: calc(100% - 280px);
}

/* Estilo do botão "menu" */
.menu-toggle label {
    height: 60px;
    width: 60px;
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    border-radius: 50%;
}

.menu-toggle label:hover {
    background: blue
}

/* Estilo dos Ícones da NavBar */
.header-icons span {
    display: inline-block;
    margin-left: .7rem;
    font-size: 1.4rem;
}

/* ESTILO DO CONTEUDO CENTRAL */
.main-content {
      transition: margin-left 300ms;
      margin-top: 60px;
      overflow: hidden;
      width: 100%;
}
#sidebar-toggle:checked~ .main-content{
    margin-left: 280px;
    width: calc(100% - 280px);
}
main {
    padding: 1.5rem;
    background: #f1f5f9;
    min-height: calc(100vh - 70px);
   
}
.page-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 40px;
    
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
#header-card{
    background: #5850ec;
    color: #fff;
    height: 40px;
}
.card-header-title span{
color: #fff;
}

#card-pesquisa{
    margin-block-end: 5px;
}
</style>