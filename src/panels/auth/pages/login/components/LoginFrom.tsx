import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button, Form, TextInput} from "@/components";
import {useAuthStore} from "@/store/useAuthStore.ts";
import {useNavigate} from "react-router-dom";

const LoginFrom = () => {
    const {login} = useAuthStore()
    const navigate = useNavigate()

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
        console.log("✅ Submitted:", values);
        login('fsfsd', 'user')
        navigate('/market-price')
    }

    return (

        <Form<Schema> form={form} onSubmit={onSubmit}>
            <TextInput
                name="phoneNumber"
                label={'شماره موبایل'}
                placeholder={'شماره موبایل'}
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
