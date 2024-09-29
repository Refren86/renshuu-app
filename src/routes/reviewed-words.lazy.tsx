import { createLazyFileRoute } from '@tanstack/react-router'
import { ReviewedWordsView } from '@/containers/ReviewedWordsView/ReviewedWordsView'

export const Route = createLazyFileRoute('/reviewed-words')({
  component: ReviewedWordsView,
})
