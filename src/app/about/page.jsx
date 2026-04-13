import React from 'react';
import { Nunito } from 'next/font/google';

const poppins = Nunito({
    weight:"400"
});

const About = () => {
    return (
        <div>
            <p className={`${poppins.className} leading-8 p-5`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, reprehenderit inventore. Enim optio, ut ullam aperiam possimus accusantium, ad adipisci vel incidunt voluptates accusamus facere omnis exercitationem in saepe doloribus nobis nisi, cupiditate modi? Pariatur odit impedit similique nemo totam ut minima enim minus facere doloribus rerum, placeat, eligendi, voluptatibus molestias ab. Voluptatem sequi, modi ducimus optio quis autem consequatur deserunt ab, quae id similique beatae suscipit consequuntur exercitationem molestias fuga ullam repellat laborum distinctio. Excepturi possimus distinctio odit aliquam natus eaque error deleniti ab nostrum, fugiat nisi tenetur corrupti! Ut cum odit est eveniet minus nam aspernatur dolorem inventore!
            </p>
        </div>
    );
};

export default About;