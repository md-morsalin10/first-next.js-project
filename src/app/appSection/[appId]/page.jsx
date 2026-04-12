import InstallToggleBtn from "@/components/appPage/InstallToggleBtn";
import RatingChart from "@/components/RatingChart/RatingChart";
import Image from "next/image";
import Link from "next/link";
import { BiSolidLike } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";


const AppsDetails = async ({ params }) => {
    const { appId } = await params;
    const res = await fetch("http://localhost:3000/data.json");
    const allData = await res.json();

    const app = allData.find((app) => app.id == appId);
    console.log(app);
    const rating = app.ratings
    const size = app.size

  


    return (
        <div className='container mx-auto p-10 pt-10 '>
            <div className='group md:flex justify-baseline gap-4 p-6 pt-4 border bg-linear-to-r font-bold from-[#c927c9] to-[#8B5CF6] border-slate-300 rounded-2xl
            hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out hover:border-purple-400'>
                <div className='group items-center p-2 bg-white rounded-2xl m-2 overflow-hidden'>
                    <Image
                        src={app.image}
                        alt="image"
                        width={300}
                        height={300}
                        className='h-80 w-80 object-contain rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-105'
                    ></Image>
                </div>
                <div className='space-y-8'>
                    <div className='space-y-2'>
                        <h2 className='text-slate-50 font-bold text-3xl'>{app.title}</h2>
                        <span className='text-gray-100 flex gap-2'>Developed By:<p className='text-gray-200'>{app.companyName}</p></span>
                    </div>
                    <hr className='text-gray-300' />
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        <div className='flex flex-col justify-center items-center'>
                            <FiDownload className='text-purple-600 font-bold text-6xl' />
                            <p className='text-slate-50'>Downloads</p>
                            <h2 className='text-4xl md:text-5xl font-bold text-slate-50'>{app.downloads}</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <IoMdStar className='text-[#FF8811] font-bold text-6xl' />
                            <p className='text-slate-50'>Rating</p>
                            <h2 className='text-4xl md:text-5xl font-bold text-slate-50'>{app.ratingAvg}</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <BiSolidLike className='text-purple-600 font-bold text-6xl' />
                            <p className='text-slate-50'>Review</p>
                            <h2 className='text-4xl md:text-5xl font-bold text-slate-50'>{app.reviews}</h2>
                        </div>
                    </div>
                    <div>
                        <InstallToggleBtn size={size}></InstallToggleBtn>
                        <Link href={"/appSection"}><button className="btn btn-info hover:btn-primary mx-8">Back to Apps</button></Link>
                    </div>
                </div>
            </div>
            <div>
                <RatingChart rating={rating}></RatingChart>
            </div>
            <div className='space-y-3 pt-5'>
                <p className='text-2xl font-semibold text-slate-50'>Description</p>
                <p className='text-slate-50'>{app.description}</p>
            </div>
        </div>

    );
};

export default AppsDetails;