import {CustomInput} from "@/panels/Components";
import {useQuery} from "@/hooks";
import React, {useCallback} from "react";
import debounce from "lodash.debounce";
import {useLocation, useNavigate} from "react-router-dom";
import {paths} from "@/routes/paths.ts";

const SearchBox = ({
                       ...props
                   }) => {
    const {set} = useQuery();
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const isNavigate = false;

    const handleOnChange = useCallback(
        debounce((e: React.ChangeEvent<HTMLInputElement>) => {
            set('q', e.target.value || '', {replace: true});
        }, 500),
        []
    );

    const handleOnFocus = useCallback(
        () => {
            if (pathname && isNavigate && pathname?.split('/')[1] !== 'search-results') {
                navigate(paths.user.search_results)
            }
        }, [pathname, navigate]
    )

    return (
        <div className="max-w-sm">
            <CustomInput
                onFocus={handleOnFocus}
                onChange={handleOnChange}
                placeholder={'جستجو'}
                endIcon={'search_normal'}
                endIconClassName={'text-black group-focus-within:text-primary-100'}
                {...props}
            />
        </div>
    );
};

export default SearchBox;
