import React from "react";
import PortableText from "./portableText";
import clientConfig from "../../client-config";
import CTALink from "./CTALink";

import { getFluidGatsbyImage } from "gatsby-source-sanity";
const maybeImage = illustration => {
  let img = null;
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 960 },
      clientConfig.sanity
    );

    img = (
      <img className="absolute inset-0 w-full h-full object-cover" src={fluidProps.src} alt={illustration.image.alt} />
    );
  }
  return img;
};

function Hero(props) {
  console.log(props.ctaArray.cta[0])
  const img = maybeImage(props.illustration);
  return (
    <div class="relative bg-gray-50">
      <main class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      {/* Left col */}
      <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        {/* <p className="uppercase tracking-loose w-full">{props.label}</p> */}
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span class="block xl:inline">{props.heading}</span>
        </h1>
        <div class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          <PortableText blocks={props.tagline} />
        </div>
        {props.ctaArray && props.ctaArray.cta[0] && props.ctaArray.cta[1] && (
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
            <CTALink
              {...props.ctaArray.cta[0]}
              buttonActionClass="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            />
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <CTALink
                {...props.ctaArray.cta[1]}
                buttonActionClass="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              />
            </div>
          </div>
        )}
        {props.ctaArray && props.ctaArray.cta[0] && !props.ctaArray.cta[1] && (
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
          <CTALink
            {...props.ctaArray.cta[0]}
            buttonActionClass="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          />
          </div>
        </div>
        )}
      </div>
      {/* Right col */}
        </div>
            <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          {img}
        </div>
      </main>
      </div>
  );
}

export default Hero;
