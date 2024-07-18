import UsersRow from "@/components/UsersRow/UsersRow.vue";
import UsersHeader from "@/components/UsersHeader/UsersHeader.vue";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "UsersTable",
  components: {
    UsersRow,
    UsersHeader
  },
  props: {
    users: {
      type: Array,
      default: []
    }
  },
  computed: {
    ...mapGetters({
      mainUsers: "Users/getMainUsers",
    })
  },
  methods: {
    ...mapMutations({
      sortUsers: "Users/SORT_USERS"
    })
  },
}