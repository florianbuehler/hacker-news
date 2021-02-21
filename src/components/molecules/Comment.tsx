import React from 'react'
import { getTimePassed } from 'utils/dateUtils'
import { Comment as TComment } from 'components/views/types'

type Props = {
  comment: TComment
}

const Comment: React.FC<Props> = ({ comment }): React.ReactElement => {
  const timePassed = getTimePassed(comment.created_at_i)

  const childComments =
    comment.children.length > 1 ? (
      <ul>
        {comment.children.map((comment) => {
          return (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          )
        })}
      </ul>
    ) : null

  return (
    <div className="mt-4 pl-3 ml-2 border-l-2 border-teal-500 dark:border-teal-700">
      <p className="mb-1">
        <span className="font-bold dark:text-teal-600">{comment.author}</span>
        <span className="text-grey-500"> {timePassed} ago</span>
      </p>
      <p dangerouslySetInnerHTML={{ __html: comment.text }} />
      {childComments}
    </div>
  )
}

export default Comment
