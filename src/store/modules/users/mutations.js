import { getMaxDepth } from "@/Composables/users"

export default {
  ADD_USER(state, {data, parentData}) {
    if (parentData) parentData.children.push(data)
    else state.listOfUsers.push(data)
  },
  DOWNLOAD_USERS(state) {
    state.listOfUsers = JSON.parse(localStorage.getItem('users')) || []
  },
  UPLOAD_USERS(state) {
    localStorage.setItem('users', JSON.stringify(state.listOfUsers))
  },
  SORT_USERS(state) {
    if (state.ascendingSort) {
      state.listOfUsers.sort((a, b) => getMaxDepth(a) - getMaxDepth(b));
      state.ascendingSort = false
    } else {
      state.listOfUsers.sort((a, b) => getMaxDepth(b) - getMaxDepth(a));
      state.ascendingSort = true
    }
  }
}
