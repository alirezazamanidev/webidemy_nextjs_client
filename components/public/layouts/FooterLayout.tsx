import LoGoPath from "@/public/images/photo/WEBIDEMI-600x600.png";
import Image from "next/image";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

export default function FooterLayout() {

    return (
        <>
            <footer className=" container mx-auto p-5 mt-28 border-t border-gray-500 ">

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4   justify-between">
                    <div className=" flex flex-col ">
                        <div className=" flex items-center gap-3">
                            <Image src={LoGoPath} alt="logo" width={70} height={80} />
                            <h2 className=" text-gray-300 text-2xl font-bold">درباره وبیدمی</h2>
                        </div>
                        <p className=" text-gray-400 max-w-lg mt-3">وبیدمی، جایی که هنر دیجیتال و تکنولوژی به یکدیگر می‌آمیزند. این پلتفرم پویا، فضایی است که هر روز با آثار خلاقانه و ایده‌های نوآورانه پر می‌شود. از نقاشی‌های دیجیتال تا انیمیشن‌های جذاب، وبیدمی جایی است که تماشاگران به هنر دیجیتال و خلاقیت متصل می‌شوند.

                            به جمع ما بپیوندید و از دنیایی پرانرژی و شگفت‌انگیز با هنرمندی‌های دیجیتال لذت ببرید. ساخته شده توسط: علیرضا زمانی.</p>
                    </div>

                    <div>
                        <h2 className=" text-gray-200 text-2xl ">بخش های سایت</h2>

                        <ul className=" text-gray-400 mt-2">
                            <li className="">

                                <Link href='/courses' className="flex items-center gap-1">
                                    <GoDotFill />
                                    <span>دوره های آموزشی</span>
                                </Link>
                            </li>
                            <li className="">

                                <Link href='/' className="flex items-center gap-1">
                                    <GoDotFill />
                                    <span> پادکست ها</span>
                                </Link>
                            </li>
                            <li className="">

                                <Link href='/' className="flex items-center gap-1">
                                    <GoDotFill />
                                    <span> مقالات  </span>
                                </Link>
                            </li>
                            <li className="">

                                <Link href='/courses' className="flex items-center gap-1">
                                    <GoDotFill />
                                    <span>درباره ما</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </footer>

        </>
    )
}