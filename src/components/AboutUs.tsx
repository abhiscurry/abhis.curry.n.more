import { Col, Nav } from "react-bootstrap";
import "./AboutUs.css";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  const timelineData = [
    {
      year: "Legacy",
      title: "Legacy of Flavors",
      description:
        "Before Halifax, before Canada, this was already a family tradition. My grandfather started it, my father carried it, and in 2020 I stepped into their shoes to continue the legacy. Food was never just business for us—it was heritage, and I wanted to bring that heritage to a new land.",
      image: "../images/aboutUs/Legacy.png",
    },
    {
      year: "2020",
      title: "The First Step in Halifax",
      description:
        "Landing in Halifax with dreams and determination, we launched Abhi's Snacks, becoming the first to introduce authentic Gujarati food across the Atlantic region of Canada. With a small food trailer, we began serving classics like jalebi, mohanthal, and laddus. The community loved it—especially our first big festival with fafda—but the business was tough. The earnings weren't enough to sustain our family, and with heavy hearts, we sold the trailer.",
      image: "../images/aboutUs/First-step.png",
    },
    {
      year: "2021",
      title: "A Tough Crossroads",
      description:
        'By the end of 2021, we were ready to leave Halifax behind. Tickets were booked for Calgary, belongings sold, and even our trailer was gone. But one evening walk at Point Pleasant Park with my wife changed everything. We decided to give Halifax one more year. Customers begged us not to leave: "If you go, who will bring us this food here?" Their words became the turning point.',
      image: "../images/aboutUs/Crossroads.png",
    },
    {
      year: "2022",
      title: "A Fresh Start",
      description:
        "Instead of boarding that February flight, we reinvested in Halifax. By March, we had a new food truck rolling through the streets. It was a restart filled with risk, but this time the city embraced us even more. What once felt impossible began to feel like destiny.",
      image: "../images/aboutUs/Fresh-start.png",
    },
    {
      year: "2023",
      title: "Growing Wheels",
      description:
        "Momentum carried us forward. In 2023, we expanded with another food trailer at Lower Sackville. More people discovered our snacks and sweets, and slowly, Halifax began associating Gujarati food with our name. From one truck, we became two—our dream was rolling stronger.",
      image: "../images/aboutUs/Growing-wheels.png",
    },
    {
      year: "2024",
      title: "Building Strength",
      description:
        "By 2024, we added yet another truck—this time a sturdy Ford. From one small trailer to three trucks, our little idea had grown into something the community recognized and relied on. Every plate served was proof that sticking it out in Halifax had been the right choice.",
      image: "../images/aboutUs/Building-strenth.png",
    },
    {
      year: "2025",
      title: "A New Home: The Restaurant",
      description:
        "August 2025 marked the biggest milestone yet—the opening of our first restaurant on Grandwell Street. From selling snacks out of a trailer to building a space where families could sit, share, and celebrate—it felt like a full circle moment.",
      image: "../images/aboutUs/New-home.png",
    },
  ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Our Journey: from wheels to walls</h1>
          <p className="hero-subtitle">
            A journey of passion, heritage, and timeless artistry, one plate at
            a time.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section">
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="timeline-text">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
              <div className="timeline-line" aria-hidden="true"></div>
            </div>
          ))}
        </div>
      </div>

      {/* The Road Ahead Section */}
      <div className="road-ahead-section">
        <div className="road-ahead-content">
          <h2 className="road-ahead-title">The Road Ahead</h2>
          <p className="road-ahead-description">
            Our journey hasn't been easy—filled with struggles, doubts, and
            sleepless nights. But it's also been filled with courage, community
            support, and the belief that food connects people in ways nothing
            else can. We came to a new country with old recipes, and today those
            recipes have found a new home.
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="highlights-section">
        <div className="highlights-container">
          <h2 className="highlights-title">Our Restaurant Highlights</h2>
          <div className="highlights-image">
            <img
              src="../images/aboutUs/New-home.png"
              alt="Restaurant highlights"
            />
          </div>
          <div className="row">
            <Col>
              <Nav.Link as={NavLink} to="/menu" className="navbar-brand">
                <button className="custom-primary-btn  btn py-2 py-md-3 px-2 px-md-4 fs-6 fs-md-5">
                  View Menu
                </button>
              </Nav.Link>
            </Col>
            <Col>
              <Nav.Link as={NavLink} to="/" className="navbar-brand">
                <button className="custom-primary-btn  btn  py-2 py-md-3 px-2 px-md-4 fs-6 fs-md-5">
                  Home
                </button>
              </Nav.Link>
            </Col>
            <Col>
              <a href="https://www.google.com/viewer/chooseprovider?mid=/g/11q33zvkz5&g2lbs=AO8LyOI65lpBhTXWeYuolbKx3qz1LVN5TrmVLSybnA12n6Bhd22EETdrmnqPTvGQH2U1GS4zIgSlpwsumCAynLXSohkQAVsBIA%3D%3D&hl=en-CA&gl=ca&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=search&gei=AF3LaOjJHrDn5NoPwqaosA4&ei=AF3LaOjJHrDn5NoPwqaosA4&fo_s=OA&opi=89978449&ebb=1&foub=mcpp&orderType=2">
                <button className="custom-primary-btn  btn py-2 py-md-3 px-2 px-md-4 fs-6 fs-md-5">
                  Order Online
                </button>
              </a>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
