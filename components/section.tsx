import { PropsWithChildren, FC } from 'react';

type SectionProps = {
  id: string;
  isHomepage?: boolean;
  paddingYOverride?: string;
};

const sectionDefaultClasses: string =
  'flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-24 xl:px-32';

const Section: FC<PropsWithChildren<SectionProps>> = ({
  id,
  isHomepage,
  paddingYOverride,
  children,
}: PropsWithChildren<SectionProps>) => {
  let paddingY = 'py-40';
  if (paddingYOverride) paddingY = paddingYOverride;

  let classes;

  if (isHomepage) {
    classes = 'homepage-background min-h-screen';
  } else {
    classes = 'content-container';
  }

  return (
    <section
      id={id}
      className={` ${classes} ${sectionDefaultClasses} ${paddingY}`}
    >
      {children}
    </section>
  );
};

export { Section };
