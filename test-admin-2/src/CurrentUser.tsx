import { Loading, useGetIdentity } from "react-admin"

const UserName = ({ userId }) => {
  const { identity, isPending, error } = useGetIdentity()
  if (isPending) return <Loading />
  if (error) return <Error />
  if (!identity) return null

  return <>{identity.fullName}</>
}