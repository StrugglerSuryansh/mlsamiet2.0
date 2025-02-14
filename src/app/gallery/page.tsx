import ImageGrid from "@/components/image-grid";

const gallery = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>
      <ImageGrid />
    </div>
  );
};

export default gallery;
