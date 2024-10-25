import { baseApi } from "../api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { usePostUserMutation, useGetUsersQuery } = userApi;
