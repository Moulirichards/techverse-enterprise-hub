
import React from 'react';

const TechnologyStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'brand-teal'
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Java', '.NET', 'Go', 'PHP'],
      color: 'brand-purple'
    },
    {
      category: 'Mobile',
      items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
      color: 'brand-pink'
    },
    {
      category: 'Cloud',
      items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      color: 'brand-blue'
    },
    {
      category: 'Database',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB', 'Elasticsearch'],
      color: 'brand-teal'
    },
    {
      category: 'AI/ML',
      items: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn', 'Pandas'],
      color: 'brand-purple'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry best practices to deliver robust, scalable solutions.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.category}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-brand-teal/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={`text-xl font-semibold mb-6 text-${tech.color} border-b border-${tech.color}/20 pb-3`}>
                {tech.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {tech.items.map((item, itemIndex) => (
                  <span
                    key={item}
                    className={`px-3 py-2 bg-${tech.color}/10 text-${tech.color} rounded-full text-sm font-medium hover:bg-${tech.color}/20 transition-colors cursor-default border border-${tech.color}/20`}
                    style={{ animationDelay: `${(index * 6 + itemIndex) * 0.05}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-teal to-brand-purple rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to leverage these technologies?</h3>
            <p className="text-white/90 mb-6">Let's discuss how we can apply the right tech stack for your project.</p>
            <button className="bg-white text-brand-teal px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
