export const NvMenuItems = [
    {
        title: 'Inputs',
        routeTo: 'navigateToResults',
        subMenu: [
            {
                title: 'Input Parameters',
                routeTo: 'navigateToInputParameters'
            },
            {
                title: 'Cost Engine Analysis',
                routeTo: 'navigateToCostEngineAnalysis'
            }
        ]
    },
    {
        title: 'Results',
        routeTo: 'navigateToResults'
    },
    {
        title: 'Model',
        subMenu: [
            {
                title: 'Tree Diagram',
                RouteTo: 'navigateToTreeDiagram'
            },
            {
                title: 'Simulations',
                RouteTo: 'navigateToSimulations'
            }
        ]
    }
]