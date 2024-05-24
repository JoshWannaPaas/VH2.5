/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {

    event.shaped('1x appliedenergistics2:controller', [
        'OPO',
        'FEF',
        'OFO'
    ], {
        O: 'the_vault:perfect_black_opal',
        P: 'the_vault:gem_pog',
        F: 'appliedenergistics2:purified_fluix_crystal',
        E: 'appliedenergistics2:engineering_processor'
    })

    event.shaped('1x appliedenergistics2:drive', [
        'PEP',
        'FGF',
        'PEP'
    ], {
        P: '#the_vault:perfectcommongems',
        E: 'appliedenergistics2:engineering_processor',
        F: 'appliedenergistics2:fluix_glass_cable',
        G: 'the_vault:gem_pog'

    })

    event.shaped('1x appliedenergistics2:molecular_assembler ', [
        'OPO',
        'AWF',
        'OPO'
    ], {
        O: 'the_vault:gem_black_opal',
        P: 'the_vault:gem_pog',
        A: 'appliedenergistics2:annihilation_core',
        W: '#forge:workbench',
        F: 'appliedenergistics2:formation_core'
    })

    event.shaped('1x appliedenergistics2:1k_cell_component', [
        'BCB',
        'CAC',
        'BCB'
    ], {
        B: '#the_vault:commongems',
        C: '#appliedenergistics2:crystals/certus',
        A: 'the_vault:gem_alexandrite'
    })

    event.shaped('1x appliedenergistics2:4k_cell_component', [
        'WAW',
        'CDC',
        'WCW'
    ], {
        W: '#the_vault:perfectcommongems',
        A: 'the_vault:perfect_alexandrite',
        C: 'appliedenergistics2:1k_cell_component',
        D: 'the_vault:vault_diamond'
    })

    event.shaped('1x appliedenergistics2:16k_cell_component', [
        'OAO',
        'CDC',
        'OCO'
    ], {
        O: 'the_vault:vault_diamond',
        A: 'the_vault:perfect_alexandrite',
        C: 'appliedenergistics2:4k_cell_component',
        D: 'the_vault:perfect_black_opal'
    })

    event.shaped('1x appliedenergistics2:64k_cell_component', [
        'PAP',
        'CEC',
        'PCP'
    ], {
        P: 'the_vault:perfect_black_opal',
        A: 'the_vault:gem_echo',
        C: 'appliedenergistics2:16k_cell_component',
        E: 'the_vault:vault_diamond_block'
    })

    event.shaped('1x appliedenergistics2:logic_processor', [
        'L L',
        'SVS',
        'LSL'
    ], {
        L: 'the_vault:perfect_larimar',
        S: '#forge:silicon',
        V: 'the_vault:vault_ingot'
    })

    event.shaped('1x appliedenergistics2:calculation_processor', [
        'B B',
        'SVS',
        'BSB'
    ], {
        B: 'the_vault:perfect_benitoite',
        S: '#forge:silicon',
        V: 'the_vault:vault_nugget'
    })

    event.shaped('1x appliedenergistics2:engineering_processor', [
        'L L',
        'SVS',
        'LSL'
    ], {
        L: 'the_vault:perfect_larimar',
        S: '#forge:silicon',
        V: 'the_vault:vault_nugget'
    })

    event.shaped('1x appliedenergistics2:crafting_unit', [
        'LCL',
        'GPG',
        'LCL'
    ], {
        L: 'the_vault:perfect_larimar',
        C: 'appliedenergistics2:calculation_processor',
        G: '#appliedenergistics2:glass_cable',
        P: 'appliedenergistics2:logic_processor'
    })

    event.shaped('1x appliedenergistics2:export_bus', [
        'L L',
        'GFG',
        'LPL'
    ], {
        L: 'the_vault:perfect_larimar',
        G: '#appliedenergistics2:glass_cable',
        F: 'appliedenergistics2:formation_core',
        P: 'minecraft:piston'
    })

    event.shaped('1x appliedenergistics2:import_bus', [
        'L L',
        'GAG',
        'LPL'
    ], {
        L: 'the_vault:perfect_larimar',
        G: '#appliedenergistics2:glass_cable',
        A: 'appliedenergistics2:annihilation_core',
        P: 'minecraft:piston'
    })

    event.shaped('1x appliedenergistics2:interface', [
        'IGI',
        'APF',
        'IGI'
    ], {
        I: 'minecraft:iron_block',
        G: '#forge:glass',
        A: 'appliedenergistics2:annihilation_core',
        P: 'the_vault:perfect_larimar',
        F: 'appliedenergistics2:formation_core'
    })

    event.shaped('1x appliedenergistics2:wireless_terminal', [
        ' W ',
        'PTP',
        ' D '
    ], {
        W: 'appliedenergistics2:wireless_receiver',
        P: 'the_vault:perfect_black_opal',
        T: 'appliedenergistics2:terminal',
        D: 'appliedenergistics2:dense_energy_cell'
    })

    event.shaped('1x appliedenergistics2:vibration_chamber', [
        'IGI',
        'IFI',
        'EAE'
    ], {
        I: 'minecraft:iron_block',
        G: 'the_vault:gem_pog',
        F: 'minecraft:furnace',
        E: 'the_vault:gem_echo',
        A: 'appliedenergistics2:energy_acceptor'
    })

    event.shaped('1x appliedenergistics2:energy_acceptor', [
        'IQG',
        'QFQ',
        'GQI'
    ], {
        I: 'minecraft:iron_block',
        Q: 'appliedenergistics2:quartz_glass',
        G: 'the_vault:gem_echo',
        F: 'appliedenergistics2:fluix_block'
    })

    event.shaped('4x appliedenergistics2:quartz_glass', [
        'QGQ',
        'GDG',
        'QGQ'
    ], {
        Q: '#forge:dusts/quartz',
        G: '#forge:glass',
        D: 'the_vault:vault_dust'
    })

    event.shapeless('1x appliedenergistics2:storage_bus', ['#appliedenergistics2:interface', 'minecraft:piston', 'the_vault:perfect_larimar', 'minecraft:sticky_piston', 'the_vault:perfect_larimar', 'the_vault:perfect_larimar'])
    event.shapeless('1x appliedenergistics2:terminal', ['appliedenergistics2:annihilation_core', 'appliedenergistics2:formation_core', 'the_vault:perfect_larimar', 'the_vault:perfect_benitoite', 'the_vault:perfect_larimar', 'appliedenergistics2:logic_processor'])
    event.shapeless('1x appliedenergistics2:crafting_terminal', ['#forge:workbench', 'appliedenergistics2:calculation_processor', 'appliedenergistics2:terminal', 'the_vault:gem_pog'])
    event.shapeless('1x appliedenergistics2:speed_card', ['appliedenergistics2:advanced_card', 'appliedenergistics2:purified_fluix_crystal', '#the_vault:perfectcommongems'])
    event.shapeless('1x appliedenergistics2:capacity_card', ['appliedenergistics2:basic_card', 'appliedenergistics2:charged_certus_quartz_crystal', '#the_vault:perfectcommongems'])
    event.shapeless('4x appliedenergistics2:fluix_glass_cable', ['appliedenergistics2:quartz_fiber', '#appliedenergistics2:crystals/fluix', 'the_vault:gem_larimar', '#appliedenergistics2:crystals/fluix'])
    event.shapeless('1x appliedenergistics2:fluix_glass_cable', ['#appliedenergistics2:glass_cable', 'minecraft:snowball'])
    event.shapeless('4x appliedenergistics2:fluix_covered_cable', ['#quark:quilted_wools', '#appliedenergistics2:glass_cable', 'the_vault:gem_wutodie', '#appliedenergistics2:glass_cable', '#appliedenergistics2:glass_cable', '#appliedenergistics2:glass_cable'])
    event.shapeless('1x appliedenergistics2:fluix_covered_cable', ['#appliedenergistics2:covered_cable', 'minecraft:snowball'])
    event.shapeless('4x appliedenergistics2:fluix_smart_cable', ['minecraft:redstone_block', 'appliedenergistics2:fluix_covered_cable', 'the_vault:gem_black_opal', 'minecraft:glowstone', 'appliedenergistics2:fluix_covered_cable', 'appliedenergistics2:fluix_covered_cable', 'appliedenergistics2:fluix_covered_cable' ])
    event.shapeless('1x appliedenergistics2:fluix_smart_cable', ['#appliedenergistics2:smart_cable', 'minecraft:snowball'])
    event.shapeless('4x appliedenergistics2:fluix_smart_dense_cable', ['minecraft:redstone_block', 'appliedenergistics2:fluix_smart_cable', '#the_vault:playergems', 'minecraft:glowstone', 'appliedenergistics2:fluix_smart_cable', 'appliedenergistics2:fluix_smart_cable', 'appliedenergistics2:fluix_smart_cable' ])
    event.shapeless('1x appliedenergistics2:fluix_smart_dense_cable', ['#appliedenergistics2:smart_dense_cable', 'minecraft:snowball'])
})