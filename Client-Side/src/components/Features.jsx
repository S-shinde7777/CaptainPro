import FeatureCard from "./FeatureCard";

import table from "../assets/table.png";
import billing from "../assets/billing.png";
import printer from "../assets/printer.png";
import inventory from "../assets/inventory.png";
import staff from "../assets/staff.png";
import report from "../assets/report.png";

function Features() {

  const features = [

    {
      image: table,
      title: "Table Management",
      description:
        "Manage tables, reservations and customer seating effortlessly.",
    },

    {
      image: billing,
      title: "Fast Billing",
      description:
        "Generate accurate bills with GST support in seconds.",
    },

    {
      image: printer,
      title: "Kitchen Printer",
      description:
        "Send orders directly to kitchen and reduce mistakes.",
    },

    {
      image: inventory,
      title: "Inventory Management",
      description:
        "Track stock levels and receive low-stock alerts.",
    },

    {
      image: staff,
      title: "Staff Management",
      description:
        "Manage captains, cashiers, managers and owners.",
    },

    {
      image: report,
      title: "Reports & Analytics",
      description:
        "View real-time sales, revenue and business performance.",
    },

  ];

  return (

    <section
      id="features"
      className="bg-[#202A46] py-20"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="
          text-5xl
          text-white
          font-bold
          text-center
          mb-16
          "
        >
          Features
        </h2>

        <div
          className="
          grid
          md:grid-cols-3
          gap-8
          "
        >
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>

    </section>

  );
}

export default Features;