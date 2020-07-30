import { PropsWithChildren } from 'react';

interface SectionProps {
  id: string;
  paddingYOverride?: string;
  extraClasses?: string;
}

const sectionDefaultClasses: string =
  'flex flex-col justify-center px-5 md:px-20 xl:px-40';

const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  id,
  paddingYOverride,
  extraClasses,
  children,
}: PropsWithChildren<SectionProps>) => {
  let paddingY = 'py-40';
  if (paddingYOverride) paddingY = paddingYOverride;

  return (
    <section
      id={id}
      className={
        extraClasses
          ? `${extraClasses} ${sectionDefaultClasses} ${paddingY}`
          : `${sectionDefaultClasses} ${paddingY}`
      }
    >
      {children}
    </section>
  );
};

export { Section };
