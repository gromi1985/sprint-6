//

Vue.component('botones', {
    props: [''],
    template:
        ` <div class="d-flex flex-wrap">
    <button   @click="onClick(1)" class="col"> Anterior </button>
    <button   @click="onClick(2)" class="col"> Seguent </button>
    </div>
    `,

    methods:{
        onClick:function(option){
            //console.log(this.title);
            this.$emit('new',option)
        }
    }
})


Vue.component('Escena', {
    props: ['frase'],
    template: `
    <div> 
    <p class="mx-2 text-center">{{frase}}</p>
    </div>
    `
})


Vue.component('Home', {
    template: `
    <div>
        <botones @new="addNewTodo"></botones>
        <Escena v-for="(item, index) in frases" 
                        :key="index"
                        :frase="item"
                        :class="[{active: index === activeItem}, masClases]">
        </Escena>
    </div>
    `,
    data() {
        return {
            frases: [
                "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",

                "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",

                "L'heroi va decidir travessar la porta que el portava a casa",

                "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
            ],

            activeItem: 0,
            masClases:"border border-2 border-dark my-3 py-2 rounded-pill"    

        }
    },
    methods:{
        addNewTodo: function(option){
            if(option == 2){
                (this.activeItem === this.frases.length - 1)? this.activeItem = this.frases.length-1 :this.activeItem++;
            }
            if(option == 1){
                (this.activeItem === 0)? this.activeItem = 0 :this.activeItem--;
            }
        }
    }
})

new Vue({
    el: "#app",
})