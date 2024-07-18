import UsersTable from "@/components/UsersTable/UsersTable.vue";
import AppButton from "@/components/AppButton/AppButton.vue"
import AppPopup from "@/components/AppPopup/AppPopup.vue";
import AppInput from "@/components/AppInput/AppInput.vue";
import AppSelect from "@/components/AppSelect/AppSelect.vue";

import { mapGetters, mapMutations } from "vuex";
import { required, minLength } from 'vuelidate/lib/validators'
import { loadSelectOptions } from "@/Composables/users";

export default {
  name: "HomeView",
  components: {
    UsersTable,
    AppButton,
    AppPopup,
    AppInput,
    AppSelect
  },
  data() {
    return {
      modalIsOpen: false,
      form: {
        name: null,
        phone: null,
        parentPhone: null,
        children: [],
        depth: 0
      },
    }
  },
  validations: {
    form: {
      name: {required},
      phone: {required, minLength: minLength(16)}
    },
  },
  mounted() {
    this.downloadUsers();
  },
  created() {
    window.addEventListener('beforeunload', this.uploadUsers)
  },
  computed: {
    ...mapGetters({
      users: "Users/getAllUsers",
      userByPhone: "Users/getUserByPhone"
    }),
    options() {
      const result = []
      loadSelectOptions(this.users, result);
      return result
    }
  },
  methods: {
    resetForm() {
      this.form = {
        name: null,
        phone: null,
        parentPhone: null,
        children: [],
        depth: 0
      }
      this.$v.$reset()
    },
    changeModalState() {
      this.modalIsOpen = !this.modalIsOpen;
      this.resetForm();
      document.body.classList.toggle('overflow');
    },
    ...mapMutations({
      addUser: "Users/ADD_USER",
      downloadUsers: "Users/DOWNLOAD_USERS",
      uploadUsers: "Users/UPLOAD_USERS",
    }),
    savePopup() {
      const data = structuredClone(this.form);
      this.$v.$touch();
      if (this.$v.form.$error) return;
      if (this.form.parentPhone) {
        const parentData = this.userByPhone(this.form.parentPhone);
        data.depth = parentData.depth + 1
        this.addUser({data, parentData})
      }
      else this.addUser({data})
      this.changeModalState()
    },
  },
}