import React from "react";
import Head from "next/head";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getAllProducts } from "@library/products";

import SEO from "@components/SEO";
import HeroOneSection from "@components/sections/HeroOne"
import EcosystemSection from "@components/sections/Ecosystem";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import TeamSection from "@components/sections/Team";
import LatestPostsSection from "@components/sections/LatestPosts";
import AppData from "@data/app.json";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vikisol Technologies",
  url: "https://vikisol.in",
  logo: "https://res.cloudinary.com/drqgvncx1/image/upload/v1781490490/Vikisol_AppIcon-Big_ang4lu.png",
  sameAs: AppData.social.map((item) => item.link)
};

const Home1 = (props) => {
  return (
    <Layouts>
      <SEO title={AppData.settings.siteName} description={AppData.settings.siteDescription} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </Head>
      <HeroOneSection />
      <EcosystemSection products={props.products} />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialSlider />
      <PartnersSlider />
      <LatestPostsSection posts={props.posts} />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const products = getAllProducts();

  return {
    props: {
      posts: allPosts,
      products
    }
  }
}