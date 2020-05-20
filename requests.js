Vue.component('btn', {

           methods: {
           
           
           
            async  get() { 
         const res = await fetch('https://api.agify.io/?name=michael');
  				const data = await res.json();
          alert(JSON. stringify(data));
              },
    
    
    async post() {
        var obj = { name: "John", age: 30, city: "New York" }; 
      	const request = new Request(
        		"https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          mode: "cors",
          cache: "default",
          body: JSON.stringify(obj)
        }
      );
      const res = await fetch(request);
      const data = await res.json();
      this.data = data;
       alert(JSON. stringify(data));
    }     
            
        } ,
        
  template: 
  '<button v-on:click="post">Click</button>'
})

new Vue({ el: '#components-demo' })