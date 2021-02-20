import React from 'react'
import { Comment as TComment } from 'components/views/types'

type Props = {
  comment: TComment
}

const Comment: React.FC<Props> = ({ comment }): React.ReactElement => {
  return <span dangerouslySetInnerHTML={{ __html: comment.text }} />
}

export default Comment
