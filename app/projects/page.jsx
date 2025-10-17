import photo1 from "../_assest/doctor.jpg";
import photo2 from "../_assest/shop.jpg";
import photo3 from "../_assest/awfirm.jpg";
import photo4 from "../_assest/law2.jpg";
import photo5 from "../_assest/hotel.png";
import photo6 from "../_assest/blog.png";
import ProjectCard from "../_components/ProjectCard";

const projects = [
  {
    isDeveloping: false,
    image: photo2,
    name: "آنلاین شاپ",
    category: "وبسایت",
    href: "https://online-shop-blue-nu.vercel.app/",
  },
  {
    isDeveloping: false,
    image: photo1,
    name: "نوبت دهی مطب",
    category: "وبسایت",
    href: "https://doctorrr-appointment.vercel.app/",
  },
  {
    isDeveloping: false,
    image: photo3,
    name: "موسسه حقوقی",
    category: "وبسایت",
    href: "https://lawfirm-iota.vercel.app/",
  },
  {
    isDeveloping: true,
    image: photo4,
    name: "موسسه حقوقی ماندگار",
    category: "وبسایت",
    href: "https://andishmandan-law-firm.vercel.app/",
  },
  {
    isDeveloping: true,
    image: photo6,
    name: " وبلاگ",
    category: "وبسایت",
    href: "https://weblog-liard-two.vercel.app/",
  },
  {
    isDeveloping: false,
    image: photo5,
    name: "هتل",
    category: "وبسایت",
    href: "https://wild-oasis-website-ddd.vercel.app/",
  },
];

function page() {
  return (
    <div>
      <h1 className="flex flex-col text-2xl/10 md:text-3xl/10  text-gray-200 justify-center items-center mb-15 mt-3">
        نمونه کار ها{" "}
        <span className="text-base text-gray-400">
          نمونه سایت های طراحی و کدنویسی شده
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mb-20 md:mb-30 lg:grid-cols-3 gap-17 md:gap-23 px-3 max-w-280 mx-auto ">
        {projects.map((project) => (
          <ProjectCard
            isDeveloping={project.isDeveloping}
            image={project.image}
            name={project.name}
            category={project.category}
            key={project.name}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
