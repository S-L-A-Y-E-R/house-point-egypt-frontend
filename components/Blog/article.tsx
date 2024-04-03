import Image from 'next/image';
import { Link } from '@/navigation';
import { useRouter } from '@/navigation';
import style from '@/styles/BlogIndex.module.css';

const Article = ({
  post,
  isArabic,
  blogTranslations,
}: {
  post: any;
  isArabic: Boolean;
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
}) => {
  const router = useRouter();

  return (
    <div className={`${style.post}`}>
      <div className={`${style.head}`}>
        <p>{blogTranslations.topic}: </p>
        <Link
          href={`//topics/${post.topic
            .replaceAll(' ', '-')
            .replaceAll('?', '_qm_')}`}
          title={post.topic}
        >
          {post.topic}{' '}
        </Link>
      </div>
      <div
        className={`${style.center}`}
        onClick={() => {
          router.push(
            // {
            //   pathname: `/reads/${post.title
            //     .replaceAll(' ', '-')
            //     .replaceAll('?', '_qm_')}`,
            //   query: { bid: post._id, title: post.title },
            // },
            // `/reads/${post.title.replaceAll(' ', '-').replaceAll('?', '_qm_')}`
            `/reads/${post.title.replaceAll(' ', '-').replaceAll('?', '_qm_')}`
          );
        }}
      >
        <div className={`${style.postCenter} ${style.image}`}>
          <Image
            loading='lazy'
            placeholder='blur'
            blurDataURL='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20250%22%2F%3E'
            className={`${style.postImage}`}
            src={process.env.BLOG_IMAGE_BASE_URL + post.image}
            alt={post.title}
            title='image'
            quality={100}
            width={400}
            height={250}
          />
        </div>
        <div className={`${style.postCenter} ${style.title}`}>
          <h3 className={`${style.postTitle}`}>{post.title}</h3>
        </div>

        <div className={`${style.postCenter} ${style.btn}`}>
          <Link
            className={`${style.readMoreBtn}`}
            title={post.title}
            href={{
              pathname: `/reads/${post.title
                .replaceAll('-', '_da_')
                .replaceAll('?', '_qm_')
                .replaceAll(' ', '-')}`,
              query: { bid: post._id },
            }}
            as={`/reads/${post.title
              .replaceAll(' ', '-')
              .replaceAll('?', '_qm_')}`}
            data-ur1313m3t='true'
          >
            <span>{blogTranslations.read_more}</span>
            <span
              className={`${style.symbole} ${isArabic ? style.symboleAr : ''}`}
            >
              ⮑
            </span>
          </Link>
        </div>
      </div>
      <div className={`${style.footer}`}>
        <div className={`${style.postFooter} ${style.info}`}>
          <div className={`${style.postInfo} ${style.author}`}>
            <p
              className={`${style.postAuthor}`}
              data-by={blogTranslations.authby}
            >
              {post.writter}
            </p>
            <p className={`${style.postDate}`}>
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }).format(new Date(post?.createdAt))}
            </p>
          </div>
          <div className={`${style.postInfo} ${style.read}`}>
            {post.readTime +
              ' ' +
              blogTranslations.min +
              ' ' +
              blogTranslations.read}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
