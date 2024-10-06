onEvent('recipes', event => {
    event.shaped('1x integrateddynamics:menril_sapling', [
        'BLB',
        'LSL',
        'BLB'
    ], {
        B: 'the_vault:perfect_benitoite',
        L: 'the_vault:perfect_larimar',
        S: '#forge:sapling'
    })

    event.shaped('1x integrateddynamics:wrench', [
        ' CP',
        ' CC',
        'C  '
    ], {
        C: 'integrateddynamics:crystalized_menril_chunk',
        P: 'the_vault:perfect_alexandrite'
    })

    event.shaped('6x integrateddynamics:variable', [
        'CPC',
        'PAP',
        'CPC'
    ], {
        C: 'integrateddynamics:crystalized_menril_chunk',
        P: '#the_vault:perfectcommongems',
        A: 'minecraft:paper'
    })

    event.shaped('4x integrateddynamics:logic_director', [
        'RCR',
        'RPR',
        'RCR'
    ], {
        R: 'integrateddynamics:crystalized_chorus_chunk',
        C: 'integrateddynamics:crystalized_menril_chunk',
        P: 'the_vault:perfect_black_opal'
    })

    event.shaped('4x integrateddynamics:cable', [
        'CPC',
        'CAC',
        'CPC'
    ], {
        C: 'integrateddynamics:crystalized_menril_chunk',
        P: '#the_vault:perfectcommongems',
        A: 'the_vault:perfect_alexandrite'
    })

    event.shaped('4x integrateddynamics:cable', [
        'CCC',
        'PAP',
        'CCC'
    ], {
        C: 'integrateddynamics:crystalized_menril_chunk',
        P: '#the_vault:perfectcommongems',
        A: 'the_vault:perfect_alexandrite'
    })

    event.shaped('2x integratedtunnels:part_interface_item', [
        '   ',
        'CFC',
        'PCP'
    ], {
        C: 'integrateddynamics:crystalized_menril_chunk',
        P: 'the_vault:perfect_wutodie',
        F: '#forge:chests/wooden'
    })

    event.shaped('2x integratedtunnels:part_interface_energy', [
        '   ',
        'CFC',
        'PCP'
    ], {
        C: 'integrateddynamics:crystalized_menril_chunk',
        P: 'the_vault:perfect_wutodie',
        F: 'integrateddynamics:energy_battery'
    })

    event.shaped('2x integratedtunnels:part_interface_fluid', [
        '   ',
        'CFC',
        'PCP'
    ], {
        C: 'integrateddynamics:crystalized_menril_chunk',
        P: 'the_vault:perfect_wutodie',
        F: 'minecraft:bucket'
    })

    event.shaped('1x integrateddynamics:squeezer', [
        'RIR',
        'RAR',
        'POP'
    ], {
        R: '#forge:rods/wooden',
        I: 'compressium:iron_2',
        A: 'the_vault:perfect_black_opal',
        O: 'the_vault:gem_pog',
        P: '#minecraft:planks'
    })

    event.shaped('1x integrateddynamics:mechanical_squeezer', [
        ' P ',
        'BSB',
        ' E '
    ], {
        P: 'the_vault:gem_pog',
        E: 'the_vault:extraordinary_black_opal',
        B: 'integrateddynamics:energy_battery',
        S: 'integrateddynamics:squeezer'
    })

    event.shaped('1x integrateddynamics:drying_basin', [
        'LDL',
        'IPI',
        'LDL'
    ], {
        L: '#minecraft:logs',
        D: 'the_vault:perfect_black_opal',
        P: 'the_vault:gem_pog',
        I: 'compressium:iron_2'
    })

    event.shaped('1x integrateddynamics:mechanical_drying_basin', [
        ' P ',
        'BSB',
        ' E '
    ], {
        P: 'the_vault:gem_pog',
        E: 'the_vault:extraordinary_black_opal',
        B: 'integrateddynamics:energy_battery',
        S: 'integrateddynamics:drying_basin'
    })

    event.shaped('2x integrateddynamics:variable_transformer_input', [
        ' V ',
        'CPC',
        ' V '
    ], {
        V: 'integrateddynamics:variable',
        C: 'integrateddynamics:crystalized_chorus_chunk',
        P: 'the_vault:gem_black_opal'
    })

    event.shaped('2x integrateddynamics:variable_transformer_output', [
        ' C ',
        'VPV',
        ' C '
    ], {
        V: 'integrateddynamics:variable',
        C: 'integrateddynamics:crystalized_chorus_chunk',
        P: 'the_vault:gem_black_opal'
    })

    event.shaped('1x integratedterminals:part_terminal_storage', [
        'PMP',
        'ODI',
        'PEP'
    ], {
        P: 'the_vault:perfect_black_opal',
        M: 'integratedterminals:menril_glass',
        O: 'integrateddynamics:variable_transformer_output',
        D: 'integrateddynamics:part_display_panel',
        I: 'integrateddynamics:variable_transformer_input',
        E: 'the_vault:gem_pog'
    })

    event.shaped('1x integratedterminals:terminal_storage_portable', [
        ' O ',
        'CTC',
        ' E '
    ], {
        O: 'the_vault:extraordinary_black_opal',
        C: 'integrateddynamics:crystalized_chorus_chunk',
        T: 'integratedterminals:part_terminal_storage',
        E: 'the_vault:echo_pog'
    })
})