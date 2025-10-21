import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        {/* Icon and Title in same line */}
        <div className="mb-6 flex items-center space-x-4">
          <div className="bg-primary/10 text-primary flex h-[50px] w-[50px] items-center justify-center rounded-md flex-shrink-0 sm:h-[60px] sm:w-[60px] lg:h-[50px] lg:w-[50px] xl:h-[60px] xl:w-[60px]">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-black sm:text-xl lg:text-lg xl:text-xl dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-body-color text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
