import { useState } from "react";
import { Edit, SimpleForm, TextInput, useTranslate } from "react-admin";


const Base = ({ }) => {

  const [count, setCount] = useState(0);
  const translate = useTranslate();

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div>
    <h1>{translate('count')}: {count}</h1>
    <button onClick={increment}>{translate('Tăng 1')}</button>
    <button onClick={decrement}>{translate('Giảm 1')}</button>
  </div>
  )
}

const EditPage = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="" label="" />
      <TextInput source="" label="" />
      <Base/>
    </SimpleForm>
  </Edit>
);

export default EditPage