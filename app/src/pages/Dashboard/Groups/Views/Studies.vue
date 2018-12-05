<template>

	<div class="sc-group--studies row">
		<div class="text-right">
			<n-button type="primary" @click.native="showModal = true">Add Study</n-button>
		</div>

		<div v-for="study in groupData.studies" class="col-md-6 d-block">
			<study-card v-if="study.id" :id="study.id" :description="study.description" :title="study.title" :link="'/groups/' + groupData.slug + $root.cleanLink(study.link)"></study-card>
		</div>

	</div>

</template>
<script>
  import {
    StudyCard,
    Table as NTable,
    Button
  } from 'src/components'

  function getDefaultData () {
    return {
      loadingTodos: true,
      loadingMore : false,
      todoData    : [],
      todoPage    : 1,
    }
  }

  export default {
    components: {
      StudyCard,
      NTable,
      Button
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