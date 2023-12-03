import { QuestionsOptions, useCheckAnswerRepository, useQuestionsRepository } from '@/app/repositories/quiz/repository'

export const useQuestionsUsecase = (length: number) => {
  const options: QuestionsOptions = {
    variables: { limit: length ?? 1 },
    skip: length === null,
    fetchPolicy: 'network-only',
  }
  return useQuestionsRepository(options)
}

export const useCheckAnswerUsecase = () => {
  const checkAnswer = useCheckAnswerRepository()
  return checkAnswer
}
