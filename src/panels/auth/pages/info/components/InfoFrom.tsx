import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button, Form, TextInput} from "@/components";
import {useNavigate} from "react-router-dom";
import {useAuthStore} from "@/store/useAuthStore.ts";
import {paths} from "@/routes/paths.ts";

const InfoFrom = () => {
    const navigate = useNavigate()
    const authStore = useAuthStore()

    const schema = z.object({
        firstName: z
            .string().min(2, {message: 'نام کاربر باید بیشتر از ۲ کارکتر باشد.'}),
        lastName: z
            .string().min(2, {message: 'نام کاربر باید بیشتر از ۲ کارکتر باشد.'}),
    });
    type Schema = z.infer<typeof schema>;

    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: ""
        },
    });


    function onSubmit(values: Schema) {
        console.log(values)
        authStore.setUserInfo(values)
        authStore.login('token', values, 'user')
        authStore.setToken('token')
        navigate(paths.user.market_price)
    }

    return (

        <Form<Schema> form={form} onSubmit={onSubmit}>
            <div className={'flex flex-col gap-4'}>
                <TextInput
                    name="firstName"
                    label={'نام'}
                    className={'input-autofill-white'}
                />
                <TextInput
                    name="lastName"
                    label={'نام‌خانوادگی'}
                    className={'input-autofill-white'}
                />
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

export default InfoFrom
