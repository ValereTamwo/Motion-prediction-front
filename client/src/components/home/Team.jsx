import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import teamMember1 from '../../public/train6.jpeg'; // Replace with actual paths to your images
import teamMember2 from '../../public/icons/logo.png';
import teamMember3 from '../../public/icons/logo2.png';
import teamMember4 from '../../public/icons/logo.png';
import teamMember5 from '../../public/icons/logo.png';
import teamMember6 from '../../public/icons/logo.png';

const teamMembers = [
  {
    name: 'Valere TAMWO',
    role: 'Team Lead',
    image: teamMember1,
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
  },
  {
    name: 'Fideline kuetche',
    role: 'Co-lead',
    image: teamMember2,
    twitter: 'https://twitter.com/janesmith',
    linkedin: 'https://www.linkedin.com/in/janesmith',
    github: 'https://github.com/janesmith',
  },
  {
    name: 'Bahaouddyn',
    role: 'Lead Developer',
    image: teamMember3,
    twitter: 'https://twitter.com/alicejohnson',
    linkedin: 'https://www.linkedin.com/in/alicejohnson',
    github: 'https://github.com/alicejohnson',
  },
  {
    name: 'Ozias MEL..',
    role: 'UI/UX Designer',
    image: teamMember4,
    twitter: 'https://twitter.com/bobbrown',
    linkedin: 'https://www.linkedin.com/in/bobbrown',
    github: 'https://github.com/bobbrown',
  },
  {
    name: 'Ekanga Yves',
    role: 'Backend Developer',
    image: teamMember5,
    twitter: 'https://twitter.com/charliedavis',
    linkedin: 'https://www.linkedin.com/in/charliedavis',
    github: 'https://github.com/charliedavis',
  },
  {
    name: 'Mongoue COCO',
    role: 'Marketing Specialist',
    image: teamMember6,
    twitter: 'https://twitter.com/danawilson',
    linkedin: 'https://www.linkedin.com/in/danawilson',
    github: 'https://github.com/danawilson',
  },
];

const Team = () => {
  return (
    <div className="bg py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex space-x-4">
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  <FaTwitter size={24} />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
