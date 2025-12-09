import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const CompletedProjects = () => {
  const projects = [
    {
      slNo: 1,
      natureOfWork: "Erection & Commissioning of 25 MW Siemens make TG set",
      customerName: "KCPL Bididi corporation Pvt Ltd, ISGECHEAVY ENGINEERING",
      siteLocation: "Bidadi, Karnataka"
    },
    {
      slNo: 2,
      natureOfWork: "Erection & Commissioning of 25 MW Siemens make TG set",
      customerName: "Andhra sugar Pvt Ltd",
      siteLocation: "Rajamundry, Andhra Pradesh"
    },
    {
      slNo: 3,
      natureOfWork: "Major Overhauling of BHEL TG",
      customerName: "National Fertilizer limited",
      siteLocation: "Vijaipur, Madhya Pradesh"
    },
    {
      slNo: 4,
      natureOfWork: "Erection & Commissioning of 25 MW Siemens make TG set",
      customerName: "ACC cement, Thermax",
      siteLocation: "Bhilai, Raipur, Chhattisgarh"
    },
    {
      slNo: 5,
      natureOfWork: "Erection & Commissioning of 23 MW Siemens make TG set",
      customerName: "Ultratech cement",
      siteLocation: "Darlaght, Himachal Pradesh"
    },
    {
      slNo: 6,
      natureOfWork: "Erection & Commissioning of 18 MW Siemens make TG set",
      customerName: "ACC cement (adani), Aalu Walia projects",
      siteLocation: "Katni, Madhya Pradesh"
    },
    {
      slNo: 7,
      natureOfWork: "Erection & Commissioning of 18 MW Siemens make TG set",
      customerName: "Barathi sugar, Privilege Bikaon boiler limited",
      siteLocation: "Vita, Maharashtra"
    },
    {
      slNo: 8,
      natureOfWork: "Major Overhauling of 18 MW Triveni make TG set",
      customerName: "Cauvery steel & iron Pvt Ltd",
      siteLocation: "Medak, Telangana"
    },
    {
      slNo: 9,
      natureOfWork: "Major Overhauling of 8 MW Triveni turbine TG set",
      customerName: "Suguna sponge & iron Pvt Ltd",
      siteLocation: "Tadipatri, Andhra Pradesh"
    },
    {
      slNo: 10,
      natureOfWork: "Erection & Commissioning of 30 MW Siemens make TG set",
      customerName: "Tata chemicals pvt ltd, Siemens",
      siteLocation: "Mithapur, Gujarat"
    },
    {
      slNo: 11,
      natureOfWork: "Major Overhauling of 18 MW Triveni make TG set",
      customerName: "Pushpit steel Pvt Ltd",
      siteLocation: "Srikalahasti, Andhra Pradesh"
    },
    {
      slNo: 12,
      natureOfWork: "Major Overhauling of 18 MW Triveni make TG set",
      customerName: "Kranti sugar Pvt Ltd, Uttam energy",
      siteLocation: "Pune, Maharashtra"
    },
    {
      slNo: 13,
      natureOfWork: "Erection & Commissioning of 22 MW Siemens make TG set",
      customerName: "Goal chemicals",
      siteLocation: "Arong, Raipur, Chhattisgarh"
    },
    {
      slNo: 14,
      natureOfWork: "Major Overhauling of 25 MW BHEL make TG set",
      customerName: "SKS Ispat & power Pvt ltd",
      siteLocation: "Raipur, Chhattisgarh"
    },
    {
      slNo: 15,
      natureOfWork: "Major Overhauling of 30 MW HTC make TG set",
      customerName: "Godavari ispat & power Pvt Ltd",
      siteLocation: "Raipur, Chhattisgarh"
    },
    {
      slNo: 16,
      natureOfWork: "Major Overhauling of 12.5 MW BHEL make TG set",
      customerName: "IOCL MATHURA REFINERY",
      siteLocation: "Mathura, Uttar Pradesh"
    },
    {
      slNo: 17,
      natureOfWork: "Major Overhauling of 25 MW Siemens make TG set",
      customerName: "MFL",
      siteLocation: "Bharuch, Gujarat"
    },
    {
      slNo: 18,
      natureOfWork: "Major Overhauling of 30 MW Siemens TG set",
      customerName: "JK Paper mills Siemens",
      siteLocation: "Rayagada, Odisha"
    },
    {
      slNo: 19,
      natureOfWork: "Erection & Commissioning of 60 MW BHEL make TG set",
      customerName: "Real ispat power Pvt Ltd",
      siteLocation: "Tilda, Chhattisgarh"
    },
    {
      slNo: 20,
      natureOfWork: "Major Overhauling of 25 MW Siemens make TG set",
      customerName: "Haldia petrochemicals",
      siteLocation: "Haldia, West Bengal"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Completed Projects | Quality Turbine Power Services</title>
        <meta name="description" content="View our completed projects including turbine erection, commissioning, and overhauling services across India." />
        <link rel="canonical" href="https://qualityturbopower.com/completed-projects" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Completed <span className="text-[#9ee055]">Projects</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              Our successful track record of completed projects across India
            </p>
          </div>
        </div>
      </section>

      {/* Projects Table */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[#283852] px-4 md:px-6 py-4">
              <h2 className="text-xl md:text-2xl font-bold text-white">Project Details</h2>
            </div>
            
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#9ee055]">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Sl. No</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Nature of Work</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Name of the Customer</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Site Location</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr
                      key={project.slNo}
                      className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }`}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-slate-900">{project.slNo}</td>
                      <td className="px-4 py-3 text-sm text-slate-700">{project.natureOfWork}</td>
                      <td className="px-4 py-3 text-sm text-slate-700">{project.customerName}</td>
                      <td className="px-4 py-3 text-sm text-slate-700">{project.siteLocation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-slate-200">
              {projects.map((project) => (
                <div key={project.slNo} className="p-4">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-sm font-semibold text-[#283852]">#{project.slNo}</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-semibold text-slate-600">Nature of Work:</span>
                      <p className="text-sm text-slate-900 mt-1">{project.natureOfWork}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-600">Customer:</span>
                      <p className="text-sm text-slate-900 mt-1">{project.customerName}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-600">Location:</span>
                      <p className="text-sm text-slate-900 mt-1">{project.siteLocation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CompletedProjects;

