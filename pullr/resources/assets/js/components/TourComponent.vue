<template>

<div>
    <div class="columns">
        <div class="column">


            <div v-if="state == 'running'">

                <div class="box">

                    <div class="section">
                        <div class="is-flex" style="justify-content:space-between">
                            <h1 class="title has-text-info">Jack Daniels</h1> 
                            <h1 class="title has-text-primary"> & </h1>
                            <h1 class="title has-text-info">Peter Zwegat</h1>
                        </div>    
                    </div>

                    <p class="has-text-grey" >Folgende Knechte können sich bereit machen</p>
                    <p class="has-text-grey">Peter Zwegat & Peter Jochen</p>
                    
                </div>


            </div>

            <div v-else>
                <h1 class="title has-text-primary">Die Tour hat noch nicht begonnen.</h1>
            </div>

            

        </div>

        <div class="column is-3">
            <div class="card">
                <div class="section">
                    <h4 class="is-size-4">Teilnehmer</h4>
                    <ul>
                        <li v-for="(participant, index) in participants" :key="participant.id">
                            #{{index + 1}} {{participant.name}}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    
    
</div>
    
</template>


<script>
export default {

    data(){
        return{
            state:'running',
            participants: []
        }
    },

    created() {
        this.getParticipants();
        window.Echo.channel('welcome').listen('AddedParticipant', e => {
           this.addParticipantToList(e.participant)     
        })
    },

    methods: {
        getParticipants() {

            axios.get('/participant')
            .then(result => {
                this.participants = result.data;
            })
            .catch(err => {
                console.log(err)
            })

        },

        addParticipantToList(participant){
            this.participants.push(participant)
        }
        
    }
    

}
</script>
