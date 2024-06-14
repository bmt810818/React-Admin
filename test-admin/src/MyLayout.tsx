import { Layout, LayoutProps } from "react-admin";
import { MyMenu } from "./MyMenu";
import { JSX } from "react/jsx-runtime";

export const MyLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => <Layout {...props} menu={MyMenu} />