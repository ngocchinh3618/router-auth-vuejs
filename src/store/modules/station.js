import { api } from "./../../api";
import router from "./../../router";
const state = {
  loading: false,
  stations: null,
  err: null,
};
const mutations = {
  storeStationsRequest(state) {
    state.loading = true;
    state.stations = {};
    state.err = null;
  },
  storeStationsSuccess(state, data) {
    state.loading = false;
    state.stations = data;
    state.err = null;
  },
  storeStationsFailed(state, err) {
    state.loading = false;
    state.stations = {};
    state.err = err;
  },
  deleteStationsRequest(state) {
    state.loading = true;
    state.err = null;
  },
  deleteStationsSuccess(state) {
    state.loading = false;
    state.err = null;
  },
  deleteStationsFailed(state, err) {
    state.loading = false;
    state.err = err;
  },
  editStationsRequest(state) {
    state.loading = true;
    state.stations = {};
    state.err = null;
  },
  editStationsSuccess(state) {
    state.loading = false;
    state.stations = {};
    state.err = null;
  },
  editStationsFailed(state, err) {
    state.loading = false;
    state.stations = {};
    state.err = err;
  },
};
const actions = {
  fetchStations({ commit }) {
    commit("storeStationsRequest");
    api
      .get("/stations")
      .then((result) => {
        console.log(result.data);
        commit("storeStationsSuccess", result.data);
      })
      .catch((err) => {
        commit("storeStationsFailed", err);
      });
  },
  fetchDeleteStation({ commit, dispatch }, id) {
    commit("deleteStationsRequest");
    api
      .delete("/stations/" + id)
      .then((result) => {
        commit("deleteStationsSuccess", result.data);
        dispatch("fetchStations");
      })
      .catch((err) => {
        commit("deleteStationsFailed", err);
      });
  },
  fetchEditStation({ commit }, data) {
    commit("editStationsRequest");
    api
      .put(`/stations/${data.id}`, data.station)
      .then((result) => {
        commit("editStationsSuccess", result.data);
        router.replace("/admin/stations");
      })
      .catch((err) => {
        commit("editStationsFailed", err);
      });
  },
  fetchCreateStation({commit},data) {
    commit("storeStationsRequest");
    api
      .post("/stations",data)
      .then((result) => {
        // console.log(result.data);
        commit("storeStationsSuccess", result.data);
        router.replace("/admin/stations")
      })
      .catch((err) => {
        commit("storeStationsFailed", err);
      });
  },
};
export default { state, mutations, actions };
