import { mapMutations } from "vuex";

export default {
  name: 'UsersHeader',
  methods: {
    ...mapMutations({
      sortUsers: "Users/SORT_USERS"
    })
  },
}