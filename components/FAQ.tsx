export default function Faq() {
  return (
    <div className="w-[70%] mx-auto my-10">
      {/* Item 1 (active) */}
      <div className="border-t border-gray-300">
        <button className="w-full flex justify-between items-center px-[18px] py-[18px] text-left text-[18px] font-semibold">
          How Do I Know If a Part Fits My Loom?
          <span className="text-[16px]">⌃</span>
        </button>
        <div className="px-[18px] pb-[18px] text-[#333] leading-relaxed">
          <p>
            <strong>This is the third item’s accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. You can modify any of
            this with custom CSS.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div className="border-t border-gray-300">
        <button className="w-full flex justify-between items-center px-[18px] py-[18px] text-left text-[18px] font-semibold">
          Can I use one gear to my multiple loom?
          <span className="text-[16px]">⌄</span>
        </button>
      </div>

      {/* Item 3 */}
      <div className="border-t border-gray-300">
        <button className="w-full flex justify-between items-center px-[18px] py-[18px] text-left text-[18px] font-semibold">
          Do you have stainless needles?
          <span className="text-[16px]">⌄</span>
        </button>
      </div>

      {/* Item 4 */}
      <div className="border-t border-gray-300">
        <button className="w-full flex justify-between items-center px-[18px] py-[18px] text-left text-[18px] font-semibold">
          Are Aftermarket Parts Reliable?
          <span className="text-[16px]">⌄</span>
        </button>
      </div>

      {/* Item 5 */}
      <div className="border-t border-gray-300">
        <button className="w-full flex justify-between items-center px-[18px] py-[18px] text-left text-[18px] font-semibold">
          Can I Return a Part If It Doesn’t Fit?
          <span className="text-[16px]">⌄</span>
        </button>
      </div>
    </div>
  );
}
