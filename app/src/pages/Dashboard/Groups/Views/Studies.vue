<template>

	<div class="sc-group--studies">

		<card v-for="study in groupData.studies" class="card-chart">
			<router-link :to="'/groups/' + $route.params.slug + $root.cleanLink(study.link)"><h3 class="card-title">{{ study.title }}</h3></router-link>
			<div v-html="study.description"></div>
		</card>

	</div>

</template>
<script>
  import {
    Card,
    Table as NTable,
    Button
  } from 'src/components'

  function getDefaultData () {
    return {
      loadingTodos: true,
      loadingMore : false,
      todoData: [],
      todoPage: 1,
    }
  }

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
    data      : getDefaultData,
    computed  : {},
    methods   : {
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