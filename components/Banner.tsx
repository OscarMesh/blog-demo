function Banner() {
  return (
    <div
      className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold
    px-10 py-5 mb-10"
    >
      <div>
        <h1 className="text-6xl">Oscar's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#3b82f6]">
            Developers Den
          </span>{" "}
          were we talk about everything tech
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Lorem ipsum dolor sit amet consectetur elit. <br />
        Quisquam, quod
      </p>
    </div>
  );
}

export default Banner;
