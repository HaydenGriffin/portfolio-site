import { Fragment, useState } from 'react';
import { WorkItemInterface, TechnologyInterface } from '~/@types/WorkHistory';
import { OnClickButton } from './buttons';

interface WorkItemProps {
  index: number;
  workItem: WorkItemInterface;
}

const WorkItem: React.FC<WorkItemProps> = ({
  index,
  workItem,
}: WorkItemProps) => {
  const {
    companyName,
    role,
    location,
    startDate,
    endDate,
    keyInformation,
    technologies,
  }: WorkItemInterface = workItem;

  const [showInformation, setShownInformation] = useState<Array<boolean>>([]);

  const toggleShowInformation = (id: number) => {
    setShownInformation((prevShownInformation: boolean[]) => ({
      ...prevShownInformation,
      [id]: !prevShownInformation[id],
    }));
  };

  return (
    <div key={index} className="flex flex-wrap p-2">
      <div className="px-2 lg:w-2/6">
        <h3 className="text-2xl">{companyName}</h3>
        <p className="text-lg pb-1">{location}</p>
        <p>
          {startDate} - {endDate}
        </p>
        <p>{role}</p>
        <div className="mb-2">
          {technologies.map(({ name, link }: TechnologyInterface, index) => (
            <span className="text-yellow-600 pr-3 mb-2" key={index}>
              <a href={link}>#{name}</a>{' '}
            </span>
          ))}
        </div>
        <OnClickButton
          onClick={() => toggleShowInformation(index)}
          extraClasses="mt-1 mb-10"
        >
          {showInformation[index] ? (
            <Fragment>Show Less</Fragment>
          ) : (
            <Fragment>Show More</Fragment>
          )}
        </OnClickButton>
      </div>
      <div className="px-2 lg:w-4/6">
        {showInformation[index] ? (
          <Fragment>
            <div className="pb-10 lg:pb-0">
              <h3 className="text-2xl">{role}</h3>
              <p className="text-lg">
                {companyName}{' '}
                {location ? <Fragment>- {location}</Fragment> : null}
              </p>
              <div key={index}>
                <ul className="list-disc">
                  {keyInformation.map((information: string, index) => (
                    <li key={index}>{information}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Fragment>
        ) : null}
      </div>
    </div>
  );
};

export { WorkItem };
