
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block">
            <span className="px-3 py-1 rounded-md text-sm font-medium text-primary border border-orange-100">
              Revolutionizing EdTech with AI-Powered Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900">
            Innovative Solutions for <br />
            <span className="text-primary">Modern Problems</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            GlowLogics empowers your business with cutting-edge technology and intuitive design. 
            Experience the future of productivity today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors shadow-sm">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
              View Demo
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Lightning Fast", desc: "Optimized for speed and efficiency." },
              { title: "Secure by Design", desc: "Enterprise-grade security built-in." },
              { title: "Scalable Architecture", desc: "Grows with your business needs." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
