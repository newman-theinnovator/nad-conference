import React from 'react';

const FunFacts = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">Exciting Facts on the Host State</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Edo State</h4>
            <p className="text-lg mb-4">
              Edo is a state in Nigeria. Located in the South-South geopolitical zone of Nigeria, created in 1991 from the former Bendel State, it is also known as the heartbeat of the nation.
              Edo State borders Kogi State to the north for 133 km and across the Niger River for 81 km to the northeast, Anambra State to the east for about four km across the Niger River, Delta State to the southeast and south for 350 km (218 miles), and Ondo State to the west.
              She is the 21st largest state by landmass in Nigeria, her capital, Benin City, is the fourth largest city in Nigeria and the centre of the country's rubber industry.
              The ancient city of Edo, the site of modern-day Benin City, was home to some of the largest earthworks in the world.
            </p>
            <p className="text-lg mb-4">
              Edo State is a diverse state that is predominantly inhabited by the Edoid people, including the Edo (or Bini), Esan, Ora, Akoko-Edo, Owan and Afemai people and Igala people among others. The most common Edoid language spoken is the Edo language, which is commonly spoken in Benin City. Christianity is one of the dominant religions in Edo South, while Islam is the dominant religion in Edo North and traditional religions are also practised across these Senatorial districts of the State.
              The Oba is pinnacle custodian of the Traditional history and culture and remains the focal point of the Benin political system and institution.
            </p>
            <p className="text-lg mb-4">
              The indigenous inhabitants of Benin City are the Edo people, also referred to as the Benin people, who communicate in the Edo language, also known as the Bini language. The city's populace boasts one of the richest dress cultures on the African continent, renowned for their elaborate adornments, including beads symbolising royalty, body marks, bangles, anklets, and intricate raffia work.
            </p>
            <h5 className="text-xl font-semibold mb-2">Climate</h5>
            <p className="text-lg mb-4">
              Benin City exhibits a tropical monsoon climate (Köppen Am), characterised by persistently high temperatures and humidity levels throughout the year.
              The weather in Benin City is typically hot and humid, with average temperatures ranging from 25 to 30 °C (77 to 86 °F) throughout the year. The relative humidity is consistently high, often exceeding 60%.
              While the city experiences a relatively uniform climate throughout the year, there is discernible seasonal variation. The period between July and September is particularly notable for its dull and overcast weather conditions, with reduced sunshine and increased rainfall.
            </p>
            <h5 className="text-xl font-semibold mb-2">Fun Sites to Visit</h5>
            <ul className="list-disc pl-5 space-y-2 text-lg mb-4">
              <li>National Museum, the Oba Palace</li>
              <li>Igun Street (famous for bronze casting and other metal works)</li>
              <li>Benin Moats (measuring about 20 to 40 ft)</li>
              <li>the King's Square (known as Ring Road)</li>
              <li>The city's traditional markets</li>
            </ul>
            <h5 className="text-xl font-semibold mb-2">Festivals</h5>
            <p className="text-lg mb-4">
              Benin City has a popular festival called the Igue festival. The festival is an annual event held in the city to usher in the new year. The festival is an integral part of the culture of the people in Benin City (formerly referred to as Benin Kingdom or the Kingdom of Benin). The festival is believed to renew Oba Ewuare's magical powers and it celebration comes between Christmas and New Year celebrations. The festival includes the Oba's blessing of the land and his people.
            </p>
            <p className="text-lg mb-4">
              Aside from the cultural festival, the city also plays host to the Benin City Film Festival. The festival creates room for the promotion of works produced by the local film community. It also promotes the content of emerging national and international filmmakers, showcasing their works in an environment where they have access to experienced industry professionals.
            </p>
            <h5 className="text-xl font-semibold mb-2">BINI MARKET DAYS</h5>
            <p className="text-lg">
              The Bini people have four market days: Ekioba, Ekenaka, Agbado, and Eken.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Delta State</h4>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>A major oil-producing state, supplying about 35% of Nigeria's crude oil and natural gas.</li>
              <li>Known as "The Big Heart" of Nigeria, with diverse ethnic groups including Urhobo.</li>
              <li>Home to two functional commercial airports: Asaba and Osubi.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;