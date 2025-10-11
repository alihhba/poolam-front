import {Button, Icon} from "@/components";
import {useNavigate} from "react-router-dom";
import {AddHoldingForm} from "@/panels/user/pages/createHolding/components";

const CreateHoldingPage = () => {
    const navigate= useNavigate()

    return (
        <div
            className={'flex flex-col w-full'}
        >
            {/*header*/}
            <div>
                <Button
                    onClick={() => {
                        navigate(-1)
                    }}
                    size={'square'}
                >
                    <Icon
                        name={'arrow-right'}
                        className={'size-6 text-black'}
                    />
                </Button>
            </div>

            {/*main*/}
            <div className={'mt-6'}>

                <div>
                    <AddHoldingForm/>
                </div>

            </div>
        </div>
    );
};

export default CreateHoldingPage
