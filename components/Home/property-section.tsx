import { Link } from '@/navigation';
import PropertyCard from './property-card';

const PropertySection = ({
  type,
  data: properties,
  title,
  locale,
  liveCurrency,
  SearchbarTranslations,
  PropertyCardTranslations,
}: {
  type: string;
  data: any;
  title: string;
  locale: string;
  liveCurrency: any;
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
}) => {
  const isArabic = locale === 'ar';

  return (
    <div className='mt-8'>
      <div className='w-full '>
        {
          <div className='flex flex-col items-center'>
            <h2 className='px-6 text-2xl font-medium text-center md:px-0 md:text-start font-openSans'>
              {title}
            </h2>
            <div className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              {properties.map((property: any) => {
                let propertyLink = `/`;
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

                return (
                  <PropertyCard
                    PropertyCardTranslations={PropertyCardTranslations}
                    key={property._id}
                    id={property._id}
                    propertyLink={propertyLink}
                    image={property.mainimage}
                    title={isArabic ? property.titleAr : property.title}
                    location={
                      isArabic
                        ? property.area.nameAr
                        : property.area.name.toLowerCase()
                    }
                    refNumber={property.refNumber}
                    price={property.price}
                    beds={property.beds}
                    bathrooms={property.baths}
                    area={property.propertyArea}
                    propertyType={
                      isArabic
                        ? property.propertyType.nameAr
                        : property.propertyType.name.toLowerCase()
                    }
                    furnitureStatus={
                      isArabic
                        ? property.furnitureStatus.nameAr
                        : property.furnitureStatus.name
                    }
                    type={
                      property.type == 'rent'
                        ? SearchbarTranslations.rent
                        : SearchbarTranslations.sale
                    }
                    subArea={
                      isArabic
                        ? property.subarea.nameAr
                        : property.subarea.name.toLowerCase()
                    }
                    currency={property.currency}
                    liveCurrency={liveCurrency}
                  />
                );
              })}
            </div>
            <Link
              className='px-4'
              href={type == 'rent' ? '/rent/properties' : 'sale/properties'}
            >
              <h4 className='rounded-lg m-auto bg-black text-white text-2xl p-2 text-center w-fit px-4 '>
                {type == 'rent'
                  ? SearchbarTranslations.searchRent
                  : SearchbarTranslations.searchSale}
              </h4>
            </Link>
          </div>
        }
      </div>
    </div>
  );
};

export default PropertySection;
