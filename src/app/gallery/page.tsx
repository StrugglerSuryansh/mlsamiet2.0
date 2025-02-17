"use client";



const gallery = () => {

  return (
    <div id="media_section" className="mx-8 lg:pt-20 pt-2 relative">
      <h1 className="text-5xl font-bold mb-5 text-center">
        Sneak Peek Into MLSA&apos;s Events
      </h1>
      {/* AVASAR IMAGES */}
      <h1 className="text-4xl font-bold mb-5 text-center">AVASAR</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-[10px] object-cover"
              width={500}
              height={500}
              src={"/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_102457828.PORTRAIT.jpg"}
              alt="AVASAR Event"
            />
          </div>
          <div>
          <img
              className="h-auto max-w-full rounded-[10px] object-cover"
              width={500}
              height={500}
              src={"/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_102457828.PORTRAIT.jpg"}
              alt="AVASAR Event"
            />
          </div>
          <div>
          <img
              className="h-auto max-w-full rounded-[10px] object-cover"
              width={500}
              height={500}
              src={"/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_102457828.PORTRAIT.jpg"}
              alt="AVASAR Event"
            />
          </div>
          <div>
          <img
              className="h-auto max-w-full rounded-[10px] object-cover"
              width={500}
              height={500}
              src={"/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_102457828.PORTRAIT.jpg"}
              alt="AVASAR Event"
            />
          </div>
          <div>
          <img
              className="h-auto max-w-full rounded-[10px] object-cover"
              width={500}
              height={500}
              src={"/MLSA_WEBSITE/EVENT_PHOTO/AVSAR/PXL_20241014_102457828.PORTRAIT.jpg"}
              alt="AVASAR Event"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default gallery;
