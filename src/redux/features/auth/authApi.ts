import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentails) => ({
        url: "/auth/login",
        method: "POST",
        body: credentails,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
