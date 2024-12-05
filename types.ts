export type Technology = {
  name: string,
  icon: string
}

export type Question = {
  id: string,
  title: string,
  description: string,
  type: Type,
  image?: string | null,
  options?: Answer[]
}

export type Answer = {
  id: string,
  text: string,
  isCorrect: boolean
}


export type Type = 'radio' | 'checkbox' | 'text'