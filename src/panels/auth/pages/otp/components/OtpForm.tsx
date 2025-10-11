import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button, Form, Icon, OtpInput, Timer} from "@/components";
import {useNavigate} from "react-router-dom";
import {paths} from "@/routes/paths.ts";
import {useRef, useState} from "react";
import type {TimerRef} from "@/components/time/Timer.tsx";

const OtpForm = () => {
    const navigate = useNavigate()
    const [isTimeEnd, setIsTimeEnd] = useState<boolean>(false);
    const timerRef = useRef<TimerRef>(null);

    const schema = z.object({
        otp: z
            .string().min(4, {message: "کد وارد شده صحیح نمی‌باشد."}),
    });
    type Schema = z.infer<typeof schema>;

    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {otp: ""},
    });


    function onSubmit() {
        navigate(paths.auth.info)
    }

    const handleReset = () => {
        timerRef.current?.reset();
    };

    return (
        <Form<Schema> form={form} onSubmit={onSubmit}>

            <div
                onClick={() => {
                    navigate(paths.auth.login, {replace: true})
                }}
                className={'flex w-fit items-center gap-1 mt-4 mb-8'}>
                <Icon
                    name={'message-edit'}
                    className={'text-primary-100 size-4'}
                />
                <p className={'text-primary-100 text-sm'}>
                    ویرایش شماره
                </p>
            </div>
            <OtpInput
                name="otp"
                length={4}
            />

            <div className={'my-4 w-full flex items-center justify-center'}>
                {isTimeEnd ? (
                        <div
                            onClick={() => {
                                handleReset()
                            }}
                            className={'flex w-fit items-center gap-1'}>
                            <Icon
                                name={'rotate-left'}
                                className={'text-primary-100 size-4'}
                            />
                            <p className={'text-primary-100 text-sm'}>
                                درخواست مجدد کد
                            </p>
                        </div>
                    )
                    : (
                        <div className={'flex items-center gap-1'}>
                            <Timer
                                ref={timerRef}
                                targetDate={new Date(Date.now() + 4000).toISOString()}
                                mode="countdown"
                                variant="digital"
                                size="sm"
                                showH={false}
                                className={'text-primary-100 text-sm'}
                                completedComponent={<div></div>}
                                onStateChange={setIsTimeEnd}
                            />
                            <p className={'font-semibold text-sm'}> تا درخواست مجدد</p>
                        </div>
                    )}
            </div>


            <div className={'mt-4'}>
                <Button
                    className={'w-full'}
                    type="submit"
                >
                    ادامه
                </Button>
            </div>
        </Form>
    )
        ;
};

export default OtpForm
