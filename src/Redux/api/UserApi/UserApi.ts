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

    updateUser: builder.mutation({
      query: ({ id, data }) => {
        console.log(data);
        return {
          url: `/users/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = userApi;
