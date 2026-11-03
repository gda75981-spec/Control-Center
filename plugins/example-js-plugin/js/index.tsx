import { Design } from '@revenge-mod/discord/design'

interface Settings {
    enabled: boolean
}

export default plugin<{ jsonStorage: Settings }>({
    jsonStorage: {
        load: true,
        default: { enabled: false },
    },

    start({ logger }) {
        logger.log('Control Center started')
    },

    SettingsComponent({ api }) {
        const { TableRowGroup, TableSwitchRow } = Design
        const settings = api.jsonStorage.use()

        return (
            <TableRowGroup>
                <TableSwitchRow
                    label="Status Copycat"
                    value={settings?.enabled ?? false}
                    onValueChange={(enabled: boolean) =>
                        api.jsonStorage.set({ enabled })
                    }
                />
            </TableRowGroup>
        )
    },
})
