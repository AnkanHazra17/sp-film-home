import CustomCarousel from "@/components/core/CustomCarousel";
import MagicButton from "@/components/ui/magic-button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full mb-16">
      <CustomCarousel></CustomCarousel>

      <div className="w-full px-16 mt-10 flex flex-col gap-10">
        <Image
          src="https://www.surfacepro.com.tw/uploads/spfilm/images/202404261339257108.png"
          width={300}
          height={300}
          alt="img1"
          className="w-full rounded-lg"
        ></Image>

        <Image
          src="https://www.surfacepro.com.tw/uploads/spfilm/images/202405041434401654.png"
          width={300}
          height={300}
          alt="img2"
          className="w-full rounded-lg"
        ></Image>

        <Image
          src="https://www.surfacepro.com.tw/uploads/spfilm/images/202404261339273873.png"
          width={300}
          height={300}
          alt="img3"
          className="w-full rounded-lg"
        ></Image>

        <Image
          src="https://www.surfacepro.com.tw/uploads/spfilm/images/202405041432478441.png"
          width={300}
          height={300}
          alt="img4"
          className="w-full rounded-lg"
        ></Image>

        <Image
          src="https://www.surfacepro.com.tw/uploads/spfilm/images/202404261339292147.png"
          width={300}
          height={300}
          alt="img5"
          className="w-full rounded-lg"
        ></Image>

        <Image
          src="https://www.surfacepro.com.tw/uploads/spfilm/images/202404261339309973.png"
          width={300}
          height={300}
          alt="img6"
          className="w-full rounded-lg"
        ></Image>

        <Image
          src="https://www.surfacepro.com.tw/uploads/spfilm/images/202408011141442428.jpg"
          width={300}
          height={300}
          alt="img7"
          className="w-full rounded-lg"
        ></Image>

        <div className="w-full flex justify-center">
          <MagicButton
            title="Pattern data query"
            icon={<MoveRight></MoveRight>}
            position="right"
            otherClasses="gap-2"
          ></MagicButton>
        </div>

        <Image
          src="https://surfacepro.com.tw/uploads/spfilm/images/202404261339317304.png"
          width={300}
          height={300}
          alt="img7"
          className="w-full rounded-lg"
        ></Image>

        <div className="w-full flex justify-center">
          <MagicButton
            title="Warrenty injury"
            icon={<MoveRight></MoveRight>}
            position="right"
            otherClasses="gap-2"
          ></MagicButton>
        </div>
      </div>
    </div>
  );
}
