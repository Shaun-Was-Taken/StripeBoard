import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-[70%]">
      <AccordionItem value="item-1">
        <AccordionTrigger>What technologies are used?</AccordionTrigger>
        <AccordionContent>
          Nextjs, Tailwind CSS, Shadcn, Prisma
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How will I receive my board?</AccordionTrigger>
        <AccordionContent>
          You will recevie an invite to the GitHub repo, from there you can copy
          the source code to your project!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it real time?</AccordionTrigger>
        <AccordionContent>
          Yes. It is, it will fetch data real time!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Can I refund it?</AccordionTrigger>
        <AccordionContent>
          Unfortunately, we do not offer refunds. Once purchased, you receive
          lifetime access to the board, which begins immediately upon purchase.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can I customize it?</AccordionTrigger>
        <AccordionContent>
          Yes! you will have access to the source code, so you can customize it
          however you want!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Where should I use this board?</AccordionTrigger>
        <AccordionContent>
          Anywhere you want! You can use it on your landing page, or in your
          admin dashboard!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
