import { Reason } from "@types";

export default function Block({
    body,
    index,
    title,
}: Reason & { index: number }) {
    return (
        <div className="group rounded-[32px] border-2 border-black/5 transition-all duration-100 hover:border-primary/20 py-5 px-6 relative overflow-hidden">
            <div className="border size-[70px] border-black/5 transition-all duration-100 group-hover:border-transparent bg-transparent group-hover:bg-primary rounded-full absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

            <div>
                <div className="flex justify-center items-center rounded-lg bg-black/10 group-hover:bg-primary text-black transition-all duration-100 group-hover:text-white border border-black/10 group-hover:border-transparent size-[54px] font-bold">
                    0{index + 1}
                </div>
            </div>

            <div className="mt-10 text-center font-bold text-black">
                {title}
            </div>

            <div className="w-5 h-2 bg-primary rounded-full mx-auto mt-5 mb-2" />

            <div className="text-sm text-center line-clamp-3">{body}</div>
        </div>
    );
}
