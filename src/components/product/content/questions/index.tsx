import CustomButton from "@/components/layout/button";
import QuestionItem from "./questionItem";

import { Question } from "@/types/model";

interface ProductQuestionsProps {
  questions: Question[];
}

const ProductQuestions = ({ questions }: ProductQuestionsProps) => {

  return (
    <div className="flex flex-col gap-5 pt-4 md:pt-8 divide-y">
      <div className="flex flex-col  gap-5">
        <h4 className="text-2xl md:text-4xl font-medium ">
          Customers questions
        </h4>

        <div className="flex  gap-6 flex-col md:flex-row justify-between">
          <div className="flex   items-center gap-2 ">
            <span className="text-base  justify-center font-normal ">
              {questions.length > 0
                ? `${questions.length} total questions`
                : `There are no questions yet.`}
            </span>
          </div>

          <div>
            <CustomButton border label="Ask a question" size={"small"} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 divide-y">
        {questions.map((question) => (
          <QuestionItem key={question.id} {...question} />
        ))}
      </div>
    </div>
  );
};
export default ProductQuestions;
