import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Việt hoá tài liệu',
    description: (
      <>
        DeFi.vn đã việt hoá các tài liệu về tài chính phi tập trung quốc tế để giúp người Việt Nam tiếp cận dễ dàng hơn.
      </>
    ),
  },
  {
    title: 'Nội dung chi tiết và trung lập',
    description: (
      <>
        DeFi.vn cung cấp các tài liệu và bài viết về tài chính phi tập trung từ các nguồn đáng tin cậy và được kiểm chứng.
      </>
    ),
  },
  {
    title: 'Đóng góp bởi cộng đồng',
    description: (
      <>
        DeFi.vn là một dự án mã nguồn mở, mọi người có thể đóng góp bằng cách tạo pull request trên Github.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
