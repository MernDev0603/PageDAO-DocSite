import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Metaverse Writers Guild',
    Svg: require('../../static/img/undraw_Working.svg').default,
    description: (
      <>
        Our community is comprised of writers, readers and all creatives working to bring literature to blockchain. 
        <br></br><div class="button"><a href = "https://discord.com/invite/MTWhQjnMVh">Join the discord</a></div>
      </>
    ),
    
  },
  {
    title: 'PAGE',
    Svg: require('../../static/img/undraw_transfer_money.svg').default,
    description: (
      <>
        Our $PAGE utility token serves as a currency within the PAGE Network to reward literary creatives and supporters for their contributions in the DAO.
        <br></br><div class="button"><a href = "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x60e683c6514edd5f758a55b6f393bebbafaa8d5e">Trade on Uniswap</a></div>
      </>
    ),
  },
  {
    title: 'DAO',
    Svg: require('../../static/img/undraw_conference_speaker.svg').default,
    description: (
      <>
        Our decentralized autonomous organization is self-governing and works collectively to further our vision to bring Web 3.0 literature to life.
        <br></br><div class="button"><a href = "https://vote.pagedao.org/#/pagedao.eth">Snapshot Governance</a></div>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
