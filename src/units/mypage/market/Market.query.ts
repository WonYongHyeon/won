import { gql } from "@apollo/client";

export const FETCH_USEDITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      price
      soldAt
      remarks
    }
  }
`;

export const FETCH_USEDITEMS_COUNT_I_BOUGHT = gql`
  query fetchUseditemsCountIBought {
    fetchUseditemsCountIBought
  }
`;

export const FETCH_USEDITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
    }
  }
`;

export const FETCH_USEDITEMS_COUNT_I_SOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;

export const FETCH_USEDITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
    }
  }
`;

export const FETCH_USEDITEMS_COUNT_I_PICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      status
      statusDetail
      createdAt
      useditem {
        name
        price
        createdAt
      }
    }
  }
`;
