import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/custom/Typography";
import PdfViewer from "@/components/custom/PdfViewer";
import { designContent } from "@/types/design";
import Image from "next/image";

export default function DesignPage() {
  //const pdfUrl = "/example.pdf";

  return (
    <>
      <Typography variant={"h1"} as={"h1"} className={"text-center"}>
        Дизайн-проект
      </Typography>
      <Accordion type={"single"} collapsible>
        {designContent.map((item) => {
          return (
            <AccordionItem value={item.title} key={item.title}>
              <AccordionTrigger>
                <Typography as={"h2"} variant={"h2"}>
                  {item.title}
                </Typography>
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type={"single"} collapsible>
                  {item.dataList.map((dataListItem) => {
                    return (
                      <AccordionItem
                        value={dataListItem.title}
                        key={dataListItem.title}
                      >
                        <AccordionTrigger>
                          <Typography as={"h3"} variant={"h4"}>
                            {dataListItem.title}
                          </Typography>
                        </AccordionTrigger>
                        <AccordionContent>
                          {dataListItem.description && (
                            <Typography>{dataListItem.description}</Typography>
                          )}
                          {dataListItem.pdfUrl && (
                            <PdfViewer pdfUrl={dataListItem.pdfUrl} />
                          )}
                          {dataListItem.imageUrls?.length &&
                            dataListItem.imageUrls.map((image, i) => {
                              return (
                                <Image
                                  key={i}
                                  src={image}
                                  alt={"картинка"}
                                  height={200}
                                />
                              );
                            })}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
