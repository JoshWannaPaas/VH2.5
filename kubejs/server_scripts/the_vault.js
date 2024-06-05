/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

onEvent('recipes', event => {

    event.shaped( Item.of('the_vault:reset_flask', '{Skillable:"Elvish"}') , [
        'PFP',
        'FRF',
        'PFP'
    ], {
        P: 'the_vault:extraordinary_painite',
        F: 'minecraft:feather',
        R: 'the_vault:reset_flask'
    })

    event.shaped( Item.of('the_vault:reset_flask', '{Skillable:"Step"}') , [
        'PFP',
        'FRF',
        'PFP'
    ], {
        P: 'the_vault:extraordinary_painite',
        F: 'minecraft:stone_brick_stairs',
        R: 'the_vault:reset_flask'
    })

    event.shaped('1x the_vault:advanced_vending_machine', [
        'GRG',
        'GPG',
        'GDG'
    ], {
        G: 'minecraft:gold_ingot',
        R: 'minecraft:redstone',
        P: '#forge:glass_panes',
        D: 'minecraft:diamond'
    })

    event.shaped('1x the_vault:legendary_treasure_normal', [
        'III',
        'NDN',
        'III'
    ], {
        I: 'minecraft:iron_ingot',
        N: 'minecraft:netherite_ingot',
        D: 'minecraft:diamond_block'
    })

    event.shaped('1x the_vault:legendary_treasure_rare', [
        'SLS',
        'BTB',
        'SLS'
    ], {
        S: 'the_vault:vault_scrap',
        L: 'the_vault:perfect_larimar',
        B: 'the_vault:perfect_benitoite',
        T: 'the_vault:legendary_treasure_normal'
    })

    event.shaped(Item.of('the_vault:spark', "{RepairCost:0,display:{Name:'{\"text\":\"Useful, thanks for crafting me!\"}'}}"), [
        'OEO',
        'EEE',
        'OEO'
    ], {
        O: 'the_vault:omega_pog',
        E: 'the_vault:echo_pog'
    })

    event.shaped('1x the_vault:unidentified_artifact', [
        'SSS',
        'SOS',
        'SSS'
    ], {
        S: 'the_vault:spark',
        O: 'the_vault:omega_pog'
    })

    event.shaped('1x the_vault:unidentified_artifact', [
        'SSS',
        'SOS',
        'SSS'
    ], {
        S: 'the_vault:spark',
        O: 'the_vault:omega_pog'
    })

    event.shaped('1x the_vault:gear_charm', [
        'PCP',
        'SHS',
        'ESE'
    ], {
        P: 'the_vault:perfect_painite',
        C: '#the_vault:playerclusters',
        S: 'the_vault:star_shard',
        H: 'the_vault:hunter_eye',
        E: 'the_vault:vault_essence'
    })

    event.shaped('1x the_vault:gear_charm', [
        'PEP',
        'SHS',
        'ESE'
    ], {
        P: 'the_vault:perfect_painite',
        E: 'the_vault:perfect_echo_gem',
        S: 'the_vault:star_shard',
        H: 'the_vault:hunter_eye',
        E: 'the_vault:vault_essence'
    })

    event.shaped('1x the_vault:magnet_core_weak', [
        'IGI'
    ], {
        I: 'minecraft:iron_block',
        G: 'the_vault:gem_painite'
    })

    event.shaped('1x the_vault:vault_magnet_weak', [
        ' G ',
        ' M ',
        ' C '
    ], {
        G: 'the_vault:gem_wutodie',
        M: 'the_vault:magnetite',
        C: 'the_vault:magnet_core_weak'
    })

    event.shaped('1x the_vault:vault_altar', [
        'SOS',
        'ODO',
        'SOS'
    ], {
        S: 'minecraft:stone_bricks',
        O: 'minecraft:obsidian',
        D: 'minecraft:diamond_block'
    }).id('the_vault:vault_altar')

    event.shaped('1x the_vault:magnet_core_strong', [
        'CWC'
    ], {
        C: 'the_vault:magnet_core_weak',
        W: 'the_vault:perfect_wutodie'
    })

    event.shaped('1x the_vault:vault_magnet_strong', [
        ' G ',
        ' M ',
        ' C '
    ], {
        G: 'the_vault:gem_echo',
        M: 'the_vault:magnetite',
        C: 'the_vault:magnet_core_strong'
    })

    event.shaped('1x the_vault:boots', [
        'VRV',
        'V V'
    ], {
        V: 'the_vault:vaulterite_ingot',
        R: 'the_vault:red_vault_essence'
    })

    event.shaped('1x the_vault:boots', [
        'VIV',
        'V V'
    ], {
        V: 'the_vault:vault_ingot',
        I: 'minecraft:netherite_ingot'
    })

    event.shaped('1x the_vault:leggings', [
        'VVV',
        'VIV',
        'V V'
    ], {
        V: 'the_vault:vault_ingot',
        I: 'minecraft:netherite_ingot'
    })

    event.shaped('1x the_vault:leggings', [
        'VVV',
        'VRV',
        'V V'
    ], {
        V: 'the_vault:vaulterite_ingot',
        R: 'the_vault:red_vault_essence'
    })

    event.shaped('1x the_vault:chestplate', [
        'VIV',
        'VVV',
        'VVV'
    ], {
        V: 'the_vault:vault_ingot',
        I: 'minecraft:netherite_ingot'
    })

    event.shaped('1x the_vault:chestplate', [
        'VRV',
        'VVV',
        'VVV'
    ], {
        V: 'the_vault:vaulterite_ingot',
        R: 'the_vault:red_vault_essence'
    })

    event.shaped('1x the_vault:helmet', [
        'VVV',
        'VIV'
    ], {
        V: 'the_vault:vault_ingot',
        I: 'minecraft:netherite_ingot'
    })

    event.shaped('1x the_vault:helmet', [
        'VVV',
        'VRV'
    ], {
        V: 'the_vault:vaulterite_ingot',
        R: 'the_vault:red_vault_essence'
    })

    event.shaped('1x the_vault:sword', [
        ' V ',
        ' V ',
        ' I '
    ], {
        V: 'the_vault:vaulterite_ingot',
        I: 'the_vault:red_vault_essence'
    })

    event.shaped('1x the_vault:sword', [
        ' V ',
        ' V ',
        ' R '
    ], {
        V: 'the_vault:vaulterite_ingot',
        R: 'the_vault:red_vault_essence'
    })

    event.shaped('1x the_vault:axe', [
        'VV ',
        'VI '

    ], {
        V: 'the_vault:vaulterite_ingot',
        I: 'the_vault:red_vault_essence'
    })

    event.shaped('1x the_vault:axe', [
        'VV ',
        'VN '

    ], {
        V: 'the_vault:vault_ingot',
        N: 'minecraft:netherite_ingot'
    })

    event.shaped('1x the_vault:vault_ingot', [
        'NNN',
        'NNN',
        'NNN'

    ], {
        N: 'the_vault:vault_nugget'
    })

    event.shaped('1x the_vault:armor_crate_botania', [
        'MEM',
        'MPM',
        'MLM'
    ], {
        M: 'botania:mana_diamond',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box',
        L: 'botania:life_essence'
    })

    event.shaped('1x the_vault:armor_crate_create', [
        'BEB',
        'BPB',
        'BRB'
    ], {
        B: 'create:brass_ingot',
        R: 'create:refined_radiance',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_dank', [
        ' E ',
        'SPS',
        ' D '
    ], {
        S: 'dankstorage:dank_1',
        D: 'dankstorage:dock',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_flux', [
        'FEF',
        'FPF',
        'FBF'
    ], {
        F: 'fluxnetworks:flux_core',
        B: 'fluxnetworks:basic_flux_storage',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_ie', [
        'TET',
        'TPT',
        'THT'
    ], {
        T: 'immersiveengineering:treated_wood_horizontal',
        H: 'immersiveengineering:heavy_engineering',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_meka', [
        'RER',
        'RPR',
        'RCR'
    ], {
        R: 'mekanism:ingot_refined_obsidian',
        C: 'mekanism:ultimate_control_circuit',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_powah', [
        'SES',
        'SPS',
        'SCS'
    ], {
        S: 'powah:steel_energized',
        C: 'powah:crystal_spirited',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_thermal', [
        'CEC',
        'CPC',
        'CIC'
    ], {
        I: 'thermal:enderium_ingot',
        C: 'thermal:cinnabar',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_trash', [
        'TET',
        'TPT',
        'TUT'
    ], {
        T: 'trashcans:item_trash_can',
        U: 'trashcans:ultimate_trash_can',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_villager', [
        'BEB',
        'VPV',
        'BTB'
    ], {
        B: '#minecraft:beds',
        V: 'easy_villagers:villager',
        T: 'easy_villagers:auto_trader',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_automatic', [
        'REF',
        'APC',
        'MUT'
    ], {
        R: 'refinedstorage:crafter',
        A: 'appliedenergistics2:molecular_assembler',
        M: 'mekanism:formulaic_assemblicator',
        F: 'rftoolsutility:crafter3',
        C: 'create:mechanical_crafter',
        T: 'thermal:machine_crafter',
        U: 'botania:auto_crafting_halo',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_building', [
        ' E ',
        'BPD',
        ' G '
    ], {
        B: 'buildinggadgets:gadget_building',
        D: 'buildinggadgets:gadget_destruction',
        G: 'the_vault:gem_pog',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_zombie', [
        'REV',
        ' P ',
        'IGX'
    ], {
        R: 'darkutils:rune_damage_player',
        V: 'darkutils:vector_plate_extreme',
        I: 'darkutils:import_plate_extreme',
        X: 'darkutils:export_plate_extreme',
        G: 'the_vault:gem_pog',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_xnet', [
        'CEW',
        ' P ',
        'OGA'
    ], {
        C: 'xnet:controller',
        W: 'xnet:wireless_router',
        O: '#xnet:connectors',
        A: '#xnet:advanced_connectors',
        G: 'the_vault:gem_pog',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_test_dummy', [
        ' E ',
        'DPD',
        ' G '
    ], {
        D: 'dummmmmmy:target_dummy_placer',
        G: 'the_vault:gem_pog',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_if', [
        'IEF',
        'RPT',
        'SGN'
    ], {
        I: 'industrialforegoing:pink_slime_bucket',
        F: 'industrialforegoing:fermented_ore_meat_bucket',
        R: 'industrialforegoing:raw_ore_meat_bucket',
        T: 'industrialforegoing:ether_gas_bucket',
        S: 'industrialforegoing:sewage_bucket',
        G: 'industrialforegoing:machine_frame_supreme',
        N: 'industrialforegoing:essence_bucket',
        E: 'the_vault:gem_echo',
        P: 'the_vault:pandoras_box'
    })

    event.shaped('1x the_vault:armor_crate_fairy', [
        'HEK',
        'WPS',
        'MGT'
    ], {
        H: Item.of('fairylights:hanging_lights', '{string:"fairylights:black_string",pattern:[{id:"fairylights:fairy_light",Count:1b,tag:{color:16383998}}]}'),
        E: 'the_vault:gem_echo',
        K: Item.of('fairylights:skull_light', '{color:16383998}'),
        W: Item.of('fairylights:witch_light', '{color:16383998}'),
        P: 'the_vault:pandoras_box',
        S: Item.of('fairylights:snowflake_light', '{color:16383998}'),
        M: Item.of('fairylights:moon_light', '{color:16383998}'),
        G: '#the_vault:playergems',
        T: Item.of('fairylights:meteor_light', '{color:16383998}')
    })
})