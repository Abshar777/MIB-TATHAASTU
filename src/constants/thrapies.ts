import { IoIosColorPalette } from "react-icons/io";
import { FaHandsHelping, FaMusic, FaUser, FaUsers } from "react-icons/fa";
import { FaWater } from "react-icons/fa";
import { FaTheaterMasks } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";
import { SiBytedance } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";



export const therapies = [
    { title: "Art Therapy", description: "Immerse yourself in the transformative power of art therapy. Explore emotions, confront challenges, and foster healing.", bgColor: "bg-blue-500",icon:IoIosColorPalette },
    { title: "Music Therapy", description: "Discover the harmonious path to healing with music therapy. Engage in rhythm and melody for relaxation and emotional well-being.", bgColor: "bg-purple-500",icon:FaMusic },
    { title: "Dance Therapy", description: "Experience the rhythm of healing with dance therapy. Through movement and expression, relieve stress and enhance emotional well-being.", bgColor: "bg-pink-500",icon:SiBytedance },
    { title: "Water Therapy", description: "Find tranquility with water therapy. Aquatic exercises and relaxation techniques promote stress relief and well-being.", bgColor: "bg-teal-500",icon:FaWater },
    { title: "Drama Therapy", description: "Unlock the healing power of storytelling through role-play and improvisation. Gain insights into personal struggles.", bgColor: "bg-yellow-500",icon:FaTheaterMasks },
    { title: "Self-Healing", description: "Cultivate resilience and inner peace through mindfulness and self-care rituals, fostering holistic well-being.", bgColor: "bg-green-500",icon:FaBaby },
    { title: "Postpartum Counseling", description: "Tailored support for new mothers navigating the challenges of motherhood. Foster self-care and emotional well-being.", bgColor: "bg-orange-500",icon:FaBrain },
    { title: "Individual Counseling", description: "Personalized therapy to address life challenges and mental health concerns in a confidential and empowering space.", bgColor: "bg-red-500",icon:FaUser },
    { title: "Group Counseling", description: "Engage in meaningful discussions and develop coping skills in a nurturing group setting led by experienced therapists.", bgColor: "bg-indigo-500",icon:FaUsers },
    { title: "Clay Therapy", description: "Explore emotions and promote healing through hands-on sculpting, fostering self-awareness and emotional release.", bgColor: "bg-gray-500",icon:FaHandsHelping },
    { title: "Grief Therapy", description: "A compassionate space to process loss, find healthy coping mechanisms, and embark on a journey toward healing.", bgColor: "bg-cyan-500",icon:FaHeartBroken },
];
