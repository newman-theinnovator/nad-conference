import React from 'react';
import bensonOkwara from '../assets/benson-okwara.jpg';
import cynthiaMadubuko from '../assets/cynthia-madubuko.jpg';
import sebastineOiwoh from '../assets/sebastine-oiwoh.jpg';
import olumayowaOninla from '../assets/olumayowa-oninla.jpg';
import nkirukaOnodugo from '../assets/nkiruka-onodugo.jpg';
import ogunborExcel from '../assets/ogunbor-excel.jpg';

const Speakers = () => {
  return (
    <section className="py-12 px-4 bg-gray-100" id="speakers">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">Speakers</h3>
        <p className="text-lg mb-4 text-center">Meet our distinguished speakers. More announcements coming soon!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img src={bensonOkwara} alt="Dr. Benson Okwara" className="w-full h-48 object-contain rounded-t-lg mb-4" />
            <h4 className="text-2xl font-semibold mb-2">Dr. Benson Okwara</h4>
            <p className="text-lg text-gray-700">MBBS, FMCP</p>
            <p className="text-lg text-gray-700">University of Benin Teaching Hospital</p>
            <p className="text-lg text-green-600 font-medium">Chairman, Local Organising Committee (LOC)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img src={cynthiaMadubuko} alt="Prof Cynthia Roli Madubuko" className="w-full h-48 object-contain rounded-t-lg mb-4" />
            <h4 className="text-2xl font-semibold mb-2">Prof Cynthia Roli Madubuko</h4>
            <p className="text-lg text-gray-700">MBBS, FWACP, FMCP</p>
            <p className="text-lg text-gray-700">University of Benin Teaching Hospital, Edo State</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img src={sebastineOiwoh} alt="Sebastine Oseghae OIWOH" className="w-full h-48 object-contain rounded-t-lg mb-4" />
            <h4 className="text-2xl font-semibold mb-2">Sebastine Oseghae OIWOH</h4>
            <p className="text-lg text-gray-700">MBBS, Cert. Clinical Research (Harvard Chan), FWACP</p>
            <p className="text-lg text-gray-700">Irrua Specialist Teaching Hospital Irrua / Ambrose Alli University Ekpoma</p>
            <p className="text-lg text-green-600 font-medium">Publicity Committee, Scientific Committee</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img src={olumayowaOninla} alt="Dr. Olumayowa Abimbola Oninla" className="w-full h-48 object-contain rounded-t-lg mb-4" />
            <h4 className="text-2xl font-semibold mb-2">Dr. Olumayowa Abimbola Oninla</h4>
            <p className="text-lg text-gray-700">Consultant Dermatologist and Venereologist, OAUTHC, & Associate Professor, OAU, Ile-Ife</p>
            <p className="text-lg text-green-600 font-medium">Vice President 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img src={nkirukaOnodugo} alt="Dr Nkiruka Pauline Onodugo" className="w-full h-48 object-contain rounded-t-lg mb-4" />
            <h4 className="text-2xl font-semibold mb-2">Dr Nkiruka Pauline Onodugo</h4>
            <p className="text-lg text-gray-700">Consultant Dermatologist University of Nigeria Teaching Hospital Ituku, Ozalla Enugu</p>
            <p className="text-lg text-green-600 font-medium">Asst Secretary Nigerian Association of Dermatologists</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img src={ogunborExcel} alt="Dr Ogunbor Omokhaye Excel" className="w-full h-48 object-contain rounded-t-lg mb-4" />
            <h4 className="text-2xl font-semibold mb-2">Dr Ogunbor Omokhaye Excel</h4>
            <p className="text-lg text-gray-700">Consultant Dermatologist and Genitourinary Specialist</p>
            <p className="text-lg text-gray-700">Department of Medicine, University of Benin Teaching Hospital</p>
            <p className="text-lg text-gray-700">Visiting Consultant Federal Medical Center Asaba, Delta State. Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;