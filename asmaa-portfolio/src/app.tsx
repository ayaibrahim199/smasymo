import React from "react";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow p-6 text-center sticky top-0 z-10">
       <img
  src="/as.jpeg"
  alt=""
  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-700 object-cover"
/>
        <h1 className="text-4xl font-bold text-blue-700">
          Asmaa J. M. Alshaikhdeeb
        </h1>
        <p className="text-lg mt-2 mb-4">
          Pharmacist | Data Analyst | Health Informatics
        </p>

        <nav className="flex justify-center items-center text-blue-600 font-semibold">
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#education" className="hover:underline">Education</a></li>
            <li><a href="#experience" className="hover:underline">Experience</a></li>
            <li><a href="#publications" className="hover:underline">Publications</a></li>
            <li><a href="#languages" className="hover:underline">Languages</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About Me Section */}
      <section id="about" className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">About Me</h2>
        <p>
          A Pharmacist and data analyst who engaged with a wide range of academic and real-world
          applications. The core of my professional expertise lies in data curation and data analysis,
          especially in the biomedical/health field. In addition, I have excellent experience in managing
          projects due to my freelancing working experience. Furthermore, I have good experience in
          business intelligence including visualization and dashboard reporting. Recently, I completed
          my master's degree in informatics and looking forward to a data scientist opportunity either
          in the industry or in the academic domain. I am excited to enrich and extend my experience
          in data science, data analysis, and data engineering.
        </p>

        <a
          href="/asmaa_cv.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
        >
          Download CV
        </a>
      </section>

      {/* Skills Section */}
      <section id="skills" className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Data Curation & Data Analysis</li>
          <li>Business Intelligence & Dashboard Reporting</li>
          <li>Project Management</li>
          <li>Python (Google Colab), Power BI, Weka</li>
          <li>MS Word, Excel, Access, Endnote</li>
          <li>UML using Signavio</li>
        </ul>
      </section>

      {/* Education Section */}
      <section id="education" className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Education</h2>
        <ul className="space-y-2">
          <li><strong>Master of Informatics</strong> – Universiti Sains Malaysia (2022)</li>
          <li><strong>Bachelor of Pharmacy</strong> – Al-Azhar University, Gaza (2013)</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience" className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Work Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg">Freelancer – Academic Services</h3>
            <p className="text-sm italic">Feb 2015 – Mar 2020, Kuala Lumpur, Malaysia</p>
            <p>
              Provided academic services including translations, questionnaire
              facilitation, thesis formatting, and data curation for machine learning.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Pharmacist – Al-Mofeed Pharmacy</h3>
            <p className="text-sm italic">Mar 2013 – Jun 2014, Palestine</p>
            <p>
              Delivered patient consultations, ensured prescription accuracy, and
              supervised medicine quality and supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Publications & Certificates */}
      <section id="publications" className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Publications & Certificates</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Publication: "Utilizing Word Index Approach with LSTM Architecture for
            Extracting Adverse Drug Reaction from Medical Reviews."
          </li>
          <li>Certificate of License to Practice Pharmacy (Gaza, Palestine)</li>
          <li>Cosmetology Trainingship – Palestinian Pharmacists Syndicate</li>
        </ul>
      </section>

      {/* Languages */}
      <section id="languages" className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Languages</h2>
        <p>Arabic (Native), English (Advanced), Malay (Basic), Luxembourgish (Basic)</p>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-blue-700 text-white p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
        <p>Email: <a href="mailto:asmaa.sh.deeb@gmail.com" className="underline">asmaa.sh.deeb@gmail.com</a></p>
        <p>Phone: +352 661 767 950</p>
        <p>Location: Esch-sur-Alzette, Luxembourg</p>
      </footer>
    </div>
  );
};

export default App;
