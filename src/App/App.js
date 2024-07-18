import DefaultLayout from '@/layouts/Default/Default.vue';
import { defineAsyncComponent } from 'vue'
export default {
  name: 'App',
  components: {
    DefaultLayout
  },
  computed: {
    layout() {
      console.log(this.$route.meta.layout);
      const layoutName = this.$route.meta.layout || "Default";
      return defineAsyncComponent(() => import(`@/layouts/${layoutName}/${layoutName}.vue`));
    },
  }
}