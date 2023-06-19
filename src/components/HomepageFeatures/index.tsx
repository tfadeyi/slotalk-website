import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use CLI 💻',
    Svg: require('@site/static/img/terminal.svg').default,
    description: (
      <>
        Simple Go CLI, available for Linux and MacOS, with multi architectures support.
      </>
    ),
  },
  {
    title: 'Simple integration with Sloth 🦥',
    Svg: require('@site/static/img/sloth.svg').default,
    description: (
      <>
        Can be used easily in tandem with the <a href="https://github.com/slok/sloth" target="_blank">Sloth</a> tool.
      </>
    ),
  },
  {
    title: 'Github Action',
    Svg: require('@site/static/img/github.svg').default,
    description: (
       <>
         Use it within your Github CI/CD flow using the <a href="https://github.com/tfadeyi/slotalk-installer" target="_blank">installer</a> github action.
       </>
    ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
