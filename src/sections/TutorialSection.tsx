// components/TutorialSection.js
import Image from 'next/image';
import { firstStep, fourthStep, secondStep, thirdStep, fifthhStep, sixthStep} from '../app/assets';

const tutorials = [
  { title: "Actor Configuration", description: "Learn how to configure actors.", videoUrl: firstStep },
  { title: "User Creation", description: "Steps to create new users.", videoUrl: secondStep },
  { title: "Knowledge Base Setting", description: "Set up your knowledge base.", videoUrl: thirdStep },
  { title: "Q&A Session", description: "How to conduct Q&A sessions.", videoUrl: fourthStep },
  { title: "Contextual Q&A", description: "Understanding contextual Q&A.", videoUrl: fifthhStep },
  { title: "More Insight & Feedback", description: "Gather more insights and feedback.", videoUrl: sixthStep },
];

const TutorialSection = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-screen-xl mx-auto text-center lg:py-16 lg:px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-800">Tutorial Section</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <video controls className="w-full h-48 object-cover">
                <source src={tutorial.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{tutorial.title}</h3>
                <p className="text-gray-600">{tutorial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorialSection;
