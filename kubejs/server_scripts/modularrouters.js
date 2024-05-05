/* scripts made by Douwsky
for Iskall85's Vaulthunters 
ported by monkyman640 to KubeJS */

onEvent('recipes', event => {

	event.shaped('modularrouters:sender_module_1', [
		' H ',
		'LBL',
		' E ' 
	], {
		H: 'minecraft:hopper',
		L: 'the_vault:gem_larimar',
		B: 'modularrouters:blank_module',
		E: 'the_vault:vault_essence'
	})

	event.shaped('modularrouters:sender_module_2', [
		' E ',
		'LSL',
		' D ' 
	], {
		E: 'minecraft:ender_chest',
		L: 'the_vault:perfect_larimar',
		S: 'modularrouters:sender_module_1',
		D: 'the_vault:vault_diamond'
	})

	event.shaped('modularrouters:distributor_module', [
		'   ',
		'SBS',
		'PEP' 
	], {
		S: 'modularrouters:sender_module_2',
		B: 'modularrouters:blank_module',
		P: 'the_vault:perfect_alexandrite',
		E: 'minecraft:ender_chest'
	})

	event.shaped('modularrouters:sender_module_3', [
		'SEC',
		'GPG',
		'SB ' 
	], {
		S: 'modularrouters:sender_module_2',
		E: 'compressium:endstone_4',
		C: 'minecraft:ender_chest',
		G: 'the_vault:gem_pog',
        P: 'the_vault:echo_pog',
    	B: 'modularrouters:blank_upgrade'
	})

	event.shaped('4x modularrouters:item_router', [
		'LIL',
		'IDI',
		'LIL' 
	], {
		L: 'the_vault:perfect_larimar',
		I: 'minecraft:iron_bars',
		D: 'minecraft:dropper'
	})

	event.shaped('3x modularrouters:blank_module', [
		'RLR',
		'PPP',
		'GGG' 
	], {
		R: 'minecraft:redstone',
		L: 'the_vault:perfect_larimar',
	 	P: 'minecraft:paper',
		G: 'minecraft:gold_ingot'
	})

	event.shaped('2x modularrouters:blank_upgrade', [
		'PPG',
		'PLG',
		'CPG' 
	], {
		P: 'minecraft:paper',
		G: 'minecraft:gold_ingot',
		L: 'minecraft:lapis_lazuli',
		C: '#the_vault:perfectcommongems'
	})

	event.shapeless('modularrouters:vacuum_module', ['modularrouters:blank_module', 'quark:ender_watcher', 'minecraft:hopper', 'the_vault:gem_pog', 'the_vault:perfect_alexandrite'])
  	event.shapeless('modularrouters:stack_upgrade', ['modularrouters:blank_upgrade', 'minecraft:ender_eye', '#the_vault:perfectcommongems'])
  	event.shapeless('modularrouters:stack_augment', ['modularrouters:augment_core', 'the_vault:perfect_wutodie', 'modularrouters:stack_upgrade'])
  	event.shapeless('modularrouters:augment_core', ['modularrouters:blank_module', 'the_vault:perfect_alexandrite', 'modularrouters:blank_upgrade'])
  	event.shapeless('modularrouters:void_module', ['modularrouters:blank_module', 'the_vault:perfect_alexandrite', 'the_vault:void_liquid_bucket'])
  	event.shapeless('modularrouters:puller_module_1', ['modularrouters:blank_module', 'the_vault:vault_essence', 'minecraft:sticky_piston'])
  	event.shapeless('modularrouters:puller_module_2', ['modularrouters:puller_module_1', 'the_vault:vault_diamond_block', 'the_vault:vault_essence'])
})