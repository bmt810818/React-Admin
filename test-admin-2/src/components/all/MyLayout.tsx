import { Layout } from "react-admin"
import MyAppBar from "./MyAppbar"

const MyLayout = ({ children }) => {
  return (
    <Layout appBar={MyAppBar}>
        {children}
    </Layout>
  )
}

export default MyLayout