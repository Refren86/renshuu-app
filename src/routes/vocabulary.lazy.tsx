import { createLazyFileRoute } from '@tanstack/react-router'

import { VocabularyView } from '@/containers/VocabularyView/VocabularyView'

export const Route = createLazyFileRoute('/vocabulary')({
  component: VocabularyView,
})
