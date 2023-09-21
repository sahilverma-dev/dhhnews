import ContactForm from "./components/contact-form";

// icons
import {
  BsInstagram as InstagramIcon,
  BsTwitter as TwitterIcon,
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from "react-icons/bs";

export const metadata = {
  title: "Contact",
  description: "Want to say me something?",
};

const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-6 md:py-12">
      <div className="relative z-10 overflow-hidden pb-6 lg:pb-8">
        <div className="mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Contact to DHH News
          </h1>
          <p className="mt-2 max-w-3xl text-gray-500 dark:text-gray-300">
            Share any problem, feedback, or question you have.
          </p>
        </div>
      </div>

      <section className="relative" aria-labelledby="contactHeading">
        <div className="absolute h-1/2 w-full " aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative  bg-transparent md:border md:rounded-lg md:shadow">
            <h2 id="contactHeading" className="sr-only">
              Contact us
            </h2>
            <div className="grid grid-cols-1 rounded-lg md:rounded-none  lg:grid-cols-3">
              <div className=" relative rounded-lg md: overflow-hidden bg-gradient-to-b from-gray-700 dark:from-gray-800 to-gray-800 dark:to-gray-950 px-6 py-10 sm:px-10 xl:p-12">
                <div
                  className="pointer-events-none absolute inset-0 sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity="0.1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 h-full w-full"
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">
                  Contact information
                </h3>
                <p className="mt-6 max-w-3xl text-base text-gray-50">
                  You can contact the support from the form on right, or reach
                  out to us on social media.
                </p>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Address</span>
                  </dt>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex items-center text-base text-gray-50">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-gray-200"
                      x-description="Heroicon name: outline/mail"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a href="mailto:sahilverma.webdev.com" className="ml-2">
                      sahilverma.webdev.com
                    </a>
                  </dd>
                </dl>
                <ul className="mt-8 flex space-x-12" role="list">
                  <li>
                    <a
                      className="text-gray-200 hover:text-pink-500"
                      target="_blank"
                      href="https://www.instagram.com/sahilverma.dev/"
                      rel="noreferrer nofollow"
                    >
                      <span className="sr-only">Instagram</span>
                      <InstagramIcon className="h-6 w-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-200 hover:text-blue-500"
                      target="_blank"
                      href="https://twitter.com/sahilverma_dev/"
                      rel="noreferrer nofollow"
                    >
                      <span className="sr-only">Twitter (X)</span>
                      <TwitterIcon className="h-6 w-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-200 hover:text-gray-500"
                      target="_blank"
                      href="https://github.com/sahilverma-dev/"
                      rel="noreferrer nofollow"
                    >
                      <span className="sr-only">GitHub</span>
                      <GithubIcon className="h-6 w-6" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-200 hover:text-blue-500 "
                      target="_blank"
                      href="https://www.linkedin.com/in/sahilverma-dev/"
                      rel="noreferrer nofollow"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <LinkedinIcon className="h-6 w-6" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="px-0 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Send us a message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
