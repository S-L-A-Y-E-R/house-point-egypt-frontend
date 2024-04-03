import Article from '../Blog/article';
import blogStyle from '@/styles/BlogIndex.module.css';

function LatestBlogs({
  locale,
  latestBlogs,
  blogTranslations,
}: {
  locale: string;
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
  const isArabic = locale === 'ar';

  return (
    <div>
      <div className='px-6 pt-20 pb-40 bg-emerland-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl font-semibold leading-10 text-center uppercase font-heading'>
            {isArabic ? 'أحدث المقالات' : 'Latest Blogs'}
          </h2>
          <div
            className={`grid max-w-6xl gap-2 mx-auto mt-10 ${blogStyle.container}`}
          >
            {latestBlogs.length > 0 &&
              latestBlogs.map((post: any, index: number) => (
                <Article
                  post={post}
                  isArabic={isArabic}
                  key={index}
                  blogTranslations={blogTranslations}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestBlogs;
