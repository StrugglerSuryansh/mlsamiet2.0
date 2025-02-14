import { TeamMember } from "./ui/team-member"

const technicalTeam = [
  {
    name: "Alex Johnson",
    role: "Senior Developer",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/suryansh.png",
  },
  {
    name: "Sarah Lee",
    role: "Backend Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mike Chen",
    role: "Frontend Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Emily Taylor",
    role: "DevOps Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "David Kim",
    role: "QA Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
]

const graphicsTeam = [
  {
    name: "Olivia Martinez",
    role: "Lead Designer",
    imageUrl:
      "/MLSA_WEBSITE/Domain_Heads_photo/anmol.jpg",
  },
  {
    name: "Ethan Wilson",
    role: "UI/UX Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sophia Brown",
    role: "Graphic Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Liam Garcia",
    role: "Motion Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
]

const contentTeam = [
  {
    name: "Emma Davis",
    role: "Content Strategist",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Noah Thompson",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ava Rodriguez",
    role: "Social Media Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lucas Nguyen",
    role: "SEO Specialist",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  },
]

export function Teams() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Our Teams</h1>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-8">Technical Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {technicalTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Graphics Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {graphicsTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8">Content Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {contentTeam.map((member, index) => (
            <TeamMember key={member.name} {...member} isFirst={index === 0} />
          ))}
        </div>
      </section>
    </div>
  )
}

