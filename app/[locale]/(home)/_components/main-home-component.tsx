'use client';

import { useState } from 'react';
import Navbar from '@/components/Home/navbar';
import QR from '@/components/Home/QR';
import Searchbar from '@/components/Home/searchbar';
import PropertySection from '@/components/Home/property-section';
import LatestBlogs from '@/components/Home/latest-blogs';

export default function MainHomeComponent({
  NavbarTranslations,
  SearchbarTranslations,
  FooterTranslations,
  locale,
  saleProperties,
  rentProperties,
  titles,
  socialLinks,
  meta,
  liveCurrency,
  PropertyCardTranslations,
  latestBlogs,
  blogTranslations,
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
  FooterTranslations: {
    about_us: string;
    new_links: string;
  };
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
  locale: string;
  saleProperties: any;
  rentProperties: any;
  titles: any;
  socialLinks: any;
  meta: any;
  liveCurrency: any;
  latestBlogs: any;
  blogTranslations: {
    title: string;
    min: string;
    writter: string;
    read_more: string;
    topics: string;
    tags: string;
    tag: string;
    related_properties: string;
    feature_properties: string;
    share: string;
    topic: string;
    read: string;
    authby: string;
  };
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {!showModal && (
        <>
          <Navbar
            SearchbarTranslations={SearchbarTranslations}
            NavbarTranslations={NavbarTranslations}
          />
          <QR />
          <div
            className={
              'relative flex flex-col items-center justify-center h-fit p-2 md:py-8 text-black md:min-h-fit from-secondary-color to-custom-blue-light bg-gradient-to-r bg-custom-blue md:h-auto '
            }
          >
            <div className='flex flex-col items-center justify-center w-full h-full'>
              <h1 className='text-4xl font-bold leading-none tracking-tight text-center md:text-5xl lg:text-6xl text-white z-[1]'>
                {locale === 'en' ? titles[0]?.title : titles[0]?.titleAr}
              </h1>
              <div className='relative w-full px-4 mt-4'>
                <Searchbar
                  locale={locale}
                  SearchbarTranslations={SearchbarTranslations}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
          </div>
          <div className='w-full bg-white'>
            <PropertySection
              data={rentProperties}
              title={locale === 'en' ? titles[1]?.title : titles[1]?.titleAr}
              type='rent'
              liveCurrency={liveCurrency}
              locale={locale}
              SearchbarTranslations={SearchbarTranslations}
              PropertyCardTranslations={PropertyCardTranslations}
            />

            <PropertySection
              data={saleProperties}
              title={locale === 'en' ? titles[2]?.title : titles[2]?.titleAr}
              type='sale'
              liveCurrency={liveCurrency}
              locale={locale}
              SearchbarTranslations={SearchbarTranslations}
              PropertyCardTranslations={PropertyCardTranslations}
            />
            <div
              className='hidden p-4 bg-slate-200 rounded-xl w-[96%] m-auto'
              dangerouslySetInnerHTML={{ __html: meta?.article }}
            />
            <LatestBlogs
              locale={locale}
              latestBlogs={latestBlogs}
              blogTranslations={blogTranslations}
            />
            {/* <TopFooterLinks /> */}
            {/* <PrimeLocations /> */}

            <div className='mt-32'>{/* <Footer /> */}</div>
          </div>
        </>
      )}
      {showModal && (
        <Searchbar
          showModal={showModal}
          setShowModal={setShowModal}
          locale={locale}
          SearchbarTranslations={SearchbarTranslations}
        />
      )}
    </>
  );
}
