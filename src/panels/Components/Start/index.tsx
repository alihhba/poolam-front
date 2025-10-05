import {Icon} from "@/components";
import {useState} from "react";

const Start = () => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div
            onClick={() => {
                setActive(!active)
            }}
        >
            <Icon
                name={active ? 'star-fill' : 'star'}
                className={'text-black w-6 h-6'}
            />
        </div>
    );
};

export default Start
