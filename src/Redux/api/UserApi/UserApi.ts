import { TResponseRedux, TUser } from "../../../Types";
import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["users"],
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response.data,
        };
      },
    }),

    createUser: builder.mutation({
      query: (body) => ({
        url: "/users/create-user",
        method: "POST",
        body,
      }),
      invalidatesTags: ["users"],
    }),

    updateUser: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/users/${data._id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["users"],
    }),

    deleteAUser: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateUserMutation,
  useCreateUserMutation,
  useDeleteAUserMutation,
} = userApi;
