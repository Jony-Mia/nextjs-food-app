import { Nunito } from 'next/font/google';
import axios from "axios";
import Image from 'next/image';
import { getCategory } from '@/api/API';

const nunito = Nunito({
    weight: "400"
});
const Category = async () => {
    let data = await getCategory()
    let filt =  [...new Set(data.filter(item => item.category!=="dish"))];
    
    return (
        <div className='mt-10'>
            <h1 className={`${nunito.className} text-4xl my-5 font-bold text-center`}>Popular Categories</h1>
            <div className='grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6  grid-cols-2 w-[90%] m-auto gap-5'>
                {filt.slice(0,6).map(cat=>{
                    if (cat.id==="food_009") {
                        cat.category="Salad"
                    }
                    return(
                        <div key={cat.id} className='flex flex-col justify-between shadow shadow-green-300 p-3 rounded-2xl' >
                            <Image src={cat.image_link} width={200} height={250} alt={cat.dish_name} />
                            <h3 className={` ${nunito.className} text-center capitalize font-bold  sm:text-sm md:text-3xl text-xl lg:text-4xl `}>{cat.category}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Category;