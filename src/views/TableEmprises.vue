<template>

    <div class="row">
        <h1>Listado de Empresas</h1>
            <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
                <table class="table table-striped table-hover">
                    <thead class="thead-dark bg-light">
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Domicilio</th>
                            <th>Localidad</th>
                            <th>Contacto</th>
                            <th>Email</th>
                            <th>Acciones </th>
                        </tr>
                    </thead>
                    <tbody>
                        <new-row-emprise v-for="empresa in empresas" :key="empresa.id" :emprise="empresa"></new-row-emprise>
                        <!-- Aquí insertaremos los productos-->
                    </tbody>
                    <tfoot>
                        <button @click="newOffer">Añadir Oferta</button>
                    </tfoot>
                </table>
            </div>
        </div>
</template>

<script>
import NewRowEmprise from '../views/NewRowEmprise.vue';
export default {
  components: { NewRowEmprise },
    computed:{
        empresas(){
            return this.$store.state.empresas;
        }
    },
    methods:{
        newOffer(){
            this.$router.push('/formOffer')
        }
    }
}
</script>