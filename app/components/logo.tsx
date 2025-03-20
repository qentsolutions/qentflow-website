import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image src="/logo.png" alt="Qentflow Logo" height={30} width={30} className="rounded-lg" />
                <div className="relative font-black mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 py-4">
                        <span className="z-40">Qentflow</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};