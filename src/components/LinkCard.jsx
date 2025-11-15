import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';

function LinkCard({ title, description, linkUrl, linkTitle, children }) {
  return (
    <div className="flex gap-14 w-full text-start text-[14px]">
      <section className="flex flex-col flex-1 bg-[var(--card-bg)] px-10 py-8 rounded-2xl">
        <div className="flex gap-4 items-center mb-6">
          <h3 className="text-[22px] font-bold">{title}</h3>
          <p className="text-sm text-[var(--description)]">{description}</p>
        </div>
        {children}
      </section>
      <a
        href={linkUrl}
        target="_blank"
        className="max-w-16 flex flex-col justify-center items-center text-center gap-1 whitespace-pre-line"
      >
        <IoIosArrowDropright size={56} />
        <p className="font-bold">{linkTitle}</p>
      </a>
    </div>
  );
}

export default LinkCard;
