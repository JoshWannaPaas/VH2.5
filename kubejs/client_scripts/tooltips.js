onEvent('item.tooltip', tooltip => {
    tooltip.addAdvanced('minecraft:granite', (item, advanced, text) => {
      text.add(1, Text.gray('Spawns in Mountain and Hill Biomes'))
      text.add(2, [Text.gray('Changed by '), Text.white('Quark')])
    })

    tooltip.addAdvanced('minecraft:diorite', (item, advanced, text) => {
        text.add(1, Text.gray('Spawns in Savannah, Jungle and Mushroom Biomes'))
        text.add(2, [Text.gray('Changed by '), Text.white('Quark')])
    })

    tooltip.addAdvanced('minecraft:andesite', (item, advanced, text) => {
        text.add(1, Text.gray('Spawns in Forest Biomes'))
        text.add(2, [Text.gray('Changed by '), Text.white('Quark')])
    })
})