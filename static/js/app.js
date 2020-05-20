Vue.component("app-header", {
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a class="navbar-brand" href="#">Lab 7</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
          <a class="nav-link" href=""
            >Explore <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""
            >My Profile <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""
            >Logout <span class="sr-only">(current)</span></a
          >
        </li>
        </ul>
      </div>
    </nav>
    `,
});

const Home = Vue.component("home", {
  template: `
  <div class="logingrid">
  <div class="loginimage">
    <img src="/static/images/karl-lee-ojb8uwDDXu8-unsplash.jpg"/>
  </div>
  <div class="loginbox">
    <h2>Photogram</h2>
    <router-link to="/register" tag="button">Register</router-link>
    <router-link to="/login" tag="button">Login</router-link>
  </div>
  </div>
   `,
  data: function () {
    return {};
  },
});

const Register = Vue.component("register-form", {
  template: `
    <form
      v-on:submit.prevent="RegisterUser"
      method="POST"
      action="/api/users/register"
      enctype="multipart/form-data"
      id="registerForm"
    >
    <div class="myform">
    <div class="section">
    <label>Username</label>
    <input type="text" name="username" />
  </div>
  <div class="section">
  <label>Firstname</label>
  <input type="text" name="firstname" />
  </div>
  <div class="section">
    <label>Lastname</label>
    <input type="text" name="lastname" />
  </div>
  <div class="section">
    <label>Email</label>
    <input type="email" name="email" />
  </div>
  <div class="section">
    <label>Location</label>
    <input type="text" name="location" />
  </div>
  <div class="section">
    <label>Biography</label>
    <input type="text" name="biography" />
  </div>
  <div class="section">
    <label>Photo</label>
    <input type="file" name="photo" />
  </div>
  <div class="section"><button type="submit">Register</button></div>
    </div>
  </form>
   `,
  data: function () {
    return {};
  },
  methods: {
    RegisterUser: function () {
      let self = this;
      let registerForm = document.getElementById("registerForm");
      let form_data = new FormData(registerForm);
      fetch("/api/users/register", {
        method: "POST",
        body: form_data,
        headers: { "X-CSRFToken": token },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonResponse) {
          // display a success message
          console.log(jsonResponse);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});

const Login = Vue.component("login-form", {
  template: `
    <div>
  <h4>Login</h4>
  <form
  v-on:submit.prevent=""
  method="POST"
  action="/api/auth/login"
  enctype="multipart/form-data"
  id="loginForm"
  >
  <div class="myform">
    <div class="section">
      <label>Username</label>
      <input type="text" name="username" />
    </div>
    <div class="section">
      <label>Password</label>
      <input type="password" name="password" />
    </div>
    </div>
    <div class="section"><button type="submit">Login</button></div>
</form>
</div>
   `,
  data: function () {
    return {};
  },
});

const NotFound = Vue.component("not-found", {
  template: `
    <div>
        <h1>404 - Not Found</h1>
    </div>
    `,
  data: function () {
    return {};
  },
});

// Define Routes
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    // Put other routes here
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    // This is a catch all route in case none of the above matches
    { path: "*", component: NotFound },
  ],
});

// Instantiate our main Vue Instance
let app = new Vue({
  el: "#app",
  router,
});
