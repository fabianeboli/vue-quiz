export type Technology = {
  name: string,
  icon: string
}

export type Question = {
  id: number,
  title: string,
  description: string,
  type: Type,
  image?: string | null,
  options?: {
    id: string,
    text: string,
    isCorrect: boolean
  }[]
}

export type Type = 'radio' | 'checkbox' | 'text'