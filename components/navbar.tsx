'use client';

import { Link } from '@/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import LanguageSwitcher from './language-switcher';

const Navbar = ({
  NavbarTranslations,
  SearchbarTranslations,
}: {
  NavbarTranslations: {
    home: string;
    rent: string;
    sale: string;
    contact: string;
    blogs: string;
    favorite: string;
    login: string;
  };
  SearchbarTranslations: {
    rent: string;
    sale: string;
    searchRent: string;
    searchSale: string;
    searchArticles: string;
    allsearches: string;
    allsearchessale: string;
    searchContact: string;
    searchReads: string;
    location_searchbar_placeholder: string;
    no_options: string;
    all_property_type: string;
    property_type: string;
    bed: string;
    bath: string;
    beds: string;
    baths: string;
    reset: string;
    prices: string;
    finish_level: string;
    all_finish_level: string;
    search: string;
    advanced_search: string;
    show: string;
    result: string;
    minprice: string;
    maxprice: string;
  };
}) => {
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [logged, setLogged] = useState('');
  const [user, setUser] = useState('');
  const [searchByRef, setSearchByRef] = useState('');

  const router = useRouter();
  const isArabic = locale === 'ar' ? true : false;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogged(localStorage.getItem('token') ?? '');
      setUser(localStorage.getItem('user') ?? '');
    }
  }, []);

  return (
    <nav
      className={`w-full transition-all sticky top-0 z-100`}
      dir={isArabic ? 'rtl' : 'ltr'} // Set direction based on language
      id='navbarID'
      style={{ zIndex: '999' }}
    >
      <div className='flex items-center justify-between mx-auto bg-gray-200 lg:justify-around z-999'>
        <div className='relative flex flex-wrap items-center justify-between w-full md:w-fit'>
          <Link href='/' title='Home'>
            <span>
              <Image
                src='/images/HPlogo.png'
                width={260}
                height={80}
                alt='Logo'
                title='House Point Egypt Logo'
                className='m-2 px-4 cursor-pointer'
                quality={50}
              />
            </span>
          </Link>
          <button
            className={
              `absolute top-8 px-2 py-1 rounded-md text-white md:hidden hover:text-[#095668] focus:text-[#095668] focus:bg-primary-dark focus:outline-none ${
                isArabic ? 'left-4' : 'right-4'
              }` // Adjust margin based on language
            }
            onClick={toggleMenu}
            aria-expanded={menuOpen ? 'true' : 'false'}
            aria-controls='headlessui-disclosure-panel'
            aria-label='HamMenu'
            name='HamMenu'
          >
            <svg
              className='w-6 h-6 fill-current text-[#095668]'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
              ></path>
            </svg>
          </button>
          <div
            className={`flex text-lg flex-col w-full my-5 md:hidden ${
              menuOpen ? '' : 'hidden'
            }`}
            id='headlessui-disclosure-panel'
          >
            <Link
              href={isArabic ? '/إيجار/عقارات' : '/rent/properties'}
              title='Rent'
            >
              <span
                className={`text-custom-blue rounded-md text-sm font-semibold outline-none hover:text-[#095668] focus:text-[#095668] transition-all focus:bg-primary-dark focus:outline-none w-full block px-4 py-2 ml-2 ${
                  isArabic ? 'text-right' : ''
                }`}
              >
                {NavbarTranslations.rent}
              </span>
            </Link>
            <Link
              href={isArabic ? '/بيع/عقارات' : '/sale/properties'}
              title='Sale'
            >
              <span
                className={`text-custom-blue rounded-md text-sm font-semibold outline-none hover:text-[#095668] focus:text-cyan-500 transition-all focus:bg-primary-dark focus:outline-none w-full block px-4 py-2 ml-2 ${
                  isArabic ? 'text-right' : ''
                }`}
              >
                {NavbarTranslations.sale}
              </span>
            </Link>
            <Link href='/reads' title='Reads'>
              <span
                className={`text-custom-blue rounded-md text-sm font-semibold outline-none hover:text-[#095668] focus:text-[#095668] transition-all focus:bg-primary-dark focus:outline-none w-full block px-4 py-2 ml-2 ${
                  isArabic ? 'text-right' : ''
                }`}
              >
                {NavbarTranslations.blogs}
              </span>
            </Link>
            <Link href='/contact' title='Contact Us'>
              <span
                className={`text-custom-blue rounded-md text-sm font-semibold outline-none hover:text-[#095668] focus:text-[#095668] transition-all focus:bg-primary-dark focus:outline-none w-full block px-4 py-2 ml-2 ${
                  isArabic ? 'text-right' : ''
                }`}
              >
                {NavbarTranslations.contact}
              </span>
            </Link>
            <div className='mx-4'>
              <LanguageSwitcher />
            </div>
            <div className='flex flex-col justify-center mx-2 mt-2'>
              {logged == '' && (
                <a
                  className='w-fit font-semibold mx-4 mb-2 px-8 py-1 text-center bg-white rounded text-[#095668]'
                  href='/login'
                  title='Login'
                >
                  {NavbarTranslations.login}
                </a>
              )}
              {logged !== '' && (
                <div className='flex items-center mx-2 mb-4'>
                  <div className='mx-2 underline text-custom-blue'>
                    {user && user}
                  </div>
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className='text-custom-blue ltr:mr-1 rtl:ml-1'
                    onClick={() => {
                      localStorage.removeItem('user');
                      localStorage.removeItem('email');
                      localStorage.removeItem('token');
                      setLogged('');
                      setUser('');
                    }}
                  />
                </div>
              )}
              <form
                className='w-fit mx-4 border border-custom-blue rounded bg-white flex'
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    let queryParams = [];

                    if (searchByRef)
                      queryParams.push(
                        `ref=${encodeURIComponent(searchByRef)}`
                      );
                    const url = `${
                      process.env.API_BASE_URL
                    }/property/getproperties?${queryParams.join('&')}`;
                    const responseProperties = await axios.get(url);
                    const filteredProperties =
                      responseProperties.data.properties;

                    let propertyLink = `/`;
                    let property = filteredProperties[0];
                    if (property.type === 'rent') {
                      propertyLink = propertyLink + SearchbarTranslations.rent;
                    } else {
                      propertyLink = propertyLink + SearchbarTranslations.sale;
                    }
                    if (isArabic) {
                      propertyLink =
                        propertyLink + '/' + property.propertyType.nameAr;
                      propertyLink = propertyLink + '/' + property.area.nameAr;
                      propertyLink =
                        propertyLink + '/' + property.subarea.nameAr;
                      propertyLink =
                        propertyLink +
                        '/' +
                        property.titleAr +
                        '-' +
                        property.refNumber;
                    } else {
                      propertyLink =
                        propertyLink +
                        '/' +
                        property.propertyType.name.toLowerCase();
                      propertyLink =
                        propertyLink + '/' + property.area.name.toLowerCase();
                      propertyLink =
                        propertyLink +
                        '/' +
                        property.subarea.name.toLowerCase();
                      propertyLink =
                        propertyLink +
                        '/' +
                        property.title.toLowerCase() +
                        '-' +
                        property.refNumber;
                    }

                    router.push(
                      propertyLink.toLowerCase().split(' ').join('-'),
                      undefined
                    );
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                <input
                  type='text'
                  placeholder='search by ref'
                  className='px-2 py-1 border rounded w-fit flex'
                  onChange={(e) => setSearchByRef(e.target.value)}
                />
                <button className='bg-custom-blue text-white px-4 py-1'>
                  Find
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='items-center hidden md:flex'>
          <div className='text-center'>
            <ul
              className={`items-center justify-${
                isArabic ? 'start' : 'end'
              } flex lg:pt-0 list-reset`}
            >
              <li>
                <Link
                  href={isArabic ? '/إيجار/عقارات' : '/rent/properties'}
                  title='Rent'
                >
                  <span
                    className={`text-custom-blue rounded-md text-sm font-semibold outline-none hover:text-[#095668] focus:text-[#095668] transition-all focus:bg-primary-dark focus:outline-none inline-block px-3 py-2 ${
                      isArabic ? 'text-right' : ''
                    }`}
                  >
                    {NavbarTranslations.rent}
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={isArabic ? '/بيع/عقارات' : '/sale/properties'}
                  title='Sale'
                >
                  <span
                    className={`text-custom-blue rounded-md text-sm font-semibold outline-none hover:text-[#095668] focus:text-[#095668] transition-all focus:bg-primary-dark focus:outline-none inline-block px-3 py-2 ${
                      isArabic ? 'text-right' : ''
                    }`}
                  >
                    {NavbarTranslations.sale}
                  </span>
                </Link>
              </li>
              <li>
                <Link href='/reads' title='Reads'>
                  <span
                    className={`text-custom-blue rounded-md text-sm font-semibold outline-none hover:text-[#095668] focus:text-[#095668] transition-all focus:bg-primary-dark focus:outline-none inline-block px-3 py-2 ${
                      isArabic ? 'text-right' : ''
                    }`}
                  >
                    {NavbarTranslations.blogs}
                  </span>
                </Link>
              </li>
              <li>
                <Link href='/contact' title='Contact Us'>
                  <span
                    className={`text-custom-blue rounded-md text-sm font-semibold outline-none hover:text-[#095668] focus:text-[#095668] transition-all focus:bg-primary-dark focus:outline-none inline-block px-3 py-2 li whitespace-nowrap ${
                      isArabic ? 'text-right' : ''
                    }`}
                  >
                    {NavbarTranslations.contact}
                  </span>
                </Link>
              </li>
              <li></li>
              <li className='mx-2'>
                <LanguageSwitcher />
              </li>
              <li>
                {logged === '' && (
                  <Link href='/login' title='Login'>
                    <button className='px-6 py-2 mx-4 md:mx-2 text-sm font-semibold bg-white rounded text-[#095668]'>
                      {NavbarTranslations.login}
                    </button>
                  </Link>
                )}
                {logged !== '' && (
                  <div className='flex items-center'>
                    <div className='mx-2 text-sm underline text-custom-blue'>
                      {user && user}
                    </div>
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      className='text-custom-blue ltr:mr-1 rtl:ml-1'
                      onClick={() => {
                        localStorage.removeItem('user');
                        localStorage.removeItem('email');
                        localStorage.removeItem('token');
                        setLogged('');
                        setUser('');
                      }}
                    />
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className='md:mx-4 lg:mx-0'>
            <form
              className='md:hidden lg:flex border border-custom-blue rounded bg-white flex mx-2'
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  let queryParams = [];

                  if (searchByRef)
                    queryParams.push(`ref=${encodeURIComponent(searchByRef)}`);
                  const url = `${
                    process.env.API_BASE_URL
                  }/property/getproperties?${queryParams.join('&')}`;
                  const responseProperties = await axios.get(url);
                  const filteredProperties = responseProperties.data.properties;

                  let propertyLink = `/`;
                  let property = filteredProperties[0];
                  if (property.type === 'rent') {
                    propertyLink = propertyLink + SearchbarTranslations.rent;
                  } else {
                    propertyLink = propertyLink + SearchbarTranslations.sale;
                  }
                  if (isArabic) {
                    propertyLink =
                      propertyLink + '/' + property.propertyType.nameAr;
                    propertyLink = propertyLink + '/' + property.area.nameAr;
                    propertyLink = propertyLink + '/' + property.subarea.nameAr;
                    propertyLink =
                      propertyLink +
                      '/' +
                      property.titleAr +
                      '-' +
                      property.refNumber;
                  } else {
                    propertyLink =
                      propertyLink +
                      '/' +
                      property.propertyType.name.toLowerCase();
                    propertyLink =
                      propertyLink + '/' + property.area.name.toLowerCase();
                    propertyLink =
                      propertyLink + '/' + property.subarea.name.toLowerCase();
                    propertyLink =
                      propertyLink +
                      '/' +
                      property.title.toLowerCase() +
                      '-' +
                      property.refNumber;
                  }

                  router.push(propertyLink.toLowerCase().split(' ').join('-'));
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              <input
                type='text'
                placeholder='Search by ref'
                className='px-2 py-1 rounded w-20 lg:w-32 bg-white text-left'
                onChange={(e) => setSearchByRef(e.target.value)}
              />
              <button className='bg-custom-blue text-white px-4 py-1'>
                Find
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
