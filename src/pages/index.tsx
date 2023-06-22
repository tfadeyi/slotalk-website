import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageAbout from "@site/src/components/HomepageAbout";
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
          <div>
              <a href="https://github.com/slosive/sloscribe/nix" className="margin-right--sm">
                  <img
                  alt="nix-devshell"
                  src="https://img.shields.io/badge/nix-devshell-blue?logo=NixOS&style=for-the-badge"
                  className="inline-block"/>
              </a>
              <a href="https://github.com/slosive/sloscribe/actions/workflows/ci.yml" className="margin-right--sm">
                  <img
                      alt="continuous-integration"
                      src="https://img.shields.io/github/actions/workflow/status/slosive/sloscribe/ci.yml?branch=main&style=for-the-badge"
                      className="inline-block"/>
              </a>
              <a href="https://github.com/slosive/sloscribe/blob/main/LICENSE" className="margin-right--sm">
                  <img
                      alt="license"
                      src="https://img.shields.io/badge/License-MIT-yellowgreen.svg?style=for-the-badge"
                      className="inline-block"/>
              </a>
              <a href="https://github.com/slosive/sloscribe" className="margin-right--sm">
                  <img
                      alt="language"
                      src="https://img.shields.io/github/go-mod/go-version/slosive/sloscribe?style=for-the-badge"
                      className="inline-block"/>
              </a>
              <a href="https://github.com/slosive/sloscribe/releases" className="margin-right--sm">
                  <img
                      alt="release"
                      src="https://img.shields.io/github/v/release/slosive/sloscribe?color=green&style=for-the-badge"
                      className="inline-block"/>
              </a>
              <a href="https://goreportcard.com/report/github.com/slosive/sloscribe">
                  <img
                      alt="go-report"
                      src="https://goreportcard.com/badge/github.com/slosive/sloscribe?style=for-the-badge"
                      className="inline-block"/>
              </a>
          </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg button--primary"
            to="/docs/intro">
              Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageAbout />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
