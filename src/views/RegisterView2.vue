<template>
  <!--Div Principal-->
  <div class="pgAdmin">
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

          <nav class="breadcrumb is-right is-small" aria-label="breadcrumbs">
            <ul>
              <li><a href="#">Bulma</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Components</a></li>
              <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
            </ul>
          </nav>
        </div>
        <div class="card">
          <header class="card-header" id="header-card">
            <p class="card-header-title">
              <span class="icon">
                <i class="las la-filter"></i>
              </span>

              <span>Filtros</span>
            </p>
            <button class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="las la-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
        </div>

        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              <input class="button is-info" type="submit" value="Submit input">
            </p>
            <button class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="las la-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div class="card-content">
            <div class="content">

              <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th><abbr title="Position">Pos</abbr></th>
                    <th>Team</th>
                    <th><abbr title="Played">Pld</abbr></th>
                    <th><abbr title="Won">W</abbr></th>
                    <th><abbr title="Drawn">D</abbr></th>
                    <th><abbr title="Lost">L</abbr></th>
                    <th><abbr title="Goals for">GF</abbr></th>
                    <th><abbr title="Goals against">GA</abbr></th>
                    <th><abbr title="Goal difference">GD</abbr></th>
                    <th><abbr title="Points">Pts</abbr></th>
                    <th>Qualification or relegation</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th><abbr title="Position">Pos</abbr></th>
                    <th>Team</th>
                    <th><abbr title="Played">Pld</abbr></th>
                    <th><abbr title="Won">W</abbr></th>
                    <th><abbr title="Drawn">D</abbr></th>
                    <th><abbr title="Lost">L</abbr></th>
                    <th><abbr title="Goals for">GF</abbr></th>
                    <th><abbr title="Goals against">GA</abbr></th>
                    <th><abbr title="Goal difference">GD</abbr></th>
                    <th><abbr title="Points">Pts</abbr></th>
                    <th>Qualification or relegation</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester
                        City</a> <strong>(C)</strong>
                    </td>
                    <td>38</td>
                    <td>23</td>
                    <td>12</td>
                    <td>3</td>
                    <td>68</td>
                    <td>36</td>
                    <td>+32</td>
                    <td>81</td>
                    <td>Qualification for the <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                        title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
                    <td>38</td>
                    <td>20</td>
                    <td>11</td>
                    <td>7</td>
                    <td>65</td>
                    <td>36</td>
                    <td>+29</td>
                    <td>71</td>
                    <td>Qualification for the <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                        title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td><a href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
                        title="Tottenham Hotspur F.C.">Tottenham Hotspur</a></td>
                    <td>38</td>
                    <td>19</td>
                    <td>13</td>
                    <td>6</td>
                    <td>69</td>
                    <td>35</td>
                    <td>+34</td>
                    <td>70</td>
                    <td>Qualification for the <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
                        title="2016–17 UEFA Champions League">Champions League group stage</a></td>
                  </tr>
                  <tr class="is-selected">
                    <th>4</th>
                    <td><a href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
                        title="Manchester City F.C.">Manchester City</a></td>
                    <td>38</td>
                    <td>19</td>
                    <td>9</td>
                    <td>10</td>
                    <td>71</td>
                    <td>41</td>
                    <td>+30</td>
                    <td>66</td>
                    <td>Qualification for the <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round"
                        title="2016–17 UEFA Champions League">Champions League play-off round</a></td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td><a href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
                        title="Manchester United F.C.">Manchester United</a></td>
                    <td>38</td>
                    <td>19</td>
                    <td>9</td>
                    <td>10</td>
                    <td>49</td>
                    <td>35</td>
                    <td>+14</td>
                    <td>66</td>
                    <td>Qualification for the <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
                        title="2016–17 UEFA Europa League">Europa League group stage</a></td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td><a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="Southampton F.C.">Southampton</a>
                    </td>
                    <td>38</td>
                    <td>18</td>
                    <td>9</td>
                    <td>11</td>
                    <td>59</td>
                    <td>41</td>
                    <td>+18</td>
                    <td>63</td>
                    <td>Qualification for the <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
                        title="2016–17 UEFA Europa League">Europa League group stage</a></td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td><a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">West Ham
                        United</a></td>
                    <td>38</td>
                    <td>16</td>
                    <td>14</td>
                    <td>8</td>
                    <td>65</td>
                    <td>51</td>
                    <td>+14</td>
                    <td>62</td>
                    <td>Qualification for the <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round"
                        title="2016–17 UEFA Europa League">Europa League third qualifying round</a></td>
                  </tr>
                  <tr>
                    <th>8</th>
                    <td><a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">Liverpool</a></td>
                    <td>38</td>
                    <td>16</td>
                    <td>12</td>
                    <td>10</td>
                    <td>63</td>
                    <td>50</td>
                    <td>+13</td>
                    <td>60</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>9</th>
                    <td><a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">Stoke City</a>
                    </td>
                    <td>38</td>
                    <td>14</td>
                    <td>9</td>
                    <td>15</td>
                    <td>41</td>
                    <td>55</td>
                    <td>−14</td>
                    <td>51</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>10</th>
                    <td><a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">Chelsea</a></td>
                    <td>38</td>
                    <td>12</td>
                    <td>14</td>
                    <td>12</td>
                    <td>59</td>
                    <td>53</td>
                    <td>+6</td>
                    <td>50</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>11</th>
                    <td><a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">Everton</a></td>
                    <td>38</td>
                    <td>11</td>
                    <td>14</td>
                    <td>13</td>
                    <td>59</td>
                    <td>55</td>
                    <td>+4</td>
                    <td>47</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>12</th>
                    <td><a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">Swansea
                        City</a></td>
                    <td>38</td>
                    <td>12</td>
                    <td>11</td>
                    <td>15</td>
                    <td>42</td>
                    <td>52</td>
                    <td>−10</td>
                    <td>47</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>13</th>
                    <td><a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">Watford</a></td>
                    <td>38</td>
                    <td>12</td>
                    <td>9</td>
                    <td>17</td>
                    <td>40</td>
                    <td>50</td>
                    <td>−10</td>
                    <td>45</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>14</th>
                    <td><a href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C."
                        title="West Bromwich Albion F.C.">West Bromwich Albion</a></td>
                    <td>38</td>
                    <td>10</td>
                    <td>13</td>
                    <td>15</td>
                    <td>34</td>
                    <td>48</td>
                    <td>−14</td>
                    <td>43</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>15</th>
                    <td><a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C.">Crystal
                        Palace</a></td>
                    <td>38</td>
                    <td>11</td>
                    <td>9</td>
                    <td>18</td>
                    <td>39</td>
                    <td>51</td>
                    <td>−12</td>
                    <td>42</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>16</th>
                    <td><a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth">AFC
                        Bournemouth</a></td>
                    <td>38</td>
                    <td>11</td>
                    <td>9</td>
                    <td>18</td>
                    <td>45</td>
                    <td>67</td>
                    <td>−22</td>
                    <td>42</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>17</th>
                    <td><a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C.">Sunderland</a>
                    </td>
                    <td>38</td>
                    <td>9</td>
                    <td>12</td>
                    <td>17</td>
                    <td>48</td>
                    <td>62</td>
                    <td>−14</td>
                    <td>39</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th>18</th>
                    <td><a href="https://en.wikipedia.org/wiki/Newcastle_United_F.C."
                        title="Newcastle United F.C.">Newcastle United</a> <strong>(R)</strong>
                    </td>
                    <td>38</td>
                    <td>9</td>
                    <td>10</td>
                    <td>19</td>
                    <td>44</td>
                    <td>65</td>
                    <td>−21</td>
                    <td>37</td>
                    <td>Relegation to the <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
                        title="2016–17 Football League Championship">Football League Championship</a></td>
                  </tr>
                  <tr>
                    <th>19</th>
                    <td><a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C.">Norwich
                        City</a> <strong>(R)</strong>
                    </td>
                    <td>38</td>
                    <td>9</td>
                    <td>7</td>
                    <td>22</td>
                    <td>39</td>
                    <td>67</td>
                    <td>−28</td>
                    <td>34</td>
                    <td>Relegation to the <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
                        title="2016–17 Football League Championship">Football League Championship</a></td>
                  </tr>
                  <tr>
                    <th>20</th>
                    <td><a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C.">Aston Villa</a>
                      <strong>(R)</strong>
                    </td>
                    <td>38</td>
                    <td>3</td>
                    <td>8</td>
                    <td>27</td>
                    <td>27</td>
                    <td>76</td>
                    <td>−49</td>
                    <td>17</td>
                    <td>Relegation to the <a
                        href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
                        title="2016–17 Football League Championship">Football League Championship</a></td>
                  </tr>
                </tbody>
              </table>
              <div class="modal">
                <div class="modal-background"></div>
                <div class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete" aria-label="close"></button>
                  </header>
                  <section class="modal-card-body">
                    <!-- Content ... -->
                  </section>
                  <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button">Cancel</button>
                  </footer>
                </div>
              </div>


          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Save</a>
          <a href="#" class="card-footer-item">Edit</a>
          <a href="#" class="card-footer-item">Delete</a>
        </footer>
      </div>
    </main>
  </div>



</div></template>

<script>
// @ is an alias to /src


import NavBar from '@/components/inc/NavBar.vue'
import SideBar from '@/components/inc/SideBar.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    SideBar,

  }
}
</script>
<style>/* Estilo do conteudo central */</style>