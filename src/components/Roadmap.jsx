import React from 'react';

function Roadmap({ title, description, day, children }) {
  return (
    <div className="flex gap-7">
      <div className="text-sm font-bold rounded-4xl px-5 py-2 h-fit bg-[#539CCA]">
        D-{day}
      </div>
      <div className="flex flex-col gap-6 text-start">
        <div>
          <h3 className="text-2xl font-bold mb-1.5">{title}</h3>
          <p className="text-lg text-[var(--description)]">{description}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Roadmap;
