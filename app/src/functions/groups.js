'use strict';

const GroupStore = {
  groups: [],

  getName (id) {
    return this.getGroup(id);
  },

  getGroup (id) {
    if (undefined === this.groups[id]) {
      return this.fetchGroup(id);
    } else {
      return this.groups[id];
    }
  },

  fetchGroup (id) {
    console.log(this);
    this.$http
      .get(
        '/wp-json/studychurch/v1/groups/' + id)
      .then(response => {
        this.groups[id] = response.data[0];
      });
  },
};

const GroupPlugin = {
  install(Vue, options) {

    Vue.mixin({
      data() {
        return {
          groupStore: GroupStore
        }
      }
    });

    Object.defineProperty(Vue.prototype, '$groups', {
      get() {
        return this.$root.groupStore
      }
    });

  }

};

export default GroupPlugin;