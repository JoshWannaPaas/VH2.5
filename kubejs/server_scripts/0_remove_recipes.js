// priority: 1
/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by a1qs to KubeJS */

let armorPieces = ["helmet", "chestplate", "leggings", "boots"]
let tools = ["pick", "shovel", "hoe", "axe", "sword"]
let powahTiers = ["starter", "basic", "hardened", "blazing", "niotic", "spirited", "nitro"]
let storageComponents = ["1k", "4k", "16k", "64k"]
let woodTypes = ["oak","birch","spruce","dark_oak","jungle","acacia","warped","crimson"]
let colors = ["white","orange","magenta","light_blue","yellow","lime","pink","gray","cyan","purple","blue","brown","green","black","light_gray"]

console.info('Removing Recipes!')

onEvent('recipes', event => {

    event.remove({output: 'minecraft:golden_apple'})
    event.remove({output: 'minecraft:shield'})
    event.remove({output: 'minecraft:bamboo'})
    event.remove({id: 'minecraft:suspicious_stew'})
    event.remove({output: 'minecraft:chest'})
    
    event.remove({output: Item.of('the_vault:reset_flask', '{Skillable:"Elvish"}')})
    event.remove({output: Item.of('the_vault:reset_flask', '{Skillable:"Step"}')})
    event.remove({output: 'the_vault:crystal_seal_architect'})
    event.remove({output: 'the_vault:crystal_seal_ancients'})
    event.remove({output: 'the_vault:crystal_seal_raid'})

    
    event.remove({output: 'rftoolsbase:machine_frame'})
    event.remove({output: 'rftoolsbuilder:builder'})
    event.remove({output: 'rftoolsbuilder:shape_card_quarry'})
    event.remove({output: 'rftoolsutility:crafter1'})
    event.remove({output: 'rftoolsutility:charged_porter'})
    event.remove({output: 'rftoolsutility:syringe'})
    event.remove({output: 'rftoolsutility:spawner'})
    event.remove({output: 'rftoolsutility:advanced_charged_porter'})
    event.remove({output: 'rftoolsstorage:storage_scanner'})
    event.remove({output: 'rftoolsstorage:storage_module0'})
    event.remove({output: 'rftoolsstorage:storage_module1'})
    event.remove({output: 'rftoolsstorage:storage_module2'})
    event.remove({output: 'rftoolsstorage:storage_module3'})
    event.remove({output: 'rftoolspower:dimensionalcell_simple'})
    event.remove({output: 'rftoolspower:dimensionalcell'})
    event.remove({output: 'rftoolspower:dimensionalcell_advanced'})
    event.remove({output: 'rftoolspower:powercell_card'})
    event.remove({output: 'rftoolspower:power_core1'})
    event.remove({output: 'rftoolspower:power_core2'})
    event.remove({output: 'rftoolspower:power_core3'})

    event.remove({output: 'xnet:controller'})
    event.remove({output: 'xnet:router'})
    event.remove({output: 'xnet:wireless_router'})
    event.remove({output: 'xnet:netcable_routing'})
    event.remove({output: 'xnet:netcable_yellow'})
    event.remove({output: 'xnet:netcable_blue'})
    event.remove({output: 'xnet:netcable_green'})
    event.remove({output: 'xnet:netcable_red'})
    event.remove({output: 'xnet:connector_red'})
    event.remove({output: 'xnet:connector_green'})
    event.remove({output: 'xnet:connector_yellow'})
    event.remove({output: 'xnet:connector_blue'})
    
    event.remove({output: 'thermal:machine_frame'})
    event.remove({output: 'thermal:rf_coil'})
    event.remove({output: 'thermal:wrench'})
    event.remove({output: 'thermal:dynamo_compression'})
    event.remove({output: 'thermal:dynamo_magmatic'})
    event.remove({output: 'thermal:dynamo_numismatic'})
    event.remove({output: 'thermal:dynamo_lapidary'})
    event.remove({output: 'thermal:dynamo_stirling'})
    event.remove({output: 'thermal:charcoal_block'})
    event.remove({output: 'thermal:gunpowder_block'})
    event.remove({output: 'thermal:energy_cell'})
    event.remove({output: 'thermal:energy_cell_frame'})
    event.remove({output: 'thermal:device_collector'})
    event.remove({output: 'thermal:xp_crystal'})
    event.remove({output: 'thermal:machine_isolator'})
    event.remove({output: 'thermal:device_rock_gen'})
    event.remove({output: 'thermal:machine_brewer'})
    event.remove({output: 'thermal:potato_block'})
    event.remove({output: 'thermal:beetroot_block'})
    event.remove({output: 'thermal:apple_block'})
    event.remove({output: 'thermal:carrot_block'})

    event.remove({output: 'refinedstorage:controller'})
    event.remove({output: 'refinedstorage:disk_drive'})
    event.remove({output: 'refinedstorage:disk_manipulator'})
    event.remove({output: 'refinedstorage:detector'})
    event.remove({output: 'refinedstorage:wireless_transmitter'})
    event.remove({output: 'refinedstorage:external_storage'})
    event.remove({output: 'refinedstorage:importer'})
    event.remove({output: 'refinedstorage:exporter'})
    event.remove({output: 'refinedstorage:constructor'})
    event.remove({output: 'refinedstorage:destructor'})
    event.remove({output: 'refinedstorage:machine_casing'})
    event.remove({output: 'refinedstorage:crafter'})
    event.remove({output: 'refinedstorage:grid'})
    event.remove({output: 'refinedstorage:pattern_grid'})
    event.remove({output: 'refinedstorage:fluid_grid'})
    event.remove({output: '#refinedstorage:crafting_grid'})
    event.remove({output: 'refinedstorage:wireless_grid'})
    event.remove({output: 'refinedstorage:wireless_fluid_grid'})
    event.remove({output: 'refinedstorage:wireless_crafting_monitor'})
    event.remove({output: 'refinedstorage:network_receiver'})
    event.remove({output: 'refinedstorage:network_transmitter'})
    event.remove({output: 'refinedstorage:speed_upgrade'})
    event.remove({output: 'refinedstorage:stack_upgrade'})
    event.remove({output: 'refinedstorage:cable'})
    event.remove({output: 'refinedstorageaddons:wireless_crafting_grid'})

    event.remove({output: 'appliedenergistics2:controller'})
    event.remove({output: 'appliedenergistics2:drive'})
    event.remove({output: 'appliedenergistics2:vibration_chamber'})
    event.remove({output: 'appliedenergistics2:energy_acceptor'})
    event.remove({output: 'appliedenergistics2:molecular_assembler'})
    event.remove({output: 'appliedenergistics2:logic_processor'})
    event.remove({output: 'appliedenergistics2:calculation_processor'})
    event.remove({output: 'appliedenergistics2:engineering_processor'})
    event.remove({output: 'appliedenergistics2:wireless_terminal'})
    event.remove({output: 'appliedenergistics2:crafting_unit'})
    event.remove({output: 'appliedenergistics2:export_bus'})
    event.remove({output: 'appliedenergistics2:import_bus'})
    event.remove({output: 'appliedenergistics2:storage_bus'})
    event.remove({output: 'appliedenergistics2:terminal'})
    event.remove({output: 'appliedenergistics2:crafting_terminal'})
    event.remove({output: 'appliedenergistics2:interface'})
    event.remove({output: 'appliedenergistics2:quartz_glass'})
    event.remove({output: 'appliedenergistics2:capacity_card'})
    event.remove({output: 'appliedenergistics2:speed_card'})
    event.remove({output: 'appliedenergistics2:fluix_glass_cable'})
    event.remove({output: 'appliedenergistics2:fluix_covered_cable'})
    event.remove({output: 'appliedenergistics2:fluix_smart_cable'})
    event.remove({output: 'appliedenergistics2:fluix_smart_dense_cable'})

    event.remove({output: 'create:copper_nugget'})
    event.remove({output: 'create:mechanical_crafter'})
    event.remove({output: 'create:electron_tube'})
    event.remove({output: 'create:rotation_speed_controller'})
    event.remove({output: 'create:mechanical_mixer'})
    event.remove({output: 'create:mechanical_press'})
    event.remove({output: 'create:cogwheel'})
    event.remove({output: 'create:large_cogwheel'})
    event.remove({output: 'create:wrench'})
    event.remove({output: 'create:wand_of_symmetry'})
    event.remove({output: 'create:encased_fan'})
    event.remove({output: 'create:water_wheel'})
    event.remove({output: 'create:windmill_bearing'})
    event.remove({output: 'create:belt_connector'})
    event.remove({output: 'create:andesite_alloy'})
    event.remove({output: 'create:basin'})
    event.remove({output: 'create:cart_assembler'})
    event.remove({output: 'create:millstone'})
    event.remove({output: 'create:chute'})
    event.remove({output: 'create:smart_chute'})
    event.remove({output: 'create:mechanical_saw'})
    event.remove({output: 'create:deployer'})
    event.remove({output: 'create:mechanical_drill'})
    event.remove({output: 'create:mechanical_plough'})
    event.remove({output: 'create:mechanical_harvester'})
    event.remove({output: 'create:spout'})
    event.remove({output: 'create:fluid_pipe'})
    event.remove({output: 'create:fluid_tank'})
    event.remove({output: 'create:schematic_and_quill'})
    event.remove({output: 'create:andesite_casing'})
    event.remove({output: 'create:brass_casing'})
    event.remove({output: 'create:brass_funnel'})
    event.remove({output: 'create:hose_pulley'})

    event.remove({output: 'waystones:warp_stone'})
    event.remove({output: 'waystones:return_scroll'})
    event.remove({output: 'waystones:bound_scroll'})
    event.remove({output: 'waystones:warp_scroll'})
    event.remove({output: 'waystones:warp_plate'})
    
    event.remove({output: 'industrialforegoing:machine_frame_pity'})
    event.remove({output: 'industrialforegoing:enchantment_applicator'})
    event.remove({output: 'industrialforegoing:enchantment_extractor'})
    event.remove({output: 'industrialforegoing:mob_duplicator'})
    event.remove({output: 'industrialforegoing:mob_crusher'})
    event.remove({output: 'industrialforegoing:material_stonework_factory'})
    event.remove({output: 'industrialforegoing:mechanical_dirt'})
    event.remove({output: 'industrialforegoing:dryrubber'})
    event.remove({output: 'industrialforegoing:dissolution_chamber'})
    event.remove({output: 'industrialforegoing:machine_frame_simple'})
    event.remove({output: 'industrialforegoing:machine_frame_advanced'})
    event.remove({output: 'industrialforegoing:machine_frame_supreme'})
    event.remove({output: 'industrialforegoing:fluid_extractor'})
    event.remove({output: 'industrialforegoing:latex_processing_unit'})
    event.remove({output: 'industrialforegoing:ore_laser_base'})
    event.remove({output: 'industrialforegoing:laser_drill'})
    event.remove({output: 'industrialforegoing:fluid_laser_base'})
    event.remove({output: 'industrialforegoing:pity_black_hole_unit'})
    event.remove({output: 'industrialforegoing:simple_black_hole_unit'})
    event.remove({output: 'industrialforegoing:advanced_black_hole_unit'})
    event.remove({output: 'industrialforegoing:supreme_black_hole_unit'})
    event.remove({output: 'industrialforegoing:pity_black_hole_tank'})
    event.remove({output: 'industrialforegoing:simple_black_hole_tank'})
    event.remove({output: 'industrialforegoing:advanced_black_hole_tank'})
    event.remove({output: 'industrialforegoing:supreme_black_hole_tank'})
    
    event.remove({output: 'easy_villagers:trader'})
    event.remove({output: 'easy_villagers:breeder'})
    event.remove({output: 'easy_villagers:farmer'})
    event.remove({output: 'easy_villagers:converter'})
    event.remove({output: 'easy_villagers:iron_farm'})
    event.remove({output: 'easy_villagers:auto_trader'})
    event.remove({output: 'easy_piglins:barterer'})

    event.remove({output: 'mekanism:steel_casing'})
    event.remove({output: 'mekanism:jetpack'})
    event.remove({output: 'mekanism:jetpack_armored'})
    event.remove({output: 'mekanism:basic_universal_cable'})
    event.remove({output: 'mekanism:mekasuit_boots'})
    event.remove({output: 'mekanism:mekasuit_pants'})
    event.remove({output: 'mekanism:mekasuit_bodyarmor'})
    event.remove({output: 'mekanism:mekasuit_helmet'})
    event.remove({output: 'mekanism:digital_miner'})
    event.remove({output: 'mekanism:formulaic_assemblicator'})
    event.remove({output: 'mekanism:advanced_control_circuit'})
    event.remove({output: 'mekanism:elite_control_circuit'})
    event.remove({output: 'mekanism:ultimate_control_circuit'})
    event.remove({output: 'mekanism:atomic_disassembler'})
    event.remove({output: 'mekanism:energy_tablet'})
    event.remove({output: 'mekanism:configurator'})
    event.remove({output: 'mekanism:basic_energy_cube'})
    event.remove({output: 'mekanism:advanced_energy_cube'})
    event.remove({output: 'mekanism:elite_energy_cube'})
    event.remove({output: 'mekanism:ultimate_energy_cube'})
    event.remove({output: 'mekanism:metallurgic_infuser'})
    event.remove({output: 'mekanism:qio_dashboard'})
    event.remove({output: 'mekanism:qio_redstone_adapter'})
    event.remove({output: 'mekanism:portable_qio_dashboard'})
    event.remove({output: 'mekanism:qio_drive_array'})
    event.remove({output: 'mekanism:qio_drive_base'})
    event.remove({output: 'mekanism:qio_drive_hyper_dense'})
    event.remove({output: 'mekanism:qio_drive_time_dilating'})
    event.remove({output: 'mekanism:qio_drive_supermassive'})
    event.remove({output: 'mekanism:meka_tool'})
    event.remove({output: 'mekanism:basic_tier_installer'})
    event.remove({output: 'mekanism:advanced_tier_installer'})
    event.remove({output: 'mekanism:elite_tier_installer'})
    event.remove({output: 'mekanism:ultimate_tier_installer'})
    event.remove({output: 'mekanism:block_steel'})
    event.remove({output: 'mekanism:block_charcoal'})
    event.remove({output: 'mekanism:module_base'})
    event.remove({input: 'mekanism:module_base'})
    event.remove({output: 'mekanismgenerators:solar_panel'})
    event.remove({output: 'mekanismgenerators:wind_generator'})
    event.remove({output: 'mekanismgenerators:gas_burning_generator'})

    event.remove({output: 'buildinggadgets:gadget_building'})
    event.remove({output: 'buildinggadgets:gadget_exchanging'})
    event.remove({output: 'buildinggadgets:gadget_destruction'})

    event.remove({output: 'mininggadgets:mininggadget'})
    event.remove({output: 'mininggadgets:mininggadget_simple'})
    event.remove({output: 'mininggadgets:mininggadget_fancy'})
    event.remove({output: 'mininggadgets:upgrade_empty'})
    event.remove({output: 'mininggadgets:upgrade_three_by_three'})
    
    event.remove({output: 'ironfurnaces:heater'})
    event.remove({output: 'ironfurnaces:item_heater'})
    event.remove({output: 'ironfurnaces:netherite_furnace'})
    event.remove({output: 'ironfurnace:crystal_furnace'})
    event.remove({output: 'ironfurnaces:upgrade_netherite'})
    event.remove({output: 'ironfurnaces:upgrade_crystal'})

    event.remove({output: 'ironjetpacks:basic_coil'})
    event.remove({output: 'ironjetpacks:advanced_coil'})
    event.remove({output: 'ironjetpacks:emerald_jetpack'})
    event.remove({output: 'ironjetpacks:strap'})
    event.remove({output: 'ironjetpacks:elite_coil'})
    event.remove({output: 'ironjetpacks:ultimate_coil'})
  
    event.remove({output: 'immersiveengineering:cloche'})
    event.remove({output: 'immersiveengineering:steel_scaffolding_standart'})
    event.remove({output: 'immersiveengineering:capacitor_lv'})
    event.remove({output: 'immersiveengineering:capacitor_mv'})
    event.remove({output: 'immersiveengineering:capacitor_hv'})
    event.remove({output: 'immersiveengineering:light_engineering'})
    event.remove({output: 'immersiveengineering:heavy_engineering'})
    event.remove({output: 'immersiveengineering:rs_engineering'})
    event.remove({output: 'immersiveengineering:dynamo'})
    event.remove({output: 'immersiveengineering:thermoelectric_generator'})
    event.remove({output: 'immersiveengineering:treated_wood_horizontal'})
    event.remove({output: 'immersiveengineering:blastbrick'})
    event.remove({output: 'immersiveengineering:blastbrick_reinforced'})
    event.remove({output: 'immersiveengineering:cokebrick'})
    event.remove({output: 'immersiveengineering:hammer'})
    event.remove({output: 'immersiveengineering:railgun'})
    event.remove({output: 'immersiveengineering:turret_chem'})
    event.remove({output: 'immersiveengineering:turret_gun'})
    event.remove({output: 'immersiveengineering:chemthrower'})
    event.remove({output: 'immersiveengineering:storage_steel'})
    event.remove({output: 'immersiveengineering:armor_steel_feet'})
    event.remove({output: 'immersiveengineering:armor_steel_legs'})
    event.remove({output: 'immersiveengineering:armor_steel_chest'})
    event.remove({output: 'immersiveengineering:armor_steel_head'})
    event.remove({output: 'immersiveengineering:armor_faraday_feet'})
    event.remove({output: 'immersiveengineering:armor_faraday_legs'})
    event.remove({output: 'immersiveengineering:armor_faraday_chest'})
    event.remove({output: 'immersiveengineering:armor_faraday_head'})
    event.remove({output: 'immersiveengineering:drill'})
    event.remove({output: 'immersiveengineering:drillhead_iron'})
    event.remove({output: 'immersiveengineering:drillhead_steel'})
    event.remove({output: 'immersiveengineering:toolupgrade_drill_waterproof'})
    event.remove({output: 'immersiveengineering:toolupgrade_drill_damage'})
    event.remove({id: 'immersiveengineering:crusher/nether_wart'})

    event.remove({output: 'darkutils:rune_damage_player'})
    event.remove({output: 'darkutils:charm_experience'})
    event.remove({output: 'darkutils:charm_gluttony'})
    event.remove({output: 'darkutils:ender_hopper'})
    event.remove({output: 'darkutils:vector_plate_fast'})
    event.remove({output: 'darkutils:vector_plate_extreme'})
    event.remove({output: 'darkutils:import_plate_fast'})
    event.remove({output: 'darkutils:import_plate_extreme'})
    event.remove({output: 'darkutils:export_plate_fast'})
    event.remove({output: 'darkutils:export_plate_extreme'})

    event.remove({output: 'botania:gaia_ingot'})
    event.remove({output: 'botania:keep_ivy'})
    event.remove({output: 'botania:itemfinder'})
    event.remove({output: 'botania:flight_tiara'})
    event.remove({output: 'botania:mana_pool'})
    event.remove({output: 'botania:apothecary_default'})
    event.remove({output: 'botania:twig_wand'})
    event.remove({output: 'botania:mana_spreader'})
    event.remove({output: 'botania:elven_spreader'})
    event.remove({output: 'botania:glimmering_livingwood'})
    event.remove({output: 'botania:natura_pylon'})
    event.remove({output: 'botania:water_rod'})
    event.remove({output: 'botania:terra_pick'})
    event.remove({output: 'botania:terra_axe'})
    event.remove({output: 'botania:terra_sword'})
    event.remove({output: 'botania:elementium_shears'})
    event.remove({output: 'botania:manasteel_shears'})
    event.remove({output: 'botania:manasteel_pick'})
    event.remove({output: 'botania:manasteel_shovel'})
    event.remove({output: 'botania:manasteel_hoe'})
    event.remove({output: 'botania:manasteel_axe'})
    event.remove({output: 'botania:manasteel_sword'})
    event.remove({output: 'botania:pure_daisy'})
    event.remove({output: 'botania:terrasteel_ingot'})
    event.remove({output: 'botania:mana_diamond'})
    event.remove({output: 'botania:mana_diamond_block'})
    event.remove({output: 'botania:rune_fire'})
    event.remove({output: 'botania:rune_air'})
    event.remove({output: 'botania:rune_water'})
    event.remove({output: 'botania:rune_earth'})
    event.remove({output: 'botania:rune_mana'})
    event.remove({output: 'botania:rune_spring'})
    event.remove({output: 'botania:rune_summer'})
    event.remove({output: 'botania:rune_autumn'})
    event.remove({output: 'botania:rune_winter'})
    event.remove({output: 'botania:rune_envy'})
    event.remove({output: 'botania:rune_pride'})
    event.remove({output: 'botania:rune_greed'})
    event.remove({output: 'botania:rune_lust'})
    event.remove({output: 'botania:rune_wrath'})
    event.remove({output: 'botania:rune_sloth'})
    event.remove({output: 'botania:rune_gluttony'})
    event.remove({output: 'botania:ender_hand'})
    event.remove({output: 'botania:star_sword'})
    event.remove({output: 'botania:thunder_sword'})
    event.remove({output: 'botania:diluted_pool'})
    event.remove({output: 'botania:fabulous_pool'})
    event.remove({output: 'botania:alchemy_catalyst'})
    event.remove({output: 'botania:balance_cloak'})
    event.remove({output: 'botania:holy_cloak'})
    event.remove({output: 'botania:unholy_cloak'})
    event.remove({output: 'botania:blood_pendant'})
    event.remove({output: 'botania:magnet_ring'})
    event.remove({output: 'botania:magnet_ring_greater'})
    event.remove({output: 'botania:speed_up_belt'})
    event.remove({output: 'botania:travel_belt'})
    event.remove({output: 'botania:super_cloud_pendant'})
    event.remove({output: 'botania:cloud_pendant'})
    event.remove({output: 'botania:lava_pendant'})
    event.remove({output: 'botania:super_lava_pendant'})
    event.remove({output: 'botania:ice_pendant'})
    event.remove({output: 'botania:crafting_halo'})
    event.remove({output: 'botania:auto_crafting_halo'})
    event.remove({output: 'botania:spawner_mover'})
    event.remove({output: 'botania:missile_rod'})
    event.remove({id: 'botania:elven_trade/pixie_dust'})
    event.remove({id: 'botania:elven_trade/elementium'})
    event.remove({id: 'botania:elven_trade/elementium_block'})
    event.remove({id: 'botania:elven_trade/dragonstone'})
    event.remove({id: 'botania:elven_trade/dragonstone_block'})
    event.remove({id: 'botania:elven_trade/dreamwood'})
    event.remove({id: 'botania:brew/resistance'})
    event.remove({id: 'botania:brew/healing'})
    event.remove({id: 'botania:brew/regeneration'})
    event.remove({id: 'botania:brew/weak_regeneration'})
    event.remove({id: 'botania:brew/bloodthirst'})
    event.remove({id: 'botania:brew/fire_resistance'})
    event.remove({id: 'botania:brew/absorption'})

    event.remove({output: 'modularrouters:blank_module'})
    event.remove({output: 'modularrouters:blank_upgrade'})
    event.remove({output: 'modularrouters:void_module'})
    event.remove({output: 'modularrouters:puller_module_1'})
    event.remove({output: 'modularrouters:puller_module_2'})
    event.remove({output: 'modularrouters:player_module'})
    event.remove({output: 'modularrouters:sender_module_3'})
    event.remove({output: 'modularrouters:item_router'})
    event.remove({output: 'modularrouters:vacuum_module'})
    event.remove({output: 'modularrouters:stack_upgrade'})
    event.remove({output: 'modularrouters:stack_augment'})
    event.remove({output: 'modularrouters:augment_core'})
    event.remove({output: 'modularrouters:sender_module_1'})
    event.remove({output: 'modularrouters:sender_module_2'})
    event.remove({output: 'modularrouters:distributor_module'})
    
    event.remove({output: 'fluxnetworks:flux_block'})
    event.remove({output: 'fluxnetworks:basic_flux_storage'})
    event.remove({output: 'fluxnetworks:herculean_flux_storage'})
    event.remove({output: 'fluxnetworks:gargantuan_flux_storage'})
    event.remove({output: 'fluxnetworks:flux_plug'})
    event.remove({output: 'fluxnetworks:flux_point'})
    event.remove({output: 'fluxnetworks:flux_controller'})

    event.remove({output: 'storagedrawers:void_upgrade'})
    event.remove({output: 'storagedrawers:iron_storage_upgrade'})
    event.remove({output: 'storagedrawers:obsidian_storage_upgrade'})
    event.remove({output: 'storagedrawers:gold_storage_upgrade'})
    event.remove({output: 'storagedrawers:diamond_storage_upgrade'})
    event.remove({output: 'storagedrawers:emerald_storage_upgrade'})
    event.remove({output: 'storagedrawers:compacting_drawers_3'})
    event.remove({output: 'storagedrawers:controller'})
    event.remove({output: 'framedcompactdrawers:framed_full_one'})
    event.remove({output: 'framedcompactdrawers:framed_full_two'})
    event.remove({output: 'framedcompactdrawers:framed_full_four'})
    event.remove({output: 'framedcompactdrawers:framed_half_one'})
    event.remove({output: 'framedcompactdrawers:framed_half_two'})
    event.remove({output: 'framedcompactdrawers:framed_half_four'})

    event.remove({output: 'powah:dielectric_paste'})
    event.remove({output: 'powah:binding_card_dim'})
    event.remove({output: 'powah:crystal_nitro'})
    event.remove({output: 'powah:crystal_spirited'})
    event.remove({output: 'powah:crystal_niotic'})
    event.remove({output: 'powah:crystal_blazing'})
    event.remove({output: 'powah:steel_energized'})
    event.remove({output: 'powah:ender_core'})
    event.remove({output: 'powah:charged_snowball'})
    event.remove({output: 'powah:dry_ice'})
    event.remove({output: 'powah:capacitor_basic'})
    event.remove({output: 'powah:dielectric_rod'})
    event.remove({output: 'powah:dielectric_rod_horizontal'})
    event.remove({output: 'powah:dielectric_casing'})

    event.remove({output: 'integrateddynamics:coal_generator'})
    event.remove({output: 'integrateddynamics:wrench'})
    event.remove({output: 'integrateddynamics:variable'})
    event.remove({output: 'integrateddynamics:cable'})
    event.remove({output: 'integrateddynamics:logic_director'})
    event.remove({output: 'integrateddynamics:squeezer'})
    event.remove({output: 'integrateddynamics:mechanical_squeezer'})
    event.remove({output: 'integrateddynamics:drying_basin'})
    event.remove({output: 'integrateddynamics:mechanical_drying_basin'})
    event.remove({output: 'integrateddynamics:variable_transformer_output'})
    event.remove({output: 'integrateddynamics:variable_transformer_input'})
    event.remove({output: 'integratedtunnels:part_player_simulator'})
    event.remove({output: 'integratedtunnels:part_interface_item'})
    event.remove({output: 'integratedtunnels:part_interface_energy'})
    event.remove({output: 'integratedtunnels:part_interface_fluid'})
    event.remove({output: 'integratedterminals:part_terminal_storage'})
    event.remove({output: 'integratedterminals:terminal_storage_portable'})
    event.remove({output: 'integratedterminals:part_terminal_crafting_job'})

    event.remove({output: 'byg:pendorite_ingot'})
    event.remove({output: 'enchantinginfuser:enchanting_infuser'})
    event.remove({output: 'archers_paradox:quartz_arrow'})
    event.remove({output: 'archers_paradox:diamond_arrow'})
    event.remove({output: 'snad:snad'})
    event.remove({output: 'snad:red_snad'})
    event.remove({output: 'torchmaster:megatorch'})
    event.remove({output: 'torchmaster:dreadlamp'})
    event.remove({output: 'torchmaster:feral_flare_lantern'})
    event.remove({output: 'dimstorage:dimensional_tank'})
    event.remove({output: 'dimstorage:dimensional_chest'})
    event.remove({output: 'dimstorage:dim_core'})
    event.remove({output: 'dimstorage:dim_wall'})
    event.remove({output: 'cookingforblockheads:sink'})
    event.remove({output: 'dummmmmmy:target_dummy_placer'})
    event.remove({output: 'enchantinginfuser:advanced_enchanting_infuser'})
    event.remove({output: 'iskallutilities:concrete_metal_plate'})
    event.remove({output: 'buildinggadgets:gadget_copy_paste'})
    event.remove({output: 'engineersdecor:small_solar_panel'})
    event.remove({output: 'engineersdecor:factory_hopper'})
    event.remove({output: 'quark:pickarang'})
    event.remove({output: 'quark:bamboo_block'})
    event.remove({output: 'prettypipes:pipe'})
    event.remove({output: 'prettypipes:blank_module'})
    event.remove({output: 'prettypipes:item_terminal'})
    event.remove({output: 'prettypipes:pressurizer'})
    event.remove({output: 'prettypipes:high_speed_module'})
    event.remove({output: 'prettypipes:crafting_terminal'})
    event.remove({output: 'the_vault:gear_charm'})
    event.remove({output: 'the_vault:helmet'})
    event.remove({output: 'the_vault:chestplate'})
    event.remove({output: 'the_vault:leggings'})
    event.remove({output: 'the_vault:boots'})
    event.remove({output: 'the_vault:sword'})
    event.remove({output: 'the_vault:axe'})
    event.remove({output: 'the_vault:vault_ingot'})
    event.remove({output: 'the_vault:magnet_core_strong'})
    event.remove({output: 'the_vault:vault_magnet_strong'})
    event.remove({output: 'the_vault:magnet_core_weak'})
    event.remove({output: 'the_vault:vault_magnet_weak'})
    event.remove({output: 'the_vault:vault_altar'})
    event.remove({output: 'the_vault:vault_scrap', type: "minecraft:blasting"})
    event.remove({output: 'the_vault:pandoras_box'})
    event.remove({output: 'the_vault:vault_nugget'})
    event.remove({output: "the_vault:repair_core"})
    event.remove({id: 'the_vault:reset_flask_ninja'})
    event.remove({id: 'the_vault:reset_flask_carapace'})
    event.remove({id: 'compressium:snow_1'})
    event.remove({id: 'blockcarpentry:carpentering_manual'})
    event.remove({mod: 'dankstorage'})
    event.remove({mod: 'simplybackpacks'})
    event.remove({mod: 'sophisticatedbackpacks'}) 
    

    armorPieces.forEach(armorPieces => {
        event.remove({output: `botania:elementium_${armorPieces}`})
        event.remove({output: `botania:terrasteel_${armorPieces}`})
    })

    tools.forEach(tools => {
        event.remove({output: `botania:elementium_${tools}`})
    })

    powahTiers.forEach(powahTiers => {
        event.remove({output: `powah:solar_panel_${powahTiers}`})
    })

    storageComponents.forEach(storageComponents => {
        event.remove({output: `appliedenergistics2:${storageComponents}_cell_component`})
        event.remove({output: `refinedstorage:${storageComponents}_storage_part`})
    })

    woodTypes.forEach(woodTypes => {
        event.remove({output: `storagedrawers:${woodTypes}_full_drawers_1`})
        event.remove({output: `storagedrawers:${woodTypes}_full_drawers_2`})
        event.remove({output: `storagedrawers:${woodTypes}_full_drawers_4`})
        event.remove({output: `storagedrawers:${woodTypes}_half_drawers_1`})
        event.remove({output: `storagedrawers:${woodTypes}_half_drawers_2`})
        event.remove({output: `storagedrawers:${woodTypes}_half_drawers_4`})
    })
})
