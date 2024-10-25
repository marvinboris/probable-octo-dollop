import { Admin, Message } from "@types";
import axios from "axios";

export const getCheck = async () => {
    const res = await axios.get<{
        role: string;
        data: Admin | Message;
    }>("/api/account");
    return res.data;
};

// Login
export const postAdminLogin = async (data: {
    email: string;
    password: string;
}) => {
    const res = await axios.post<{
        token: string;
        expires_at: number;
        data: Admin | Message;
    }>("/api/admin/login", data);
    return res.data;
};

