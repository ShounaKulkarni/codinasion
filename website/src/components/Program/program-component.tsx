import Pagination from "@/components/Pagination";
import ProgramCard from "./program-card";
import ProgramLanguageComponent from "./program-language-component";
import type { ProgramListType } from "@/types";

interface Props {
  programLanguageListData: string[];
  displayProgramList: ProgramListType[];
  pagination: {
    currentPage: number;
    totalPages: number;
  };
  basePath: string;
}

export default function ProgramComponent({
  programLanguageListData,
  displayProgramList,
  pagination,
  basePath,
}: Props): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row sm:space-x-10">
      <div>
        <ul>
          {displayProgramList.map((program) => (
            <li key={program.slug} className="pb-5">
              <ProgramCard program={program} />
            </li>
          ))}
        </ul>

        {pagination && pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            basePath={basePath}
          />
        )}
      </div>

      <div className="space-y-5">
        <ProgramLanguageComponent
          programLanguageListData={programLanguageListData}
        />
      </div>
    </div>
  );
}
