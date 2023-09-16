import CustomButton from "@/components/layout/button";
import { Question } from "@/types/model";

const QuestionItem = (props: Question) => {
  return (
    <div className="flex  gap-5 pt-4 md:pt-8 ">
      <div className="flex flex-col gap-3">
        <span className="text-lg w-20 font-normal">Question</span>
        <span className="text-lg w-20 font-normal">Answer</span>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-lg font-semibold "> {props.question} </span>
        <span className="text-lg ">{props.answers[0].answer}</span>
        <div className="flex flex-col gap-2.5">
          <span>
            By {props.answers[0].userName} on {props.answers[0].date}{" "}
          </span>
          <div>
            <CustomButton
              label={` See more answers (${props.answers.length}) `}
              buttonType="text"
              underline
              size={"medium"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
