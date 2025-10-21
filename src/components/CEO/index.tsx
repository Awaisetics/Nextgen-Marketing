import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const CEO = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Meet Our Founder & CEO"
          paragraph="Behind every successful business is a vision that drives growth. Learn about the leadership and values that guide NextGen Marketing."
          center
          mb="100px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {/* CEO Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-md">
              <Image
                src="/images/ceo/ceo-image.jpeg"
                alt="CEO Sarah Chen - Professional Digital Marketing Expert"
                width={500}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating stats */}
            {/* <div className="absolute -bottom-6 -right-6 z-10 rounded-md bg-white p-6 shadow-lg dark:bg-gray-dark">
              <div className="text-center">
                <h4 className="mb-2 text-2xl font-bold text-black dark:text-white">5+</h4>
                <p className="text-sm text-body-color dark:text-body-color-dark">Years Leading</p>
              </div>
            </div> */}
          </div>

          {/* CEO Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="mb-2 text-3xl font-bold text-black dark:text-white">
                Sukh
              </h3>
              <p className="text-lg text-primary">Founder & CEO</p>
            </div>

            <div className="mb-8">
              <blockquote className="mb-6 text-lg italic text-body-color dark:text-body-color-dark">
                &ldquo;I started NextGen Marketing because I believe every business deserves to grow and succeed in the digital world. Too many great companies struggle with outdated websites and ineffective marketing strategies.&rdquo;
              </blockquote>

              <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                With over 5 years of experience in digital marketing and web development, Sarah has helped 200+ businesses transform their online presence and achieve remarkable growth. Based in Auckland, she brings a global perspective to local businesses.
              </p>

              <p className="text-base text-body-color dark:text-body-color-dark">
                Her vision is simple: provide small and medium businesses with the same high-quality digital marketing services that large corporations use, but at prices they can actually afford.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="mb-8">
              <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Key Achievements
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-body-color dark:text-body-color-dark">Led 200+ successful digital marketing campaigns</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-body-color dark:text-body-color-dark">Certified in Google Analytics, Facebook Marketing, and SEO</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-body-color dark:text-body-color-dark">Featured speaker at Digital Marketing conferences</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-body-color dark:text-body-color-dark">98% client satisfaction rate across all projects</span>
                </div>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="rounded-md bg-primary/5 p-6 dark:bg-primary/10">
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                Our Vision
              </h4>
              <p className="text-base text-body-color dark:text-body-color-dark">
                &ldquo;To democratize digital marketing success by making professional web development, social media marketing, and growth strategies accessible to every business, regardless of size or budget.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute right-0 top-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="184.451"
            y="378.102"
            width="196.084"
            height="541.26"
            rx="2"
            transform="rotate(128.7 184.451 378.102)"
            fill="url(#paint0_linear_25:218)"
          />
          <rect
            opacity="0.3"
            x="188.667"
            y="123.17"
            width="59.4334"
            height="541.26"
            rx="2"
            transform="rotate(128.7 188.667 123.17)"
            fill="url(#paint1_linear_25:218)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="90.1188"
              y1="420.414"
              x2="90.1188"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="159.441"
              y1="204.714"
              x2="159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default CEO;
