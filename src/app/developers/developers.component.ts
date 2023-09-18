import { Component, OnInit } from '@angular/core';
interface Developer {
  name: string;
  career: string;
  linkedin: string;
  desc: string;
  img:string
}
@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss'],
})
export class DevelopersComponent implements OnInit {
  developers: Developer[] = [
    {
      name: 'Nuha Alshuqayran',
      career: 'Assistant Professor',
      linkedin: 'https://www.linkedin.com/in/nuha-al-shuqayran-b51896ab/',
      img:'assets/images/nuha.png',
      desc: 'I’m a Software Engineering graduate with a passion for computer science, and information systems, who has a broad range of technical, administrative, and managerial skills. Qualified in reverse engineering for Microservice architecture, Developing and managing software projects. Seeking to play an effective role and add significant value to an organization.',
    },
    {
      name: 'Ali Salhi',
      career: 'AI Research and Development Engineer',
      linkedin: 'http://www.linkedin.com/in/asalhi85',
      img:'assets/images/ali.png',
      desc: 'AI R&D Engineer, Entrepreneur, and Kaggle Competitions Expert, with 15 years of experience, specializing in Arabic NLP and Computer Vision, with many awards, innovative projects, and academic publications. ',
    },
    {
      name: 'Khalid Musallam',
      career: 'Senior Designer and Developer of Building Systems Architecture Ui/Ux',
      linkedin: 'https://www.linkedin.com/in/khaledmusalam/',
      img:'assets/images/khalid.png',
      desc: 'Computer engineer microcontroller expert | 8 years of experience as a Senior Ui/Ux Building Systems Architecture Designer and Developer | PMP | TOT October 6 University | ACP.',
    },
    {
      name: 'Rana Fakeh',
      career: 'Freelance Data Scientist and Fullstack ML/Web Developer',
      linkedin: 'https://www.linkedin.com/in/rana-fakeeh/',
      img:'assets/images/rana.png',
      desc: 'I’m freelance data scientist & full stack ML/Web developer. Also, I’m first-award winner in NLP & Computer Vision hackathons. I am recognized as an IT passionate, self-motivated, fast learner, and challenge taker.',
    },
    {
      name: 'Haya Alwarthan ',
      career: 'Fullstack Developer',
      img:'assets/images/me.png',
      linkedin: 'https://www.linkedin.com/in/haya-a-435362219/',
      desc: 'Ambitious software developer with expertise in building web and mobile applications and an interest in utilizing machine learning and deep learning technologies to solve real-world problems.',
    
    },
    {
      name: 'Haya Albaqami',
      career: 'Computer Science Student',
      img:'assets/images/haya.png',
      linkedin: 'https://www.linkedin.com/in/haya-albaqami-97b91823a/',
      desc: 'As a devoted computer science student, I am driven by my passion for machine learning. I find joy in exploring algorithms, analyzing data patterns, and creating intelligent systems that have the potential to revolutionize various domains.',
    
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
