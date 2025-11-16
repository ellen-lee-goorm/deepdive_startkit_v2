import React from 'react';

function LineCard({ title, children }) {
  return (
    <div className="flex flex-col gap-4 flex-1 bg-[var(--card-bg-dark)] rounded-2xl p-7 text-start">
      <h3 className="font-bold">{title}</h3>
      <hr className="border-0 border-t-[0.8px] border-[var(--line)]" />
      <div className="text-[16px]">{children}</div>
    </div>
  );
}

export default LineCard;
