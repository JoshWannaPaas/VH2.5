/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by xD0r0x to KubeJS */

onEvent('recipes', event => {

// adding recipes

    event.shaped('1x rftoolsbase:machine_frame', [
        'IPI',
        'LDL',
        'IPI'
    ], {
        I: 'minecraft:iron_ingot',
        P: '#the_vault:perfectcommongems',
        L: 'the_vault:gem_larimar',
        D: 'minecraft:diamond_block'
    })

    event.shaped('1x rftoolsbuilder:builder', [
        'LOB',
        'RMR',
        'BEL'
    ], {
        L: 'the_vault:perfect_larimar',
        O: 'the_vault:perfect_black_opal',
        B: 'the_vault:perfect_benitoite',
        R: 'minecraft:redstone',
        M: 'rftoolsbase:machine_frame',
        E: 'the_vault:echo_pog'
    })

    event.shaped('1x rftoolsutility:crafter1', [
        ' P ',
        'WMW',
        ' P '
    ], {
        P: 'the_vault:gem_pog',
        W: '#forge:workbench',
        M: 'rftoolsbase:machine_frame'
    })

    event.shaped('1x rftoolsutility:charged_porter', [
        'AWA',
        'WEW',
        'IWI'
    ], {
        A: 'the_vault:perfect_alexandrite',
        W: 'quark:ender_watcher',
        E: 'the_vault:echo_pog',
        I: 'compressium:iron_2'
    })

    event.shaped('1x rftoolsutility:advanced_charged_porter', [
        'ODO',
        'DCD',
        'RDR'
    ], {
        O: 'the_vault:perfect_black_opal',
        D: 'the_vault:vault_diamond_block',
        C: 'rftoolsutility:charged_porter',
        R: 'compressium:redstone_4'
    })

    event.shaped('1x rftoolsbuilder:shape_card_quarry', [
        'ROR',
        'DSD',
        'RPR'
    ], {
        R: 'compressium:redstone_2',
        O: 'the_vault:omega_pog',
        D: 'the_vault:vault_diamond_block',
        S: 'rftoolsbuilder:shape_card_def',
        P: 'the_vault:vault_paxel'
    })

    event.shaped('1x rftoolspower:dimensionalcell_simple', [
        'RDR',
	    'PMI',
	    'RDR'
    ], {
        R: 'compressium:redstone_1',
        D: 'the_vault:vault_diamond',
        P: 'rftoolsbase:infused_enderpearl',
        M: 'rftoolsbase:machine_frame',
        I: 'rftoolsbase:infused_diamond'
    })

    event.shaped('1x rftoolspower:dimensionalcell', [
        'RDR',
	    'PMP',
	    'RDR'
    ], {
        R: 'compressium:redstone_2',
        D: 'the_vault:vault_diamond',
        P: '#the_vault:perfectcommongems',
        M: 'rftoolspower:dimensionalcell'
    })

    event.shaped('1x rftoolspower:dimensionalcell_advanced', [
        'RDR',
	    'OMO',
	    'RDR'
    ], {
        R: 'compressium:redstone_2',
	    D: 'the_vault:vault_diamond_block',
        O: 'the_vault:perfect_black_opal',
        M: 'rftoolspower:dimensionalcell'
    })

    event.shaped('1x rftoolspower:powercell_card', [
        'GDG',
        'DMD',
        'GDG'
    ], {
        G: '#the_vault:playergems',
        D: 'the_vault:vault_diamond',
        M: 'rftoolsbase:machine_frame'
    })

    event.shaped('1x rftoolspower:power_core1', [
        'DID',
        'EPE',
        'DID'
    ], {
        D: 'the_vault:vault_diamond',
        I: 'rftoolsbase:infused_diamond',
        E: 'rftoolsbase:infused_enderpearl',
        P: '#the_vault:perfectcommongems'
    })

    event.shaped('1x rftoolspower:power_core2', [
        'DED',
        'WPW',
        'DID'
    ], {
        D: 'the_vault:vault_diamond',
        I: 'rftoolsbase:infused_diamond',
        E: 'rftoolsbase:infused_enderpearl',
        W: 'the_vault:perfect_wutodie',
        P: 'rftoolspower:power_core1'
    })

    event.shaped('1x rftoolspower:power_core3', [
        'DED',
        'OPO',
        'DID'
    ], {
        D: 'the_vault:vault_diamond',
        I: 'rftoolsbase:infused_diamond',
        E: 'rftoolsbase:infused_enderpearl',
        O: 'the_vault:perfect_black_opal',
        P: 'rftoolspower:power_core2'
    })

    event.shaped('1x rftoolsutility:syringe', [
        'I  ',
        ' I ',
        '  P'
    ], {
        I: 'the_vault:vault_ingot',
        P: 'the_vault:gem_pog'
    })

    event.shaped('1x rftoolsutility:spawner', [
        'R R',
        'PMP',
        'R R'
    ], {
        R: 'compressium:redstone_3',
        P: 'the_vault:gem_pog',
        M: 'rftoolsbase:machine_frame'
    })
})