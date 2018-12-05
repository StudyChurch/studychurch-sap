<template>

	<div class="sc-group--members">

		<div class="text-right">
			<n-button type="primary" @click.native="addMember">Add Member</n-button>
		</div>

		<card class="card-chart">
			<h3 class="card-title">Leaders</h3>
			<div class="table-responsive">
				<n-table :data="leaders">
					<template slot-scope="{row}">
						<td v-html="row.avatar.img"></td>
						<td v-html="row.name"></td>
						<td class="text-right" v-if="leaders.length > 1">
							<n-button type="default" size="sm">Make Member</n-button>
						</td>
					</template>
				</n-table>
			</div>
		</card>

		<card class="card-chart">
			<h3 class="card-title">Members</h3>
			<div class="table-responsive">
				<n-table :data="members">
					<template slot-scope="{row}">
						<td v-html="row.avatar.img"></td>
						<td v-html="row.name"></td>
						<td class="text-right">
							<n-button type="default" size="sm" >Make Leader</n-button>&nbsp;
							<n-button type="danger" size="sm">Remove from Group</n-button>
						</td>
					</template>
				</n-table>
			</div>
		</card>

	</div>

</template>
<script>
  import {
    Card,
    Table as NTable,
    Button
  } from 'src/components'

  import { MessageBox } from 'element-ui';

  export default {
    components: {
      Card,
      NTable,
      Button
    },
    props     : {
      groupData: {
        default: {
          id: 0,
		  studies: []
        }
	  },
    },
    computed  : {
      leaders() {
        return this.groupData.members.filter(member => member.admin);
      },
      members() {
        return this.groupData.members.filter(member => !member.admin);
      }
    },
    methods   : {
      addMember() {
        let self = this;
        MessageBox.prompt( 'Use this link to invite members to join this group.', 'Add a Member', {
          dangerouslyUseHTMLString : true,
		  inputValue : self.groupData.invite,
		  inputType : 'textarea',
		  showCancelButton : false
		} ).then().catch();
	  },
      reset (keep) {
        let def = getDefaultData();
        def[keep] = this[keep];
        Object.assign(this.$data, def);
      }
    }
  }
</script>
<style>
</style>