import {Button, Icon} from "@/components";
import {useNavigate} from "react-router-dom";
import {paths} from "@/routes/paths.ts";

const AddHoldingButton = () => {
    const navigate = useNavigate()

    return (
        <Button

            className={'w-[98px] h-[42px] rounded-[10px] bg-white'}
            onClick={() => {
                navigate(paths.user.add_holding)
            }}
        >
            <div className={'flex items-center gap-1'}>
                <Icon
                    name={'add-square'}
                    className={'text-black size-4'}
                />
                <p className={'text-black text-[14px]'}>
                    افزودن
                </p>
            </div>
        </Button>
    );
};

export default AddHoldingButton
