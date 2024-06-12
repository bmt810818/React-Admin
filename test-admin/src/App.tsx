import {
  Admin,
  Resource,
} from "react-admin";
import { dataProvider } from "./provider";
import { BaseList } from "./components";

console.log('====dataProvider :', dataProvider)
export const App = () => 
<Admin
  dataProvider={dataProvider}
>
  <Resource name="base" list={BaseList}/>
</Admin>;
