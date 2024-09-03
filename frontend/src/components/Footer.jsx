import React from "react";
import { Link } from "react-router-dom";
// import { FaFacebook } from "react-icons/fa6";
import {
  FaFacebook,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/Untitled.png" alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>​Anjangaon Surji Dist Amravati Maharashtra PIN 444705</li>
          <li>contact@anandjyoti.org</li>
          <li>Mob.No : +91 82754 40011</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/donate"}>Donate</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/people/Anand-Jyoti-Foundation/100089552708483/?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaFacebook />
              </span>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@AnandJyotiFoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaYoutube />
              </span>
              <span>YouTube</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/anandjyotifoundation/?igshid=ZDdkNTZiNTM%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaSquareInstagram />
              </span>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anandjyotifoundation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaLinkedin />
              </span>
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
