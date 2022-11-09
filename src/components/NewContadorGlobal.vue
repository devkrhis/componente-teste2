<template>
    <div id="oldContador">
        <testeNewContador v-for="c in 5" :key="c.id"/>
        
    </div>
    
</template>

<script>
import NewContador from './NewContador.vue' // aqui eu estou importando.

export default {
    components: { 'testeNewContador': NewContador} // // nome que eu quero referenciar apontado para qual componente eu quero localmente.

}
</script>
