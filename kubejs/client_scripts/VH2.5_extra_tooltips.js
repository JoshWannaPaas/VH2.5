onEvent('item.tooltip', tooltip => {
    tooltip.addAdvanced([
        'minecraft:stone',
        'minecraft:cobblestone',
        'minecraft:coal',
        'minecraft:bread',
        'minecraft:iron_ore',
        'minecraft:carrot',
        'minecraft:potato',
        'minecraft:leather',
        'minecraft:flint',
        'minecraft:porkchop',
        'minecraft:redstone_ore',
        'minecraft:gold_ore',
        'minecraft:coal_ore',
        'minecraft:string',
        'minecraft:glowstone_dust',
        'minecraft:spider_eye',
        'minecraft:rotten_flesh',
        'minecraft:bone',
        'minecraft:gunpowder',
        'minecraft:feather',
        'minecraft:blaze_rod',
        'minecraft:ender_pearl',
        'minecraft:magma_cream',
        'minecraft:experience_bottle',
        'minecraft:slime_ball',
        'minecraft:arrow'
    ], (item, advanced, text) => {
        text.add(1, Text.gray('Can be found in vault chests'))
        text.add(2, Text.gray('vault junk'))
        text.add(3, Text.of(''))
    })
    tooltip.addAdvanced([
        'minecraft:netherite_scrap',
        'minecraft:diamond',
        'minecraft:gold_nugget',
        'minecraft:gold_ingot',
        'minecraft:iron_ingot',
        'the_vault:magnetite',
        'minecraft:emerald'
    ], (item, advanced, text) => {
        text.add(1, Text.gray('Can be found in vault chests'))
        text.add(2, Text.gray('vault resource'))
        text.add(3, Text.of(''))
    })
    tooltip.addAdvanced([
        'minecraft:golden_apple',
        //'minecraft:potion'
    ], (item, advanced, text) => {
        text.add(1, Text.gray('Can be found in vault chests'))
        text.add(2, Text.gray('vault powerup'))
        text.add(3, Text.of(''))
    })
})