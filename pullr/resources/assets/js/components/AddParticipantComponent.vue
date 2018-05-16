<template>
    <div class="box">
            <label for="name" class="label">Name der Person</label>
            <input  v-model="name" type="text" class="input m-b-10" :class="{'is-danger': error}">
            <p style="margin-top:-10px" class="has-text-danger is-size-7 m-b-10" v-if="error" v-text="error"></p>
            <a @click="addParticipant" class="button is-primary" :class="{'is-loading':loading}" :disabled="name.length < 4">HINZUFÜGEN</a>     
    </div>
</template>


<script>
    export default {
        data(){
            return{
                loading: false,
                name: '',
                error: ''

            }
        },

        created(){

            

        },

        methods: {
            addParticipant() {
                this.errors = null;
                this.loading = true;

                axios.post('/participant', {
                    'name': this.name,
                })
                .then((result) => {
                    this.loading = false
                    this.name = ''
                })
                .catch(err => {
                    this.loading = false

                     if(err.response.data.errors.name)
                     this.error = err.response.data.errors.name[0]
                     else
                     this.error = err.response.data.message
                    
                })
            }
        }
    }
</script>  