
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

/* Estilo do conteudo central */
.main-content {
   transition: margin-left 300ms;
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

@media only screen and (max-width: 1124px){
    
    .sidebar {
        left: -100%;
        z-index:30;
    }
    .main-content {
        margin-left: 0;
    }
    header {
        left: 0;
        width: 100%;
    }

    #sidebar-toggle:checked ~ .sidebar {
        left: 0;
    }
    .cards {
        grid-template-columns: repeat(2,1fr);
    }
}
@media only screen and (max-width: 768px){

    .sidebar {
        left: -100%;
    }
    .cards {
        grid-template-columns: 100%;
    }
    .jobs-grid{
        grid-template-columns: 100%;
    }   
    .page-header {
        display: block;
        text-align: right;
    }
    .header-actions{
        margin-top: 1rem;
    }
    .page-actions button:first-child{
        margin-left: 0rem;
    }
}
</style>
    