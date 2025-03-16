import { StaticImport } from "next/dist/shared/lib/get-img-props";
import img1 from "../../public/img1.jpg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";
import img4 from "../../public/img4.jpg";

export const designContent: DesignContentItem[] = [
  {
    title: "Договор",
    dataList: [
      {
        title: "Сканы подписанного договора",
        pdfUrl: "/example.pdf",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur et fuga, illo mollitiaofficia pariatur quis sapiente tempora veritatis!`,
      },
    ],
  },

  {
    title: "Первый этап",
    dataList: [
      {
        title: "Техническое задание",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur et fuga, illo mollitiaofficia pariatur quis sapiente tempora veritatis!`,
      },
      {
        title: "Обмерный план",
        pdfUrl: "/example.pdf",
      },
      {
        title: "Акт выполненных работ по 1 этапу",
        imageUrls: [img1, img2, img3, img4],
      },
    ],
  },
];

type DesignContentItem = {
  title: string;
  dataList: DataListItem[];
};

type DataListItem = {
  title: string;
  description?: string;
  pdfUrl?: string;
  imageUrls?: Array<string | StaticImport>;
};
