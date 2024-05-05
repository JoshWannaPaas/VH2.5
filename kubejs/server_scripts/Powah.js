/* scripts made by Douwsky
for Iskall85's Vaulthunters
/ported by monkyman640 to KubeJS */

onEvent('recipes', event => {

    event.shapeless('20x powah:dielectric_paste', ['2x the_vault:vault_nugget', '4x #minecraft:coals', 'the_vault:gem_larimar', '#forge:clay'])

    event.shaped('powah:binding_card_dim', [
		'EBE',
		'TOT',
		'EBE'
	], {
		E: 'powah:ender_gate_nitro',
		B: 'the_vault:vault_diamond_block',
		T: 'powah:player_transmitter_nitro',
		O: 'the_vault:omega_pog'
	})

    event.shaped('powah:capacitor_basic', [
		' BP',
		'BRB',
		'PB '
	], {
		B: 'the_vault:gem_benitoite',
		P: 'powah:dielectric_paste',
		R: 'minecraft:redstone_block'
	})

    event.shaped('2x powah:dielectric_rod', [
		'PBP',
		'PLP',
		'PBP'
	], {
		P: 'powah:dielectric_paste',
		B: 'the_vault:gem_benitoite',
		L: 'the_vault:gem_larimar'
	})

    event.shaped('powah:dielectric_rod_horizontal', [
		'PPP',
		'BLB',
		'PPP'
	], {
		P: 'powah:dielectric_paste',
		B: 'the_vault:gem_benitoite',
		L: 'the_vault:gem_larimar'
	})

    event.shaped('powah:dielectric_casing', [
		'IHI',
		'RGR',
		'IHI'
	], {
		I: '#forge:storage_blocks/iron',
		H: 'powah:dielectric_rod_horizontal',
		R: 'powah:dielectric_rod',
		G: '#the_vault:gems'
	})

	event.shaped('powah:solar_panel_starter', [
		'PGP',
		'CDC',
		'RRR'
	], {
		P: 'powah:photoelectric_pane',
		G: '#the_vault:gems',
		C: 'powah:capacitor_basic_tiny',
		D: 'powah:dielectric_casing',
		R: 'powah:dielectric_paste'
	})

	event.shaped('powah:solar_panel_basic', [
		'PGP',
		'CDC',
		'RRR'
	], {
		P: 'powah:solar_panel_starter',
		G: '#the_vault:gems',
		C: 'powah:capacitor_basic',
		D: 'powah:dielectric_casing',
		R: '#forge:ingots/iron'
	})

	event.shaped('powah:solar_panel_hardened', [
		'PGP',
		'CDC',
		'RRR'
	], {
		P: 'powah:solar_panel_basic',
		G: '#the_vault:gems',
		C: 'powah:capacitor_hardened',
		D: 'powah:dielectric_casing',
		R: 'powah:steel_energized'
	})

	event.shaped('powah:solar_panel_blazing', [
		'PGP',
		'CDC',
		'RRR'
	], {
		P: 'powah:solar_panel_hardened',
		G: '#the_vault:gems',
		C: 'powah:capacitor_blazing',
		D: 'powah:dielectric_casing',
		R: 'powah:crystal_blazing'
	})

	event.shaped('powah:solar_panel_niotic', [
		'PGP',
		'CDC',
		'RRR'
	], {
		P: 'powah:solar_panel_blazing',
		G: '#the_vault:gems',
		C: 'powah:capacitor_niotic',
		D: 'powah:dielectric_casing',
		R: 'powah:crystal_niotic'
	})

	event.shaped('powah:solar_panel_spirited', [
		'PGP',
		'CDC',
		'RRR'
	], {
		P: 'powah:solar_panel_niotic',
		G: '#the_vault:gems',
		C: 'powah:capacitor_spirited',
		D: 'powah:dielectric_casing',
		R: 'powah:crystal_spirited'
	})

	event.shaped('powah:solar_panel_nitro', [
		'PGP',
		'CDC',
		'RRR'
	], {
		P: 'powah:solar_panel_spirited',
		G: '#the_vault:gems',
		C: 'powah:capacitor_nitro',
		D: 'powah:dielectric_casing',
		R: 'powah:crystal_nitro'
	})
	
	

	event.custom({
		"type": "powah:energizing",
		"ingredients": [
		  {"tag": "forge:nether_stars"},
		  {"tag": "forge:storage_blocks/redstone"},
		  {"tag": "forge:storage_blocks/redstone"},
		  {"item": "powah:blazing_crystal_block"},
			{"item": "the_vault:gem_echo"}
		],
		"energy": 60000000,
		"result": {
		  "item": "powah:crystal_nitro",
		  "count": 3
		}
	})

	event.custom({
		"type": "powah:energizing",
		"ingredients": [
		  {"tag": "forge:storage_blocks/emerald"},
		  {"item": "the_vault:perfect_alexandrite"}
		],
		"energy": 3000000,
		"result": {
		  "item": "powah:crystal_spirited",
		  "count": 1
		  }
	})

	event.custom({
		"type": "powah:energizing",
		"ingredients": [
		  {"tag": "forge:storage_blocks/diamond"},
		  {"item": "the_vault:perfect_alexandrite"}
		],
		"energy": 900000,
		"result": {
		  "item": "powah:crystal_niotic",
		  "count": 1
		}
	})

	event.custom({
		"type": "powah:energizing",
		"ingredients": [
		  {"item": "minecraft:blaze_powder"},
		  {"item": "minecraft:blaze_powder"},
		  {"item": "minecraft:blaze_powder"},
		  {"item": "minecraft:blaze_powder"},
		  {"item": "the_vault:perfect_alexandrite"}
		],
		"energy": 270000,
  		"result": {
		  "item": "powah:crystal_blazing",
		  "count": 1
 		}
	})

	event.custom({
		"type": "powah:energizing",
		"ingredients": [
		  {"item": "minecraft:blaze_rod"},
		  {"item": "the_vault:perfect_alexandrite"}
		],
		"energy": 360000,
  		"result": {
		  "item": "powah:crystal_blazing",
		  "count": 1
 		}
	})

	event.custom({
		"type": "powah:energizing",
		"ingredients": [
		  {"tag": "forge:ingots/iron"},
		  {"tag": "forge:ingots/gold"},
		  {"item": "the_vault:perfect_alexandrite"}
		],
		"energy": 30000,
		"result": {
		  "item": "powah:steel_energized",
		  "count": 4
		}
	})	
	
	event.custom({
		"type": "powah:energizing",
		"ingredients": [
		  {"tag": "forge:storage_blocks/iron"},
		  {"tag": "forge:storage_blocks/gold"},
		  {"item": "the_vault:perfect_alexandrite"}
		],
		"energy": 330000,
		"result": {
		  "item": "powah:energized_steel_block",
		  "count": 4
		}
	})

	event.custom({
		"type": "powah:energizing",
		"ingredients": [
		  {"item": "quark:ender_watcher"},
		  {"item": "powah:dielectric_casing"},
		  {"item": "powah:capacitor_basic_tiny"},
		  {"item": "the_vault:perfect_alexandrite"}
		],
		"energy": 150000,
		"result": {
		  "item": "powah:ender_core",
		  "count": 1
		}
	})

	event.custom({
		"type": "powah:energizing",
		"ingredients": [
		  {"item": "minecraft:snowball"},
		  {"item": "the_vault:perfect_alexandrite"}
		],
		"energy": 1500000,
	    "result": {
		  "item": "powah:charged_snowball",
		  "count": 1
		}
	})

	event.custom({
		"type": "powah:energizing",
		"ingredients": [
		  {"item": "minecraft:blue_ice"},
		  {"item": "minecraft:blue_ice"},
		  {"item": "minecraft:blue_ice"},
		  {"item": "the_vault:perfect_alexandrite"}
		],
		"energy": 12500,
		"result": {
		  "item": "powah:dry_ice",
		  "count": 1
		}
	})
})