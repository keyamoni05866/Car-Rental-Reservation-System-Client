import { baseApi } from "../../api/baseApi";

const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllComments: builder.query({
      query: () => ({
        url: "/comments",
        method: "GET",
      }),
      providesTags: ["comment"],
    }),

    createComment: builder.mutation({
      query: (body) => ({
        url: "/comments/create-comment",
        method: "POST",
        body,
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});

export const { useCreateCommentMutation, useGetAllCommentsQuery } = commentApi;
