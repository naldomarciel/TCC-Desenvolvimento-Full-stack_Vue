import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientLogin from '../views/cliente/ClienteLogin.vue'
import Login from '../views/LoginView.vue'
import Users from '../views/UsersView.vue'
import Services from '../views/ServicesView.vue'
import Categories from '../views/ProdutoCategoriaView.vue'
import Products from '../views/ProdutosView.vue'
import Orders from '../views/AgendamentosView.vue'
import Clients from '../views/ClientView.vue'
import Supplier from '../views/FornecedorView.vue'
import AgendaHome from '../views/cliente/AgendaHomeVue.vue'
import AdminHome from '../views/AdminView.vue'
import Professionals from '../views/ProfessionalsView.vue'
import Atendimentos from '../views/AtendimentoView.vue'
import axios from 'axios';

function AdminAuth(to, from, next) {
  if (localStorage.getItem('token') != undefined) {
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }
    axios.post("https://barberapi-db08894f5bfd.herokuapp.com/api/validate", {}, req).then(res => {
      console.log(res);
      next()
    }).catch(err => {
      console.log(err)
      next("/login")
    })
  } else {
    next("/login");
  }
}
function ClientAuth(to, from, next) {
  if (localStorage.getItem('token') != undefined) {
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }
    axios.post("https://barberapi-db08894f5bfd.herokuapp.com/api/validate", {}, req).then(res => {
      console.log(res);
      next()
    }).catch(err => {
      console.log(err)
      next("/entrar")
    })
  } else {
    next("/entrar");
  }
}
//ROTAS LIVRES\\
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/agendamento',
    name: 'agendahome',
    component: AgendaHome,
    beforeEnter: ClientAuth
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/entrar',
    name: 'clienteLogin',
    component: ClientLogin
  },
  //ROTAS PROTEGIDAS\\
  {
    path: '/user',
    name: 'user',
    component: Users,
    beforeEnter: AdminAuth
  },
  {
    path: '/admin/service',
    name: 'service',
    component: Services,
    beforeEnter: AdminAuth
  },
  {
    path: '/admin/register',
    name: 'register',
    component: Atendimentos,
    beforeEnter: AdminAuth
  },
  {
    path: '/admin/categories',
    name: 'category',
    component: Categories,
    beforeEnter: AdminAuth
  },
  {
    path: '/admin/products',
    name: 'product',
    component: Products,
    beforeEnter: AdminAuth
  },
  {
    path: '/serviceOrder',
    name: 'serviceOrder',
    component: Orders,
    beforeEnter: AdminAuth
  },
  {
    path: '/admin/client',
    name: 'client',
    component: Clients,
    beforeEnter: AdminAuth
  },
  {
    path: '/admin/supplier',
    name: 'supplier',
    component: Supplier,
    beforeEnter: AdminAuth
  },
  {
    path: '/admin/professional',
    name: 'professional',
    component: Professionals,
    beforeEnter: AdminAuth
  },
  {
    path: '/admin/dashboard',
    name: 'adminHome',
    component: AdminHome,
    beforeEnter: AdminAuth
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
