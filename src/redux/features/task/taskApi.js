import { baseApi } from "../api/baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks", "Users"],
    }),
    getTasksByEmail: builder.query({
      query: (assignedTo) => ({
        url: `/tasks/${assignedTo}`,
      }),
      providesTags: ["Tasks", "Users"],
    }),
    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks", "Users"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks", "Users"],
    }),
    addUser: builder.mutation({
      query: (task) => ({
        url: "/users",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Users", "Tasks"],
    }),
  }),
});

export const {
  useAddTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useAddUserMutation,
  useGetTasksByEmailQuery,
} = taskApi;

export default taskApi;
