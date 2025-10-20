import {useNavigate} from "react-router-dom";
import {Button, Icon} from "@/components";
import {AddHoldingForm} from "@/panels/user/pages/createHolding/components";

const EditHoldingPage = () => {
    const navigate = useNavigate()
    // const {id} = useParams()

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
                    <AddHoldingForm
                    />
                </div>

            </div>
        </div>
    );
};

export default EditHoldingPage
