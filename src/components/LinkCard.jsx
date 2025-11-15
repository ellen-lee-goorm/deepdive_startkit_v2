import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';

function LinkCard({ title, description, linkUrl, linkTitle, children }) {
  return (
    <div>
      <section>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {children}
      </section>
      <a href={linkUrl}>
        <IoIosArrowDropright />
        <p>{linkTitle}</p>
      </a>
    </div>
  );
}

export default LinkCard;
