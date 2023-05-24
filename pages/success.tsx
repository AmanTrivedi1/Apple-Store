import {
  AiOutlineDown,
  AiOutlineShoppingCart,
  AiOutlineCheck,
  AiOutlineUp,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import Currency from "react-currency-formatter";
import { useMediaQuery } from "react-responsive";
import Button from "../components/Button";
import { fetchLineItems } from "@/utils/fetchLineItems";
import { useSession } from "next-auth/react";
interface Props {
  products: StripeProduct[];
}

function Success({ products }: Props) {
  console.log(products);
  const router = useRouter();
  const { session_id } = router.query;
  const [mounted, setMounted] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const subtotal = products.reduce(
    (acc, product) => acc + product.price.unit_amount / 100,
    0
  );
  const { data: session } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  // showOrderSummary always true for desktop but only conditionally true for mobile
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const showOrderSummaryCondition = isTabletOrMobile ? showOrderSummary : true;

  const handleShowOrderSummary = () => {
    setShowOrderSummary(!showOrderSummary);
  };

  return (
    <div>
      <Head>
        <title>Thank you! - Apple</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="mx-auto max-w-xl">
        <Link href="/">
          <div className="relative ml-4 h-10 mt-4 w-8 cursor-pointer transition lg:hidden">
            <AiOutlineArrowLeft />
          </div>
        </Link>
      </header>

      <main className="grid grid-cols-1 font-sans lg:grid-cols-9 bg-[#1B1B1B]">
        <section className="order-2 mx-auto max-w-xl pb-12 lg:col-span-5 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44">
          <Link href="/" className="hidden md:block">
            <div className="relative   h-2 w-10 cursor-pointer opacity-75 transition hover:opacity-100">
              <AiOutlineArrowLeft className="text-2xl" />
            </div>
          </Link>

          <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#35383C]">
              <AiOutlineCheck className="h-8 w-8 text-[#35383C]" />
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Order #{session_id?.slice(-5)}
              </p>
              <h4 className="text-lg">
                Thank you{" "}
                {session ? session.user?.name?.split(" ")[0] : "Guest"}
              </h4>
            </div>
          </div>

          <div className="mx-4 divide-y divide-[#35383C]   shadow-2xl rounded-md border border-[#35383C] p-4 lg:ml-14">
            <div className="space-y-2 pb-3">
              <p>Your order is confirmed</p>
              <p className="text-sm text-gray-600">
                We’ve accepted your order, and we’re getting it ready. Come back
                to this page for updates on your shipment status.
              </p>
            </div>
            <div className="pt-3 text-sm">
              <p className="font-medium text-gray-600">
                Other tracking number:
              </p>
              <p>CNB21441622</p>
            </div>
          </div>

          <div className="my-4 mx-4 space-y-2 rounded-md border shadow-2xl border-[#35383C] p-4 lg:ml-14">
            <p>Order updates</p>
            <p className="text-sm text-gray-600">
              You’ll get shipping and delivery updates by email and text.
            </p>
          </div>
          <div className="mx-4 flex flex-col items-center justify-between text-sm lg:ml-14 lg:flex-row">
            <p className="hidden lg:inline">Need help? Contact us</p>
            {mounted && (
              <Button
                title="Continue Shopping"
                onClick={() => router.push("/")}
                width={isTabletOrMobile ? "w-full" : undefined}
                padding="py-4"
              />
            )}
          </div>
        </section>

        {mounted && (
          <section className="overflow-y-scroll border-y border-l border-[#35383C] bg-[#1b1b1b] lg:order-2 lg:col-span-4 lg:h-screen lg:border-y-0">
            <div
              className={`w-full ${
                showOrderSummaryCondition && "border-b"
              } border-[#35383C] text-sm lg:hidden`}
            >
              <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-6">
                <button
                  onClick={handleShowOrderSummary}
                  className="flex items-center space-x-2"
                >
                  <AiOutlineShoppingCart className="h-6 w-6" />
                  <p>Show order summary</p>
                  {showOrderSummaryCondition ? (
                    <AiOutlineUp className="h-4 w-4" />
                  ) : (
                    <AiOutlineDown className="h-4 w-4" />
                  )}
                </button>

                <p className="text-xl font-medium text-white">
                  {/* <Currency quantity={subtotal + 20} /> */}
                  <h1>{subtotal + 20} $</h1>
                </p>
              </div>
            </div>

            {showOrderSummaryCondition && (
              <div className="mx-auto max-w-xl divide-y border-[#35383C] px-4 py-4 lg:mx-0 lg:max-w-lg lg:px-10 lg:py-16">
                <div className="space-y-4 pb-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center space-x-4 text-sm font-medium"
                    >
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-md border border-[#35383C] bg-[#F1F1F1] text-xs text-white">
                        <div className="relative h-7 w-7 animate-bounce rounded-md">
                          <img
                            style={{ objectFit: "contain" }}
                            src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1683385411/logo_bmnazd.png"
                            alt="logo"
                          />
                        </div>
                        <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#35383C] text-xs">
                          {product.quantity}
                        </div>
                      </div>
                      <p className="flex-1">{product.description}</p>
                      <p>
                        {/* <Currency
                          quantity={product.price.unit_amount / 100}
                          currency={product.currency}
                        /> */}
                        <p>{product.price.unit_amount / 100} $</p>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-1 py-4">
                  <div className="flex justify-between text-sm">
                    <p className="text-[gray]">Subtotal</p>
                    <p className="font-medium">
                      {/* <Currency quantity={subtotal} /> */}
                      <h1>{subtotal} $</h1>
                    </p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-[gray]">Discount</p>
                    <p className="text-[gray]"></p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="text-[gray]">Shipping</p>
                    <p className="font-medium">
                      {/* <Currency quantity={20} currency="USD" /> */}
                      <h1>{20} $</h1>
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <p>Total</p>
                  <p className="flex items-center gap-x-2 text-xs text-[gray]">
                    USD
                    <span className="text-xl font-medium text-white">
                      {/* <Currency quantity={subtotal + 20} /> */}
                      <h1>{subtotal + 20} $</h1>
                    </span>
                  </p>
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default Success;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const sessionId = query.session_id as string;
  const products = await fetchLineItems(sessionId);

  return {
    props: {
      products,
    },
  };
};
