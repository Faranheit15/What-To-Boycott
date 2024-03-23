import { Form } from "antd";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Search = () => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        name="form"
        onFinish={handleSubmit}
      >
        <div className="grid items-center justify-center grid-cols-1 mt-2 md:grid-cols-2 md:gap-4">
          <Input
            inputId="search"
            label=""
            required={true}
            placeholder="What do you want to seach for?"
          />
          <div className="grid grid-cols-2 gap-2 md:grid-cols-2">
            <Button btnName="Search" handleClick={handleSubmit} />
            <Button btnName="Reset" />
          </div>
        </div>
      </Form>
    </>
  );
};

export default Search;
