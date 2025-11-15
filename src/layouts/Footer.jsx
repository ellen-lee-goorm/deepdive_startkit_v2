import React from 'react';

function Footer() {
  return (
    <footer className="flex flex-col gap-2 w-full text-[var(--footer)] text-start pb-28">
      <hr className="border-0 border-t-[0.8px] border-t-[var(--line)] mb-8" />
      <p>
        해당 문서는 DEEP DIVE 훈련생에게 제공되는 Start Kit로, 외부 유출을
        엄격히 금지합니다.
      </p>
      <p>전화 031-600-8543 | 이메일 k-digital@goorm.io</p>
      <p>© goorm Inc. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
