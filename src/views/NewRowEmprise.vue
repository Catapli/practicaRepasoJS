<template>
    <tr>
        <td>{{emprise.id}}</td>
        <td>{{emprise.nombre}}</td>
        <td>{{emprise.domicilio}}</td>
        <td>{{emprise.localidad}}</td>
        <td>{{emprise.contacto}}</td>
        <td>{{emprise.email}}</td>
        <td>
            <button class="bi bi-building" @click.prevent="verEmpresa"  ></button>
            <button class="bi bi-file-earmark-check " @click.prevent="verOfertas"></button>
        </td>
    </tr>
</template>

<script>
export default {
    name:'newRow',
    props:['emprise'],
    methods:{
        verOfertas(){
          this.$router.push({
              name:'verOfertasEmpresa',
              params:{id: this.emprise.id}
          }) 
        },
        verEmpresa(){
            this.$router.push({
              name:'verEmpresa',
              params:{id: this.emprise.id}
          }) 
        }
    }
}
</script>