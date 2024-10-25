import axios from "axios";
import React from "react";
import { useAppSelector } from ".";
import { selectAuth } from "@/features";

export function useGet<T>(url: string) {
    const { token } = useAppSelector(selectAuth);

    const [data, setData] = React.useState<T>();
    const [error, setError] = React.useState<Error>();
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const handle = async () => {
            setLoading(true);

            try {
                const res = await axios.get<T>('/api' + url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: token,
                    },
                });
                setData(res.data);
            } catch (error) {
                console.log(error);
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        handle();
    }, []);

    return { isLoading, error, data };
}
