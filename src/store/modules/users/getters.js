import { findUser } from "@/Composables/users";

export default {
  getAllUsers(state) {
    return state.listOfUsers;
  },
  getMainUsers(state) {
    return state.listOfUsers.filter((item) => item.parentPhone == null)
  },
  getUserByPhone: (state) => (phone) => {
    return findUser(state.listOfUsers, phone)
  },
}