import Image from 'next/image';
import React from 'react';
import { Nunito, Poppins } from 'next/font/google';

const nunito = Nunito({
    weight:"400"
});

const poppins = Poppins({
    weight:"400"
})
const Hero = () => {
    return (
        <div
            className="hero min-h-[94vh]"
            style={{
                backgroundImage:
                    "url(https://foodsforhealth.osu.edu/sites/default/files/styles/widescreen_large/public/media/image/2025/01/adobestock_896621400.jpg)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content ">
                <div className='grid md:grid-cols-2 gap-4 items-center grid-cols-1 '>
                    <div>
                        <h1 className={`${nunito.className} font-bold text-5xl`}>
                            Enjoy our enlighten dishh
                        </h1>
                        <br />
                        <p className={`${poppins.className}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, consectetur. Nobis error, saepe soluta omnis consectetur nam, velit alias perspiciatis cupiditate minus reprehenderit temporibus provident. Odio quo delectus corrupti blanditiis possimus nam magnam ipsam autem assumenda. Facere, consectetur at! Quis, impedit facilis exercitationem vel quibusdam itaque dolor modi iusto atque!</p>
                        <br />
                    <button className='btn  rounded-2xl bg-green-600 text-white '>Check Dish</button>
                    </div>
                    <div>
                        <Image src="https://www.pngall.com/wp-content/uploads/15/Nachos-PNG.png" width={1020} height={800} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;