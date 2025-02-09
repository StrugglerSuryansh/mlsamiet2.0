import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4">
      {/* Title Section */}
      <div className="pt-32 flex flex-col items-center justify-center">
        <h1 className="text-black font-bold font-mono text-6xl text-center">
          Meet Our Team
        </h1>
      </div>

      {/* Head's Section */}
      <div className="flex flex-col items-center pt-10">
        <h2 className="text-black font-semibold font-mono text-4xl">
          Head's
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-6">
        <ThreeDCardDemo name="muskan" headling="hello"/>
        <ThreeDCardDemo name="yash" headling="hello"/>
      </div>

      {/* Technical Team Section */}
      <div className="flex flex-col items-center pt-10">
        <h2 className="text-black font-semibold font-mono text-4xl">
          Technical Team
        </h2>
      </div>
      {/* <div className="flex justify-center gap-10 flex-wrap max-w-[80%] mx-auto"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 mx-auto px-4">
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
      </div>

      {/* Other teams */}
      <div className="flex flex-col items-center pt-10">
        <h2 className="text-black font-semibold font-mono text-4xl">
          Other teams
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 mx-auto px-4">
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
        <ThreeDCardDemo size="small" name="lomash" headling="hello" />
      </div>
    </div>
  );
}