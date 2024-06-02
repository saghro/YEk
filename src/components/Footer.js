import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";

const socialMediaIcons = [
  { icon: <FaFacebook size={28} />, link: "#" },
  { icon: <FaInstagram size={28} />, link: "#" },
  { icon: <FaTwitter size={28} />, link: "#" },
];

const footerSections = [
  {
    title: "AZ Holding",
    content: "Az Holding est une société mère qui détient des participations dans plusieurs entreprises filiales opérant dans divers secteurs.",
  },
  {
    title: "Contact Info",
    links: [
      { label: "43 Rue d'Aulnay, 95500 GONESSE", url: "#" },
      { label: "Email: contact@azholding.fr", url: "mailto:contact@azholding.fr" },
      { label: "Numéro : +33 1 39 85 91 68", url: "tel:+33139859168" },
    ],
  },
  {
    title: "Page",
    links: [
      { label: "ACCUEIL", url: "#" },
      { label: "À PROPOS", url: "#" },
      { label: "NOS SERVICES", url: "#" },
      { label: "FAQ", url: "#" },
      { label: "BLOG", url: "#" },
      { label: "CONTACT", url: "#" },
    ],
  },
  {
    title: "Newsletter",
    content: "Inscrivez-vous à notre newsletter.",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-12">
          {/* Section 1: Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img
              src="https://www.azholding.fr/wp-content/uploads/2024/03/cropped-AZ-holding-150x150.png"
              alt="AZ Holding Logo"
              className="w-20 mb-4"
            />
            <p>{footerSections[0].content}</p>
          </div>

          {/* Section 2: Contact Info */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="font-bold mb-3">{footerSections[1].title}</h2>
            <ul>
              {footerSections[1].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.url} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Page Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="font-bold mb-3">{footerSections[2].title}</h2>
            <ul>
              {footerSections[2].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.url} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Newsletter Signup */}
          <div className="w-full md:w-1/4">
            <h2 className="font-bold mb-3">{footerSections[3].title}</h2>
            <p>{footerSections[3].content}</p>
            <form method="post" action="https://www.azholding.fr/?na=s" className="mt-4">
              <input type="hidden" name="nr" value="widget" />
              <input type="hidden" name="nlang" value="" />
              <div className="mb-4">
                <input
                  type="email"
                  name="ne"
                  placeholder="E-mail"
                  required
                  className="w-full p-2 rounded bg-blue-200 text-black"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-white text-black p-2 w-full rounded hover:bg-gray-300 transition"
                >
                  S'abonner
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>Copyright © AZ Holding 2024, Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
