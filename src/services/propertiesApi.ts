import { retry } from "@reduxjs/toolkit/query/react";
import { api } from "./api";

export interface Property {
  id: number;
  name: string;
  created_at: string;
}

type PropertysResponse = Property[];

export const propertiesApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProperties: build.query<PropertysResponse, void>({
      query: () => ({ url: "properties" }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Property", id } as const)),
        { type: "Property" as const, id: "LIST" }
      ]
    }),
    addProperty: build.mutation<Property, Partial<Property>>({
      query: (body) => ({
        url: `properties`,
        method: "POST",
        body
      }),
      invalidatesTags: [{ type: "Property", id: "LIST" }]
    }),
    getProperty: build.query<Property, number>({
      query: (id) => `properties/${id}`,
      providesTags: (_property, _err, id) => [{ type: "Property", id }]
    })
  }),
  overrideExisting: true
});

export const {
  useAddPropertyMutation,
  useGetPropertyQuery,
  useGetPropertiesQuery
} = propertiesApi;
