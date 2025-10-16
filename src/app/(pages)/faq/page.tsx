import { PageHero } from "@/components/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData as rawFaqData } from "@/constants/dummyData";

const faqData = rawFaqData.map((faq) => {
  const answer = faq.answer;
  let typedAnswer: AnswerType;

  if (answer.type === "paragraphs") {
    typedAnswer = { type: "paragraphs", content: answer.content as string[] };
  } else if (answer.type === "list") {
    typedAnswer = {
      type: "list",
      content: answer.content as { intro: string; items: string[] },
    };
  } else {
    typedAnswer = { type: "text", content: answer.content as string };
  }

  return {
    ...faq,
    answer: typedAnswer,
  };
});

interface ParagraphAnswer {
  type: "paragraphs";
  content: string[];
}

interface ListAnswer {
  type: "list";
  content: {
    intro: string;
    items: string[];
  };
}

interface TextAnswer {
  type: "text";
  content: string;
}

type AnswerType = ParagraphAnswer | ListAnswer | TextAnswer;

const FaqAnswer = ({ answer }: { answer: AnswerType }) => {
  switch (answer.type) {
    case "paragraphs":
      return (
        <div className="space-y-4 text-neutral-500">
          {answer.content.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      );
    case "list":
      return (
        <div>
          <p>{answer.content.intro}</p>
          <ol className="list-decimal list-inside space-y-2 mt-2 text-neutral-500">
            {answer.content.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      );
    case "text":
    default:
      return <p>{answer.content}</p>;
  }
};

export default function FaqPageOptimal() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <PageHero
        title="Frequently Asked Questions"
        description="Explore our most frequently asked questions to better understand CrescentRating's mission, processes, and the value we bring to the halal travel world."
      />
      <div className="mt-16 lg:px-32 sm:px-16 px-8 w-full flex flex-col gap-24 justify-center items-center">
        <div className="max-w-[1440px] w-full px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full space-y-1">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className="border-b"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline p-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0">
                  <FaqAnswer answer={faq.answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
