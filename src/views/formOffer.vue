<template>
 <div class="row">
     <h1>{{isEdit()}}</h1>
            <div class="col-sm-6 col-md-4 col-lg-4">
                <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                <form id="new-prod" @submit.prevent="handleSubmit(putInDB)" @reset="reset">
                    <fieldset>
                        <label for="newprod-id">Id del producto:</label>
                            <input type="text" class="form-control" v-model="oferta.id" disabled required min="1" step="1"><br>
                        <div class="form-group">
                            <label for="newprod-name">Empresa: </label><br>
                            <select v-model="oferta.empresa">
                                <option :value="undefined">--- Selecciona empresa ---</option>
                                <option v-for="empresa in options" :value="empresa.id" :key="empresa.id">{{empresa.nombre}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <validation-provider rules="required|min:10|max:50|alpha" v-slot="{errors}" name="nombre">
                                 <label for="nombre">Nombre: </label>
                                   <input type="text" class="form-control" id="nombre" v-model="oferta.nombre">
                                <span style="color:red">{{errors[0]}}</span>
                            </validation-provider>
                        </div>
                        <div class="form-group">
                            <validation-provider rules="required" v-slot="{errors}" name="contrato">
                            <label for="contrato">Contrato: </label>
                            <input type="text" v-model="oferta.contrato" id="contrato" class="form-control" >
                            <span style="color:red">{{errors[0]}}</span>
                             </validation-provider>
                        </div>
                        <div class="form-group">
                            <validation-provider rules="required" v-slot="{errors}" name="contacto">
                            <label for="contacto">Contacto: </label>
                            <input type="text" v-model="oferta.contacto" id="contacto" class="form-control" >
                            <span style="color:red">{{errors[0]}}</span>
                             </validation-provider>
                        </div>
                        <div class="form-group">
                            <validation-provider rules="required|email" v-slot="{errors}" name="email">
                            <label for="email">Email: </label>
                            <input type="text" v-model="oferta.email" id="email" class="form-control">
                            <span style="color:red">{{errors[0]}}</span>
                             </validation-provider>
                        </div>
                        <br>
                        <button type="submit" class="btn btn-default btn-primary">Añadir</button>
                        <button type="reset" class="btn btn-secondary">Cancel</button>
 
                        <!-- Aquí los inputs y botones del form -->
                    </fieldset>
                </form>
                 </ValidationObserver>

            </div>
    </div>
</template>

<script>
import Api from '../../Api'
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, min, max , email, alpha} from 'vee-validate/dist/rules';


// Registramos las reglas a usar:
extend('required', {
  ...required,
  message: 'Este campo es obligatorio'
});

extend('min', {
  ...min,
  message: 'El mínimo de caracteres son 10'
});

extend('alpha', {
  ...alpha,
  message: 'Debe contener caracteres alfanumericos'
});

extend('max', {
  ...max,
  message: 'El máximo de caracteres son 50'
});

extend('email', {
  ...email,
  message: 'El campo debe ser un email'
});



export default {
    data(){
        return{
            options:[],
            oferta:{
            },
            editando: false,
        }
    },
    components:{
        ValidationProvider,
        ValidationObserver
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

<style scoped>

</style>