import { Link } from '@/navigation';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { Fragment } from 'react';
import { Transition, Popover } from '@headlessui/react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { PiShareFatLight } from 'react-icons/pi';
import Image from 'next/legacy/image';
import Head from 'next/head';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';

export default function PropertyCard({
  propertyLink,
  id,
  image,
  title,
  propertyType,
  location,
  refNumber,
  beds,
  bathrooms,
  area,
  price,
  subArea,
  furnitureStatus,
  type,
  currency,
  liveCurrency,
  PropertyCardTranslations,
}: {
  propertyLink: string;
  id: string;
  image: any;
  title: string;
  propertyType: string;
  location: string;
  refNumber: string;
  beds: number;
  bathrooms: number;
  area: number;
  price: number;
  subArea: string;
  furnitureStatus: string;
  type: string;
  currency: string;
  liveCurrency: any;
  PropertyCardTranslations: {
    sqm: string;
    egp: string;
    bedrooms: string;
    bathrooms: string;
    for: string;
    refnum: string;
    month: string;
    share_property: string;
    whatsapp_property: string;
    favorite_property: string;
  };
}) {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const message = `Hi, I found your property with ref: ${refNumber} on House Point. Please contact me. Thank you.
    `;
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: title,
    brand: {
      '@type': 'Brand',
      name: 'HousePointEgypt.com',
    },
    image: process.env.PROPERTY_BASE_URL + 'main/' + image.image,
    sku: '1',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EGP',
      price: price,
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
      name: 'HousePointEgypt',
    },
  };

  const addToFavorite = (propertyId: any) => {
    // if (localStorage.getItem('token')) {
    //   axios
    //     .post(
    //       `${process.env.API_BASE_URL}/favorite`,
    //       { propertyId },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${localStorage.getItem('token')}`,
    //         },
    //       }
    //     )
    //     .then(() => getFavorite())
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    return;
  };

  return (
    <div key={id}>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <Link
        href={propertyLink.toLowerCase().split(' ').join('-')}
        title={title}
      >
        <div
          key={id}
          className='flex flex-col overflow-hidden transition-all duration-150 ease-out bg-white rounded shadow-lg shadow-gray-300'
          title={title}
        >
          <h3 className='flex items-center justify-center h-20 px-2 py-1 overflow-hidden text-base font-semibold text-center text-white text-ellipsis bg-custom-blue w-30'>
            {title}
          </h3>

          <div className='relative'>
            <div className='aspect-[3/2]'>
              <div className='z-10 '>
                {
                  <Image
                    
                    src={
                      process.env.PROPERTY_BASE_URL + '/original/' + image.image
                    }
                    blurDataURL={image.placeholder}
                    alt='Property Photo'
                    placeholder='blur'
                    width={1200}
                    height={900}
                    title='Property Photo'
                    quality={50}
                  />
                }
              </div>
            </div>
            <div className='absolute inset-0'>
              <div className='flex flex-col justify-between h-full py-2 bg-gradient-to-t from-transparent-5 to-transparent'>
                <div className='flex justify-between'>
                  <h3 className='absolute left-0 px-2 py-1 text-sm font-bold tracking-wider text-white transition-all bg-opacity-50 top-2 font-openSans bg-custom-blue'>
                    {propertyType.replace(/\w\S*/g, function (txt) {
                      return (
                        txt.charAt(0).toUpperCase() +
                        txt.substr(1).toLowerCase()
                      );
                    })}
                  </h3>
                </div>
                <div className='flex flex-col gap-1 mb-4'>
                  <div className='flex px-2'>
                    {[...Array(5)].map((_, index) => (
                      <FaStar className='w-5 h-5 text-yellow-500' key={index} />
                    ))}
                  </div>

                  <div className='flex flex-col items-center gap-3 px-2 py-2 text-xs font-bold tracking-wider text-white transition-all bg-opacity-50 font-openSans bg-custom-blue'>
                    <div className='w-full flex justify-start items-center'>
                      <Image
                        
                        src='/assets/pin.png'
                        width='20'
                        height='20'
                        alt='pin'
                        title='pin'
                        quality={50}
                      />
                      {location.replace(/\w\S*/g, function (txt) {
                        return (
                          txt.charAt(0).toUpperCase() +
                          txt.substr(1).toLowerCase()
                        );
                      })}{' '}
                      ,{' '}
                      {subArea.replace(/\w\S*/g, function (txt) {
                        return (
                          txt.charAt(0).toUpperCase() +
                          txt.substr(1).toLowerCase()
                        );
                      })}
                    </div>
                    <div className='w-full flex justify-end gap-1 text-xs font-bold text-white transition-colors duration-200 transform'>
                      <span className='text-xs'>
                        {currency == 'USD' &&
                          Number(price * liveCurrency.USD).toLocaleString()}
                        {currency == 'EUR' &&
                          Number(price * liveCurrency.EUR).toLocaleString()}
                        {currency == 'EGP' && Number(price).toLocaleString()}
                      </span>
                      <span>{PropertyCardTranslations.egp}</span>
                      <span>
                        {type == 'Rent' || type == 'إيجار' ? (
                          <span className='flex gap-1'>
                            <span>/</span>
                            <span>{PropertyCardTranslations.month} </span>
                          </span>
                        ) : (
                          ''
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='relative flex flex-col -top-10'>
                <Popover className='relative z-10 w-full'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        aria-label='DropDownPropertyBedBath'
                        name='DropDownShareProperty'
                        className='absolute flex items-center justify-center h-16 ltr:right-2 rtl:left-2 bottom-20 w-18'
                        title={PropertyCardTranslations.share_property}
                      >
                        <PiShareFatLight className='p-1 text-3xl text-white rounded hover:text-blue-700' />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel className='absolute z-50 flex flex-wrap items-center justify-center w-24 p-1 text-red-500 transform -translate-x-1/2 bg-white ltr:-right-3 rtl:left-1/3 -top-24'>
                          <FacebookShareButton
                            url={`${propertyLink
                              .toLowerCase()
                              .split(' ')
                              .join('-')}`}
                          >
                            <Image
                              
                              src='/assets/face.png'
                              alt='facebook icon'
                              width='35'
                              height='35'
                              title='Share on Facebook'
                              quality={50}
                            />
                          </FacebookShareButton>
                          <TwitterShareButton
                            url={`${propertyLink
                              .toLowerCase()
                              .split(' ')
                              .join('-')}`}
                          >
                            <Image
                              
                              src='/assets/twitter.png'
                              alt='twitter icon'
                              width='35'
                              height='35'
                              title='Share on Twitter'
                            />
                          </TwitterShareButton>
                          <LinkedinShareButton
                            url={`${propertyLink
                              .toLowerCase()
                              .split(' ')
                              .join('-')}`}
                          >
                            <Image
                              
                              src='/assets/linkedin.png'
                              alt='linkedin icon'
                              width='35'
                              height='35'
                              title='Share on Linkedin'
                              quality={50}
                            />
                          </LinkedinShareButton>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Link
                  href={`https://api.whatsapp.com/send?phone=+201221409530&text=${message}${origin}${propertyLink
                    .toLowerCase()
                    .split(' ')
                    .join('-')}`}
                  rel='noreferrer'
                  className='text-white hover:text-green-600'
                  target='_blank'
                  title={PropertyCardTranslations.whatsapp_property}
                >
                  <button
                    type='button'
                    aria-label='whatsapp'
                    name='call us'
                    className='absolute flex items-center justify-center h-16 ltr:right-2 rtl:left-2 top-25 bottom-10 w-18'
                    onClick={(e) =>
                      window.open(
                        `https://api.whatsapp.com/send?phone=+2001221409530&text=${
                          message +
                          origin +
                          propertyLink.toLowerCase().split(' ').join('-')
                        }`
                      )
                    }
                  >
                    <AiOutlineWhatsApp className='p-1 text-3xl rounded ' />
                  </button>
                </Link>
                <div>
                  <button
                    type='button'
                    aria-label='Add To Favorite'
                    name='Add To Favorite'
                    className='absolute bottom-0 z-40 flex items-center justify-center h-16 ltr:right-2 rtl:left-2 w-18'
                    title={PropertyCardTranslations.favorite_property}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToFavorite(id);
                    }}
                  >
                    <FaRegHeart className='p-1 text-3xl text-white rounded hover:text-red-700' />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='px-2'>
            <div className='flex items-center justify-around py-1 text-sm '>
              <div className='flex flex-col gap-2'>
                <span className='flex items-center gap-1'>
                  <Image
                    
                    src='/assets/bedflat.png'
                    alt='bed'
                    width='25'
                    height='25'
                    title='bed'
                    quality={50}
                  />{' '}
                  {beds} {PropertyCardTranslations.bedrooms}
                </span>
                <span className='flex items-center gap-1'>
                  <Image
                    
                    src='/assets/bathflat.png'
                    alt='bath'
                    width='25'
                    height='25'
                    title='bath'
                    quality={50}
                  />{' '}
                  {bathrooms} {PropertyCardTranslations.bathrooms}
                </span>
              </div>
              <div className='flex flex-col gap-2'>
                <span className='flex items-center gap-1'>
                  <Image
                    
                    src='/assets/surfaceflat.png'
                    alt='surface'
                    width='25'
                    height='25'
                    title='surface'
                    quality={50}
                  />
                  {area}{' '}
                  <span>
                    {PropertyCardTranslations.sqm}
                    <sup className=''>2</sup>
                  </span>
                </span>
                <span className='flex items-center gap-1'>
                  <Image
                    
                    src='/assets/couchflat.png'
                    alt='couch'
                    width='25'
                    height='25'
                    title='couch'
                    quality={50}
                  />
                  {furnitureStatus}{' '}
                </span>
              </div>
            </div>
            <hr />
            <div className='flex justify-between gap-2 my-1 text-sm'>
              <span className='flex items-center justify-center w-full gap-1 px-4 text-white rounded bg-custom-blue'>
                {PropertyCardTranslations.for}
                {type}
              </span>
              <span className='flex items-center justify-center w-full gap-1 px-4 text-white rounded bg-custom-blue'>
                {PropertyCardTranslations.refnum}
                {refNumber}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
function getFavorite(): any {
  throw new Error('Function not implemented.');
}
