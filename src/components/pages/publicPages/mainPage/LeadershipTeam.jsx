import React, { useState } from "react";
import { MdMail as Mail, MdPhone as Phone } from "react-icons/md";

function LeadershipTeam() {
  const [isHovered, setIsHovered] = useState(false);
  const teamMembers = [
    {
      name: "Dr. Chaim Pollak",
      role: "Chief Executive Officer",
      description:
        "Expert in business development and strategy with 15 years of experience in the global market",
      email: "ch324id@gmail.com",
      phone: "+972 55-566-0709",
      image:
        "https://res.cloudinary.com/dl8slx4ca/image/upload/v1735862135/q0hnskq5l6rlrydtpfpu.png",
    },
    {
      name: "Dr. Daniel Biton",
      role: "Chief Technology Officer",
      description:
        "Leading innovative technological product development with AI specialization",
      email: "biton123654@gmail.com ",
      phone: "+972 53-313-9485",
      image:
        "https://res.cloudinary.com/dl8slx4ca/image/upload/v1735862135/pcvrzhdq82xbfo4bk52j.png",
    },
    {
      name: "Dr. Netanel Malka",
      role: "Business Development Director",
      description:
        "Specializing in strategic partnerships and growth in new markets",
      email: "netanel63071@gmail.com",
      phone: "+972-53-5444616",
      image:
        "https://res.cloudinary.com/dl8slx4ca/image/upload/v1735863366/gin2jcoz8nwvokan8gs6.png",
    },
    {
      name: "Dr. Simcha Klikshtein",
      role: "Head of Research",
      description: "Leading research and innovation in advanced technologies",
      email: "sbk88514@gmail.com ",
      phone: "+972 55-676-7159",
      image:
        "https://res.cloudinary.com/dl8slx4ca/image/upload/v1735862135/jrydahfykgm8bo3f4txn.png",
    },
  ];
  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-8 min-h-screen">
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-amber-800 mb-8 text-center">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/80 rounded-xl p-6 shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow"
            >
              <img
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                style={{
                  filter:
                    isHovered === index ? "grayscale(0%)" : "grayscale(100%)",
                  transition: "filter 0.3s ease",
                }}
              />
              <h3 className="text-xl font-semibold text-amber-700 text-center mb-2">
                {member.name}
              </h3>
              <h4 className="text-amber-600 font-medium text-center mb-2">
                {member.role}
              </h4>
              <p className="text-amber-900 text-sm mb-4 text-center">
                {member.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-amber-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <a
                    href={`mailto:${member.email}?subject=Contact%20from%20your%20website&body=Hello,%20I%20found%20your%20contact%20on%20the%20website%20and%20would%20like%20to%20know%20more.`}
                    className="text-sm hover:underline"
                  >
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center text-amber-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <a
                    href={`https://wa.me/${member.phone.replace(
                      /\D/g,
                      ""
                    )}?text=${encodeURIComponent(
                      "Hi! I discovered your contact through your website and I’m really impressed with your work. I’d love to learn more and discuss further!"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeadershipTeam;
