<template>
    <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
                <table class="table table-striped table-hover">
                    <thead class="thead-dark bg-light">
                        <tr>
                            <th>Id</th>
                            <th>Empresa</th>
                            <th>Nombre</th>
                            <th>Contrato</th>
                            <th>Contacto</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Aquí insertaremos los productos-->
                    </tbody>
                    <tfoot>
                    
                        <th></th>
                    </tfoot>
                </table>
            </div>
        </div>
</template>

<script>
export default {
    mounted:{
        ofertas(){
           return this.$store.state.getOffers
        }
        
    },
    props: ['offers']
}
</script>