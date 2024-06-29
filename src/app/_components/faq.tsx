import * as React from "react";

export function Faq() {
  return (
    <div className="flex flex-col p-10 text-2xl font-medium leading-7 justify-center items-center md:mx-20 text-white max-w-screen">
      <div className="self-center text-6xl tracking-tighter leading-[66px] max-md:text-4xl">
        FAQ's
      </div>
      <div className="flex gap-5 justify-center px-10 py-12 mt-16 w-full rounded-xl bg-neutral-800 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex-auto">Who's the ideal client for We ?</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/11a64287da5ea3265a2447d3706bf90ba6a7d603f7acaa1f342172f20dd5e518?apiKey=15889098a2f64f5596f97e7e5322ac49&"
          className="shrink-0 self-start w-5 aspect-[1.82]"
        />
      </div>
      <div className="flex gap-5 justify-center px-10 py-11 mt-3 w-full rounded-xl bg-neutral-800 bg-opacity-50 max-md:flex-wrap max-md:px-5">
        <div className="flex-auto max-w-full">
          What happens if I don't need development work for a certain month?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/82ad6170635985f12b07e8c76787d9c206d4b23f4946e4269226ebdfd7bad92c?apiKey=15889098a2f64f5596f97e7e5322ac49&"
          className="shrink-0 my-auto w-5 aspect-[1.82]"
        />
      </div>
      <div className="flex gap-5 justify-center px-10 py-12 mt-5 w-full rounded-xl bg-neutral-800 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          Why wouldn't I just hire a full-time developer?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/574500233e9021e5079dc11bdd76e3747fc29ba1a661782d9de89cc5a67e4504?apiKey=15889098a2f64f5596f97e7e5322ac49&"
          className="shrink-0 my-auto w-5 aspect-[1.82]"
        />
      </div>
      <div className="flex gap-5 justify-center px-10 py-12 mt-8 w-full rounded-xl bg-neutral-800 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          Is there a limit to how many tasks or projects I can have?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e7d7fb8b5af1fe394f2a1e59d414f7d5f62542d07e78099b782257684b97955?apiKey=15889098a2f64f5596f97e7e5322ac49&"
          className="shrink-0 my-auto w-5 aspect-[1.82]"
        />
      </div>
      <div className="flex gap-5 justify-center px-10 py-12 mt-2.5 w-full rounded-xl bg-neutral-800 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          How long does it take to complete a development task?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73396940709f7539bc724cfe9066785f5300ec68e1c74e5d18c71f2434abdb8a?apiKey=15889098a2f64f5596f97e7e5322ac49&"
          className="shrink-0 self-start w-5 aspect-[1.82]"
        />
      </div>
      <div className="flex gap-5 justify-center px-10 py-12 mt-5 w-full rounded-xl bg-neutral-800 bg-opacity-50 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          What if I'm not satisfied with the software solution?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e41623b2b31c8cea9ef01384f981fb00841373895122e3908d2fd1eaeb2dd74a?apiKey=15889098a2f64f5596f97e7e5322ac49&"
          className="shrink-0 my-auto w-5 aspect-[1.82]"
        />
      </div>
    </div>
  );
}
