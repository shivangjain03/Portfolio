import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => {
  const socialLinks = [
    { link: "https://www.linkedin.com/in/shivang-jain-535094233/", icon: IconBrandLinkedin },
    { link: "https://github.com/shivangjain03", icon: IconBrandGithub }
  ];

  const socialIcons = socialLinks.map(({ link, icon: Icon }) => (
    <a key={link} href={link} target="_blank" rel="noopener noreferrer" className="hover:text-primaryColor hover:scale-105 font-mono text-lg transition-transform duration-300 ease-in-out">
      <Icon size={30} />
    </a>
  ));

  return (
    <div className="mt-10 mb-10 font-mono text-center flex items-center flex-col gap-2">
      <div className="text-3xl md-mx::text-2xl text-primaryColor font-semibold text-center">Shivang Jain</div>
      <div className="md-mx:flex hidden gap-4 text-textColor ">{socialIcons}</div>
      <div className="text-textColor md:text-lg sm:text-base xs:text-xs flex flex-col items-center">
        Copyright &copy; 2024<span className="xs:hidden"> |</span> <span>All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;