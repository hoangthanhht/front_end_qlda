<template>
    <div class="card panel-success">
        <table class="table table-hover ">
            <thead>
                <tr>
                    <th style="width: 10%" class="text-center">#</th>
                    <th>Tên</th>
                    <th style="width: 20%" class="text-center">Mô tả vai trò</th>
                    <th style="width: 160px">Action</th>
                </tr>
            </thead>

            <tbody v-if="listRole.length !== 0" >
                <RoleListItem 
                    v-for="(role, index) in listRole" 
                    v-bind:key="role.id"
                    v-bind:role="role"
                    v-bind:index="index + 1"
                    v-bind:roleId="role.id"
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
import RoleListItem from './UsersItem.vue';

export default {
    name: 'user-list-table',
    components: {
        RoleListItem
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters([
            'storeqlda/getListDataRoleGTer'
        ]),
        listRole() {
      return this["storeqlda/getListDataRoleGTer"];
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
