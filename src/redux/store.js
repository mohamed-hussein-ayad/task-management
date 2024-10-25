import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";
import userSlice from "./features/user/userSlice";
import { baseApi } from "./features/api/baseApi";

const store = configureStore({
  reducer: {
    taskSlice: taskReducer,
    userSlice: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
