
const About = () => {
  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h1>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Founded in 2024, PaperCraft emerged from a vision to revolutionize paper manufacturing through sustainable practices and cutting-edge technology.
            </p>
            <p>
              Our state-of-the-art facility combines traditional papermaking expertise with modern innovation, creating products that meet the highest standards of quality while minimizing environmental impact.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Raw Materials</h3>
              <p className="text-gray-600">Sustainable sourcing of premium materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Processing</h3>
              <p className="text-gray-600">Advanced pulping and refinement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Formation</h3>
              <p className="text-gray-600">Precision sheet forming</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
              <p className="text-gray-600">Rigorous testing and inspection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
