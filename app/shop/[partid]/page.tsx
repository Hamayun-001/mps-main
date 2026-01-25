import Image from "next/image";
import Link from "next/link";

export default function ProductDetail() {
  return (
    <div className="max-w-[1100px] mx-auto">
      {/* Title */}
      <div className="border-b border-slate-200 mb-5 py-4">
        <h1 className="text-[32px] font-medium text-[#212529]">
          Loom Machine Rotor
        </h1>
        <p className="text-[12px] text-[#212529] mt-2">
          <span className="text-slate-500">SKU:</span> CS05GWQ3
          <span className="ml-2 text-emerald-600 font-medium">● In Stock</span>
        </p>
      </div>

      {/* Product Section */}
      <div className="flex gap-[50px]">
        {/* Images */}
        <div className="w-[640px]">
          <Image
            src={"/assets/part.png"}
            alt={"Product"}
            width={640}
            height={640}
            className=" rounded-md bg-gray-100"
          />

          <div className="flex gap-2.5 mt-4">
            {["part1.png", "part2.png", "part3.png"].map((img, i) => (
              <Image
                key={i}
                src={`/assets/${img}`}
                width={75}
                height={75}
                className=" rounded-md border border-zinc-300"
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="w-[602px] flex flex-col gap-4">
          <p className="text-[15px] text-[#212529]">
            Balanced tread and a proven sidewall design for stability and
            control. Constructed with a DuPont Kevlar for enhanced durability.
          </p>

          <button className="w-full bg-[#6d6865] hover:bg-[#5b5653] text-white py-3 rounded-lg text-[14px] font-semibold">
            Add to Cart
          </button>

          <div className="flex items-center gap-2 cursor-pointer">
            <Image src={"/assets/heart.svg"} width={20} height={20} />
            <span className="text-[14px] font-medium border-b border-black">
              Add to wishlist
            </span>
          </div>

          {/* Info box */}
          <div className="bg-[#f5f8fb] rounded-md p-4 space-y-2 text-[12px]">
            <div className="flex gap-3 items-center">
              <Image
                src={"/assets/mmm.svg"}
                alt=" tic"
                width={16}
                height={16}
              />
              <p className="text-slate-500">
                <span className="text-[#212529]">
                  Dispatch within <strong>24 Hours:</strong>
                </span>{" "}
                Your product will be shipped quickly.
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <Image
                src={"/assets/tick.svg"}
                alt="tic"
                width={16}
                height={16}
              />
              <p className="text-slate-500">
                <span className="text-[#212529]">
                  <strong>3-Year</strong> Warranty:
                </span>{" "}
                Ignavo is safe with warranty conditions.
              </p>
            </div>
          </div>

          {/* Call box */}
          <div className="flex gap-3 items-center">
            <Image src={"/assets/phone.svg"} alt="tic" width={46} height={46} />
            <div>
              <span className="text-[12px] text-slate-500">
                Our customer representative is waiting for you.
              </span>
              <p className="text-[14px] text-[#212529]">
                Call for immediate assistance at{" "}
                <span className="font-bold">1-312-800-0888</span>
              </p>
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center gap-2">
            <p className="text-[12px] font-medium">Share:</p>
            {["twitter", "fb", "pinterest", "whatsapp"].map((icon, i) => (
              <span
                key={i}
                className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center cursor-pointer"
              >
                <Link href={""}>
                  <Image
                    src={`/assets/${icon}.svg`}
                    alt={"icon"}
                    width={12}
                    height={12}
                    className="w-4 h-4"
                  />
                </Link>
              </span>
            ))}
          </div>

          {/* Meta */}
          <div className="space-y-3 text-[13px] border-t border-slate-200 pt-4 mt-4">
            <p className="font-semibold text-[#4E4C4C]">
              <span className="font-normal text-slate-500">Categories:</span>{" "}
              Summer Tires, Tires & Wheels
            </p>
            <p className="font-semibold text-[#4E4C4C]">
              <span className="font-normal text-slate-500">Brand:</span>{" "}
              Goodyear
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="flex gap-5 my-10">
        {["Fast Shipping", "Easy Return", "Warranty Policy"].map((title, i) => (
          <div
            key={i}
            className="flex-1 bg-slate-50 rounded-lg p-6 text-center"
          >
            <Image
              src={`/assets/${["shipping", "return", "warranty"][i]}.svg`}
              alt={"services"}
              width={12}
              height={12}
              className="mx-auto w-12 h-12"
            />
            <h3 className="mt-3 font-semibold text-[15px]">{title}</h3>
            <p className="text-[12px] text-slate-500 mt-2">
              Integer mattis ultricies augue, ac bibendum arcu viverra vel.
            </p>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="space-y-4 mb-6">
        <h3 className="text-[16px] font-medium text-[#726D69] border-b border-slate-200 pb-2">
          Description
          <span className="ml-2 text-slate-400">Reviews (3)</span>
        </h3>

        <p className="text-[16px] text-[#212529] leading-relaxed">
          Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin
          vitae magna in dui finibus malesuada et at nulla. Morbi elit ex,
          viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum
          iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc,
          in pellentesque lorem mattis quis. Cras imperdiet est in nunc
          tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt.
          Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
          Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor,
          eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra.
          Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor.
          Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies
          cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus
          blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo.
          Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis
          quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat
          mauris, sed egestas purus commodo vel.
        </p>
      </div>
    </div>
  );
}
