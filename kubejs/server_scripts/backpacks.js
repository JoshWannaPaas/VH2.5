/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {
    
    event.shaped('1x simplybackpacks:commonbackpack', [
        'SWS',
        'ILI',
        'LCL'
    ], {
        S: 'minecraft:string',
        W: '#minecraft:wool',
        I: '#forge:ingots/iron',
        L: 'minecraft:leather',
        C: '#forge:shulker_boxes'
    })

    event.shaped('1x simplybackpacks:uncommonbackpack', [
        'GPG',
        'OBO',
        'LCL'
    ], {
        G: 'minecraft:gold_block',
        P: 'the_vault:perfect_alexandrite',
        O: 'the_vault:gem_black_opal',
        B: 'simplybackpacks:commonbackpack',
        L: 'minecraft:leather',
        C: '#forge:shulker_boxes'
    })

    event.shaped('1x simplybackpacks:rarebackpack', [
        'DPD',
        'GUG',
        'CVC'
    ], {
        D: 'minecraft:diamond_block',
        P: 'the_vault:gem_pog',
        G: '#the_vault:perfectcommongems',
        U: 'simplybackpacks:uncommonbackpack',
        C: '#forge:shulker_boxes',
        V: 'the_vault:vault_diamond'
    })

    event.shaped('1x simplybackpacks:epicbackpack', [
        'VEV',
        'PRP',
        'CNC'
    ], {
        V: 'the_vault:vault_diamond',
        E: 'the_vault:perfect_echo_gem',
        P: 'the_vault:perfect_black_opal',
        R: 'simplybackpacks:rarebackpack',
        C: '#forge:shulker_boxes',
        N: 'minecraft:nether_star'
    })
})