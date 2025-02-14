import Image from "next/image"

interface TeamMemberProps {
    name: string
    role: string
    imageUrl: string
    isFirst?: boolean
}

export function TeamMember({ name, role, imageUrl, isFirst = false }: TeamMemberProps) {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
                src={imageUrl || "/placeholder.svg"}
                alt={name}
                width={1}
                height={1}
                layout="responsive"

                className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">{name}</h3>
                <p className="text-gray-300 text-sm">{role}</p>
            </div>
            {isFirst && (
                <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 text-sm font-semibold">Team Lead</div>
            )}
        </div>
    )
}

