"use server";
import { IPostProps } from '@/types';
import { request, gql } from 'graphql-request';

const API_ENDPOINT = process.env.API_ENDPOINT

export const getPosts = async function () {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            arabic
            title
            excerpt
            image {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }  
  `
  const result = await request(API_ENDPOINT as string, query) as any;
  return result.postsConnection.edges.map((edge: any) => edge.node) as IPostProps[];
  // return result?.postsConnection.edges as IPostProps[];
}


// export const getCategories = async function () {
//   const query = gql`
//     query getCategories {
//       categories {
//         name
//         slug
//         posts {
//           slug
//         }
//       }
//     }
//   `
//   const result = await request(API_ENDPOINT, query);
//   return result.categories
// }


// export const getPostDetails = async function (slug) {
//   const query = gql`
//     query getPostDetails($slug: String!) {
//       post(where: {slug: $slug}) {
//         createdAt
//         title
//         slug
//         excerpt
//         arabic
//         author {
//           name
//           photo {
//             url
//           }
//           bio
//           id
//         }
//         content {
//           html
//           text
//         }
//         categories {
//           name
//           slug
//         }
//         image {
//           url
//         }
//       }
//     }
//   `
//   const result = await request(API_ENDPOINT, query, { slug });
//   return result.post;
// }


// export const getSimilarPosts = async function (slug, categories) {
//   const query = gql`
//     query getSimilarPosts($slug: String!, $categories: [String!]) {
//       posts(
//         where: {slug_not: $slug, categories_some: {AND: {slug_in: $categories}}}
//         last: 3
//       )  {
//         createdAt
//         title
//         slug
//         image {
//           url
//         }
//       }
//     }
//   `

//   const result = await request(API_ENDPOINT, query, { slug, categories });
//   return result.posts;
// }
// export const getLatestPosts = async function (slug) {
//   const query = gql`
//     query getSimilarPosts($slug: String!) {
//       posts(last: 5, orderBy: publishedAt_ASC) {
//         createdAt
//         title
//         slug
//         image {
//           url
//         }
//       }
//     }
//   `
//   const result = await request(API_ENDPOINT, query, { slug });
//   return result.posts;
// }


// export const getCategoryPosts = async function (category) {
//   const query = gql`
//     query getCategoryPosts($category: String!) {
//       posts(
//         where: {categories_some: {AND: {slug: $category}}}
//       )  {
//         author {
//           bio
//           name
//           id
//           photo {
//             url
//           }
//         }
//         createdAt
//         slug
//         title
//         excerpt
//         image {
//           url
//         }
//         categories {
//           name
//           slug
//         }
//       }
//     }
//   `

//   const result = await request(API_ENDPOINT, query, { category });
//   return result.posts;
// }
