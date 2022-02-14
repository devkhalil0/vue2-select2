<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card" style="margin-top:40px">
                    <v-select multiple v-model="selected" placeholder="Select One" :options="['Canada','United States','Bangladesh', 'Noakhali']" />
                </div>
            </div>
        </div>
        <div>
            {{ selected }}
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return{
                selected: []
            }
        }
    }
</script>
