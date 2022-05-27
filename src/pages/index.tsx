import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Arzon</title>
      </Head>

      <header className="sticky top-0 h-24 py-8">
        <nav className="mx-auto h-full w-5/6 lg:w-2/3">
          <div className="logo font-head text-lg font-black md:text-xl lg:text-2xl">
            Arzon
          </div>
        </nav>
      </header>

      <section className="mx-auto h-full min-h-[60vh] w-5/6 gap-8 space-y-8 lg:grid lg:w-2/3 lg:grid-cols-2">
        <div className="flex h-full flex-col items-center justify-center gap-8 lg:items-start">
          <h1 className="text-center font-head text-4xl font-bold leading-tight md:text-6xl lg:text-left xl:text-7xl">
            Buy <span className="text-primary">electronics</span> at the best
            price <span className="text-primary">online</span>.
          </h1>
          <Link href="/signin">
            <a className="w-max rounded-lg bg-primary py-4 px-8 text-xl font-bold text-white">
              Get started
            </a>
          </Link>
        </div>
        <div className="relative min-h-[20rem] lg:h-auto">
          <Image
            src="/assets/images/hero.svg"
            alt="hero"
            layout="fill"
            className="h-full object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default IndexPage;
