<template>
    <tr>
        <td>{{oferta.id}}</td>
        <td>{{oferta.nombre}}</td>
        <td>{{nombre}}</td>
        <td>{{oferta.contrato}}</td>
        <td>{{oferta.contacto}}</td>
        <td>{{oferta.email}}</td>
       <td>
            <button class="bi bi-trash" @click="deleteOffer">
            </button>
            <button class="bi bi-pencil" @click="edit" >
            </button>
            <button class="bi bi-building" @click="verEmpresa"></button>
            
        </td>
    </tr>
</template>
<script>
import Api from '../../Api'
export default {
    data(){
        return{
            nombre: []
        }
    },
    name:'newRow',
    props:['oferta'],
    async mounted(){
         try {
                let response = await Api.empresas.getOne(this.oferta.empresa);
                this.nombre = response.data.nombre
            } catch (error) {
                console.error(error)
            }
    },
    methods:{
        verEmpresa(){
            this.$router.push({
              name:'verEmpresa',
              params:{id: this.oferta.empresa}
          }) 
        },
        edit(){
            this.$router.push({
                name:'Edit',
                params: {id: this.oferta.id}
            })
        },
        deleteOffer(){
            Api.offers.delete(this.oferta.id)
        }
    }
}
</script>