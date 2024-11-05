import { Input, Loading, TextArea } from "@/components";
import { useService } from "@/hooks";
import { Navigate, useParams } from "react-router-dom";

export function Step1() {
    const { id } = useParams();
    const { data: service, error, loading } = useService(id);
    if (loading || !service) return <Loading />;

    const { name, link, description, body } = service;

    return (
        <>
            <Input name="name" label="Name" defaultValue={name} />
            <Input name="link" label="Link" defaultValue={link} />
            <div className="lg:col-span-2 lg:row-span-2">
                <Input
                    name="description"
                    label="Description"
                    defaultValue={description}
                />
            </div>
            <div className="lg:col-span-2 lg:row-span-3">
                <TextArea name="body" label="Body" defaultValue={body} />
            </div>
        </>
    );
}
