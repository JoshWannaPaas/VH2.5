/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {
    
    event.shaped('1x mininggadgets:mininggadget', [
        'NVI',
        'NUO',
        'NVI'
    ], {
        N: 'minecraft:netherite_ingot',
        V: 'the_vault:vault_nugget',
        U: 'mininggadgets:upgrade_empty',
        O: 'the_vault:gem_black_opal',
        I: 'minecraft:iron_ingot'
    })

    event.shaped('1x mininggadgets:mininggadget_simple', [
        'NVI',
        'NUI',
        'NVO'
    ], {
        N: 'minecraft:netherite_ingot',
        V: 'the_vault:vault_nugget',
        U: 'mininggadgets:upgrade_empty',
        O: 'the_vault:gem_black_opal',
        I: 'minecraft:iron_ingot'
    })

    event.shaped('1x mininggadgets:mininggadget_fancy', [
        'NVO',
        'NUI',
        'NVI'
    ], {
        N: 'minecraft:netherite_ingot',
        V: 'the_vault:vault_nugget',
        U: 'mininggadgets:upgrade_empty',
        O: 'the_vault:gem_black_opal',
        I: 'minecraft:iron_ingot'
    })

    event.shaped('1x mininggadgets:upgrade_empty', [
        'RLR',
        'DBD',
        'RLR'
    ], {
        R: 'minecraft:redstone',
        L: 'the_vault:gem_larimar',
        D: 'minecraft:diamond',
        B: 'the_vault:perfect_benitoite'
    })

    event.shaped('1x mininggadgets:upgrade_three_by_three', [
        'RDR',
        'EUE',
        'RPR'
    ], {
        R: 'minecraft:redstone_block',
        D: 'minecraft:diamond_block',
        E: 'minecraft:ender_pearl',
        U: 'mininggadgets:upgrade_empty',
        P: 'minecraft:netherite_pickaxe'
    })

})