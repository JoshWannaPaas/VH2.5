console.info("Removing & Adding JEI entries!")

onEvent('jei.add.items', event => {
	event.add(Item.of('the_vault:reset_flask', '{Skillable:"Artisan"}'))
	event.add(Item.of('the_vault:reset_flask', '{Skillable:"Treasure Hunter"}'))
	event.add(Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}'))
})

onEvent('jei.hide.items', event => {
	event.hide(Item.of('mekanism:mekasuit_helmet', {HideFlags:2}))
	event.hide(Item.of('mekanism:mekasuit_bodyarmor', {HideFlags:2}))
	event.hide(Item.of('mekanism:mekasuit_pants', {HideFlags:2}))
	event.hide(Item.of('mekanism:mekasuit_boots', {HideFlags:2}))
	event.hide(Item.of('mekanism:meka_tool', {HideFlags:2}))
	event.hide('mekanism:module_laser_dissipation_unit')
	event.hide('mekanism:module_radiation_shielding_unit')
	event.hide('mekanism:module_solar_recharging_unit')
	event.hide('mekanism:module_jetpack_unit')
	event.hide('mekanism:module_charge_distribution_unit')
	event.hide('mekanism:module_elytra_unit')

	event.hide('botania:ancient_will_ahrim')
	event.hide('botania:ancient_will_dharok')
	event.hide('botania:ancient_will_guthan')
	event.hide('botania:ancient_will_torag')
	event.hide('botania:ancient_will_verac')
	event.hide('botania:ancient_will_karil')
	event.hide('botania:dice')
	event.hide('botania:thor_ring')
	event.hide('botania:loki_ring')
	event.hide('botania:odin_ring')
	event.hide('botania:flugel_eye')
	event.hide('botania:king_key')
	event.hide('botania:infinite_fruit')
	event.hide('botania:balance_cloak')
	event.hide('botania:holy_cloak')
	event.hide('botania:unholy_cloak')
	event.hide('botania:star_sword')
	event.hide('botania:thunder_sword')
	event.hide('botania:ender_hand')
	event.hide('botania:dice')
	event.hide('botania:terrasteel_helmet')
	event.hide('botania:terrasteel_chestplate')
	event.hide('botania:terrasteel_leggings')
	event.hide('botania:terrasteel_boots')
	event.hide('botania:elementium_helmet')
	event.hide('botania:elementium_chestplate')
	event.hide('botania:elementium_leggings')
	event.hide('botania:elementium_boots')
	event.hide('botania:terra_axe')
	event.hide('botania:terra_sword')
	event.hide('botania:elementium_pickaxe')
	event.hide('botania:elementium_shovel')
	event.hide('botania:elementium_hoe')
	event.hide('botania:elementium_axe')
	event.hide('botania:elementium_sword')
	event.hide('botania:elementium_shears')
	event.hide('botania:manasteel_pick')
	event.hide('botania:manasteel_shovel')
	event.hide('botania:manasteel_hoe')
	event.hide('botania:manasteel_axe')
	event.hide('botania:manasteel_sword')
	event.hide('botania:manasteel_shears')

	event.hide('the_vault:puzzle_rune')
	event.hide('the_vault:puzzle_rune_block')
	event.hide('the_vault:ore_unknown')
	event.hide('the_vault:door_iskallium')
	event.hide('the_vault:door_puffium')
	event.hide('the_vault:door_gorginite')
	event.hide('the_vault:door_sparkletine')
	event.hide('the_vault:door_ashium')
	event.hide('the_vault:door_funsoide')
	event.hide('the_vault:door_unknown')
	event.hide('the_vault:door_bomignite')
	event.hide('the_vault:door_upaline')
	event.hide('the_vault:door_tubium')
	event.hide('the_vault:vault_chest')
	event.hide('the_vault:vault_richity')
	event.hide('the_vault:vault_resource')
	event.hide('the_vault:vault_misc')
	event.hide('the_vault:vault_treasure_chest')
	event.hide('the_vault:vault_altar_chest')
	event.hide('the_vault:vault_rune')

	event.hide('industrialforegoing:mob_duplicator')
	event.hide('ironjetpacks:emerald_jetpack')
	event.hide('quark:matrix_enchanter')
	event.hide('enchantinginfuser:advanced_enchanting_infuser')
	event.hide('quark:blossom_planks')
	event.hide('quark:blossom_boards')

	event.hide('sophisticatedbackpacks:compacting_upgrade')
	event.hide('sophisticatedbackpacks:advanced_compacting_upgrade')
	event.hide('sophisticatedbackpacks:filter_upgrade')
	event.hide('sophisticatedbackpacks:advanced_filter_upgrade')
	event.hide('sophisticatedbackpacks:magnet_upgrade')
	event.hide('sophisticatedbackpacks:advanced_magnet_upgrade')
	event.hide('sophisticatedbackpacks:smelting_upgrade')
	event.hide('sophisticatedbackpacks:auto_smelting_upgrade')
	event.hide('sophisticatedbackpacks:smoking_upgrade')
	event.hide('sophisticatedbackpacks:auto_smoking_upgrade')
	event.hide('sophisticatedbackpacks:blasting_upgrade')
	event.hide('sophisticatedbackpacks:auto_blasting_upgrade')
	event.hide('sophisticatedbackpacks:tool_swapper_upgrade')
	event.hide('sophisticatedbackpacks:advanced_tool_swapper_upgrade')
	event.hide('sophisticatedbackpacks:inception_upgrade')
	event.hide('sophisticatedbackpacks:everlasting_upgrade')
	event.hide('sophisticatedbackpacks:crafting_upgrade')
	event.hide('sophisticatedbackpacks:stonecutter_upgrade')
	event.hide('sophisticatedbackpacks:tank_upgrade')
	event.hide('sophisticatedbackpacks:battery_upgrade')
	event.hide('sophisticatedbackpacks:pump_upgrade')
	event.hide('sophisticatedbackpacks:advanced_pump_upgrade')
	event.hide('sophisticatedbackpacks:xp_pump_upgrade')

	event.hide('integrateddynamics:coal_generator')
	event.hide('integratedtunnels:part_player_simulator') 
	event.hide('integratedterminals:part_terminal_crafting_job')
	
	event.hide('immersiveengineering:drill')
	event.hide('immersiveengineering:drillhead_iron')
	event.hide('immersiveengineering:drillhead_steel')
	event.hide('immersiveengineering:toolupgrade_drill_waterproof')
	event.hide('immersiveengineering:toolupgrade_drill_damage')

	event.hide('kubejs:shape_diamond')
	event.hide('kubejs:shape_square')
	event.hide('kubejs:shape_circle')
	event.hide('kubejs:shape_triangle')
	event.hide('kubejs:shape_spiral')
	
	event.hide('the_vault_extras:debug_item')

	event.hide(Item.of('appliedenergistics2:facade').ignoreNBT())

})