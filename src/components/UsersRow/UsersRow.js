
import UsersRow from '@/components/UsersRow/UsersRow.vue';

export default {
  name: "UsersRow",
  components: {
    UsersRow
  },
  props: {
    user: {
      type: Object,
      default: {}
    },
  }
}