import { Nunito } from 'next/font/google';
import axios from "axios";
import Image from 'next/image';
import { getCategory } from '@/api/API';

const nunito = Nunito({
    weight: "400"
});
const Category = async () => {
    let data = await getCategory()
    console.log(data);
    
    return (
        <div>
            <h1 className={`${nunito.className} text-4xl my-5 font-bold text-center`}>Popular Categories</h1>
            <div className='flex flex-wrap'>
                {data.slice(0,6).map(cat=>{
                    return(
                        <Image  loading="eager" src={cat.image_link} key={cat.id} width={300} height={300} alt={cat.category} />
                    )
                })}
            </div>
        </div>
    );
};

export default Category;