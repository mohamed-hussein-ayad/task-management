import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://task-management-server-emonhowlader1997gmailcoms-projects.vercel.app",
  }),
  tagTypes: ["Tasks", "Users"],
  endpoints: () => ({}),
});

// vercel link: https://task-management-server-7119xnrrk.vercel.app/
// https://task-management-server-emonhowlader1997gmailcoms-projects.vercel.app/tasks

export const { useGetTasksQuery, useUpdateTaskMutation, useAddTaskMutation } =
  baseApi;
