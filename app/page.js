import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import productDemo from "./productDemo.jpeg";

export default function Home() {
  const isLoggedIn = true;
  const name = "David";

  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200">
        <div className="bg-base-200 flex justify-between items-center px-8 py-2 max-w-5xl mx-auto">
          <div className="font-bold">CodeSaas</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricing">
              Pricing
            </a>
            <a className="link link-hover" href="#FAQ">
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="text-center lg:text-left py-32 px-8 max-w-5xl gap-14 mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        <div>
          <h1 className="text-4xl font-extrabold mb-6 lg:text-5xl">
            Collect customers feedback to build better porducts
          </h1>
          <div className="opacity-90 mb-10">
            Create a feedback board in minutes, prioritize features, and build
            products your customers will love
          </div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        </div>

        <Image src={productDemo} alt="Product demo" className="w-96 rounded-xl"/>

      </section>

      {/* PRICING */}
      <section className="bg-base-200" id="pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto ">
          <p className="text-sm text-center uppercase font-semibold text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A pricing that adapts your needs
          </h2>
          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="text-4xl font-black">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">
                /month
              </div>
            </div>
            <ul className="space-y-2">
              {[
                "Collect customer feedback",
                "Unlimited boards",
                "Admin daschboard",
                "24/7 support",
              ].map((priceItem, index) => {
                return (
                  <li className="flex gap-2 items-center" key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="text-green-600 size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {priceItem}
                  </li>
                );
              })}
            </ul>
            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle="w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="FAQ">
        <div className="py-32 px-8 max-w-3xl mx-auto ">
          <p className="text-sm text-center uppercase font-semibold text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <ul className="max-w-lg mx-auto">
            {[
              { question: "What do I get exactly", answer: "Lorem Ipsum" },
              { question: "Can I get the refund?", answer: "Lorem Ipsum" },
              { question: "I have another question", answer: "Lorem Ipsum" },
            ].map((qa) => {
              return <FAQListItem key={qa.question} qa={qa} />;
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
