import webImg from "../assets/images/hero.png";
import apiImg from "../assets/images/hero.png";
import uiImg from "../assets/images/hero.png";

const services = [
  {
    title: "Web Development",
    desc: "Website modern & cepat",
    img: webImg,
  },
  {
    title: "Backend API",
    desc: "API scalable & aman",
    img: apiImg,
  },
  {
    title: "UI/UX Design",
    desc: "Design clean & user friendly",
    img: uiImg,
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="glass rounded-2xl overflow-hidden hover:scale-105 transition"
          >
            <img src={"https://images.unsplash.com/photo-1707836885254-79b6e3d7b18d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMG1vY2t1cHxlbnwwfHwwfHx8MA%3D%3D"} className="h-40 w-full object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}