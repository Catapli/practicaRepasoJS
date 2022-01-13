<template>
    <div class="row">
        <h1>Listado de Ofertas de Empresa {{id}}</h1>
            <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
                <table class="table table-striped table-hover">
                    <thead class="thead-dark bg-light">
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Empresa</th>
                            <th>Contrato</th>
                            <th>Contacto</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <new-row-ofertas v-for="oferta in ofertas" :key="oferta.id" :oferta="oferta"></new-row-ofertas>
                        <!-- Aquí insertaremos los productos-->
                    </tbody>
                    <tfoot>
                    
                    </tfoot>
                </table>
            </div>
        </div>
</template>

<script>
import Api from '../../Api'
import NewRowOfertas from './NewRowOfertas.vue'
export default {
  components: { NewRowOfertas },
    data(){
        return{
            ofertas:[]
        }
    },
    props:['id'],
    async mounted(){
         let response = await Api.offers.getOffersOfEmprise(this.id)
         this.ofertas=  response.data
    }
}
</script>