/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */


let vaultApples = ['jade_apple','cobalt_apple', 'pixie_apple', 'lucky_apple', 'treasure_apple', 'power_apple', 'ghost_apple', 'golem_apple', 'sweet_apple', 'hearty_apple']

onEvent('recipes', event => {

    event.shaped('1x mekanism:jetpack', [
        'SUS',
        'PCP',
        'GVG'
    ], {
        S: '#forge:storage_blocks/steel',
        U: 'mekanism:ultimate_control_circuit',
        P: 'the_vault:perfect_larimar',
        C: 'mekanism:ultimate_chemical_tank',
        G: 'the_vault:gem_pog',
        V: 'the_vault:vault_nugget'
    })

    event.shaped('1x mekanism:digital_miner', [
        'AOA',
        'PRP',
        'TST'
    ], {
        A: 'mekanism:alloy_atomic',
        O: 'the_vault:omega_pog',
        P: 'the_vault:perfect_black_opal',
        R: 'mekanism:robit',
        T: 'mekanism:teleportation_core',
        S: 'mekanism:steel_casing'
    })

    event.shaped('1x mekanism:steel_casing', [
        'SGS',
        'OWO',
        'SGS'
    ], {
        S: '#forge:ingots/steel',
        G: '#forge:glass',
        O: 'the_vault:gem_black_opal',
        W: 'the_vault:perfect_wutodie'        
    })

    event.shaped('1x mekanismgenerators:solar_panel', [
        'GVG',
        'BLB',
        'OOO'
    ], {
        G: '#forge:glass',
        V: 'the_vault:vault_nugget',
        B: 'the_vault:gem_benitoite',
        L: 'the_vault:gem_larimar',
        O: '#forge:ingots/osmium'        
    })

    event.shaped('1x mekanism:formulaic_assemblicator', [
        'SWS',
        'GCG',
        'SGS'
    ], {
        S: '#forge:ingots/steel',
        W: '#forge:workbench',
        G: 'the_vault:gem_pog',
        C: 'mekanism:steel_casing'   
    })

    event.shaped('1x mekanism:advanced_control_circuit', [
        ' W ',
        'ACA',
        ' W '
    ], {
        W: 'the_vault:perfect_wutodie',
        A: 'mekanism:alloy_infused',
        C: 'mekanism:basic_control_circuit',
    })

    event.shaped('1x mekanism:elite_control_circuit', [
        ' P ',
        'ACA',
        ' P '
    ], {
        P: 'the_vault:perfect_black_opal',
        A: 'mekanism:alloy_reinforced',
        C: 'mekanism:advanced_control_circuit',
    })

    event.shaped('1x mekanism:ultimate_control_circuit', [
        ' E ',
        'ACA',
        ' E '
    ], {
        E: 'the_vault:gem_echo',
        A: 'mekanism:alloy_atomic',
        C: 'mekanism:elite_control_circuit',
    })

    event.shaped('1x mekanism:atomic_disassembler', [
        'ATA',
        'APA',
        'EOE'
    ], {
        A: 'mekanism:alloy_atomic',
        T: 'mekanism:energy_tablet',
        P: 'the_vault:vault_paxel',
        E: 'the_vault:perfect_black_opal',
        O: 'the_vault:omega_pog'
    })

    event.shaped('1x mekanism:energy_tablet', [
        'AGA',
        'RPR',
        'AGA'
    ], {
        A: 'mekanism:alloy_infused',
        G: 'minecraft:gold_ingot',
        R: 'minecraft:redstone_block',
        P: '#the_vault:perfectcommongems'
    })

    event.shaped('1x mekanism:configurator', [
        'PLP',
        'AEA',
        'ARA'
    ], {
        A: 'mekanism:alloy_infused',
        L: 'compressium:lapis_2',
        E: 'mekanism:energy_tablet',
        P: '#the_vault:perfectcommongems',
        R: '#forge:rods/wooden'
    })

    event.shaped('1x mekanism:metallurgic_infuser', [
        'IBI',
        'POP',
        'IBI'
    ], {
        I: '#forge:storage_blocks/iron',
        B: 'minecraft:blast_furnace',
        P: 'the_vault:perfect_black_opal',
        O: '#forge:storage_blocks/osmium',
    })

    // QIO recipes

    event.shaped('1x mekanism:qio_dashboard', [
        'LPL',
        'PGP',
        'LTL'
    ], {
        L: '#forge:storage_blocks/lead',
        P: 'mekanism:pellet_polonium',
        G: 'the_vault:gem_pog',
        T: 'mekanism:teleportation_core'
    })

    event.shaped('1x mekanism:portable_qio_dashboard', [
        'PGP',
        'PDP',
        'LTL'
    ], {
        P: 'mekanism:pellet_polonium',
        G: 'the_vault:gem_pog',
        D: 'mekanism:qio_dashboard',
        L: '#the_vault:playergems',
        T: 'mekanism:teleportation_core'
    })

    event.shaped('1x mekanism:qio_drive_array', [
        'PGP',
        'UCU',
        'LTL'
    ], {
        P: 'mekanism:pellet_polonium',
        G: 'the_vault:gem_pog',
        U: 'mekanism:ultimate_control_circuit',
        L: '#the_vault:playergems',
        T: 'mekanism:teleportation_core'
    })

    event.shaped('1x mekanism:qio_drive_base', [
        'PAP',
        'AEA',
        'PAP'
    ], {
        P: '#the_vault:perfectcommongems',
        A: 'mekanism:advanced_control_circuit',
        E: 'mekanism:pellet_polonium'
    })

    event.shaped('1x mekanism:qio_drive_hyper_dense', [
        'PDP',
        'DGD',
        'EDE'
    ], {
        P: 'the_vault:perfect_black_opal',
        D: 'mekanism:qio_drive_base',
        G: 'the_vault:gem_pog',
        E: 'mekanism:elite_control_circuit'
    })

    event.shaped('1x mekanism:qio_drive_time_dilating', [
        'PDP',
        'DGD',
        'UDU'
    ], {
        P: 'the_vault:perfect_black_opal',
        D: 'mekanism:qio_drive_hyper_dense',
        G: 'the_vault:echo_pog',
        U: 'mekanism:ultimate_control_circuit'
    })

    event.shaped('1x mekanism:qio_drive_supermassive', [
        'ADA',
        'DOD',
        'UDU'
    ], {
        A: 'mekanism:pellet_antimatter',
        D: 'mekanism:qio_drive_time_dilating',
        O: 'the_vault:omega_pog',
        U: 'mekanism:ultimate_control_circuit'
    })

    event.shaped('1x mekanism:qio_redstone_adapter', [
        'PTP',
        ' R',
        'PCP'
    ], {
        P: 'mekanism:pellet_polonium',
        T: 'minecraft:redstone_torch',
        R: 'compressium:redstone_2',
        C: 'mekanism:teleportation_core'
    })

    ///////////////////////////////////////////////////////

    event.shaped('1x mekanism:basic_energy_cube', [
        'RER',
        'PSP',
        'RER'
    ], {
        R: 'minecraft:redstone_block',
        E: 'mekanism:energy_tablet',
        P: 'the_vault:perfect_black_opal',
        S: 'mekanism:steel_casing'
    })

    event.shaped('1x mekanism:advanced_energy_cube', [
        'RAR',
        'WCW',
        'RAR'
    ], {
        R: 'compressium:redstone_1',
        A: 'mekanism:advanced_control_circuit',
        W: 'the_vault:perfect_wutodie',
        C: 'mekanism:basic_energy_cube'
    })

    event.shaped('1x mekanism:elite_energy_cube', [
        'VEV',
        'GCG',
        'VEV'
    ], {
        V: 'the_vault:vault_diamond',
        E: 'mekanism:elite_control_circuit',
        G: 'the_vault:gem_pog',
        C: 'mekanism:advanced_energy_cube'
    })

    event.shaped('1x mekanism:ultimate_energy_cube', [
        'VUV',
        'GCG',
        'VEV'
    ], {
        V: 'the_vault:vault_diamond_block',
        U: 'mekanism:ultimate_control_circuit',
        G: 'the_vault:gem_pog',
        C: 'mekanism:elite_energy_cube',
        E: 'the_vault:echo_pog'
    })

    event.shaped('16x mekanism:basic_universal_cable', [
        ' P ',
        'SRS',
        ' P '
    ], {
        P: '#the_vault:perfectcommongems',
        S: '#forge:ingots/steel',
        R: 'compressium:redstone_2'
    })
    
    event.custom({
        "type": "mekanism:crushing",
        "input":{"ingredient":{"item":"the_vault:jade_apple"}},
        "output":{"item":"the_vault:vault_apple"}
    })

    event.custom({
        "type": "mekanism:crushing",
        "input":{"ingredient":{"item":"the_vault:cobalt_apple"}},
        "output":{"item":"the_vault:vault_apple"}
    })

    event.custom({
        "type": "mekanism:crushing",
        "input":{"ingredient":{"item":"the_vault:pixie_apple"}},
        "output":{"item":"the_vault:vault_apple"}
    })

    event.custom({
        "type": "mekanism:crushing",
        "input":{"ingredient":{"item":"the_vault:lucky_apple"}},
        "output":{"item":"the_vault:vault_apple"}
    })

    vaultApples.forEach(vaultApples =>{
        event.custom({
            "type": "mekanism:crushing",
            "input":{"ingredient":{"item":"the_vault:"+vaultApples}},
            "output":{"item":"the_vault:vault_apple"}
        })
    })
})