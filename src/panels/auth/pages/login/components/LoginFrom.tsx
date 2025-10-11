import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button, Form, TextInput} from "@/components";
import {useNavigate} from "react-router-dom";
import {usePhoneStore} from "@/store/usePhoneStore.ts";
import {paths} from "@/routes/paths.ts";

const LoginFrom = () => {
    const navigate = useNavigate()
    const setPhone = usePhoneStore((state) => state.setPhone)

    const schema = z.object({
        phoneNumber: z
            .string()
            .regex(/^09\d{9}$/, {
                message: "لطفا شماره موبایل را به درستی وارد نمایید.",
            }),
    });
    type Schema = z.infer<typeof schema>;

    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {phoneNumber: ""},
    });


    function onSubmit(values: Schema) {
        setPhone(values?.phoneNumber)
        navigate(paths.auth.otp)
    }

    return (

        <Form<Schema> form={form} onSubmit={onSubmit}>
            <TextInput
                name="phoneNumber"
                label={'شماره موبایل'}
                placeholder={'شماره موبایل'}
                className={'input-autofill-white'}
            />

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

export default LoginFrom
