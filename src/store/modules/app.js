
var initTheme = localStorage.getItem('THEME') || '#EC7C31';

const state = {
  sidebar: {
    opened: localStorage.getItem('sidebarStatus') ? !!+localStorage.getItem('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  size: localStorage.getItem('size') || 'medium',
  layoutLoading: true,
  theme: initTheme
};

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      localStorage.setItem('sidebarStatus', 1);
    } else {
      localStorage.setItem('sidebarStatus', 0);
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    localStorage.setItem('sidebarStatus', 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
  SET_SIZE: (state, size) => {
    state.size = size;
    localStorage.setItem('size', size);
  },
  SET_LAYOUT_LOADING: (state, loading) => {
    state.layoutLoading = loading;
  },
  SET_THEME: (state, theme) => {
    state.theme = theme || initTheme;
    localStorage.setItem('THEME', state.theme);
  }
};

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation);
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device);
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size);
  },
  setLayoutLoadig({ commit }, loading) {
    commit('SET_LAYOUT_LOADING', loading);
  },
  setTheme({ commit }, theme) {
    commit('SET_THEME', theme);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
