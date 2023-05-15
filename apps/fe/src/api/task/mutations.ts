import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation CreateTask($id: ID!, $title: String!, $description: String) {
    createTask(input: { _id: $id, title: $title, description: $description }) {
      _id
      title
      description
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(input: { _id: $id }) {
      _id
      title
    }
  }
`;

export const EDIT_TASK = gql`
  mutation EditTask(
    $id: TaskId!
    $title: String
    $description: String
    $status: String
    $startDate: DateTime
    $endDate: DateTime
  ) {
    updateTask(
      id: $id
      input: {
        title: $title
        description: $description
        status: $status
        startDate: $startDate
        endDate: $endDate
      }
    ) {
      _id
      title
      description
      status
      startDate
      endDate
    }
  }
`;
