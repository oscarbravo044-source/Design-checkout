import { stripe } from "../../../lib/stripe";

export async function POST(req) {
  const { title, price } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: title },
          unit_amount: price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://yourdomain.com/success",
    cancel_url: "https://yourdomain.com/cancel",
  });

  return new Response(JSON.stringify({ url: session.url }));
}