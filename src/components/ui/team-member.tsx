import Image from "next/image";

export interface TeamMemberProps {
  name: string;
  role?: string;
  imageUrl: string;
  imagePosition?: "top" | "center" | "bottom";
  isFirst?: boolean;
}

export function TeamMember({
  name,
  role,
  imageUrl,
  isFirst,
  imagePosition = "center",
}: TeamMemberProps) {
  // Create object for dynamic classes
  const objectPosition = {
    top: "object-top",
    center: "object-center",
    bottom: "object-bottom",
  }[imagePosition];

  return (
    <div className="text-center">
      <div className="relative w-full pb-[100%] mb-4 rounded-[10px] overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className={`absolute inset-0 w-full h-full object-cover ${objectPosition}`}
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-semibold secondary">{name}</h3>
      {role && <p className="text-sm text-gray-600">{role}</p>}
      {isFirst && (
        <span className="mt-1 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800 primary">
          Team Head
        </span>
      )}
    </div>
  );
}
