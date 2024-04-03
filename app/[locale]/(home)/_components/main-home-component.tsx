'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';

export default function MainHomeComponent({
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
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Navbar
      SearchbarTranslations={SearchbarTranslations}
      NavbarTranslations={NavbarTranslations}
    />
  );
}
