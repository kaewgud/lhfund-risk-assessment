import * as React from 'react';
import {Progress} from "@nextui-org/react";
import {Pagination, Button} from "@nextui-org/react";
import {RadioGroup, useRadio, VisuallyHidden, cn} from "@nextui-org/react";


export const CustomRadio = ({ value, children }: { value: string; children: React.ReactNode; }) => {
    const {
        Component,
        getBaseProps,
        getWrapperProps,
        getInputProps,
        getLabelProps,
        getLabelWrapperProps,
        getControlProps,
    } = useRadio({ value });
  
    return (
      <Component
        {...getBaseProps()}
        className={cn(
          "group inline-flex items-center hover:opacity-70 active:opacity-50 tap-highlight-transparent",
          "w-full cursor-pointer border-2 border-default rounded-lg gap-5 p-4",
          "data-[selected=true]:border-primary",
        )}
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

    return (
        <div className='flex justify-center flex-col place-items-center'>
            <div className='w-3/4 py-7'>
                <Progress size="sm" aria-label="Loading..." value={currentPage*10} className=''/>
            </div>
            <div className='w-3/4 bg-primary h-[70px] rounded-t-xl flex justify-center flex-col place-items-center' >
                <div>
                    <Pagination
                        total={10}
                        color="secondary"
                        page={currentPage}
                        onChange={setCurrentPage}
                    />
                </div>
            </div>
            <div className='w-3/4 flex flex-col place-items-center drop-shadow-xl bg-white'>
                <div className='px-16 w-full'>
                    <div>
                        <h1 className='text-xl py-6 font-bold'>{currentPage}. ปัจจุบันท่านมีภาระทางการเงินและค่าใช้จ่ายประจำ เช่น ค่าผ่อนบ้าน รถ ค่าใช้จ่ายส่วนตัวและค่าเลี้ยงดูครอบครัวเป็นสัดส่วนเท่าใด</h1>
                    </div>
                    <div>
                        <p className="text-small text-[#1CA59B]">ข้อที่ {currentPage} จาก 10 ข้อ</p>
                    </div>
                    <div className='py-5'>
                        <RadioGroup className=''>
                            <CustomRadio value="1">
                                มากกว่าร้อยละ 75 ของรายได้ทั้งหมด
                            </CustomRadio>
                            <CustomRadio value="2">
                                ระหว่างร้อยละ 50 ถึงร้อยละ 75 ของรายได้ทั้งหมด
                            </CustomRadio>
                            <CustomRadio value="3">
                                ระหว่างร้อยละ 25 ถึงร้อยละ 50 ของรายได้ทั้งหมด
                            </CustomRadio>
                            <CustomRadio value="4">
                                น้อยกว่าร้อยละ 25 ของรายได้ทั้งหมด
                            </CustomRadio>
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
