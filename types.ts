export type Technology = {
  name: string,
  icon: string
}

export type Question = {
  id: number,
  title: string,
  question: string,
  type: Type,
  image?: string | null,
  options?: {
    id: number,
    text: string,
    isCorrect: boolean
  }[]
}

export type Type = 'radio' | 'checkbox' | 'text'