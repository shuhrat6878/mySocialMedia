import React from "react";

const Portfolio = () => {
  const socialLinks = [
    {
      name: "Instagram",
      img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      link: "https://www.instagram.com/sh_abbosovich",
    },
    {
      name: "Telegram",
      img: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
      link: "https://t.me/mp3_admiral_sh",
    },
    {
      name: "Facebook",
      img: "https://cdn-icons-png.flaticon.com/512/2111/2111342.png",
      link: "https://www.facebook.com/shuhrat.anorboyev.7/",
    },
    {
      name: "GitHub",
      img: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
      link: "https://github.com/shuhrat6878",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <h1 className="text-4xl font-bold mb-10 text-gray-700">My Social Media</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white rounded-2xl shadow-md p-5 w-32 hover:shadow-xl transition hover:scale-110"
          >
            <img src={item.img} alt={item.name} className="w-12 h-12 mb-2" />
            <span className="text-sm font-semibold text-gray-700">{item.name}</span>
          </a>
        ))}
      </div>

      <p className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Shuxrat Anorboyev.
      </p>
    </div>
  );
};

export default Portfolio;
