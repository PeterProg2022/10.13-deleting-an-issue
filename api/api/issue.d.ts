export function list(_: any, { status, effortMin, effortMax }: {
    status: any;
    effortMin: any;
    effortMax: any;
}): Promise<any>;
export function add(_: any, { issue }: {
    issue: any;
}): Promise<any>;
export function get(_: any, { id }: {
    id: any;
}): Promise<any>;
export function update(_: any, { id, changes }: {
    id: any;
    changes: any;
}): Promise<any>;
declare function remove(_: any, { id }: {
    id: any;
}): Promise<boolean>;
export { remove as delete };
