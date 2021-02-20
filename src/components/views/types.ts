enum ContentType {
  story,
  comment
}

export type Comment = {
  id: number
  author: string
  type: ContentType.comment
  text: string
  children: Comment[]
  created_at: string
  created_at_i: number
  points: number
}

export type Story = {
  id: number
  title: string
  author: string
  type: ContentType.story
  url: string
  children: Comment[]
  created_at: string
  created_at_i: number
  points: number
}
