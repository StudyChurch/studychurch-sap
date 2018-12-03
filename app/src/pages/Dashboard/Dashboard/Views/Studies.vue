<template>

	<div class="sc-group--studies">
		<div class="d-flex flex-wrap row">
			<a v-for="study in $root.userData.studies" class="col-md-6 d-block" :to="$root.cleanLink(study.link)">
				<card>
					<img slot="image" class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1618c103586%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1618c103586%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22119.0859375%22%20y%3D%2297.35%22%3E320x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
					<div>
						<h5 class="card-title">{{study.title.rendered}}</h5>
						<p class="card-text" v-html="study.excerpt.rendered"></p>
						<n-button size="sm" type="default" @click.native="$router.push($root.cleanLink(study.link))">View</n-button>
						<n-button size="sm" type="primary" @click.native="$router.push($root.cleanLink(study.link))">Edit</n-button>
						<n-button size="sm" type="danger" class="float-right" @click.native="$router.push($root.cleanLink(study.link))">Delete</n-button>
					</div>
				</card>
			</a>
		</div>
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
      todoData    : [],
      todoPage    : 1,
    }
  }

  export default {
    components: {
      Card,
      NTable,
      Button
    },
    props     : {},
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