import React from 'react';
import Image from 'next/image';
import bg from '../components/bgc.jpg'

const Backgroundimg = () => {
  return (
    <div className=" -z-10 top-0 left-0 w-full h-full overflow-hidden fixed">
    <Image src={bg} className="w-full h-full  object-fill opacity-25" alt='bg' ></Image>
    </div>
  );
};

export default Backgroundimg;
