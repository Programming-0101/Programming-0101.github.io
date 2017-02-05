// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const MdContent = {
  template: '<div>Page {{ $route.params.mdFile }}</div>',
  watch: {
    '$route' (to, from) {

    }
  }
}

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
const routes = [
  // dynamic segements start with a colon
  { path: '/pages/:mdFile', component: MdContent }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
var app = new Vue({
  router,
  el: '#content',
  data: {
    message: 'Hello Vue!'
  },
  created: function(){
    fetch('README.md')
    .then(function(response) {
      if(response.ok) {
        console.log('loaded');
        return response.text();
      } else {
        console.log('not loaded');
      }
    })
    .then(function(text){
      console.log(text);
      this.app.$data.message = marked(text);
    })
    .catch(function(err) {
      console.log(err);
    })
  }
}).$mount('#app')



// Postscript testing....
if(self.fetch) {
  // run my fetch request here
  console.log("fetch working")
} else {
  // do something with XMLHttpRequest?
}


// var nav = new Vue({
//   el: '#content',
//   data: {
//     message: 'Hello Vue!'
//   },
//   created: function(){
//     fetch('README.md')
//     .then(function(response) {
//       if(response.ok) {
//         console.log('loaded');
//         return response.text();
//       } else {
//         console.log('not loaded');
//       }
//     })
//     .then(function(text){
//       console.log(text);
//       this.app.$data.message = marked(text);
//     })
//     .catch(function(err) {
//       console.log(err);
//     })
//   }
// })