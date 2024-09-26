import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

const Social = () => {
    const socialLinks = [
        { link: "https://www.linkedin.com/in/shivang-jain-535094233/", icon: IconBrandLinkedin },
        { link: "https://github.com/shivangjain03", icon: IconBrandGithub }
    ];

    const socialIcons = socialLinks.map(({ link, icon: Icon }) => (
        <a key={link} href={link} target="_blank" rel="noopener noreferrer" className="hover:text-primaryColor hover:-translate-x-2 font-mono text-lg transition-transform duration-300 ease-in-out -rotate-90">
            <Icon size={30} />
        </a>
    ));

    return (
        <div className="flex items-center md-mx:hidden gap-10 text-textColor fixed rotate-90" style={{ bottom: '8rem', left: '-7.25rem' }}>
            {socialIcons}
            <hr className="border-[2px] rounded-full w-40 bg-textColor border-textColor" />
        </div>
    );
};

export default Social;
