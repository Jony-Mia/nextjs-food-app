"use client"
import Image from "next/image";
import Link from "next/link";

const Food = ({id, name, image, price, rating, category, alternative_names }) => {

    return (
        <> 
        <div className="card bg-base-100 shadow-sm p-3 shadow-green-500 ">
                <figure>
                    <Image src={image} alt={category} height={"200"} width={"200"} />
                </figure>
                <div className="card-body">
                    <span className="btn text-left w-fit h-xl rounded-full btn-sm btn-warning">{category}</span>
                    <div className="flex justify-between">
                        <h2 className="text-lg font-bold  line-clamp-1 " >{name}</h2>
                        <p className="text-xl text-white">{price}</p>
                    </div>
                    <ul className="mt-3 flex flex-col gap-2 text-xs">
                        {
                            alternative_names.map((values, index) => {
                                return (
                                    <li key={index} className="flex  items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{values}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="mt-6">
                        <Link href={`food/${id}`} ><button className="btn btn-primary ">View Details</button></Link>
                    </div>
                </div>
            </div> 
            </>
    )
}
export default Food;