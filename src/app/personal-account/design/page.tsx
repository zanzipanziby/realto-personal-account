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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function DesignPage() {
  //const pdfUrl = "/example.pdf";

  return (
    <>
      <Typography variant={"h1"} as={"h1"} className={"text-center"}>
        Дизайн-проект
      </Typography>
      <Accordion type={"single"} collapsible className={"mt-4"}>
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
                          {dataListItem.imageUrls?.length && (
                            <Carousel>
                              <CarouselContent>
                                {dataListItem.imageUrls.map((image, index) => {
                                  return (
                                    <CarouselItem
                                      key={index}
                                      className="md:basis-1/2 lg:basis-1/3"
                                    >
                                      <Image
                                        src={image}
                                        alt={`картинка`}
                                        className={
                                          "h-96 object-cover bor rounded"
                                        }
                                      />
                                    </CarouselItem>
                                  );
                                })}
                              </CarouselContent>
                            </Carousel>
                          )}
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
