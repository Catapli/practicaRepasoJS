<template>
    <tr>
        <td>{{oferta.id}}</td>
        <td>{{oferta.nombre}}</td>
        <td>{{empresa.nombre}}</td>
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
    computed:{
        empresa(){
            return this.$store.state.empresas.find(item => item.id === this.oferta.empresa);
        }
    },
    name:'newRow',
    props:['oferta'],
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