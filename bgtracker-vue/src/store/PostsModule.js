import axios from "axios";
export const PostsModule = {
    state: () => ({
        post: {
            title: "",
            body: "",
        },
        posts: [],
    }),
    getters: {},
    mutations: {
        SET_ALL_POSTS(state, posts) {
            state.posts = posts;
        },
    },
    actions: {
        async createPostInDB({ dispatch }, post) {
            try {
                const response = await axios.post("/api/post/newpost", {
                    title: post.title,
                    body: post.body,
                });
                console.log(response);
                dispatch("getAllPosts");
            } catch (error) {
                console.log(error);
            }
        },
        async getAllPosts({ commit }) {
            try {
                const response = await axios.get("api/post/allposts");
                console.log(response.data.posts);
                commit("SET_ALL_POSTS", response.data.posts);
            } catch (error) {
                console.log(error);
            }
        },
    },
    namespaced: true,
};
