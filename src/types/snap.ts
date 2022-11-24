export type GetSnapsResponse = Record<string, Snap>

export type Snap = {
    blocked: boolean
    enabled: boolean
    permissionName: string
    id: string
    version: string
    initialPermissions: Record<string, unknown>
}
