import stripe from "@/utils/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import prisma from "@/utils/prisma";
import { hideEmail, hideName } from "@/utils/hideInfo";

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

const webhookHandler = async (req: NextRequest) => {
  try {
    const buf = await req.text();
    const sig = req.headers.get("stripe-signature")!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (error) {
      return NextResponse.json(
        {
          error: {
            message: "Webhook Error Here",
          },
        },
        { status: 400 }
      );
    }

    switch (event.type) {
      case "checkout.session.completed":
        const hiddenEmail = hideEmail(
          event.data.object.customer_details?.email!
        );

        const hiddenName = hideName(event.data.object.customer_details?.name!);
        const insertObject = {
          userName: hiddenName,
          userEmail: hiddenEmail,
          paymentStatus: event.data.object.payment_status!,
          productName: event.data.object.metadata?.name!,
          productPrice: event.data.object.metadata?.price!,
        };

        const user = await prisma.user.create({
          data: insertObject,
        });
    }

    return NextResponse.json({ recived: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: {
          message: "Webhook Error",
        },
      },
      { status: 400 }
    );
  }
};

export { webhookHandler as POST };
