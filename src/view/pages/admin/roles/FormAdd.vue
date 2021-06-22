<template>
    <div class="form-group add-task">
        <button 
            v-if="!isShowForm"
            v-on:click="toggleForm"
            type="button" class="btn btn-info btn-block">Add Role</button>
        <button 
            v-else
            v-on:click="toggleForm"
            type="button" class="btn btn-primary btn-block">Close Form</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'form-add',
    data() {
        return {

        }
    },
    computed: {
        ...mapState({ 
        isShowForm : state =>state.storeqlda.isShowForm  // lây map getter khi có chia module
    })
    },
    methods: {
        ...mapActions([ 'storeqlda/toggleForm' ]),
        toggleForm() {
            return this['storeqlda/toggleForm']()
        }
    }
}
</script>

<style>

</style>
