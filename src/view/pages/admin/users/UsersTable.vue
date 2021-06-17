<template>
    <div class="card panel-success">
        <table class="table table-hover ">
            <thead>
                <tr>
                    <th style="width: 10%" class="text-center">#</th>
                    <th>Tên</th>
                    <th style="width: 20%" class="text-center">Email</th>
                    <th style="width: 160px">Action</th>
                </tr>
            </thead>

            <tbody v-if="listUser.length !== 0" >
                <UserListItem 
                    v-for="(user, index) in listUser" 
                    v-bind:key="user.id"
                    v-bind:user="user"
                    v-bind:index="index + 1"
                    v-bind:userId="user.id"
                />
            </tbody>

            <tbody v-else>
                <tr>
                    <td colspan="4"><h6 class="text-center">List Empty</h6></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {  mapActions, mapGetters } from 'vuex';
import UserListItem from './UsersItem.vue';

export default {
    name: 'user-list-table',
    components: {
        UserListItem
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters([
            'storeqlda/getListDataUserGTer'
        ]),
        listUser() {
      return this["storeqlda/getListDataUserGTer"];
    },
    },
    created() {
       this["storeqlda/getListDataUser"]();
    },
    methods: {
        ...mapActions([ 'storeqlda/getListDataUser' ]),
    }
}
</script>

<style>

</style>
