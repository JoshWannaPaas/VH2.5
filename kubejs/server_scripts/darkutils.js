/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {

    event.shaped('1x darkutils:rune_damage_player', [
        'NSN',
        'PGP',
        'BOB'
    ], {
        N: 'the_vault:vault_nugget',
        S: 'minecraft:netherite_sword',
        P: 'minecraft:phantom_membrane',
        G: 'the_vault:gem_pog',
        B: 'darkutils:blank_plate',
        O: 'the_vault:perfect_black_opal'
    })

    event.shaped('1x darkutils:charm_experience', [
        'AEA',
        'EGE',
        'AEA'
    ], {
        A: 'the_vault:gem_alexandrite',
        E: 'minecraft:emerald',
        G: 'the_vault:gem_pog'
    })

    event.shaped('1x darkutils:charm_gluttony', [
        'POP',
        'OGO',
        'POP'
    ], {
        P: 'the_vault:gem_pog',
        O: 'the_vault:perfect_black_opal',
        G: 'minecraft:golden_apple'
    })

    event.shaped('1x darkutils:charm_gluttony', [
        'POP',
        'OGO',
        'POP'
    ], {
        P: 'the_vault:gem_pog',
        O: 'the_vault:perfect_black_opal',
        G: 'minecraft:golden_apple'
    })

    event.shaped('1x darkutils:ender_hopper', [
        'PEP',
        'OHO',
        'AOA'
    ], {
        P: 'the_vault:gem_pog',
        E: 'minecraft:ender_eye',
        O: 'minecraft:obsidian',
        H: 'minecraft:hopper',
        A: 'the_vault:perfect_alexandrite'
    })

    event.shaped('6x darkutils:vector_plate_fast', [
        'VVV',
        'LDB',
        'VVV'
    ], {
        V: 'darkutils:vector_plate',
        L: 'the_vault:gem_larimar',
        D: 'the_vault:vault_diamond',
        B: 'the_vault:gem_benitoite'
    })

    event.shaped('6x darkutils:vector_plate_extreme', [
        'VVV',
        'ODA',
        'VVV'
    ], {
        V: 'darkutils:vector_plate',
        O: 'the_vault:perfect_black_opal',
        D: 'the_vault:vault_diamond',
        A: 'the_vault:perfect_alexandrite'
    })

    event.shaped('6x darkutils:export_plate_fast', [
        'EEE',
        'LDB',
        'EEE'
    ], {
        E: 'darkutils:export_plate',
        L: 'the_vault:gem_larimar',
        D: 'the_vault:vault_diamond',
        B: 'the_vault:gem_benitoite'
    })

    event.shaped('6x darkutils:export_plate_extreme', [
        'EEE',
        'ODA',
        'EEE'
    ], {
        E: 'darkutils:export_plate_fast',
        O: 'the_vault:perfect_black_opal',
        D: 'the_vault:vault_diamond',
        A: 'the_vault:perfect_alexandrite'
    })

    event.shaped('6x darkutils:import_plate_fast', [
        'III',
        'LDB',
        'III'
    ], {
        I: 'darkutils:import_plate',
        L: 'the_vault:gem_larimar',
        D: 'the_vault:vault_diamond',
        B: 'the_vault:gem_benitoite'
    })

    event.shaped('6x darkutils:import_plate_extreme', [
        'III',
        'ODA',
        'III'
    ], {
        I: 'darkutils:import_plate_fast',
        O: 'the_vault:perfect_black_opal',
        D: 'the_vault:vault_diamond',
        A: 'the_vault:perfect_alexandrite'
    })
})