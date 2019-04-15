export const GET_LISTING_QUERY = `
query ($id: ID!) {
  getListing (id: $id) {
    title,
    price,
    description
  }
}
`;

export const CREATE_LISTING_MUTATION = `
mutation (
  $price: Int!,
  $title: String!,
  $description: String!,
  $imgURL: String!
  ) {
    createListing (
      price: $price,
      title: $title,
      description: $description,
      imgURL: $imgURL
      ) {
        id
    }
  }
`;

