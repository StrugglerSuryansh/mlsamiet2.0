"use client";

const avasarImagesArray = [
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2276.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2280.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2283.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2286.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2288.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2289.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2291.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2313.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2314.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2321.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2323.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/IMG_2324.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_090652579.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_093825338.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_093848134.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_094146994.PORTRAIT.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_102457828.PORTRAIT.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_102600849.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_103422122.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_103438501.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_103519560.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_103546478.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_103608240.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_103945870.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_104001559.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_105027481.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_105028550.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_105613693.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_105815362.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_110128565.jpg",
];

const funMeetArray = [
  "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_0295.jpeg",
  "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_0297.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_0317.jpeg",
  "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_0318.jpeg",
  "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_0331.jpeg",
  "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_0337.jpeg",
  "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_0339.jpeg",
  "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_5090.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_5096.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_5103.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_5109.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/fun meet/IMG_5113.JPG",
];

const introToMLSAArray = [
  "/MLSA_WEBSITE/EVENT_PHOTO/intro mlsa/IMG_0366.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/intro mlsa/IMG_0377.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/intro mlsa/IMG_0391.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/intro mlsa/IMG_0399.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/intro mlsa/IMG_0447.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/intro mlsa/IMG_0455_exported_1566.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/intro mlsa/IMG_0468.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/intro mlsa/IMG_5868.JPG",
];

const prayasArray = [
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/20240529_095734.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/20240529_100212.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/20240529_111933AMByGPSMapCamera.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/20240529_120926PMByGPSMapCamera.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/20240529_121006PMByGPSMapCamera.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/IMG_3021.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/IMG_3022.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/IMG_3120.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/IMG_3122.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/IMG_3139.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/IMG_3152.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/IMG_3157.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/IMG_3158.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/PXL_20240529_052718044.PORTRAIT.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/prayas/PXL_20240529_074308463.jpg",
];

const samaarambhArray = [
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0721.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0730.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0735.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0743.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0751.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0760.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0816.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0827.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0880.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0898.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0937.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0940.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0945.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0947.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0966.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_0978.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_1001.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_1034.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/IMG_1048.JPG",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/PXL_20241228_050829804.MP.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/PXL_20241228_071923205.MP.jpg",
  "/MLSA_WEBSITE/EVENT_PHOTO/SAMAARAMBH 2.0/PXL_20241228_090110793.MP.jpg",
];

// Combine all images into one array

const Gallery = () => {
  return (
    <div id="media_section" className="px-4 sm:px-6 lg:px-8 py-8 lg:pt-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-center">
        Sneak Peek Into MLSA&apos;s Events
      </h1>

      <section id="avasar">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-center">
          AVASAR
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {avasarImagesArray.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="funmeet">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-8 text-center">
          FUN MEET
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {funMeetArray.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="intromlsa">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-8 text-center">
          INTRO TO MLSA
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {introToMLSAArray.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="prayas">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-8 text-center">
          PRAYAS
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {prayasArray.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="samaarambh">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-8 text-center">
          SAMAARAMBH
        </h1>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [&>div:not(:first-child)]:mt-3 sm:[&>div:not(:first-child)]:mt-4">
          {samaarambhArray.map((image, index) => (
            <div key={index} className="break-inside-avoid">
              <img
                className="w-full h-auto rounded-[10px] hover:opacity-90 transition-opacity duration-300 shadow-sm hover:shadow-md"
                src={image}
                alt={`Event image ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
