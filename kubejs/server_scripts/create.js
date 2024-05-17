/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

let vaultApples = ['jade_apple','cobalt_apple', 'pixie_apple', 'lucky_apple', 'treasure_apple', 'power_apple', 'ghost_apple', 'golem_apple', 'sweet_apple', 'hearty_apple']

onEvent('recipes', event => {

    event.shaped('1x create:crushing_wheel', [
        'ALA',
        'AGA',
        'ALA'
    ], {
        A: 'create:andesite_alloy',
        L: '#minecraft:logs',
        G: 'the_vault:perfect_alexandrite'
    })

    event.shaped('1x create:encased_fan', [
        'OSO',
        'WCW',
        'OPO'
    ], {
        O: 'the_vault:gem_black_opal',
        S: 'create:shaft',
        W: 'create:cogwheel',
        C: 'create:andesite_casing',
        P: 'create:propeller'
    })

    event.shaped('1x create:furnace_engine', [
        'SIB',
        'OCP',
        'SIB'
    ], {
        S: 'create:brass_sheet',
        I: 'create:brass_ingot',
        B: 'create:brass_block',
        O: 'the_vault:perfect_black_opal',
        C: 'create:brass_casing',
        P: 'the_vault:gem_pog'
    })

    event.shaped('1x create:cart_assembler', [
        ' V ',
        'AEA',
        'VPV'
    ], {
        V: 'the_vault:vault_diamond_block',
        A: 'create:andesite_alloy',
        E: 'the_vault:echo_pog',
        P: 'the_vault:gem_pog'
    })

    event.shaped('1x create:basin', [
        '   ',
        'AGA',
        'AAA'
    ], {
        A: 'create:andesite_alloy',
        G: 'the_vault:gem_alexandrite'
    })

    event.shaped('1x create:andesite_alloy', [
        'AG ',
        'GA ',
        '   '
    ], {
        A: 'minecraft:andesite',
        G: '#the_vault:commongems'
    })

    event.shaped('1x create:windmill_bearing', [
        'VTV',
        'GPG',
        'VSV'
    ], {
        V: 'the_vault:vault_diamond',
        T: 'create:turntable',
        G: 'the_vault:gem_black_opal',
        P: 'the_vault:gem_pog',
        S: 'create:shaft'
    })

    event.shaped('1x create:belt_connector', [
        'DDD',
        'DGD',
        'DDD'
    ], {
        D: 'minecraft:dried_kelp',
        G: '#the_vault:perfectcommongems'
    })

    event.shaped('1x create:flywheel', [
        'BGB',
        'GCG',
        'BGB'
    ], {
        B: 'create:brass_ingot',
        G: 'the_vault:gem_black_opal',
        C: 'create:brass_casing'
    })

    event.shaped('1x create:brass_funnel', [
        ' G ',
        'BEB',
        ' C '
    ], {
        G: 'the_vault:gem_wutodie',
        B: '#forge:ingots/brass',
        E: 'create:electron_tube',
        C: 'create:belt_connector',
    })

    event.shaped('1x create:extendo_grip', [
        'GOG',
        'BHB',
        'GOG'
    ], {
        G: 'the_vault:perfect_black_opal',
        O: 'the_vault:omega_pog',
        B: '#forge:storage_blocks/brass',
        H: 'create:brass_hand'
    })

    event.shaped('1x create:mechanical_crafter', [
        'ETE',
        'CBC',
        'GWG'
    ], {
        E: 'the_vault:echo_pog',
        T: 'create:electron_tube',
        C: 'create:large_cogwheel',
        B: 'create:brass_casing',
        G: 'the_vault:gem_pog',
        W: '#forge:workbench'
    })

    event.shaped('1x create:electron_tube', [
        ' P ',
        ' R ',
        ' V '
    ], {
        P: 'create:polished_rose_quartz',
        R: 'minecraft:redstone_torch',
        V: 'the_vault:vault_nugget'
    })

    event.shaped('1x create:mechanical_mixer', [
        'OAO',
        'WCW',
        'OHO'
    ], {
        O: 'the_vault:gem_black_opal',
        A: 'create:andesite_alloy',
        W: 'create:cogwheel',
        C: 'create:andesite_casing',
        H: 'create:whisk'
    })

    event.shaped('1x create:mechanical_press', [
        'OAO',
        'WCW',
        'OHO'
    ], {
        O: 'the_vault:gem_black_opal',
        A: 'create:andesite_alloy',
        W: 'create:cogwheel',
        C: 'create:andesite_casing',
        H: '#forge:storage_blocks/iron'
    })

    event.shaped('1x create:cogwheel', [
        'BBB',
        'BAB',
        'BBB'
    ], {
        B: '#minecraft:wooden_buttons',
        A: 'create:andesite_alloy'
    })

    event.shaped('1x create:large_cogwheel', [
        'BPB',
        'PAP',
        'BPB'
    ], {
        B: '#minecraft:wooden_buttons',
        P: '#minecraft:planks',
        A: 'create:andesite_alloy'
    })

    event.shaped('1x create:wrench', [
        'SSP',
        'SC ',
        'PR '
    ], {
        S: '#forge:plates/gold',
        P: '#the_vault:playergems',
        C: 'create:large_cogwheel',
        R: '#forge:rods/wooden'
    })

    event.shaped('1x create:water_wheel', [
        'VPV',
        'PGP',
        'VPV'
    ], {
        V: 'the_vault:vault_diamond',
        P: 'the_vault:gem_black_opal',
        G: 'the_vault:gem_pog'
    })

    event.shaped('1x create:wand_of_symmetry', [
        'PVR',
        'BEV',
        'OBP'
    ], {
        P: '#the_vault:perfectcommongems',
        V: 'the_vault:vault_diamond',
        R: 'create:refined_radiance',
        B: '#forge:storage_blocks/brass',
        E: 'the_vault:echo_pog',
        O: 'compressium:obsidian_3'
    })

    event.shaped('1x create:millstone', [
        ' P ',
        'ACA',
        'OSO'
    ], {
        P: '#minecraft:planks',
        A: 'create:andesite_alloy',
        C: 'create:cogwheel',
        O: 'the_vault:gem_black_opal',
        S: '#forge:stone'
    })

    event.shaped('2x create:chute', [
        'AA ',
        'PP ',
        '   '
    ], {
        A: 'create:andesite_alloy',
        P: '#forge:plates/iron'
    })

    event.shaped('1x create:smart_chute', [
        ' P ',
        'WCW',
        ' E '
    ], {
        P: '#forge:plates/gold',
        W: 'the_vault:perfect_wutodie',
        C: 'create:chute',
        E: 'create:electron_tube'
    })

    event.shaped('1x create:spout', [
        ' F ',
        'PDP',
        ' N '
    ], {
        F: 'create:fluid_tank',
        P: 'the_vault:perfect_alexandrite',
        D: 'minecraft:dried_kelp',
        N: 'the_vault:vault_nugget'
    })

    event.shaped('4x create:fluid_pipe', [
        '   ',
        'CPC',
        '   '
    ], {
        C: '#forge:plates/copper',
        P: '#the_vault:perfectcommongems'
    })

    event.shaped('1x create:fluid_tank', [
        'PCP',
        'NGN',
        'PCP'
    ], {
        P: '#the_vault:perfectcommongems',
        C: 'create:copper_casing',
        N: '#forge:nuggets/copper',
        G: '#forge:glass'
    })

    event.shaped('1x create:mechanical_saw', [
        'OPO',
        'PIP',
        'OAO'
    ], {
        O: 'the_vault:gem_black_opal',
        P: '#forge:plates/iron',
        I: '#forge:ingots/iron',
        A: 'create:andesite_casing'
    })

    event.shaped('1x create:deployer', [
        'OEO',
        ' A ',
        'OHO'
    ], {
        O: 'the_vault:gem_black_opal',
        E: 'create:electron_tube',
        A: 'create:andesite_casing',
        H: 'create:brass_hand'
    })

    event.shaped('1x create:mechanical_drill', [
        'OAO',
        'AIA',
        'OCO'
    ], {
        O: 'the_vault:gem_black_opal',
        A: 'create:andesite_alloy',
        I: '#forge:ingots/iron',
        C: 'create:andesite_casing'
    })

    event.shaped('1x create:mechanical_harvester', [
        'APA',
        'APA',
        'OCO'
    ], {
        A: 'create:andesite_alloy',
        P: '#forge:plates/iron',
        O: 'the_vault:gem_black_opal',
        C: 'create:andesite_casing'
    })

    event.shaped('1x create:mechanical_plough', [
        'PPP',
        'AAA',
        'OCO'
    ], {
        A: 'create:andesite_alloy',
        P: '#forge:plates/iron',
        O: 'the_vault:gem_black_opal',
        C: 'create:andesite_casing'
    })

    event.shaped('4x create:andesite_casing', [
        'PPP',
        'AWA',
        'PPP'
    ], {
        P: '#minecraft:planks',
        A: 'create:andesite_alloy',
        W: 'the_vault:perfect_wutodie'
    })

    event.shaped('4x create:brass_casing', [
        'PPP',
        'BGB',
        'PPP'
    ], {
        P: '#minecraft:planks',
        B: '#forge:plates/brass',
        G: 'the_vault:gem_pog'
    })

    event.recipes.createSequencedAssembly([
        Item.of('create:cogwheel')
        ], 'create:andesite_alloy', [
            event.recipes.createDeploying('create:incomplete_cogwheel',['create:incomplete_cogwheel', '#minecraft:wooden_buttons']),
            event.recipes.createCutting('create:incomplete_cogwheel', 'create:cogwheel')
        ]).transitionalItem('create:incomplete_cogwheel').loops(1)

    event.recipes.createSequencedAssembly([
        Item.of('create:large_cogwheel')
        ], 'create:andesite_alloy', [
            event.recipes.createDeploying('create:incomplete_large_cogwheel',['create:incomplete_large_cogwheel', '#minecraft:planks']),
            event.recipes.createDeploying('create:incomplete_large_cogwheel',['create:incomplete_large_cogwheel', '#minecraft:wooden_buttons']),
            event.recipes.createCutting('create:incomplete_large_cogwheel', 'create:large_cogwheel')
        ]).transitionalItem('create:incomplete_large_cogwheel').loops(1)
        
    event.recipes.createMixing('1x the_vault:vaulterite_ingot', ['3x the_vault:vault_scrap', '1x netherite_scrap', '1x the_vault:gem_painite'])
    event.recipes.createMixing('1x the_vault:red_vault_essence', ['1x the_vault:vault_essence', '1x the_vault:perfect_painite'])
    event.recipes.createMixing('2x create:andesite_alloy', ['1x #the_vault:commongems', '2x minecraft:andesite'])

    vaultApples.forEach(vaultApples =>{
        event.recipes.createCrushing(['1x the_vault:vault_apple'], 'the_vault:'+vaultApples)
    })
})