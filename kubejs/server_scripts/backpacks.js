onEvent('recipes', event => {
    
    event.shaped('1x simplybackpacks:commonbackpack', [
        'SAS',
        'OLO',
        'LCL'
    ], {
        S: 'minecraft:string',
        A: 'the_vault:perfect_alexandrite',
        O: 'the_vault:gem_black_opal',
        L: 'minecraft:leather',
        C: '#forge:chests/wooden'
    })

    event.shaped('1x simplybackpacks:uncommonbackpack', [
        'GPG',
        'OBO',
        'LCL'
    ], {
        G: 'minecraft:gold_block',
        P: 'the_vault:gem_pog',
        O: 'the_vault:gem_black_opal',
        B: 'simplybackpacks:commonbackpack',
        L: 'minecraft:leather',
        C: '#forge:chests/wooden'
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
        C: '#forge:chests/wooden',
        V: 'the_vault:vault_diamond_block'
    })

    event.shaped('1x simplybackpacks:epicbackpack', [
        'VEV',
        'PRP',
        'CNC'
    ], {
        V: 'the_vault:vault_diamond',
        E: 'the_vault:echo_pog',
        P: 'the_vault:perfect_black_opal',
        R: 'simplybackpacks:rarebackpack',
        C: '#forge:chests/wooden',
        N: 'minecraft:nether_star'
    })
})