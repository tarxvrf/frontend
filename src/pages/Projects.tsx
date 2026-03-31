import p1 from "../assets/images/hero.png";
import p2 from "../assets/images/hero.png";
import p3 from "../assets/images/hero.png";

const projects = [
  {
    title: "Booking App",
    desc: "Sistem booking penginapan",
    img: p1,
    tech: "React, Express, Supabase",
    link: "#",
  },
  {
    title: "Company Profile",
    desc: "Website perusahaan modern",
    img: p2,
    tech: "Vite, Tailwind",
    link: "#",
  },
  {
    title: "Admin Dashboard",
    desc: "Dashboard management",
    img: p3,
    tech: "React, Chart",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group rounded-2xl overflow-hidden bg-gray-900 hover:scale-105 transition"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={"https://images.pexels.com/photos/33572895/pexels-photo-33572895.jpeg"}
                alt={p.title}
                className="h-52 w-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{p.desc}</p>

              {/* TECH */}
              <p className="text-blue-400 text-xs mt-2">
                {p.tech}
              </p>

              {/* BUTTON */}
              <a
                href={p.link}
                className="inline-block mt-4 text-sm text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}