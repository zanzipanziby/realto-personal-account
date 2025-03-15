import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/custom/Typography";
import PdfViewer from "@/components/custom/PdfViewer";

export default function PersonalAccount() {
  const pdfUrl = "/example.pdf";
  return (
    <div className={"mt-6"}>
      <Accordion type={"single"} collapsible={true}>
        <AccordionItem value={"item-1"}>
          <AccordionTrigger>
            <Typography as={"h2"} variant={"h2"}>
              Step 1
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <Typography as={"p"} variant={"h4"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              consectetur et fuga, illo mollitia officia pariatur quis sapiente
              tempora veritatis! Autem error eum iure! Excepturi ipsa nostrum
              numquam quo quod, suscipit. Aperiam asperiores assumenda aut ex.
              Assumenda atque ex maxime?
            </Typography>
            <PdfViewer pdfUrl={pdfUrl} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-2"}>
          <AccordionTrigger>
            <Typography as={"h2"} variant={"h2"}>
              Step 2
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <Typography as={"p"} variant={"h4"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              consectetur et fuga, illo mollitia officia pariatur quis sapiente
              tempora veritatis! Autem error eum iure! Excepturi ipsa nostrum
              numquam quo quod, suscipit. Aperiam asperiores assumenda aut ex.
              Assumenda atque ex maxime?
            </Typography>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-3"}>
          <AccordionTrigger>
            <Typography as={"h2"} variant={"h2"}>
              Step 3
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <Typography as={"p"} variant={"h4"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              consectetur et fuga, illo mollitia officia pariatur quis sapiente
              tempora veritatis! Autem error eum iure! Excepturi ipsa nostrum
              numquam quo quod, suscipit. Aperiam asperiores assumenda aut ex.
              Assumenda atque ex maxime?
            </Typography>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-4"}>
          <AccordionTrigger>
            <Typography as={"h2"} variant={"h2"}>
              Step 4
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <Typography as={"p"} variant={"h4"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              consectetur et fuga, illo mollitia officia pariatur quis sapiente
              tempora veritatis! Autem error eum iure! Excepturi ipsa nostrum
              numquam quo quod, suscipit. Aperiam asperiores assumenda aut ex.
              Assumenda atque ex maxime?
            </Typography>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-5"}>
          <AccordionTrigger>
            <Typography as={"h2"} variant={"h2"}>
              Step 5
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <Typography as={"p"} variant={"h4"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              consectetur et fuga, illo mollitia officia pariatur quis sapiente
              tempora veritatis! Autem error eum iure! Excepturi ipsa nostrum
              numquam quo quod, suscipit. Aperiam asperiores assumenda aut ex.
              Assumenda atque ex maxime?
            </Typography>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-6"}>
          <AccordionTrigger>
            <Typography as={"h2"} variant={"h2"}>
              Step 6
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <Typography as={"p"} variant={"h4"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              consectetur et fuga, illo mollitia officia pariatur quis sapiente
              tempora veritatis! Autem error eum iure! Excepturi ipsa nostrum
              numquam quo quod, suscipit. Aperiam asperiores assumenda aut ex.
              Assumenda atque ex maxime?
            </Typography>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
