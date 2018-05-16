<template>
    <div class="box">

        <h4 class="title is-size-4">Teilnehmerliste</h4>
        

        <div v-for="participant in participants" :key="participant.id">
            {{participant.name}}
        </div>



        
    </div>
</template>


<script>
export default {
    created() {
        this.$store.dispatch('loadParticipants');
       
    },

    computed: {

        participants(){
            return this.$store.getters.getParticipants;
        }
        
    }
}
</script>
