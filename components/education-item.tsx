import { Fragment, useState } from 'react';
import { EducationItemInterface } from '~/@types/Education';

interface EducationItemProps {
  index: number;
  educationItem: EducationItemInterface;
}

const EducationItem: React.FC<EducationItemProps> = ({
  index,
  educationItem,
}: EducationItemProps) => {
  const {
    establishment,
    studied,
    obtained,
    location,
    startDate,
    endDate,
  }: EducationItemInterface = educationItem;

  const [showInformation, setShownInformation] = useState<Array<boolean>>([]);

  const toggleShowInformation = (id: number) => {
    setShownInformation((prevShownInformation: boolean[]) => ({
      ...prevShownInformation,
      [id]: !prevShownInformation[id],
    }));
  };

  return (
    <div key={index} className="flex flex-wrap p-2">
      <div className="lg:w-2/6 px-2">
        <h3 className="text-2xl">{establishment}</h3>
        <p className="text-lg pb-1">{location}</p>
        <p>
          {startDate} - {endDate}
        </p>
        <p className="mb-2">{studied}</p>
        <button
          onClick={() => toggleShowInformation(index)}
          className="button mt-1 mb-10"
        >
          {showInformation[index] ? (
            <Fragment>Show Less</Fragment>
          ) : (
            <Fragment>Show More</Fragment>
          )}
        </button>
      </div>
      <div className="lg:w-4/6 px-2">
        {showInformation[index] ? (
          <Fragment>
            <div className="pb-10 lg:pb-0">
              <h3 className="text-2xl">{studied}</h3>
              <p className="text-lg">
                {establishment} - {location}
              </p>
              <p className="text-xl">Obtained {obtained}</p>
            </div>
          </Fragment>
        ) : null}
      </div>
    </div>
  );
};

export { EducationItem };
