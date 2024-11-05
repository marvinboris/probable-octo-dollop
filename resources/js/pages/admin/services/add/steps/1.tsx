import { Input, TextArea } from "@/components";

export function Step1() {
  return (
    <>
      <Input name="name" label="Name" />
      <Input name="link" label="Link" />
      <div className="lg:col-span-2 lg:row-span-2">
        <Input name="description" label="Description" />
      </div>
      <div className="lg:col-span-2 lg:row-span-3">
        <TextArea name="body" label="Body" />
      </div>
    </>
  );
}
