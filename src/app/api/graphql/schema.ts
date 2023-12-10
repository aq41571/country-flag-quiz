import { gql } from '@apollo/client'

const typeDefs = gql`
  type Continent {
    name: String!
    code: String!
  }

  type Country {
    id: Int!
    code: String!
    name: String!
    emoji: String!
    phone: String!
    continent: Continent!
  }

  type CheckAnswerResult {
    correct: Country!
    answer: Country!
  }

  type QuestionBody {
    emoji: String!
  }

  type Option {
    id: Int!
    name: String!
  }

  type Question {
    question: QuestionBody!
    options: [Option!]
  }

  type Query {
    countries: [Country!]
    countryById(id: Int!): Country
    countryByEmoji(emoji: String!): Country
    questions(limit: Int!, doneIds: [Int!]): [Question!]
    checkAnswer(quizEmoji: String!, answerId: Int!): CheckAnswerResult!
  }
`

export default typeDefs
