import * as React from 'react';
import { Progress } from "@nextui-org/react";
import { Pagination, Button } from "@nextui-org/react";
import { RadioGroup, useRadio, VisuallyHidden, cn } from "@nextui-org/react";
import { api } from "~/utils/api"

interface CustomRadioProps {
  value: string;
  children: React.ReactNode;
  questionId: string;
  choiceId: string;
  selectedAnswer: string;
  onSelect: (questionId: string, choiceId: string) => void;
}

export const CustomRadio = ({ value, children, questionId, choiceId, selectedAnswer, onSelect }: CustomRadioProps) => {
  const {
    Component,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio({ value });

  const handleRadioSelect = () => {
    onSelect(questionId, choiceId);
  };

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center hover:opacity-70 active:opacity-50 tap-highlight-transparent",
        "w-full cursor-pointer border-2 border-default rounded-lg gap-5 p-4",
        { 'border-primary': selectedAnswer === choiceId } // Add the border-primary class based on selectedAnswer
      )}
      onClick={handleRadioSelect}
    >
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
      </div>
    </Component>
  );
};


export default function Question() {

  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedAnswers, setSelectedAnswers] = React.useState<{ [questionId: string]: string }>({});


  const { data: questions } = api.assessment.getAllQuestion.useQuery();
  const { data: choices } = api.assessment.getAllChoice.useQuery();

  const questionList = questions?.map((question: any) => {
    const choiceList = choices?.filter((choice: any) => choice.questionId === question.id);
    return {
      ...question,
      choices: choiceList,
    };
  }, []);

  if (!questionList) return (<div className='text-center'>Loading...</div>)

  const handleRadioSelect = (questionId: string, choiceId: string) => {
    setSelectedAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: choiceId }));
  };

  return (
    <div className='flex justify-center flex-col place-items-center'>
      <div className='w-3/4 py-7'>
        <Progress size="sm" aria-label="Loading..." value={(currentPage / questionList.length) * 100} className='' />
      </div>
      <div className='w-3/4 bg-primary h-[70px] rounded-t-xl flex justify-center flex-col place-items-center' >
        <div>
          <Pagination
            total={questionList.length}
            color="secondary"
            page={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </div>
      <div className='w-3/4 flex flex-col place-items-center drop-shadow-xl bg-white'>
        <div className='px-16 w-full'>
          <div>
            <h1 className='text-xl py-6 font-bold'>{currentPage}. {questionList[currentPage - 1].text}</h1>
          </div>
          <div>
            <p className="text-small text-[#1CA59B]">ข้อที่ {currentPage} จาก 10 ข้อ</p>
          </div>
          <div className='py-5'>
            <RadioGroup className=''>
              {questionList[currentPage - 1].choices.map((choice: any) => (
                <CustomRadio
                  key={choice.id}
                  value={choice.id}
                  questionId={questionList[currentPage - 1].id}
                  choiceId={choice.id}
                  selectedAnswer={selectedAnswers[questionList[currentPage - 1].id] || ''} // Check if the choice is selected
                  onSelect={() => handleRadioSelect(questionList[currentPage - 1].id, choice.id)} // Pass the questionId and choiceId to the handleRadioSelect function
                >
                  {choice.text}
                </CustomRadio>
              ))}
            </RadioGroup>
          </div>
        </div>
        <div className='flex gap-2 pb-5'>
          {currentPage === 1 ? (
            <Button
              size="md"
              variant="flat"
              color="primary"
              onPress={() => setCurrentPage((prev) => prev + 1)}
            >
              ข้อต่อไป
            </Button>
          ) : currentPage === 10 ? (
            <>
              <Button
                size="md"
                variant="flat"
                color="primary"
                onPress={() => setCurrentPage((prev) => prev - 1)}
              >
                ย้อนกลับ
              </Button>
              <Button
                size="md"
                variant="flat"
                color="primary"
              // onPress={() => setCurrentPage((prev) => prev + 1)}
              >
                ส่งแบบประเมินความเสี่ยง
              </Button>
            </>
          ) : (
            <>
              <Button
                size="md"
                variant="flat"
                color="primary"
                onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
              >
                ย้อนกลับ
              </Button>
              <Button
                size="md"
                variant="flat"
                color="primary"
                onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
              >
                ข้อต่อไป
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
