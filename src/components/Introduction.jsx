import React from "react";

function Introduction() {
  return (
    <>
      <div className="flex w-full min-h-[500px] p-8 text-blue-900">

        {/* left */}
        <div className="w-1/2 flex">
          <div className="w-5/6 flex flex-col items-center justify-center text-center gap-5">
            <h1 className="tracking-wider text-4xl md:text-6xl">Our Site</h1>
            <div className="text-xl md:text-3xl">
              <p>A bunch of lorem ipsum text there you go is this is yeath is</p>
              <p>So this is why you should choose our site you donket</p>
              <p>And some more of it take it or leave it </p>
            </div>
            <button className="bg-gradient-to-br to-cyan-500 from-blue-500 border hover:border-blue-800 hover:scale-105 transition p-2 rounded-xl text-xl font-semibold text-slate-100 block">Get Started</button>
          </div>
        </div>

        {/* right */}
        <div className=" w-1/2 flex items-center justify-center">
          <img src="vite.svg" alt="vite" className="w-4/6" />
        </div>


      </div>

      <div className="p-8 text-blue-900">
        <div className="mb-6">
          <h1 className="font-bold text-3xl tracking-wide mb-2">Buy Plans and Subscriptions</h1>
          <p>Unlock premium features and exclusive content with our subscription plans.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-1/2 leading-loose flex flex-col justify-between">
            <h1 className="font-bold tracking-wide text-2xl">Basic Plan</h1>
            <p className="">Access to a limited set of features</p>
            <p className="">$9.99/month</p>
            <button className="bg-white border hover:border-blue-600 p-2 rounded-xl font-bold m-2 self-start">Subscribe</button>
          </div>
          <div className="sm:w-1/2 leading-loose flex flex-col justify-between">
            <h1 className="font-bold tracking-wide text-2xl">Pro Plan</h1>
            <p className="">For access to all features and exclusive content</p>
            <p className="">$19.99/month</p>
            <button className="bg-white border hover:border-blue-600 p-2 rounded-xl font-bold m-2 self-start">Subscribe</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Introduction;
