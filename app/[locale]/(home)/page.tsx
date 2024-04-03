import { getTranslations } from 'next-intl/server';
import MainHomeComponent from './_components/main-home-component';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'general.components' });
  const navbarTranslations = {
    home: t('navbar.home'),
    rent: t('navbar.rent'),
    sale: t('navbar.sale'),
    contact: t('navbar.contact'),
    blogs: t('navbar.blogs'),
    favorite: t('navbar.favorite'),
    login: t('navbar.login'),
  };
  const searchbarTranslations = {
    rent: t('searchbar.rent'),
    sale: t('searchbar.sale'),
    searchRent: t('searchbar.searchRent'),
    searchSale: t('searchbar.searchSale'),
    searchArticles: t('searchbar.searchArticles'),
    allsearches: t('searchbar.allsearches'),
    allsearchessale: t('searchbar.allsearchessale'),
    searchContact: t('searchbar.searchContact'),
    searchReads: t('searchbar.searchReads'),
    location_searchbar_placeholder: t(
      'searchbar.location_searchbar_placeholder'
    ),
    no_options: t('searchbar.no_options'),
    all_property_type: t('searchbar.all_property_type'),
    property_type: t('searchbar.property_type'),
    bed: t('searchbar.bed'),
    bath: t('searchbar.bath'),
    beds: t('searchbar.beds'),
    baths: t('searchbar.baths'),
    reset: t('searchbar.reset'),
    prices: t('searchbar.prices'),
    finish_level: t('searchbar.finish_level'),
    all_finish_level: t('searchbar.all_finish_level'),
    search: t('searchbar.search'),
    advanced_search: t('searchbar.advanced_search'),
    show: t('searchbar.show'),
    result: t('searchbar.result'),
    minprice: t('searchbar.minprice'),
    maxprice: t('searchbar.maxprice'),
  };

  let link = '/';
  if (locale == 'ar') link += 'ar';
  const response = await Promise.all([
    fetch(`${process.env.API_BASE_URL}/utils/getmeta`, {
      method: 'POST',
      body: JSON.stringify({ link }),
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    fetch(`${process.env.API_BASE_URL}/property/getproperties?type=sale`),
    fetch(`${process.env.API_BASE_URL}/property/getproperties?type=rent`),
    fetch(`${process.env.API_BASE_URL}/title/single?link=${link}`, {
      method: 'GET',
      headers: {
        'accept-language': locale === 'en' ? 'en' : 'ar',
      },
    }),
    fetch(`${process.env.API_BASE_URL}/social-media`),
  ]);

  const [fetchMeta, fetchSale, fetchRent, fetchTitles, fetchSocialLinks] =
    await Promise.all(response.map((res) => res.json()));
  const [meta, saleProperties, rentProperties, titles, socialLinks] = [
    fetchMeta.meta,
    fetchSale.properties,
    fetchRent.properties,
    fetchTitles.pageTitle,
    fetchSocialLinks,
  ];

  return (
    <MainHomeComponent
      NavbarTranslations={navbarTranslations}
      SearchbarTranslations={searchbarTranslations}
    />
  );
}
