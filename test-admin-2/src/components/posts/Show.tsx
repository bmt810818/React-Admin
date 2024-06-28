import { useGetIdentity, useGetOne } from "react-admin"
import PostEdit from "./Edit"

const PostDetail = ({ id }) => {
  const { data: post, isPending: isPendingPost } = useGetOne('posts', { id })
  const { data: identity, isPending: isPendingIdentity } = useGetIdentity()
  if (isPendingPost || isPendingIdentity) return <>Loading...</>
  if (!post.lockedBy || post.lockedBy === identity.id) {
    return <PostEdit post={post}/>
  } else {
    return ""
  }

}