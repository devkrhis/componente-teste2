<template>
    <div id="contador">
        {{ NewContador }}
        <button type="button" @click="adicionar"> Adicionar +1</button>
        <button type="button" @click="subtrair"> Subtrarir -1</button>
        <button type="button" @click="multiplicarX2"> Multiplicar x2</button>
        <button type="button" @click="dividir2"> Dividir x2</button>
        <button type="button" @click="zeroAbsoluto"> Zero Absoluto </button>
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            NewContador: 0
        }
    },
    methods: {
        adicionar(){
            this.NewContador++
        },
        subtrair(){
            this.NewContador--
        },
        multiplicarX2(){
            this.NewContador = this.NewContador * 2
        },
        dividir2(){
            this.NewContador = this.NewContador / 2
        },
        zeroAbsoluto(){
            this.NewContador = 0
        }
    }
}
</script>

<style>

</style>