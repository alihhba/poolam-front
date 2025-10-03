import {useSearchParams} from "react-router-dom";

type NavOpts = { replace?: boolean; state?: unknown };

export default function useQuery() {
    const [searchParams, setSearchParams] = useSearchParams();

    const updateParams = (updater: (p: URLSearchParams) => void, opts?: NavOpts) => {
        setSearchParams(prev => {
            const next = new URLSearchParams(prev);
            updater(next);
            return next;
        }, opts);
    };

    const get = (key: string): string | null => searchParams.get(key);
    const getAll = (key: string): string[] => searchParams.getAll(key);
    const has = (key: string): boolean => searchParams.has(key);

    const set = (key: string, value: string, opts?: NavOpts) =>
        updateParams(p => {
            if (value?.length > 0) {
                p.set(key, value);
            } else {
                p.delete(key);
            }
        }, opts);

    const append = (key: string, value: string, opts?: NavOpts) =>
        updateParams(p => {
            p.append(key, value);
        }, opts);

    const del = (key: string, opts?: NavOpts) =>
        updateParams(p => {
            p.delete(key);
        }, opts);

    const deleteMany = (keys: string[], opts?: NavOpts) =>
        updateParams(p => {
            keys.forEach(k => p.delete(k));
        }, opts);

    const setMany = (entries: Array<[string, string]>, opts?: NavOpts) =>
        updateParams(p => {
            entries.forEach(([k, v]) => p.set(k, v));
        }, opts);

    const setObject = (
        obj: Record<string, string | number | boolean | null | undefined>,
        opts?: NavOpts
    ) =>
        updateParams(p => {
            Object.entries(obj).forEach(([k, v]) => {
                if (v === null || v === undefined) p.delete(k);
                else p.set(k, String(v));
            });
        }, opts);

    const replace = (key: string, value: string) => set(key, value, {replace: true});
    const replaceMany = (entries: Array<[string, string]>) =>
        setMany(entries, {replace: true});
    const replaceObject = (
        obj: Record<string, string | number | boolean | null | undefined>
    ) => setObject(obj, {replace: true});

    const setPage = (page: number | string, opts?: NavOpts) =>
        set("page", String(page), opts);
    const replacePage = (page: number | string) =>
        set("page", String(page), {replace: true});

    const clear = (opts?: NavOpts) => setSearchParams(new URLSearchParams(), opts);

    return {
        get,
        getAll,
        has,
        set,
        append,
        delete: del,
        deleteMany,
        setMany,
        setObject,
        replace,
        replaceMany,
        replaceObject,
        setPage,
        replacePage,
        update: updateParams,
        clear,
        all: searchParams,
    };
}
