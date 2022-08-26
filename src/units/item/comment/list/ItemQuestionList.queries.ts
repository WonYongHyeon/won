import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(useditemId: $useditemId, page: $page) {
      _id
      contents
      user {
        _id
        name
      }
      createdAt
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
    }
  }
`;

export const DELETE_USEDITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;
