import { News } from "@types";
import { Calendar, Message } from "iconsax-react";
import moment from "moment";
import { Link } from "react-router-dom";

export function ServiceBlock({
    title,
    body,
    photo,
    created_at,
    comments,
    link,
}: News) {
    return (
        <Link to={link} className="block relative">
            <div className="absolute top-0 inset-x-3 md:inset-x-5 rounded-3xl overflow-clip h-60">
                <img
                    src={photo}
                    alt={title}
                    className="absolute inset-0 size-full object-cover"
                />
            </div>

            <div className="shadow-xl rounded-3xl px-3 md:px-5 pb-5 md:pb-7 pt-32 mt-32 bg-white">
                <div className="font-bold line-clamp-2 text-lg">{title}</div>

                <p className="mt-4 line-clamp-2">{body}</p>

                <div className="mt-4 flex gap-4 font-medium">
                    <div className="bg-stone-100 flex items-center p-2.5 gap-2.5 rounded">
                        <Calendar className="size-3.5" />
                        <span>{moment(created_at).fromNow()}</span>
                    </div>

                    <div className="bg-stone-100 flex items-center p-2.5 gap-2.5 rounded">
                        <Message className="size-3.5" />
                        <span>{comments}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
