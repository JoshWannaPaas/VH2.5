/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {

    event.shaped('1x thermal:machine_frame', [
        'DPD',
        'POP',
        'DPD'
    ], {
        D: 'minecraft:diamond',
        P: '#the_vault:perfectcommongems',
        O: 'the_vault:perfect_black_opal'
    })

    event.shaped('1x thermal:rf_coil', [
        ' PR',
        'PGP',
        'RP '
    ], {
        P: '#the_vault:perfectcommongems',
        R: 'minecraft:redstone_block',
        G: 'minecraft:gold_block'
    })

    event.shaped('1x thermal:wrench', [
        'IOI',
        ' G ',
        ' P '
    ], {
        I: 'the_vault:vault_ingot',
        O: 'the_vault:perfect_black_opal',
        G: '#forge:gears',
        P: '#the_vault:perfectcommongems'
    })

    event.shaped('1x thermal:dynamo_compression', [
        'ORO',
        'IGI',
        'SCS'
    ], {
        O: 'the_vault:perfect_black_opal',
        R: 'thermal:rf_coil',
        I: 'minecraft:iron_block',
        G: '#forge:gears/bronze',
        S: '#forge:storage_blocks/bronze',
        C: 'compressium:redstone_1'
    })

    event.shaped('1x thermal:dynamo_magmatic', [
        'ORO',
        'IGI',
        'SCS'
    ], {
        O: 'the_vault:perfect_black_opal',
        R: 'thermal:rf_coil',
        I: 'minecraft:iron_block',
        G: '#forge:gears/invar',
        S: '#forge:storage_blocks/invar',
        C: 'compressium:redstone_1'
    })

    event.shaped('1x thermal:dynamo_numismatic', [
        'ORO',
        'IGI',
        'SCS'
    ], {
        O: 'the_vault:perfect_black_opal',
        R: 'thermal:rf_coil',
        I: 'minecraft:iron_block',
        G: '#forge:gears/tin',
        S: '#forge:storage_blocks/constantan',
        C: 'compressium:redstone_1'
    })

    event.shaped('1x thermal:dynamo_lapidary', [
        'ORO',
        'IGI',
        'CCC'
    ], {
        O: 'the_vault:perfect_black_opal',
        R: 'thermal:rf_coil',
        I: 'minecraft:iron_block',
        G: '#forge:gears/gold',
        C: 'compressium:lapis_1'
    })

    event.shaped('1x thermal:dynamo_stirling', [
        'ORO',
        'IGI',
        'SCS'
    ], {
        O: 'the_vault:perfect_black_opal',
        R: 'thermal:rf_coil',
        I: 'minecraft:iron_block',
        G: '#forge:gears/iron',
        S: 'compressium:stone_2',
        C: 'compressium:redstone_1'
    })

    event.shaped('1x thermal:machine_insolator', [
        ' E ',
        'GMG',
        'LRL'
    ], {
        E: 'the_vault:echo_pog',
        G: 'the_vault:gem_pog',
        M: 'thermal:machine_frame',
        L: '#forge:gears/lumium',
        R: 'thermal:rf_coil'
    })

    event.shaped('1x thermal:energy_cell', [
        'CRC',
        'OEO',
        'CTC'
    ], {
        C: 'thermal:cured_rubber',
        R: 'compressium:redstone_2',
        O: 'the_vault:perfect_black_opal',
        E: 'thermal:energy_cell_frame',
        T: 'thermal:rf_coil'
    })

    event.shaped('1x thermal:energy_cell_frame', [
        'LBL',
        'PGP',
        'LBL'
    ], {
        L: '#forge:ingots/lead',
        B: 'the_vault:perfect_benitoite',
        P: '#the_vault:perfectcommongems',
        G: '#forge:gears/electrum'
    })

    event.shaped('1x thermal:device_collector', [
        'GEG',
        'THT',
        'ARA'
    ], {
        G: 'the_vault:gem_pog',
        E: 'minecraft:ender_eye',
        T: '#forge:storage_blocks/tin',
        H: 'minecraft:hopper',
        A: 'the_vault:perfect_alexandrite',
        R: 'thermal:redstone_servo'
    })

    event.shaped('1x thermal:energy_cell_frame', [
        'ICI',
        'GMG',
        'IRI'
    ], {
        I: '#forge:storage_blocks/invar',
        C: '#forge:gears/constantan',
        G: 'the_vault:gem_pog',
        M: 'thermal:machine_frame',
        R: 'thermal:redstone_servo'
    })
})