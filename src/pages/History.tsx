import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { div, p } from "framer-motion/client";

interface SectionProps {
  title: string;
  titleFr: string;
  content: string;
  contentFr: string;
  image?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const Section: React.FC<SectionProps> = ({
  title,
  titleFr,
  content,
  contentFr,
  image,
  isOpen,
  onToggle,
}) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left"
      >
        <h2 className="text-2xl font-bold text-neutral-900">
          {currentLang === "en" ? title : titleFr}
        </h2>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-primary-600" />
        ) : (
          <ChevronDown className="h-6 w-6 text-primary-600" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-4 space-y-4">
              {image && (
                <img
                  src={image}
                  alt={currentLang === "en" ? title : titleFr}
                  className="h-[400px] w-full rounded-lg object-cover"
                />
              )}
              <p className="text-lg text-neutral-700">
                {currentLang === "en" ? content : contentFr}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const History: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [openSection, setOpenSection] = useState("history");

  const sections = [
    {
      id: "history",
      title: "History of Mbalmayo",
      titleFr: "Histoire de Mbalmayo",
      content: (
        <div>
          <p className="mb-4">
            Mbalmayo was founded in 1910, under the German rule of the then
            Kamerun, by Mbala Meyo, an early ruler of the town. As was the
            custom before colonialism, the town was named after the chief.
          </p>
          <p className="mb-4">
            The Germans ruled the town and used the Nyong river to transport
            timber which was a major source of income. It is in the part of
            Cameroon that the League of Nations made a French protectorate.
          </p>
        </div>
      ),
      contentFr: (
        <div>
          <p className="mb-4">
            Mbalmayo a été fondée en 1910, sous le régime allemand du Kamerun,
            par Mbala Meyo, un ancien dirigeant de la ville. Comme c'était la
            coutume avant le colonialisme, la ville a été nommée d'après le
            chef.
          </p>
          <p className="mb-4">
            Les Allemands ont gouverné la ville et utilisé la rivière Nyong pour
            transporter le bois, qui était une source de revenus majeure. C'est
            dans cette partie du Cameroun que la Société des Nations a établi un
            protectorat français.
          </p>
        </div>
      ),
      image:
        "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746046259/mbalmayo-rocher-vimli-NB-640x480_pa39ew.png", // Add your image link here
    },
    {
      id: "economy",
      title: "Economy",
      titleFr: "Économie",
      content: (
        <div>
          <p className="mb-4">
            Mbalmayo is an industrial town that is about 41 km from Yaoundé the
            Capital of Cameroon. Mbalmayo is located in the Central Region of
            Cameroon. It is situated along the Nyong River, south of Yaoundé.
            Since it is deeply entrenched in the dense equatorial forest zone
            that stretched to the South, its natural physical environmental
            features makes it strategically economical located.
          </p>
          <p className="mb-4">
            The main economic activities are forestry and agriculture. There is
            a plywood factory powered by electricity from the Edea Hydroelectric
            Power Station. It is a big commercial center. It is also a
            commercial centre due to its position at the junction of three
            transportation routes: it lies on the main road south from Yaoundé;
            it is the terminus of the Camrail railway from Douala; and serves as
            a river port on the Nyong River, which is seasonally navigable for
            249 kilometres from Mbalmayo east to Abong Mbang.
          </p>
          <p className="mb-4">
            In order to improve and to increase its economic activities, the
            Government of Cameroon in 1989, through partnership with the African
            Development Bank was able to construct a 101 km road that links
            Mbalmayo with Ebolowa, the capital of the South Province.[3] Amongst
            its economic activities, Timber exploration is a major source of
            revenue for Mbalmayo and Cameroon in general. There is the
            Mbalmayo's forest reserve which is one of Cameroon's oldest forest
            reserve. Other cash crops include palm oil, palm kernel oil, coffee
            and cocoa.
          </p>
        </div>
      ),
      contentFr: (
        <div>
          <p className="mb-4">
            Mbalmayo est une ville industrielle située à environ 41 km de
            Yaoundé, la capitale du Cameroun. Elle se trouve dans la région du
            Centre et est bordée par la rivière Nyong, au sud de Yaoundé.
            Profondément ancrée dans la dense forêt équatoriale qui s’étend vers
            le Sud, ses caractéristiques environnementales naturelles lui
            confèrent une position stratégique et économiquement avantageuse.
          </p>
          <p className="mb-4">
            Les principales activités économiques de Mbalmayo sont
            l’exploitation forestière et l’agriculture. On y trouve une usine de
            contreplaqué alimentée en électricité par la centrale
            hydroélectrique d’Edéa. C’est un grand centre commercial. Son
            importance commerciale découle aussi de sa situation au carrefour de
            trois axes de transport majeurs : elle est sur la route principale
            menant au sud depuis Yaoundé, c'est le terminus du chemin de fer
            Camrail venant de Douala et elle sert de port fluvial sur la rivière
            Nyong, navigable de manière saisonnière sur 249 kilomètres (155
            miles) entre Mbalmayo et Abong-Mbang à l'est.
          </p>
          <p className="mb-4">
            Afin de stimuler et développer ses activités économiques, le
            gouvernement camerounais a, en 1989, construit, en partenariat avec
            la Banque africaine de développement, une route de 101 km reliant
            Mbalmayo à Ebolowa, la capitale de la région du Sud. L’exploitation
            du bois constitue une source majeure de revenus pour Mbalmayo et
            pour le Cameroun en général. La ville abrite la réserve forestière
            de Mbalmayo, l’une des plus anciennes du pays. Parmi les cultures de
            rente, on retrouve l’huile de palme, l’huile de palmiste, le café et
            le cacao.
          </p>
        </div>
      ),
      image:
        "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746045724/eaux_et_forets_jdpffr.jpg", // Add your image link here
    },
    {
      id: "politics",
      title: "Political History",
      titleFr: "Histoire Politique",
      content: (
        <div>
          <p className="mb-4">
            Cameroon was formerly divided administratively into ten provinces
            now referred to today as regions. Administration of these Regions is
            based on the administrative set up of Cameroon which is a
            decentralized state. Mbalmayo is politically and administratively
            managed under the Central region and a local collectivity called
            Mbalmayo municipal council. It is a sub-division of the
            Nyong-et-So'o Division. The administration of the division and the
            subdivisions is directly under the Ministry of Territorial
            Administration. Mbalmayo is the administrative headquarters of the
            Nyong et So'o division.
          </p>
          <p className="mb-4">
            Since independence, this division has been dominated by two
            political parties but other political parties do exist in the town
            such as SDF, UNDP, MRC, UPC etc.- The CNU and the CPDM. However,
            ironically, these two parties were just the same party that
            underwent a name change. In 1985, CNU was changed to CPDM-Cameroon
            People Democratic Movement under the leadership of Paul Biya. Since
            1968, there have been 6 Mayors elected in Mbalmayo. The
            longest-serving mayor was AMOUGOU MBIDA Samue but his record has
            been beaten by the incombent, he served as Mayor of the Municipality
            for 23 years. He was also the Mayor in place during the political
            transition from Amadou Ahidjo to Paul Biya, and from the CNU to the
            CPDM.
          </p>
          <p className="mb-4 font-semibold">List of previous mayors:</p>
          <ol className="list-inside space-y-2 list-decimal">
            <li>Abbé MBARGA Maurice (1958 CNU 8 Months)</li>
            <li>MBALLA FOE Martin (1959–1970 CNU 11 years)</li>
            <li>AMOUGOU MBIDA Samuel (1970–1987 CNU-CPDM 17 years)</li>
            <li>ABAH Stanisla (1987–1996 CPDM 9 years)</li>
            <li>NNOMEDOUE MENDOUGA Thomas (1996–2002 CPDM 6 Years)</li>
            <li>ZANG MBA OBELE Dieudonné (2002 CPDM current)</li>
          </ol>
          <p className="mb-4">The first four are of late.</p>
        </div>
      ),
      contentFr: (
        <div>
          <p className="mb-4">
            Le Cameroun était autrefois divisé administrativement en dix
            provinces, aujourd’hui appelées régions. L’administration de ces
            régions repose sur l’organisation administrative du Cameroun, qui
            est un État décentralisé. Mbalmayo est politiquement et
            administrativement gérée sous la région du Centre et une
            collectivité locale appelée la municipalité de Mbalmayo. Elle
            constitue une sous-division du département du Nyong-et-So’o.
            L’administration du département et des sous-divisions est
            directement placée sous l’autorité du Ministère de l’Administration
            Territoriale. Mbalmayo est le chef-lieu administratif du département
            du Nyong-et-So’o.
          </p>
          <p className="mb-4">
            Depuis l’indépendance, ce département a été dominé par deux partis
            politiques, bien que d’autres formations existent dans la ville,
            telles que le SDF, l’UNDP, le MRC, l’UPC, etc. Les deux partis
            dominants sont le UNC et le RDPC. Ironiquement, ces deux entités
            n’étaient qu’un même parti ayant changé de nom : en 1985, le CNU est
            devenu le RDPC (Rassemblement Démocratique du Peuple Camerounais)
            sous la direction de Paul Biya. Depuis 1968, six maires ont été élus
            à Mbalmayo. Le maire ayant servi le plus longtemps était AMOUGOU
            MBIDA Samuel, mais son record a été dépassé par l’actuel maire, qui
            a exercé cette fonction pendant 23 ans. AMOUGOU MBIDA était
            également en poste lors de la transition politique entre Amadou
            Ahidjo et Paul Biya, ainsi que lors du passage du CNU au RDPC.
          </p>
          <p className="mb-4 font-semibold">Liste des anciens maires:</p>
          <ol className="list-inside space-y-2 list-decimal">
            <li>Abbé MBARGA Maurice (1958 UNC 8 mois)</li>
            <li>MBALLA FOE Martin (1959–1970 UNC 11 ans)</li>
            <li>AMOUGOU MBIDA Samuel (1970–1987 UNC-RDPC 17 ans)</li>
            <li>ABAH Stanisla (1987–1996 RDPC, 9 ans)</li>
            <li>NNOMEDOUE MENDOUGA Thomas (1996–2002 RDPC, 6 ans)</li>
            <li>ZANG MBA OBELE Dieudonné (2002 RDPC, actuel)</li>
          </ol>
          <p className="mb-4">Les quatre premiers sont décédés.</p>
        </div>
      ),
    },
    {
      id: "population",
      title: "Population",
      titleFr: "Population",
      content: (
        <div>
          <p className="mb-4">
            Lors du recensement de 2005, la commune comptait 62 808 habitants,
            dont 52 809 pour la ville de Mbalmayo. La ville de Mbalmayo étant
            située dans la partie Sud de la région du Centre est composée d'une
            population majoritairement Beti (les Bene qui sont d'après les
            sources les frères directs des Ewondo de Yaoundé), mais avec
            l'urbanisation que connaissent les villes du Cameroun Mbalmayo n'est
            pas en reste on peut ainsi trouver les populations originaires de
            l'Ouest, de l'Est et même du Sud.
          </p>
          <p className="mb-4"></p>
        </div>
      ),
      contentFr: (
        <div>
          <p className="mb-4">
            In 2005, the municipality had a population of 62,808 inhabitants,
            including 52,809 in the city of Mbalmayo. Located in the southern
            part of the Central Region, Mbalmayo is predominantly inhabited by
            the Beti people, specifically the Bene, who are reportedly direct
            brothers of the Ewondo of Yaoundé. However, with the urbanization
            affecting cities across Cameroon, Mbalmayo is no exception. As a
            result, one can find residents originating from the West, East, and
            even the South of the country.
          </p>
        </div>
      ),
    },
    {
      id: "geography",
      title: "Geography",
      titleFr: "Géographie",
      content: (
        <div>
          <p className="mb-4">
            Mbalmayo is a municipality in Cameroon located in the Central Region
            and the Nyong-et-So'o Division, where it serves as the
            administrative capital. The city lies on the banks of the Nyong
            River, 50 km south of the capital Yaoundé, via National Road 2.
            Thanks to its strategic location, it is an important economic hub,
            particularly in the agricultural and forestry sectors. The city also
            hosts several educational, healthcare, and administrative facilities
            that contribute to its development.
          </p>
          <p className="mb-4">
            Mbalmayo is known for its forest reserve, one of the oldest in the
            country, as well as its historical role in the timber trade. With
            its river port and railway connection, it plays a key role in
            transporting goods between different regions of Cameroon.
          </p>
        </div>
      ),
      contentFr: (
        <div>
          <p className="mb-4">
            Mbalmayo est une commune du Cameroun située dans la région du Centre
            et le département du Nyong-et-So'o, dont elle est le chef-lieu. La
            ville est située sur les rives du fleuve Nyong, à 50 km au sud de la
            capitale Yaoundé, par la Route nationale 2. Grâce à sa position
            stratégique, elle est un centre économique important, notamment dans
            les secteurs de l'agriculture et de l'exploitation forestière. La
            ville abrite également plusieurs infrastructures éducatives,
            sanitaires et administratives qui contribuent à son développement.
          </p>
          <p className="mb-4">
            Mbalmayo est connue pour sa réserve forestière, l'une des plus
            anciennes du pays, ainsi que pour son rôle historique dans le
            commerce du bois. Avec son port fluvial et sa connexion ferroviaire,
            elle joue un rôle clé dans le transport de marchandises entre les
            différentes régions du Cameroun. 
          </p>
        </div>
      ),
      image:
        "https://res.cloudinary.com/dipmwyrfq/image/upload/v1746046258/Mbalmayo.8_lrrhdk.gif",
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">
          {currentLang === "en" ? "About Mbalmayo" : "À Propos de Mbalmayo"}
        </h1>

        {sections.map((section) => (
          <Section
            key={section.id}
            title={section.title}
            titleFr={section.titleFr}
            content={section.content}
            contentFr={section.contentFr}
            image={section.image}
            isOpen={openSection === section.id}
            onToggle={() =>
              setOpenSection(openSection === section.id ? "" : section.id)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default History;
