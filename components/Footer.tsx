// app/components/Footer.tsx

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-[398px] bg-slate-900 flex items-center justify-center font-[Inter]">
      <div className="w-[80%] flex justify-between text-slate-300">
        {/* About Company */}
        <div className="w-[24%]">
          <ul className="flex h-[200px] flex-col justify-between break-words">
            <h4 className="ml-2 mb-2.5 font-semibold text-white">
              About Company
            </h4>

            <li>
              <p className="text-sm text-slate-400">
                klfgbgyfuhffsdfhifddhj hasdfsajfdjasfdas
                <br />
                segfhguggsdkf hhhdhgydyd
              </p>
            </li>

            <li className="flex w-[250px] items-center justify-between">
              <p className="text-sm text-slate-400">Follow Us:</p>

              {[
                "Icon (1).png",
                "Icon (2).png",
                "Icon (3).png",
                "Icon (4).png",
              ].map((icon, i) => (
                <div
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
                >
                  <Image
                    src={`/assets/${icon}`}
                    alt="social"
                    width={18}
                    height={18}
                  />
                </div>
              ))}
            </li>

            <li>
              <p className="text-sm text-slate-400">
                Copyright 2025 © All right reserved.Powerd by abc
              </p>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="w-[24%]">
          <ul className="flex flex-col gap-4 m-2">
            <h4 className="mb-2.5 font-semibold text-white">Contact Us</h4>

            <li className="flex gap-2.5">
              <Image
                src="/assets/footer-contact.svg.png"
                alt="phone"
                width={24}
                height={24}
              />
              <div className="leading-[22px]">
                <h4 className="text-sm text-white">Phone Number</h4>
                <p className="text-sm text-slate-400">+(800) 1234 5678 90</p>
              </div>
            </li>

            <li className="flex gap-2.5">
              <Image
                src="/assets/footer-contact2.svg.png"
                alt="email"
                width={24}
                height={24}
              />
              <div className="leading-[22px]">
                <h4 className="text-sm text-white">E-Mail</h4>
                <p className="text-sm text-slate-400">info@example.com</p>
              </div>
            </li>

            <li className="flex gap-2.5">
              <Image
                src="/assets/footer-contact3.svg.png"
                alt="address"
                width={24}
                height={24}
              />
              <div className="leading-[22px]">
                <h4 className="text-sm text-white">Address</h4>
                <p className="text-sm text-slate-400">
                  2972 Westheimer Rd. santa Ana, lllinois 85486
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="w-[24%]">
          <ul className="flex flex-col gap-2 m-2">
            <h4 className="mb-2.5 font-semibold text-white">Quick link</h4>
            {[
              "Accessibility statement",
              "your Order",
              "Returns & Replacement",
              "Shipping Rates & policies",
              "Refund and Returns policy",
              "privacy policy",
              "Terms and Conditions",
              "Cookie Settings",
              "Help Center",
            ].map((item, i) => (
              <li key={i}>
                <p className="text-sm text-slate-400">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Download App */}
        <div className="w-[24%]">
          <ul className="m-2">
            <h4 className="mb-2.5 font-semibold text-white">Dowmnload App</h4>
            <li className="flex gap-2">
              <Image
                src="/assets/google-white.png.png"
                alt="google play"
                width={120}
                height={40}
              />
              <Image
                src="/assets/apple-white.png.png"
                alt="app store"
                width={120}
                height={40}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
