'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from '@/navigation';
import { useLocale } from 'next-intl';
import { Link } from '@/navigation';

function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div>
      <button>
        <Link
          className='text-custom-blue md:hover:bg-transparent md:border-0 flex items-center flex-nowrap ltr:pl-2 rtl:pr-2 py-2 hover:text-[#095668] focus:hover:text-[#095668] md:hover:text-[#095668]  md:p-0'
          locale={locale === 'ar' ? 'en' : 'ar'}
          href={pathname}
          title='Change Language'
        >
          <FontAwesomeIcon icon={faGlobe} className='mt-1 ltr:mr-2 rtl:ml-2' />
          <span className='font-semibold'>
            {locale === 'ar' ? 'English' : 'عربي'}
          </span>
        </Link>
      </button>
    </div>
  );
}

export default LanguageSwitcher;
