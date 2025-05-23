import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: any;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Learn",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>📚🤓💡🎉👍</>,
  },
  {
    title: "Focus on Language Itself",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>📚💡🤔📊🔍</>,
  },
  {
    title: "Summary in practice",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>🔨⚒️🛠️🤖🏗️🤸</>,
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
