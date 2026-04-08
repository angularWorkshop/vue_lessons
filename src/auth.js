import { reactive } from 'vue';

export const authState = reactive({
  isLoggedIn: false,
});

export function login() {
  authState.isLoggedIn = true;
}

export function resetAuth() {
  authState.isLoggedIn = false;
}
