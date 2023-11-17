import api from "../../app/api";

interface LoginRequest {}

interface Result {
  id: number;
  name: string;
}

interface LoginRespone {
  results: Result[];
}

export const auth = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginRespone, LoginRequest>({
      query: (request) => ({ url: "login", method: "POST", body: request }),
      invalidatesTags: [{ type: "Auth", id: "LIST" }],
    }),
    protected: build.query<{ message: string }, void>({
      query: () => "prodected",
      providesTags: (result) => [{ type: "Auth", id: result?.message }],
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useProtectedQuery } = auth;
