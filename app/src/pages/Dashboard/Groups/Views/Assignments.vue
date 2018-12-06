<template>

	<div class="sc-group--assignments" v-loading="loadingTodos" style="min-height: 200px;">

		<div class="text-right">
			<n-button type="primary" @click.native="showModal = true">Create Todo</n-button>
		</div>
		<modal :show.sync="showModal" headerclasses="justify-content-center" v-loading="creatingTodo">
			<h4 slot="header" class="title title-up">Create a new Todo</h4>
			<p>
				<label for="name">Group Name</label>
				<el-input
					ref="name"
					type="text"
					label="Study Name"
					id="name"
					v-model="newTodo.name"></el-input>
			</p>

			<p>
				<label for="name">Group Description</label>
				<el-input
					ref="description"
					type="textarea"
					id="description"
					:autosize="{ minRows: 4 }"
					resize="none"
					label="Study Description"
					v-model="newTodo.description"></el-input>
			</p>
			<template slot="footer">
				<n-button type="primary" @click.native="createTodo">Create</n-button>
			</template>
		</modal>

		<card v-for="data in todoData" :class="'card'">
			&nbsp;
			<h6>Due Date: {{data.date}}</h6>
			<p v-for="lesson in data.lessons">
				<router-link :to="'/groups/' + $route.params.slug + $root.cleanLink(lesson.link)">
					<i class="now-ui-icons design_bullet-list-67"></i>&nbsp;
					<span v-html="lesson.title"></span></router-link>
			</p>
			<p v-html="data.content"></p>
		</card>

	</div>

</template>
<script>
  import { Input, Message } from 'element-ui';

  import {
    Card,
    Table as NTable,
    Button,
    Modal
  } from 'src/components'

  function getDefaultData () {
    return {
      creatingTodo: false,
      showModal   : false,
      loadingTodos: true,
      loadingMore : false,
      todoData    : [],
      todoPage    : 1,
      newTodo     : {
        name       : '',
        description: ''
      }
    }
  }

  export default {
    components: {
      Card,
      NTable,
      Button,
      Modal
    },
    props     : {
      groupData: {
        default: {
          id     : 0,
          studies: []
        }
      },
    },
    data      : getDefaultData,
    mounted() {
      this.getGroupTodos();
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
      createTodo() {
        if (!this.newTodo.name || !this.newTodo.description) {
          Message.error('Please enter a name and description for your new group');
          return;
        }

        this.creatingTodo = true;

        this.$http.post('/wp-json/studychurch/v1/groups/', {
          user_id: this.$root.userData.id,
          status : 'hidden',
        })
          .then(response => {
            this.creatingTodo = false;
            this.$router.push('/groups/' + response.data[0].slug);
            Message.success('Success! Taking your new group ...');
          })

      },
      getGroupTodos () {
        this.loadingTodos = true;
        this.$http
          .get(
            '/wp-json/studychurch/v1/assignments?group_id=' + this.groupData.id)
          .then(response => (
            this.todoData = response.data
          ))
          .finally(() => this.loadingTodos = false)
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