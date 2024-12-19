import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';

import SUSTech from '@/data/experiences/sustech.mdx';
import UwMd from '@/data/experiences/uw.mdx';


export default function ExperienceCard({
  institution,
  role,
  description,
  date,
  img,
  slug
}) {

  let MdFunc = () => <p>{"not found mdx code=113"}</p>;
  if (slug === 'sustech') {
    MdFunc = SUSTech;
  } else if (slug === 'uw') {
    MdFunc = UwMd;
  }

  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-5 min-h-[150px]">
      <div className="flex items-center justify-center md:w-1/4">
        <Image src={img} alt={institution} width={120} height={120} />
      </div>
      <div className="flex flex-col gap-3 md:w-3/4">
        <p className="text-xl font-semibold" >
          <span className="" style={{ color: 'rgb(51, 161, 201)' }}> {institution} </span>
          <br />
          <span className="p">{date}</span> 
          <br />
          {role}
        </p>

        {/* <h2 className="text-lg font-medium">
        </h2> */}

        <article className="flex flex-col gap-2 text-justify">
          <MdFunc />
        </article>
      </div>
    </div>
  );
}
