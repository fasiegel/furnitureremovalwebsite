import * as Accordion from "@radix-ui/react-accordion";
import { FAQS } from "@/lib/site";

export function FaqList() {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-line border-y border-line">
      {FAQS.map((item) => (
        <Accordion.Item key={item.q} value={item.q}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium transition-colors duration-150 hover:text-kelp">
              {item.q}
              <span className="text-xl leading-none text-mist transition-transform duration-200 group-data-[state=open]:rotate-45">
                +
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
            <p className="pb-4 text-sm leading-relaxed text-mist">{item.a}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
