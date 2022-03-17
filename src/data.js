import React from 'react';
import { FaGithub, FaBlogger, FaLinkedin, FaEnvelope } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 3,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 4,
    url: '/about',
    text: 'about',
  },
  {
    id: 5,
    url: '/blog',
    text: 'blog',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://github.com/PalisthaGit',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://www.gmail.com',
    icon: <FaEnvelope />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBlogger />,
    
  },
];
