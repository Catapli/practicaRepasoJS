<template>
 <div class="row">
     <h1>{{isEdit()}}</h1>
            <div class="col-sm-6 col-md-4 col-lg-4">
                <form id="new-prod"  @submit.prevent="putInDB" @reset="reset">
                    <fieldset>
                        <label for="newprod-id">Id del producto:</label>
                            <input type="text" class="form-control" v-model="oferta.id" disabled required min="1" step="1"><br>
                        <div class="form-group">
                            <label for="newprod-name">Empresa: </label><br>
                            <select v-model="oferta.empresa">
                                <option>--- Selecciona empresa ---</option>
                                <option v-for="empresa in options" :value="empresa.id" :key="empresa">{{empresa.nombre}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="newprod-price">Nombre: </label>
                            <input type="text" class="form-control" v-model="oferta.nombre" required>
                        </div>
                        <div class="form-group">
                            <label for="newprod-units">Contrato: </label>
                            <input type="text" v-model="oferta.contrato" class="form-control" required >
                        </div>
                        <div class="form-group">
                            <label for="newprod-units">Contacto: </label>
                            <input type="text" v-model="oferta.contacto" class="form-control" required >
                        </div>
                        <div class="form-group">
                            <label for="newprod-units">Email: </label>
                            <input type="text" v-model="oferta.email" class="form-control" required >
                        </div>
                        <br>
                        <button type="submit" class="btn btn-default btn-primary">Añadir</button>
                        <button type="reset" class="btn btn-secondary">Cancel</button>
 
                        <!-- Aquí los inputs y botones del form -->
                    </fieldset>
                </form>
            </div>
    </div>
</template>

<script>
import Api from '../../Api'
export default {
    data(){
        return{
            options:[],
            oferta:{},
            editando: false,
        }
    },
    methods:{
        putInDB(){
            if(this.editando === false){
            let newOffer = {
                empresa:this.oferta.empresa,
                nombre:this.oferta.nombre,
                contrato: this.oferta.contrato,
                contacto: this.oferta.contacto,
                email: this.oferta.email
            }
            try {
                Api.offers.create(newOffer)
                this.$router.push("/verOfertas/"+newOffer.empresa)    
            } catch (error) {
                alert(error)
                console.error(error)
            }
            }else{
                 try {
                    Api.offers.modify(this.oferta)
                    this.$router.push('/')
                } catch (error) {
                    console.error(error)
                    
                }
            }
        },
        isEdit(){
            if(this.editando){
                return 'Editar Producto'
            }else{
                return 'Nuevo Producto'
            }
        },
        reset(){
             this.$router.push('/empresas')
        }
    },
    async mounted(){
         if(this.$route.params.id){
            this.editando = true

            let response = await Api.offers.getOne(this.$route.params.id)
            this.oferta = response.data
        }
        try {
            let response = await Api.empresas.getAll()
            this.options = response.data
        } catch (error) {
            console.error(error)
        }
    }
}
</script>