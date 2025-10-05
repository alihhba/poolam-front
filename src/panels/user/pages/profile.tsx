import {useAuthStore} from "@/store/useAuthStore.ts";

const Profile = () => {
    const {logout} = useAuthStore()

    return (
        <div className={'flex flex-col gap-10'}>
            Profile

            <div
                onClick={() => {
                    logout()
                }}
            >
                logout
            </div>
        </div>
    );
};

export default Profile
