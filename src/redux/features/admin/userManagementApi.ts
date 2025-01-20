import { TQueryParam, TResponseRedux } from "../../../types/global";
import {
  TAdmin,
  TFaculty,
  TStudent,
  TUser,
} from "../../../types/userManagement.type";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TStudent[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    createStudent: builder.mutation({
      query: (body) => ({
        url: "/users/create-student",
        method: "POST",
        body,
      }),
    }),
    getStudentById: builder.query({
      query: (id: string) => ({
        url: `/students/${id}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TStudent>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    createAdmin: builder.mutation({
      query: (body) => ({
        url: "/users/create-admin",
        method: "POST",
        body,
      }),
    }),
    getAllAdmins: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/admins",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAdmin[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAdminById: builder.query({
      query: (id: string) => ({
        url: `admins/${id}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TAdmin>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    createFaculty: builder.mutation({
      query: (body) => ({
        url: "/users/create-faculty",
        method: "POST",
        body,
      }),
    }),
    getAllFaculties: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/faculties",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TFaculty[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getFacultyById: builder.query({
      query: (id: string) => ({
        url: `faculties/${id}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TFaculty>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAllUsers: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/users",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TUser[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const {
  useGetAllAdminsQuery,
  useGetAdminByIdQuery,
  useCreateAdminMutation,
  useGetAllFacultiesQuery,
  useGetFacultyByIdQuery,
  useCreateFacultyMutation,
  useGetAllStudentsQuery,
  useGetStudentByIdQuery,
  useCreateStudentMutation,
  useGetAllUsersQuery,
} = userManagementApi;
