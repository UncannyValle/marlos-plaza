import {buttonVariants} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <p className={'text-xl pb-4'}> New website coming soon</p>
                <h1 className="text-9xl">Marlo&#39;s Plaza</h1>
                <p className={'text-3xl pt-4'}>Flourish in motion, live in comfort</p>
                <div className={'p-4'}>
                    <Link
                        className={`${buttonVariants({variant: 'link'})} text-xl`}
                        href='https://maps.apple.com/?address=Avenida%20Revoluci%C3%B3n%20440,%20Miguel%20Hidalgo,%2080090%20Culiac%C3%A1n,%20Sin.,%20Mexico&ll=24.805635,-107.366432&q=Avenida%20Revoluci%C3%B3n%20440&t=r'> Location:
                        440 Ave. Revolucion</Link>
                    <Link className={buttonVariants({variant: 'default'})} href='mailto:info@marlosplaza.com'>Email
                        us</Link>
                </div>


            </div>

        </div>
    )
}